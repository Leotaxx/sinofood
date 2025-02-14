'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from './data-table';
import { columns } from "./columns"

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
    categoryId: string;
    picname: string;
    brand: string;
}

const EditableTable = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('/api/recipes');
                if (!response.ok) throw new Error('Failed to fetch recipes');
                const data: Recipe[] = await response.json();
                setRecipes(data);
            } catch (err) {
                setError((err as Error).message || 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        };
        fetchRecipes();
    }, []);

    const handleInputChange = (id: number, field: keyof Recipe, value: string) => {
        setRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
                recipe.id === id ? { ...recipe, [field]: value } : recipe
            )
        );
    };

    const handleSave = async (id: number) => {
        const updatedRecipe = recipes.find((recipe) => recipe.id === id);
        if (!updatedRecipe) return;

        try {
            const response = await fetch('/api/recipes', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedRecipe),
            });
            if (!response.ok) throw new Error('Failed to update recipe');
            alert('Recipe updated successfully!');
        } catch (err) {
            console.error(err);
            alert('Error updating recipe');
        }
    };

    const handleDelete = (id: number) => {
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
    };

    const handleAddRecipe = () => {
        const newRecipe: Recipe = {
            id: Date.now(),
            name: '',
            portionSize: '',
            frozenDefrosted: '',
            autofryerMinutes: '',
            sauce: '',
            extraIngredients: '',
            packaging: '',
            notes: '',
            categoryId: '',
            picname: '',
            brand: '',
        };
        setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
    };



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {/* <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Editable Recipes Table</h1>
                <Button onClick={handleAddRecipe} className="bg-gray-500 text-white">
                    Add Recipe
                </Button>
            </div> */}
            {/* <div className="overflow-x-auto">
             */}
            <div>
                <DataTable
                    columns={columns}
                    data={recipes}
                // onEditCell={(rowId, columnId, value) =>
                //     handleInputChange(rowId, columnId as keyof Recipe, value)
                // }
                />
            </div>
        </div>
    );
};

export default EditableTable;
