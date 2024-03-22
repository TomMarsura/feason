import React from "react";
import Smoothie from '../img/smoothie.webp'
function image() {
    return(
    <div className="col-lg-6">
        <div className="border rounded">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">
                <img src={Smoothie} className="img-fluid rounded" alt="Image"/>
            </a>
        </div>
    </div>
    )
}

export default image;