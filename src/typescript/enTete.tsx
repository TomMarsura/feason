import React from "react";
import '../css/style.css';
import '../css/bootstrap.min.css'


function enTete() {
    return(
        <div className="row g-4">
            <div className="col-lg-4 text-start">
                <h1>Nos recettes</h1>
            </div>
            <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                    <li className="nav-item">
                        <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"
                           href="#tab-1">
                            <span className="text-dark" style={{width: '130px'}}>Toutes les recettes</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill"
                           href="#tab-2">
                            <span className="text-dark" style={{width: '130px'}}>Entrées</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill"
                           href="#tab-3">
                            <span className="text-dark" style={{width: '130px'}}>Plats</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill"
                           href="#tab-4">
                            <span className="text-dark" style={{width: '130px'}}>Breuvage</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill"
                           href="#tab-5">
                            <span className="text-dark" style={{width: '130px'}}>Dessert</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default enTete;