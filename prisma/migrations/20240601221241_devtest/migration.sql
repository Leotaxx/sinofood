-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "portionSize" TEXT NOT NULL,
    "frozenDefrosted" TEXT NOT NULL,
    "autofryerMinutes" TEXT NOT NULL,
    "sauce" TEXT NOT NULL,
    "extraIngredients" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Recipe_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
