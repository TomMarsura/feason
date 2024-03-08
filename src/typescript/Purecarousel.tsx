import '@fortawesome/fontawesome-free/css/all.css';
import "../css/bootstrap.min.css"
import "../css/style.css"
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Product from "./Product";

export default class PureCarousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={6}
                visibleSlides={3}
                infinite={true}
            >
                <ButtonBack className="button">Back</ButtonBack>
                <ButtonNext className="button">Next</ButtonNext>
                <Slider className="owl-stage">
                    <Slide index={0} className="owl-item"> <Product name={"Fraise"}/> </Slide>
                    <Slide index={1} className="owl-item"> <Product name={"Cerise"}/> </Slide>
                    <Slide index={2} className="owl-item"> <Product name={"Pastèque"}/> </Slide>
                    <Slide index={3} className="owl-item"> <Product name={"Betterave"}/> </Slide>
                    <Slide index={4} className="owl-item"> 5 </Slide>
                    <Slide index={5} className="owl-item"> 6 </Slide>
                </Slider>
            </CarouselProvider>
        );
    }
}