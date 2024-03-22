import '@fortawesome/fontawesome-free/css/all.css';
import "../css/bootstrap.min.css"
import "../css/style.css"
import React from 'react';
import PureCarousel from "./Purecarousel";
import { getSeason } from "./MainMenu";
import { monthToString } from "./Product";

function App(){
    const season = getSeason();
    return(
        <div className="container-fluid vesitable py-5 margeTop">
            <div className="container py-5">
                <h1 className='display-5 text-secondary'>ALIMENTS DE LA SAISON {season}</h1>
                <h2 className='display-6 text-dark'>Mois de {monthToString(new Date().getMonth())}</h2>
                <div className="owl-carousel vegetable-carousel justify-content-center owl-loaded owl-drag">
                    <PureCarousel/>
                </div>
            </div>
        </div>
    );
}

export default App;

