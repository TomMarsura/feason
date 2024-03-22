import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import FormulaireLocaux from './typescript/FormulaireLocaux';
import Navbar from './typescript/Navbar';
import Aliments from './typescript/pagefruitslegumes';
import MainMenu from './typescript/MainMenu';
import reportWebVitals from './reportWebVitals';
import 'bootstrap'
import Recette from "./typescript/Recette";
import RandomRecipe from './typescript/RandomRecette';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// State declaration within the React functional component
function App() { // Create a functional component named App

        const [isRecetteVisible, setIsRecetteVisible] = useState(false);
        const [isAlimentsVisible, setIsAlimentsVisible] = useState(false);
        const [isLocauxVisible, setIsLocauxVisible] = useState(false);


        return ( // Return the JSX for your application
            <React.StrictMode>

                    <div>
                        <Navbar
                            isRecetteVisible={isRecetteVisible}
                            setIsRecetteVisible={setIsRecetteVisible}

                            isAlimentsVisible={isAlimentsVisible}
                            setIsAlimentsVisible={setIsAlimentsVisible}

                            isLocauxVisible={isLocauxVisible}
                            setIsLocauxVisible={setIsLocauxVisible}
                        />
                    </div>

                    {!isRecetteVisible && !isAlimentsVisible && !isLocauxVisible && <div>
                        <MainMenu // Pass props to MainMenu
                            isRecetteVisible={isRecetteVisible}
                            setIsRecetteVisible={setIsRecetteVisible}
                        />
                        <RandomRecipe/>
                    </div>}

                    {isRecetteVisible && <div id="recettes">
                        <Recette />
                    </div>}

                    {isAlimentsVisible && <div>
                        <Aliments />
                    </div>}

                    {isLocauxVisible && <div>
                        <FormulaireLocaux />
                    </div>}

                    <script src='bootstrap/dist/js/bootstrap.bundle.min.js' />

            </React.StrictMode>
        );
}

root.render(
    <App /> // Render the App component
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
