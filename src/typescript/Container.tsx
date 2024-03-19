import React, { useState, useEffect } from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css';
import Itemisation from './Itemisation';
import Axios, { AxiosResponse } from 'axios';
import { Recipe } from './interface/recipe';

interface ContainerProps {
    vegan: boolean;
    vegetarian: boolean;
    healthy: boolean;
}

interface ApiResponse {
    recipes: Recipe[];
}

function Container({ vegan, vegetarian, healthy }: ContainerProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response: AxiosResponse<ApiResponse> = await Axios.get('http://localhost:3200/recipes');
                if (response.data && Array.isArray(response.data.recipes)) {
                    setRecipes(response.data.recipes);
                }
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    useEffect(() => {
        filterRecipes();
    }, [vegan, vegetarian, healthy, recipes]);

    const filterRecipes = () => {
        let filtered: Recipe[] = recipes.filter(recipe => {
            if ((vegan && !recipe.vegan) || (vegetarian && !recipe.vegetarian) || (healthy && !recipe.veryHealthy)) {
                return false;
            }
            return true;
        });
        setFilteredRecipes(filtered);
    }

    return (
        <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            {filteredRecipes.map((recipe, index) => (
                                <Itemisation
                                    key={index}
                                    title={recipe.title}
                                    image={recipe.image}
                                    score={recipe.healthScore}
                                    tags={([
                                        recipe.vegan ? "Vegan" : null,
                                        recipe.vegetarian ? "Végétarien" : null,
                                        recipe.veryHealthy ? "Healthy" : null
                                    ].filter(tag => tag !== null)) as string[]}
                                    time={recipe.readyInMinutes}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
