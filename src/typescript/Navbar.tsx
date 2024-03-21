import React from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import logo from '../img/logo.png';


interface NavbarProps {
    isRecetteVisible: boolean;
    setIsRecetteVisible: (isVisible: boolean) => void;
    isAlimentsVisible: boolean;
    setIsAlimentsVisible: (isVisible: boolean) => void;
    isLocauxVisible: boolean;
    setIsLocauxVisible: (isVisible: boolean) => void;
}

function navbar(props: NavbarProps){
    const { isRecetteVisible, setIsRecetteVisible } = props;
    const { isAlimentsVisible, setIsAlimentsVisible } = props;
    const { isLocauxVisible, setIsLocauxVisible } = props;

    const logoStyle: React.CSSProperties = {
        width: '70px',
        height: '70px',
        padding: 0
    }

    const logoTextStyle: React.CSSProperties = {
        marginBottom: 0
    }

    return (
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                            <a href="#" className="text-white">Avenue Laënnec, 72000, Le Mans</a>
                        </small>
                    </div>
                    <div className="top-link pe-2">
                        <small className="me-3">
                            <i className="fas fa-copyright me-2 text-secondary"></i>
                            <a href="#" className="text-white">Feason 2024</a>
                        </small>
                    </div>
                </div>
            </div>


            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <img src={logo} className="img-fluid rounded" style={logoStyle}/>
                    <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6" style={logoTextStyle}>FEASON</h1>
                    </a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="index.html" className="nav-item nav-link active">Accueil</a>
                            <a className="nav-item nav-link" onClick={() => setIsRecetteVisible(!isRecetteVisible)}>Recettes</a>
                            <a className="nav-item nav-link" onClick={() => setIsAlimentsVisible(!isAlimentsVisible)}>Aliments de saison</a>
                            <a className="nav-item nav-link" onClick={() => setIsLocauxVisible(!isLocauxVisible)}>Producteurs locaux</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default navbar;