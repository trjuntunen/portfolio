import { NextRequest, NextResponse } from 'next/server';

const recipes: { id: number; title: string; description: string }[] = [];

export async function GET(req: NextRequest) {
  return NextResponse.json({ recipes });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newRecipe = { id: recipes.length + 1, ...body };
  recipes.push(newRecipe);
  return NextResponse.json({ recipe: newRecipe }, { status: 201 });
}
