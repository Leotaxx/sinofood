// pages/koreanfood.tsx
import RecipeList from '../../../../components/RecipeList';

const Koreanfood = ({ params }: { params: { id: string } }) => {
    const id = params.id; // Replace with actual logic to get params

    return <RecipeList categoryId={params.id} brandFilter="k" title="Koreanfood Recipes" imagePath="kk" />;
};

export default Koreanfood;
