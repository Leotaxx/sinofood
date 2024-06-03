// components/RecipeTable.tsx
import RecipeImage from './RecipeImage';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

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

interface RecipeTableProps {
    recipe: Recipe;
    imagePath: string;

}

const RecipeTable: React.FC<RecipeTableProps> = ({ recipe, imagePath, }) => (
    <div className="overflow-x-auto mt-4">
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <RecipeImage name={recipe.picname} imagePath={imagePath} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <div>Portion Size/分量: {recipe.portionSize}</div>
                        <div>Frozen冷冻/Defrosted解冻: {recipe.frozenDefrosted}</div>
                        <div>Autofryer Minutes/制作或油炸时间: {recipe.autofryerMinutes}</div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Extra Ingredients/额外食材：{recipe.extraIngredients ? recipe.extraIngredients : '无'}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <div>Sauce/酱汁: {recipe.sauce}</div>
                        <div>Packaging/包装: {recipe.packaging}</div>
                        <div>Notes/备注: {recipe.notes ? recipe.notes : "无"}</div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export default RecipeTable;
