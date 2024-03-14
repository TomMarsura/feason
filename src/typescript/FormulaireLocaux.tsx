import React, { useEffect } from 'react';
import logo from '../img/logo.svg';
import '../css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";
import '../css/style.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function FormulaireLocaux() {
    const Style1: React.CSSProperties = {
        maxWidth: "700px"
    }

    const Style2: React.CSSProperties = {
        height: "400px"
    }

    const Style3: React.CSSProperties = {
        border: "1px solid black"
    }

    const StyleMap: React.CSSProperties = {
        height: "50vh",
    }

    return (
        <div className="container-fluid contact hero-header py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto" style={Style1}>
                                <h1 className="text-primary">Contactez-nous !</h1>
                                <p className="mb-4">Vous pouvez vous enregistrez sur Feason en tant que producteur local ! Vos produits seront alors conseillé à nos internautes lors de leurs recherches.</p>
                            </div>
                        </div>
                        <section className='map-container'>
                            <MapContainer center={[47.8312024,0.0713205]} zoom={ 16 } scrollWheelZoom={true} style={StyleMap}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[47.8312024,0.0713205]}>
                                    <Popup>
                                        MA MAISON
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </section>
                        <div className="col-lg-7 mx-auto">
                            <form action="" className="">
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4"
                                       placeholder="Votre nom"></input>
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4"
                                       placeholder="Votre adresse mail"></input>
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4"
                                          placeholder="N°SIRET"></input>
                                <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                                        type="submit">Envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FormulaireLocaux;