import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to fetch categories' }, { status: 500 });
  }
};