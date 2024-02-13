import React from 'react'
import OwlCarousel from  'react-owl-carousel'
import "../css/bootstrap.min.css"
import "../css/style.css"
import Product from "./product"

function owlCarousel(){


    return(
        <div className="owl-carousel vegetable-carousel justify-content-center">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}
export default owlCarousel;