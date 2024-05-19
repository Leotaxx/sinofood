"use client";
import React, { useState } from 'react';
import RecipeDetails from '../../../RecipeDetails';

type Recipe =
    | 'Yumyum Chicken Wings / Strips'
    | 'Korean Spicy Chicken Wings / Strips'
    | 'Death Spicy Chicken Wings / Strips'
    | 'Sweet & Sour Chicken Wings / Strips'
    | 'Salt Chilli Chicken Wings / Strips'
    | 'Chicken Dumplings (6)'
    | 'Veg Dumplings (6)'
    | 'Korean Lemon Calamari'
    | 'Salt Chilli Prawns'
    | 'Salt Chilli Chips'
    | 'Salt Chilli Veg';

const allRecipes: Recipe[] = [
    'Yumyum Chicken Wings / Strips',
    'Korean Spicy Chicken Wings / Strips',
    'Death Spicy Chicken Wings / Strips',
    'Sweet & Sour Chicken Wings / Strips',
    'Salt Chilli Chicken Wings / Strips',
    'Chicken Dumplings (6)',
    'Veg Dumplings (6)',
    'Korean Lemon Calamari',
    'Salt Chilli Prawns',
    'Salt Chilli Chips',
    'Salt Chilli Veg',
];

export default function Recipes() {
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleRecipeClick = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
    };

    const renderRecipeDetails = () => {
        switch (selectedRecipe) {
            case 'Yumyum Chicken Wings / Strips':
                return (
                    <RecipeDetails
                        title="Yumyum Chicken Wings / Strips"
                        portionSize="Wings-Regular (6) / Large(12) Strips-Regular (11) / Large(22)"
                        defrosted="D / 解冻"
                        cookingTime="3 Minutes / 3分钟"
                        sauce="Honey & Lemon 柠檬蜂蜜酱"
                        extraIngredients="White sesame / 白芝麻"
                        packaging="Regular -Peking 750ml Pot + Lid Large-Peking Large Nest Tray"
                        note="Prepare a bowl. After frying the chicken wings/strips, thoroughly blend them with the sauce in the bowl. Pack them into the packaging, and finally, sprinkle some white sesame seeds for decoration. 需要准备一个盆，将炸好的鸡翅/鸡丝在盆中与酱汁充分融合后，再装入包装内，最后再撒上白芝麻点缀。"
                    />
                );
            case 'Korean Spicy Chicken Wings / Strips':
                return (
                    <RecipeDetails
                        title="Korean Spicy Chicken Wings / Strips"
                        portionSize="Wings-Regular (6) / Large(12) Strips-Regular (11) / Large(22)"
                        defrosted="D / 解冻"
                        cookingTime="3 Minutes / 3分钟"
                        sauce="Sriracha Mayo 士拉差酱"
                        extraIngredients="White sesame / 白芝麻"
                        packaging="Regular -Peking 750ml Pot + Lid Large-Peking Large Nest Tray"
                        note="Prepare a bowl. After frying the chicken wings/strips, thoroughly blend them with the sauce in the bowl. Pack them into the packaging, and finally, sprinkle some white sesame seeds for decoration. 需要准备一个盆，将炸好的鸡翅/鸡丝在盆中与酱汁充分融合后，再装入包装内，最后再撒上白芝麻点缀。"
                    />
                );
            case 'Death Spicy Chicken Wings / Strips':
                return (
                    <RecipeDetails
                        title="Death Spicy Chicken Wings / Strips"
                        portionSize="Wings-Regular (6) / Large(12) Strips-Regular (11) / Large(22)"
                        defrosted="D / 解冻"
                        cookingTime="3 Minutes / 3分钟"
                        sauce="火鸡面辣酱"
                        extraIngredients="White sesame / 白芝麻"
                        packaging="Regular -Peking 750ml Pot + Lid Large-Peking Large Nest Tray"
                        note="Prepare a bowl. After frying the chicken wings/strips, thoroughly blend them with the sauce in the bowl. Pack them into the packaging, and finally, sprinkle some white sesame seeds for decoration. 需要准备一个盆，将炸好的鸡翅/鸡丝在盆中与酱汁充分融合后，再装入包装内，最后再撒上白芝麻点缀。"
                    />
                );
            // Add cases for other recipes as needed
            default:
                return <p>Select a recipe to see the details.</p>;
        }
    };

    const filteredRecipes = allRecipes.filter((recipe) =>
        recipe.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col justify-center items-center">
            <h2>This is the Korean food starter recipes page</h2>
            <input
                type="text"
                placeholder="Search recipes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4 p-2 border rounded"
            />
            {filteredRecipes.map((recipe) => (
                <button
                    key={recipe}
                    onClick={() => handleRecipeClick(recipe)}
                    className="my-2 p-2 border rounded"
                >
                    {recipe}
                </button>
            ))}
            <div className="mt-4 p-4 border rounded">
                {renderRecipeDetails()}
            </div>
        </div>
    );
}
