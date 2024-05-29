'use client'

import { useEffect, useState } from 'react';

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
}
interface CategoryProps {
    params: {
        id: string;
    };
}

const Category: React.FC<CategoryProps> = ({ params }) => {


    const id = params.id;
    console.log(id)
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        if (id) {
            const fetchRecipes = async () => {
                const res = await fetch(`/api/recipes?categoryId=${id}`);
                const data = await res.json();
                setRecipes(data);
            };

            fetchRecipes();
        }
    }, [id]);
    console.log(recipes)

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6">Recipes</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Portion Size</th>
                        <th className="py-2 px-4 border-b">Frozen/Defrosted</th>
                        <th className="py-2 px-4 border-b">Autofryer Minutes</th>
                        <th className="py-2 px-4 border-b">Sauce</th>
                        <th className="py-2 px-4 border-b">Extra Ingredients</th>
                        <th className="py-2 px-4 border-b">Packaging</th>
                        <th className="py-2 px-4 border-b">Notes</th>

                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr key={recipe.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{recipe.name}</td>
                            <td className="py-2 px-4 border-b">{recipe.portionSize}</td>
                            <td className="py-2 px-4 border-b">{recipe.frozenDefrosted}</td>
                            <td className="py-2 px-4 border-b">{recipe.autofryerMinutes}</td>
                            <td className="py-2 px-4 border-b">{recipe.sauce}</td>
                            <td className="py-2 px-4 border-b">{recipe.extraIngredients}</td>
                            <td className="py-2 px-4 border-b">{recipe.packaging}</td>
                            <td className="py-2 px-4 border-b">{recipe.notes}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Category;