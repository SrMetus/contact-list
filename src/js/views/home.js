import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Jumbotron, jumbotron } from "../component/jumbotron";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople("https://playground.4geeks.com/apis/fake/contact/agenda/Metus")
	}, [])

	return (
		<>
			{
				store.people.lenght > 0 ?
					store.people.map((item, index) => {
						return <Jumbotron people={item} />;
					})
					:
					<p>No hay informacion</p>


			}
		</>

	)

}