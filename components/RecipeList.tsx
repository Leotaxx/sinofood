'use client'
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RecipeTable from './RecipeTable';

interface Recipe {
    id: number;
    name: string;
    portionSize: string;
    frozenDefrosted: string;
    autofryerMinutes: string;
    sauce: string;
    extraIngredients: string;
    packaging: string;
    notes: string;
    ingredients: string;
    instructions: string;
    extras: string;
    picname: string;
    brand: string;
}

interface RecipeListProps {
    categoryId: string;
    brandFilter: string;
    title: string;
    imagePath: string;
}

const RecipeList: React.FC<RecipeListProps> = ({ categoryId, brandFilter, title, imagePath }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

    useEffect(() => {
        if (categoryId) {
            const fetchRecipes = async () => {
                try {
                    const res = await fetch(`/api/recipes?categoryId=${categoryId}`);
                    if (!res.ok) {
                        throw new Error('Failed to fetch recipes');
                    }
                    const data = await res.json();
                    if (!Array.isArray(data)) {
                        throw new Error('Invalid data format');
                    }
                    const filteredData = data.filter((recipe: Recipe) => recipe.brand === brandFilter);
                    setRecipes(filteredData);
                } catch (error: any) {
                    setError(error.message);
                }
            };

            fetchRecipes();
        }
    }, [categoryId, brandFilter]);

    const handleButtonClick = (recipeId: number) => {
        setSelectedRecipeId((prevSelectedRecipeId) =>
            prevSelectedRecipeId === recipeId ? null : recipeId
        );
    };

    if (error) {
        return <div className="container mx-auto px-4">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6 text-center text-black">{title}</h1>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
                {recipes.map((recipe) => (
                    <Card key={recipe.id} className="w-full sm:w-auto">
                        <CardHeader>
                            <Button variant='outline' onClick={() => handleButtonClick(recipe.id)}>
                                {recipe.name}
                            </Button>
                        </CardHeader>
                        <CardContent>
                            {selectedRecipeId === recipe.id && (
                                <RecipeTable recipe={recipe} imagePath={imagePath} />
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
