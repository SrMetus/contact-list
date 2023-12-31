import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "./contact";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">[ Home ]</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact">
					<button className="btn btn-success" onClick={() => <Contact />}>Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
