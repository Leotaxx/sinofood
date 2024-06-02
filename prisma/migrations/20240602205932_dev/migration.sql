-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "portionSize" TEXT NOT NULL,
    "frozenDefrosted" TEXT NOT NULL,
    "autofryerMinutes" TEXT NOT NULL,
    "sauce" TEXT NOT NULL,
    "extraIngredients" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "picname" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
