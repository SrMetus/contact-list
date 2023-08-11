import React from "react";

export const Jumbotron = (people) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{people.full_name}</h1>
            <p className="lead">This is a simple Jumbotron component built with React and Bootstrap.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    );
};