import React, { useState, useEffect } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { Recipe } from './interface/recipe';


interface ApiResponse {
    recipes: Recipe[];
}

const RandomRecipe: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [loaded, setLoaded] = useState<boolean>(false); // Nouvel état pour suivre si les recettes ont déjà été chargées

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response: AxiosResponse<ApiResponse> = await Axios.get('http://localhost:3200/recipes');
                if (response.data && Array.isArray(response.data) && response.data.length > 0) {
                    setRecipes(response.data[0].recipes);
                    setLoading(false);
                    setLoaded(true); // Indiquer que les recettes ont été chargées avec succès
                }
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setLoading(false);
            }
        };
    
        fetchRecipes();
    }, []);

    useEffect(() => {
        // Ne pas exécuter le reste de la logique si les recettes n'ont pas encore été chargées
        if (!loaded) {
            return;
        }

        if (recipes.length > 0) {
            const randomIndex = Math.floor(Math.random() * recipes.length);
            setRandomRecipe(recipes[randomIndex]);
        }
    }, [loaded, recipes]); // Ajouter loaded comme dépendance

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!randomRecipe) {
        return <div>No recipe available</div>;
    }

    return (
        <div className="fade show container py-5 col-md-12 col-lg-5">
            <h2 className="text-primary">Recette aléatoire</h2>
            <h3>{randomRecipe.title}</h3>
            <img className="rounded" src={randomRecipe.image} alt={randomRecipe.title} /><br/>
            <a href={randomRecipe.sourceUrl} className="btn mt-2 border border-secondary rounded-pill px-3 text-primary">
                <i className="fa fa-list me-2 text-primary"></i> Voir recette
            </a>
        </div>
    );
};



export default RandomRecipe;
