const { PrismaClient } = require("@prisma/client/edge");
const prisma = new PrismaClient();
const xlsx = require("xlsx");

async function main() {
	await prisma.recipe.deleteMany();
	await prisma.category.deleteMany();

	// Read the Excel file
	const workbook = xlsx.readFile("prisma/PEKING_Cooking_Instructions.xlsx"); // Replace with your file path
	const sheetName = workbook.SheetNames[0];
	const worksheet = workbook.Sheets[sheetName];
	const jsonData = xlsx.utils.sheet_to_json(worksheet);

	// Loop through the data and insert into the database
	for (const row of jsonData) {
		// Ensure category name is defined and not empty
		if (!row.Category || !row.RecipeName) {
			console.error("Category or RecipeName is missing in row:", row);
			continue;
		}

		// Insert categories if not exists
		const category = await prisma.category.upsert({
			where: { name: row.Category },
			update: {},
			create: { name: row.Category },
		});

		// Insert recipes
		await prisma.recipe.create({
			data: {
				name: row.RecipeName.trim(),
				portionSize: String(row.PortionSize || "").trim(),
				frozenDefrosted: String(row.FrozenDefrosted || "").trim(),
				autofryerMinutes: convertExcelTime(row.AutofryerMinutes || "").trim(),
				sauce: String(row.Sauce || "").trim(),
				extraIngredients: String(row.ExtraIngredients || ""),
				packaging: String(row.Packaging || "").trim(),
				notes: String(row.Note || "").trim(),
				category: { connect: { id: category.id } },
			},
		});
	}
}
function convertExcelTime(excelTime) {
	if (!excelTime) return "";
	const totalSeconds = parseFloat(excelTime) * 24 * 3600;
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = Math.floor(totalSeconds % 60);
	return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
		2,
		"0"
	)}:${String(seconds).padStart(2, "0")}`;
}

main()
	.then(() => {
		console.log("Seed data created");
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
