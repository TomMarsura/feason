import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Product from "./Product";
import Axios, { AxiosResponse } from 'axios'; // Importez AxiosResponse

interface Ingredient {
    name: string;
    months: number[];
    local: boolean;
    url: string;
}

const actualMonth = new Date().getMonth();

console.log(actualMonth);

export default function PureCarousel() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]); // Spécifiez le type comme un tableau d'ingrédients

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response: AxiosResponse<Ingredient[]> = await Axios.get('http://localhost:3200/ingredients'); // Spécifiez le type de la réponse Axios
                setIngredients(response.data);
            } catch (error) {
                console.error('Error fetching ingredients:', error);
            }
        };

        fetchIngredients();
    }, []);

    return (
        <div className="margeTop">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={ingredients.filter(ingredient => ingredient.months.includes(actualMonth)).length} // Filtrer les ingrédients pour ne compter que ceux de la saison actuelle
                visibleSlides={3}
                infinite={true}
                isPlaying={true}
            >
                <div className="vesitable">
                    <div className="owl-nav">
                        <ButtonNext className={"owl-next pure-carousel-button"}>Next</ButtonNext>
                        <ButtonBack className={"owl-prev pure-carousel-button"}>Back</ButtonBack>
                    </div>
                </div>
                <Slider className="owl-stage">
                    {ingredients.map((ingredient, index) => (
                        (ingredient.months.includes(actualMonth)) ? (
                        <Slide key={index} index={index} className="owl-item">
                            <Product name={ingredient.name} months={ingredient.months} local={ingredient.local} url={ingredient.url}></Product>
                        </Slide>
                        ) : null
                    ))}
                </Slider>
            </CarouselProvider>
        </div>
    );
}
