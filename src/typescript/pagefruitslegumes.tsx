import '@fortawesome/fontawesome-free/css/all.css';
import "../css/bootstrap.min.css"
import "../css/style.css"
import React from 'react';
import OwlCarousel from "./owl-carousel";

function App(){
    return(
        <div className="container-fluid vesitable py-5">
            <div className="container py-5">
                <h1 className="mb-0">Fruit et Légume - Hiver</h1>
                <OwlCarousel/>
            </div>
        </div>
    );
}
export default App;