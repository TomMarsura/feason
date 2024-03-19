export interface ingredient {
    id: number,
    name: string,
    localizedName: string,
    image: string
}

export interface step {
    number: number,
    step: string
    ingredients: ingredient[],
    equipment: ingredient[]
}

export interface instruction {
    name: string,
    steps: step[]
}

export interface Recipe {
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
    preparationMinutes: number,
    cookingMinutes: number,
    healthScore: number,
    id: number,
    title: string,
    readyInMinutes: number,
    servings: number,
    image: string,
    summary: string,
    analyzedInstructions: instruction[],
}