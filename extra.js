import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Import your Loader component here

const ResponseModal = ({ disease, description, precautions, medications, diet, workout, onClose }) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="modal-wrapper">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-content">
                    {showLoader ? (
                        <Loader />
                    ) : (
                        <div className="card">
                            <div className="card-header">
                                <span className="close" onClick={onClose}>&times;</span>
                                <h2 className="disease-heading">Diagnosed Disease: {disease}</h2>
                                <h3 className="description">{description}</h3>
                            </div>
                            <div className="card-body">
                                <div className="details">
                                    <div className="precautions">
                                        <h3>Precautions</h3>
                                        <ul>
                                            {precautions && precautions.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="medications">
                                        <h3>Medications</h3>
                                        <ul>
                                            {medications && medications.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="diet">
                                        <h3>Preferred Diet</h3>
                                        <ul>
                                            {diet && diet.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="workout">
                                        <h3>Workout</h3>
                                        <ul>
                                            {workout && workout.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResponseModal;
