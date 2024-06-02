const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to adjust cooking time based on specific rules
function adjustCookingTime(cookingTime, brand) {
	if (brand === "k") {
		switch (cookingTime) {
			case "72:00:00":
				return "00:03:00";
			case "48:00:00":
				return "00:02:00";
			case "84:00:00":
				return "00:03:30";
			default:
				return cookingTime;
		}
	}
	return cookingTime;
}

// Function to update recipes in the database
async function updateRecipes() {
	try {
		// Fetch all recipes from the database
		const recipes = await prisma.recipe.findMany();

		for (const recipe of recipes) {
			// Check if the brand is 'k' and adjust the cooking time if needed
			const adjustedCookingTime = adjustCookingTime(
				recipe.autofryerMinutes,
				recipe.brand
			);

			// If the cooking time was adjusted, update the recipe in the database
			if (adjustedCookingTime !== recipe.autofryerMinutes) {
				await prisma.recipe.update({
					where: { id: recipe.id },
					data: { autofryerMinutes: adjustedCookingTime },
				});
				console.log(
					`Updated recipe ${recipe.id}: ${recipe.name} with new cooking time ${adjustedCookingTime}`
				);
			}
		}

		console.log("All relevant recipes have been updated.");
	} catch (error) {
		console.error("Error updating recipes:", error);
	} finally {
		await prisma.$disconnect();
	}
}

// Call the function to update recipes
updateRecipes();
