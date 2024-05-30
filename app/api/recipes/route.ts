import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');

  if (!categoryId) {
    return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
  }

  try {
    const recipes = await prisma.recipe.findMany({
      // where: {
      //   categoryId: Number(categoryId),
      // },
    });
    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to fetch recipes' }, { status: 500 });
  }
};