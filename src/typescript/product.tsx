import React from "react";


function product(){
    const Style: React.CSSProperties = {
        top: "10px",
        right: "10px"
    }


    return (
        <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
                <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt=""></img>
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={Style}>Vegetable</div>
            <div className="p-4 rounded-bottom">
                <h4>Parsely</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default product;