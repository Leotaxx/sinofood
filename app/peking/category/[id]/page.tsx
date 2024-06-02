'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        if (id) {
            const fetchRecipes = async () => {
                try {
                    const res = await fetch(`/api/recipes?categoryId=${id}`);
                    if (!res.ok) {
                        throw new Error('Failed to fetch recipes');
                    }
                    const data = await res.json();
                    if (!Array.isArray(data)) {
                        throw new Error('Invalid data format');
                    }
                    setRecipes(data);
                } catch (error: any) {
                    setError(error.message);
                }
            };

            fetchRecipes();
        }
    }, [id]);

    if (error) {
        return <div className="container mx-auto px-4">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6 text-center">Recipes</h1>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
                {recipes.map((recipe) => (
                    <button
                        key={recipe.id}
                        onClick={() => setSelectedRecipe(recipe)}
                        className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto text-center"
                    >
                        {recipe.name}
                    </button>
                ))}
            </div>
            {selectedRecipe && (
                <div>
                    <h2 className="text-2xl font-bold my-4 text-center">{selectedRecipe.name}</h2>
                    <div className="overflow-x-auto">
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
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">
                                        <RecipeImage name={selectedRecipe.name} />
                                    </td>
                                    <td className="py-2 px-4 border-b">{selectedRecipe.portionSize}</td>
                                    <td className="py-2 px-4 border-b">{selectedRecipe.frozenDefrosted}</td>
                                    <td className="py-2 px-4 border-b">{selectedRecipe.autofryerMinutes}</td>
                                    <td className="py-2 px-4 border-b">{selectedRecipe.sauce}</td>
                                    <td className="py-2 px-4 border-b break-words">{selectedRecipe.extraIngredients}</td>
                                    <td className="py-2 px-4 border-b">{selectedRecipe.packaging}</td>
                                    <td className="py-2 px-4 border-b">{selectedRecipe.notes}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

interface RecipeImageProps {
    name: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ name }) => {
    const [imgError, setImgError] = useState(false);

    return imgError ? (
        <span>{name}</span>
    ) : (
        <div className="flex flex-col items-center">
            <Image
                src={`/peking/${encodeURIComponent(name)}.png`}
                alt={name}
                width={256}
                height={256}
                className="object-cover"
                onError={() => setImgError(true)}
            />
            <span className="text-center">{name}</span>
        </div>
    );
};

export default Category;
