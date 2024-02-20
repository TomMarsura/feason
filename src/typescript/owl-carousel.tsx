import React, { useEffect, useRef } from 'react'
import "../css/bootstrap.min.css"
import "../css/style.css"
import Product from "./product"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const OwlCarouselComponent: React.FC = () => {
    const owlRef = useRef<HTMLDivElement>(null); // Référence vers l'élément racine du carrousel

    useEffect(() => {
        const initializeCarousel = () => {
            if (owlRef.current) {
                $(owlRef.current).owlCarousel({
                    items: 3, // Nombre d'éléments à afficher
                    loop: true, // Boucler le carrousel
                    margin: 10, // Marge entre les éléments
                    autoplay: true, // Activer l'autoplay
                    autoplayTimeout: 3000, // Délai d'autoplay en millisecondes
                });
            }
        };

        initializeCarousel(); // Appel de la fonction pour initialiser le carrousel

        // Retour de la fonction de nettoyage pour détruire le carrousel lors du démontage du composant
        return () => {
            if (owlRef.current) {
                $(owlRef.current).owlCarousel('destroy');
            }
        };
    }, []);

    return (
        <div ref={owlRef} className="owl-carousel">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default OwlCarouselComponent;