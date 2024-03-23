import React, { useState } from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css';
import EnTete from './enTete';
import Container from './Container';
import Searchbar from "./searchbar";

function Recette() {
    // Définir les états des filtres
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [healthy, setHealthy] = useState(false);

    return (
        <div className="container-fluid fruite py-5 margeTop">
            <div className="container py-5">
                <div className="tab-className text-center">
                    {/* Passer les fonctions de mise à jour des filtres en tant que props à EnTete */}
                    <EnTete setVegan={setVegan} setVegetarian={setVegetarian} setHealthy={setHealthy} vegan={vegan} vegetarian={vegetarian} healthy={healthy}/>

                    <Searchbar/>
                    {/* Passer les valeurs des filtres en tant que props à Container */}
                    <Container vegan={vegan} vegetarian={vegetarian} healthy={healthy} />
                </div>
            </div>
        </div>
    );
}

export default Recette;
