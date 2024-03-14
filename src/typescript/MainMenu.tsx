import React from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import hero1 from '../img/hero-img-2.jpg';

function getSeason() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Les mois commencent à partir de 0

    // Vérifier la saison en fonction de la date actuelle
    if ((month === 12 && day >= 22) || (month === 1) || (month === 2) ||(month === 3 && day < 20)) {
        return "HIVER";
    } else if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day < 20)) {
        return "PRINTEMPS";
    } else if ((month === 6 && day >= 20) || (month > 6 && month < 9) || (month === 9 && day < 22)) {
        return "ETE";
    } else if ((month === 9 && day >= 22) || (month > 9 && month < 12) || (month === 11 && day < 22)) {
        return "AUTOMNE";
    } else {
        return "Saison inconnue";
    }
}


function MainMenu(){
    const season = getSeason();

    const heroStyle = "hero-header-".concat(season.toLowerCase());

    console.log(heroStyle);

    return (

        <div className={"container-fluid py-5 mb-5 " + heroStyle}>
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h1 className="display-5 text-secondary">SAISON {season}</h1>
                        <h4 className="fw-normal mb-4 text-dark">
                            Bienvenue sur Feason, une application qui vous permet de découvrir de nouvelles recettes
                            avec des produits de saison et locaux.
                        </h4>
                        <button
                            className="btn btn-primary border-2 border-secondary py-3 px-4 rounded-pill text-white h-100">
                            <span className="text-light fw-bold fs-5">Découvrir des recettes</span></button>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="position-relative">
                            <img src={hero1} className="img-fluid w-100 rounded" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMenu