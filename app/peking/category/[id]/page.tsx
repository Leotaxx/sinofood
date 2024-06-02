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
            <h1 className="text-3xl font-bold my-6">Recipes</h1>
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
                        {recipes.map((recipe) => (
                            <tr key={recipe.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">
                                    <RecipeImage name={recipe.name} />
                                </td>
                                <td className="py-2 px-4 border-b">{recipe.portionSize}</td>
                                <td className="py-2 px-4 border-b">{recipe.frozenDefrosted}</td>
                                <td className="py-2 px-4 border-b">{recipe.autofryerMinutes}</td>
                                <td className="py-2 px-4 border-b">{recipe.sauce}</td>
                                <td className="py-2 px-4 border-b break-words">{recipe.extraIngredients}</td>
                                <td className="py-2 px-4 border-b">{recipe.packaging}</td>
                                <td className="py-2 px-4 border-b">{recipe.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
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
        <>
            <div className="flex flex-col items-center">
                <Image
                    src={`/peking/${encodeURIComponent(name)}.png`}
                    alt={name}
                    width={128}
                    height={128}
                    className="object-cover"
                    onError={() => setImgError(true)}
                />
                <span className="text-center">{name}</span>
            </div>
            <span>{name}</span>
        </>
    );
};

export default Category;
