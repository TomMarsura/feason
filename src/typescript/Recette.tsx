import React from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css'
import EnTete from './enTete';
import Container from './Container';
function App() {
    return (
        <div className="container-fluid fruite py-5 margeTop">
            <div className="container py-5">
                <div className="tab-className text-center">
                    <EnTete/>
                    <Container/>
                </div>
            </div>
        </div>
    );
}



export default App;
