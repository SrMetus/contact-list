import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Jumbotron } from "../component/jumbotron";

import "../../styles/home.css";

export const Home = (id) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople("https://playground.4geeks.com/apis/fake/contact/agenda/Metus");
    }, []);

    const handleDeleteContact = (peopleId) => {
        actions.delPeople(peopleId);
    };
	console.log("home",id)
    return (
        <>
            {store.people.length > 0 ? (
                store.people.map((item) => (
                    <Jumbotron
                        key={item.id}
                        full_name={item.full_name}
                        address={item.address}
                        phone={item.phone}
                        email={item.email}
						id={item.id}
                        onDelete={() => handleDeleteContact(item.id)}
                    />
                ))
            ) : (
                <p>No hay información</p>
            )}
        </>
    );
};
