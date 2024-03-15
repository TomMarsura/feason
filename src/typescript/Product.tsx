import React from 'react';

interface VegetableProps {
    name: string;
    months: number[];
    local: boolean;
    url: string;
}

export function monthToString(month: number) {
    switch (month) {
        case 0:
            return "Janvier";
        case 1:
            return "Février";
        case 2:
            return "Mars";
        case 3:
            return "Avril";
        case 4:
            return "Mai";
        case 5:
            return "Juin";
        case 6:
            return "Juillet";
        case 7:
            return "Août";
        case 8:
            return "Septembre";
        case 9:
            return "Octobre";
        case 10:
            return "Novembre";
        case 11:
            return "Décembre";
        default:
            return "Mois inconnu";
    }
}

const Product: React.FC<VegetableProps> = ({name, months, local, url}) => {
    let localText = "";

    if (local) {
        localText = "Produit local";
    } else {
        localText = "Produit non local";
    }
        
    return (
        <div className="border border-primary rounded position-relative vesitable-item margeTop" style={{height: '80%'}}>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>
                {localText}
            </div>
            <div className="p-4 rounded-bottom" style={{ display: 'flex'}}>
                <div style={{ flex: '1' }}>
                    <h4>{name}</h4>
                    <h5>Mois de présence</h5>
                    <ul>
                        {months.map((month, index) => (
                            <li key={index}>{monthToString(month)}</li>
                        ))}
                    </ul>
                </div>
                <img src={url} alt={name} className="img-fluid rounded mt-4" style={{ maxWidth: '50%', maxHeight: '200px' }} />
            </div>
        </div>


    );
};

export default Product;
