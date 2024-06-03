// pages/peking.tsx

import RecipeList from '../../../../components/RecipeList';

const pekingFood = ({ params }: { params: { id: string } }) => {
    const id = params.id; // Replace with actual logic to get params

    return <RecipeList categoryId={params.id} brandFilter="f" title="Peking Recipes" imagePath="peking" />;
};

export default pekingFood;
