import React from "react";
import '../css/style.css';
import '../css/bootstrap.min.css';
import { getSeason } from "./MainMenu";
import { monthToString } from "./Product";

interface EnTeteProps {
    setVegan: (value: boolean) => void;
    setVegetarian: (value: boolean) => void;
    setHealthy: (value: boolean) => void;
    vegan: boolean;
    vegetarian: boolean;
    healthy: boolean;
}

function EnTete({ setVegan, setVegetarian, setHealthy, vegan, vegetarian, healthy }: EnTeteProps) {
    const handleVeganClick = () => {
        if(vegan === false){
            setVegan(true);
            setVegetarian(false);
            setHealthy(false);
        } else {
            setVegan(false);
        }
            
    };

    const handleVegetarianClick = () => {
        if(vegetarian === false){
            setVegetarian(true);
            setVegan(false);
            setHealthy(false);
        } else {
            setVegetarian(false);
        }
    };

    const handleHealthyClick = () => {
        if(healthy === false){
            setHealthy(true);
            setVegan(false);
            setVegetarian(false);
        } else {
            setHealthy(false);
        }
    };

    let season = 'PRINTEMPS';

    return (
        <div className="row g-4">
            <div className="col-lg-4 text-start">
                <h1 className='display-5 text-secondary'>RECETTES {season === 'PRINTEMPS' ? 'DE ' + season : "D'" + season}</h1>
                <h2 className='display-6 text-dark'>Mois de {monthToString(new Date().getMonth())}</h2>
            </div>
            <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                    <li className="nav-item">
                        <button onClick={handleVeganClick} className={vegan === true ? "d-flex m-2 py-2 btn-primary rounded-pill" : "d-flex m-2 py-2 rounded-pill"} data-bs-toggle="pill">
                            <span className="text-dark" style={{width: '130px'}}>Vegan</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleVegetarianClick} className={vegetarian === true ? "d-flex m-2 py-2 btn-primary rounded-pill" : "d-flex m-2 py-2 rounded-pill"} data-bs-toggle="pill">
                            <span className="text-dark" style={{width: '130px'}}>Végétarien</span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleHealthyClick} className={healthy === true ? "d-flex m-2 py-2 btn-primary rounded-pill" : "d-flex m-2 py-2 rounded-pill"} data-bs-toggle="pill">
                            <span className="text-dark" style={{width: '130px'}}>Healthy</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EnTete;
