import React from 'react';

interface RecipeDetailsProps {
    title: string;
    portionSize: string;
    defrosted: string;
    cookingTime: string;
    sauce: string;
    extraIngredients: string;
    packaging: string;
    note: string;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({
    title,
    portionSize,
    defrosted,
    cookingTime,
    sauce,
    extraIngredients,
    packaging,
    note,
}) => {
    return (
        <div className="mt-4 p-4 border rounded">
            <h3 className="text-lg font-bold">{title}</h3>
            <table className="table-auto w-full border-collapse">
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Portion Size / 食物分量</td>
                        <td className="border px-4 py-2">{portionSize}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Frozen or Defrosted / 冷冻或解冻</td>
                        <td className="border px-4 py-2">{defrosted}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Cooking Autofryer Minutes / 制作或油炸时间</td>
                        <td className="border px-4 py-2">{cookingTime}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Sauce / 酱汁</td>
                        <td className="border px-4 py-2">{sauce}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Extra Ingredients / 额外食材需求</td>
                        <td className="border px-4 py-2">{extraIngredients}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Packaging / 包装规格</td>
                        <td className="border px-4 py-2">{packaging}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Note / 备注</td>
                        <td className="border px-4 py-2">{note}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecipeDetails;
