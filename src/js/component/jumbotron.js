import React from "react";

export const Jumbotron = ({ full_name, address, phone, email }) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{full_name}</h1>
            <p className="lead">{address}</p>
            <p className="lead">{phone}</p>
            <p className="lead">{email}</p>
        </div>
    );
};