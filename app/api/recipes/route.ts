import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

declare global {
  // Prevents TypeScript from complaining about the global prisma instance
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();


export const dynamic = 'force-dynamic'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');

  if (!categoryId) {
    const recipes=await prisma.recipe.findMany();
    return NextResponse.json(recipes);
  }

  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        categoryId: Number(categoryId),
      },
    });
    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to fetch recipes' }, { status: 500 });
  }
};