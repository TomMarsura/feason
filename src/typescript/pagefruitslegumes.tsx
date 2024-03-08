import '@fortawesome/fontawesome-free/css/all.css';
import "../css/bootstrap.min.css"
import "../css/style.css"
import React from 'react';
import PureCarousel from "./Purecarousel";



function App(){
    return(
        <div className="container-fluid vesitable py-5">
            <div className="container py-5">
                <h1> Fruits de saison </h1>
                <div className="owl-carousel vegetable-carousel justify-content-center owl-loaded owl-drag">
                    <PureCarousel/>
                </div>
            </div>
        </div>
    );
}

export default App;

