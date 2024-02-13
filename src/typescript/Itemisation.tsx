import React from 'react';
import logo from '../img/logo.svg';
import '../css/style.css';
import '../css/bootstrap.min.css'
import fruititem5 from '../img/smoothie.webp'

function Item() {
    const Style: React.CSSProperties = {
        top: "10px",
        left: "10px"
    }

    return(
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={fruititem5} className="img-fluid w-100 rounded-top" alt=""/>
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style = {Style}
                >Breuvage
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>Smoothie à la banane</h4>
                    <p>Savourez ce delicieux smoothie à la banane, bien gourmand pour une personne goulu </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">Infos..</p>
                        <a href="#"
                           className="btn border border-secondary rounded-pill px-3 text-primary"><i
                            className="fa fa-shopping-bag me-2 text-primary"></i> Voir recette</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item;