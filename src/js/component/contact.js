import React from "react";

<form>
    <div className="mb-3">
        <label for="fullName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="fullName" />
    </div>
    <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label for="phone" className="form-label">Phone</label>
        <input type="text" className="form-control" id="phone" />
    </div>
    <div className="mb-3">
        <label for="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" />
    </div>
    <button type="submit" className="btn btn-primary">Add Contact</button>
</form>