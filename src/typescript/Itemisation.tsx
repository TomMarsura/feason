import React from 'react';
import logo from '../img/logo.svg';
import '../css/style.css';
import '../css/bootstrap.min.css';
import fruititem5 from '../img/smoothie.webp';

interface Properties {
    title: string;
    image: string;
    score: number;
    tags: string[];
    time: number;
    sourceUrl: string;
}

function Item({ title, image, score, tags, time, sourceUrl }: Properties) {
    const Style: React.CSSProperties = {
        top: '10px',
        left: '10px'
    };

    const renderTags = () => {
        return tags.map((tag, index) => (
            <p key={index} className="mb-2 btn-primary rounded-pill text-white fs-5">{tag}</p>
        ));
    };

    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={image} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={Style}>
                    Score de santé : {score}
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{title}</h4>
                    <div className="mb-2">
                        {/* Appel de la fonction renderTags */}
                        {renderTags()}
                    </div>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="mt-2 mr-2 text-dark fs-5 fw-bold mb-0">
                            <i className="fa fa-clock me-2 text-dark"></i>
                            {time}m
                        </p>
                        <a href={sourceUrl} className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-list me-2 text-primary"></i> Voir recette
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
