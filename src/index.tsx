import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import FormulaireLocaux from './typescript/FormulaireLocaux';
import Navbar from './typescript/Navbar';
import Aliments from './typescript/pagefruitslegumes';
import MainMenu from './typescript/MainMenu';
import reportWebVitals from './reportWebVitals';
import 'bootstrap'




import Recette from "./typescript/Recette";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Navbar />
        <MainMenu />
        <Aliments/>
      <Recette/>
      <FormulaireLocaux />
      <script src='bootstrap/dist/js/bootstrap.bundle.min.js' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
