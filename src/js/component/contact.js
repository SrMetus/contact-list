import React, { useContext, useState } from "react";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "Metus" //dejarla Vacia? e inicializar solo
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.addPeople(formData);
        setFormData({
            full_name: "",
            email: "",
            phone: "",
            address: "",
            agenda_slug: "Metus"
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" name="full_name" value={formData.full_name} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleChange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Add Contact</button>
        </form>
    );
};