import React from 'react';
import logo from '../img/logo.svg';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/index.css'
import '@fortawesome/fontawesome-free/css/all.css';

function MainMenu(){

    const buttonStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        right: '25%'
    };

    return (
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h1 className="mb-5 display-3 text-primary">FEASON</h1>
                        <div className="position-relative mx-auto">
                            <h4 className="border-2 border-secondary w-75 py-3 px-4 rounded-pill">TEST DE TEXTE</h4>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide"></img>
                                        <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide"></img>
                                        <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMenu