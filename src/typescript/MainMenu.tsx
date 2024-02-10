import React from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import hero1 from '../img/hero-img-2.jpg';

function getSeason() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Les mois commencent à partir de 0

    // Dates exactes pour chaque saison
    const winterStart = new Date(now.getFullYear(), 11, 22); // 22 décembre
    const springStart = new Date(now.getFullYear(), 2, 20);  // 20 mars
    const summerStart = new Date(now.getFullYear(), 5, 20);  // 20 juin
    const autumnStart = new Date(now.getFullYear(), 8, 22);  // 22 septembre

    // Vérifier la saison en fonction de la date actuelle
    if ((month === 12 && day >= 22) || (month === 1) || (month === 2 && day < 20)) {
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
    //const season = getSeason();
    const season = "PRINTEMPS";

    const heroStyle = "hero-header-".concat(season.toLowerCase());

    const buttonStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        right: '25%'
    };

    return (

        <div className={"container-fluid banner my-5 " + heroStyle}>
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="py-4">
                            <h1 className="display-3 text-primary">FEASON</h1>
                            <p className="fw-normal display-3 text-secondary mb-4">SAISON {season}</p>
                            <h4 className="fw-normal mb-4 text-dark">
                                Bienvenue sur Feason, une application qui vous permet de découvrir de nouvelles recettes
                                avec des produits de saison et locaux.
                            </h4>
                            <button className="btn btn-primary border-2 border-secondary py-3 px-4 rounded-pill text-white h-100"><span className="text-light fw-bold fs-5">Découvrir des recettes</span></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
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