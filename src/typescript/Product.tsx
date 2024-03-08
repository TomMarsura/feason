import React from 'react';

interface VegetableProps {
    name: string;
}

const Product: React.FC<VegetableProps> = ({name}) => {
    let content;

    if (name === "Fraise") {
        content = 'Contenue pour fraise'
    } else if (name === "Cerise") {
        content = 'Contenue pour cerise'
    } else if (name === "Pastèque") {
        content = 'Contenue pour Pastèque'
    } else {
        content = 'contenue par defaut'
    }
    return (
        <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
                <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt=""/>
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute"
                 style={{top: '10px', right: '10px'}}>Fruit
            </div>
            <div className="p-4 rounded-bottom">
                <h4>Parsely</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                    incididunt</p>
            </div>
        </div>
    );
};

export default Product;
