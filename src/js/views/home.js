import React, { useContext, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Jumbotron } from "../component/jumbotron";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople("https://playground.4geeks.com/apis/fake/contact/agenda/Metus")
	}, [])

	return (
		<>
			{
				store.people.length > 0 ?
					store.people.map((item) => {
						return <Jumbotron
						key={item.id}
						full_name={item.full_name}
						address={item.address}
						phone={item.phone}
						email={item.email} />;
					})
					:
					<p>No hay informacion</p>
			}
		</>

	)

}