/*
  Warnings:

  - You are about to drop the `Extra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Instruction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `cookingTime` on the `Recipe` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `autofryerMinutes` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraIngredients` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frozenDefrosted` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Made the column `notes` on table `Recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `packaging` on table `Recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `portionSize` on table `Recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sauce` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Extra";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ingredient";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Instruction";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
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
INSERT INTO "new_Recipe" ("categoryId", "id", "name", "notes", "packaging", "portionSize", "sauce") SELECT "categoryId", "id", "name", "notes", "packaging", "portionSize", "sauce" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check("Recipe");
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
