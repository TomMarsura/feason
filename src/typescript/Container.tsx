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

interface Ingredient {
    name: string;
    months: number[];
}


const actualMonth = new Date().getMonth();

function Container({ vegan, vegetarian, healthy }: ContainerProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
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

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response: AxiosResponse<ApiResponse> = await Axios.get('http://localhost:3200/recipes');
                if (response.data && Array.isArray(response.data) && response.data.length > 0) {
                    setRecipes(response.data[0].recipes);
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
    
            let ingredientsNames: string[] = [];
    
            // Parcours des instructions
            recipe.analyzedInstructions.forEach(instruction => {
                instruction.steps.forEach(step => {
                    // Parcours des ingrédients de chaque étape
                    step.ingredients.forEach(ingredient => {
                        // Stockage du nom de l'ingrédient
                        ingredientsNames.push(ingredient.name);
                    });
                });
            });
    
            // Vérification si au moins un ingrédient est de saison
            return ingredientsNames.some(ingredientName => {
                console.log(ingredientName);
                const ingredientInfo = ingredients.find(item => item.name.toLowerCase() === ingredientName.toLowerCase());
                return ingredientInfo && ingredientInfo.months.includes(actualMonth);
            });
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
                                    time={recipe.readyInMinutes}
                                    key={index}
                                    title={recipe.title}
                                    image={recipe.image}
                                    score={recipe.healthScore}
                                    tags={([
                                        recipe.vegan ? "Vegan" : null,
                                        recipe.vegetarian ? "Végétarien" : null,
                                        recipe.veryHealthy ? "Healthy" : null
                                    ].filter(tag => tag !== null)) as string[]}
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
