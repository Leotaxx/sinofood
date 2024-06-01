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