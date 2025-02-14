import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient | undefined;
}

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');

  try {
    let recipes;
    if (!categoryId) {
      recipes = await prisma.recipe.findMany();
    } else {
      recipes = await prisma.recipe.findMany({
        where: {
          categoryId: Number(categoryId),
        },
      });
    }
    return NextResponse.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json({ error: 'Unable to fetch recipes' }, { status: 500 });
  }
};
export const PUT = async (request: Request) => {
  const data = await request.json();

  try {
    const updatedRecipe = await prisma.recipe.update({
      where: { id: data.id },
      data: {
        name: data.name,
        portionSize: data.portionSize,
        frozenDefrosted: data.frozenDefrosted,
        autofryerMinutes: data.autofryerMinutes,
        sauce: data.sauce,
        extraIngredients: data.extraIngredients,
        packaging: data.packaging,
        notes: data.notes,
        categoryId: data.categoryId,
        picname: data.picname,
        brand: data.brand,
      },
    });

    return NextResponse.json(updatedRecipe);
  } catch (error) {
    console.error('Error updating recipe:', error);
    return NextResponse.json({ error: 'Unable to update recipe' }, { status: 500 });
  }
};

