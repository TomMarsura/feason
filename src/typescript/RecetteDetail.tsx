import React from "react";
import '../css/style.css';
import '../css/bootstrap.min.css'
import EnTeteDetail from './enTeteDetail';
import Image from './image'
import Info from './info'
import Details from "./details";
function recetteDetail(){
    return (

        <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    <div className="col-lg-8 col-xl-9">
                        <div className="row g-4">
                            <Image/>
                            <Info/>
                            <Details/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default recetteDetail;