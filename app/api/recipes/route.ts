import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export const dynamic = 'force-dynamic';

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