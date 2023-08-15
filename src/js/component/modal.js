import React from "react";

export const Modal = ({ closeModal, deleteContact}) => {
    return (
        <div className="modal fade" id="delModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Contact Delete</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        You want delete this contact?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={deleteContact}>Yes Please</button>
                    </div>
                </div>
            </div>
        </div>
    )
}