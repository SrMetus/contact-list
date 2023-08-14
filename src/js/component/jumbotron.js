import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { Modal } from "./modal"


export const Jumbotron = ({ full_name, address, phone, email, id }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true)
    }
    const handleCloseModal = () => {
        setModalOpen(false)
    }
    return (
        <>
        <div className="jumbotron jumbotron-custom">
            <div className="row">
                {/* Columna principal */}
                <div className="col-8">
                    <h1 className="display-4">{full_name}</h1>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot} /> {address}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> {phone}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> {email}
                    </p>
                </div>

                {/* Columna para las opciones */}
                <div className="col-4">
                    <div className="d-flex flex-column align-items-end">
                        <button className="btn btn-outline-primary mb-2">
                            <FontAwesomeIcon icon={faPen} /> Editar
                        </button>
                        <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#delModal" onClick={handleOpenModal}>
                            <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Modal />
    </>
    );
};
