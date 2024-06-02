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
    picname: string;
    brand: string;
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
    const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

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
                    const filteredData = data.filter((recipe: Recipe) => recipe.brand === 'k');
                    setRecipes(filteredData);
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

    const renderRecipeTable = (recipe: Recipe) => (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-200">
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b flex items-center">
                            <RecipeImage name={recipe.picname} />


                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b">
                            <div>Portion Size/分量: {recipe.portionSize}</div>
                            <div>Frozen冷冻/Defrosted解冻: {recipe.frozenDefrosted}</div>
                            <div>Autofryer Minutes/制作或油炸时间: {recipe.autofryerMinutes}</div>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b break-words">
                            Extra Ingredients/额外食材：{recipe.extraIngredients ? recipe.extraIngredients : '无'}
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b">
                            <div>Sauce/酱汁: {recipe.sauce}</div>
                            <div>Packaging/包装: {recipe.packaging}</div>
                            <div>Notes/备注: {recipe.notes ? recipe.notes : "无"}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="container mx-auto px-4">
            {/* <Link href={`/peking/category`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                Back to category
            </Link> */}
            <h1 className="text-3xl font-bold my-6 text-center">korean Recipes</h1>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="w-full sm:w-auto">
                        <button
                            onClick={() => setSelectedRecipeId(recipe.id)}
                            className="bg-blue-500 text-white py-2 px-4 rounded w-full text-center"
                        >
                            {recipe.name}
                        </button>
                        {selectedRecipeId === recipe.id && renderRecipeTable(recipe)}
                    </div>
                ))}
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
        <div className="flex flex-col items-center">
            <Image
                src={`/kk/${encodeURIComponent(name)}.png`}
                alt={name}
                width={256}
                height={256}
                className="object-cover"
                onError={() => setImgError(true)}
            />


        </div>
    );
};

export default Category;
