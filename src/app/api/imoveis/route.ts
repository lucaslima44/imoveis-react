// app/api/imoveis/route.ts
import { NextResponse } from 'next/server';

interface Imovel {
  id: number;
  nome: string;
}

const imoveis: Imovel[] = [
  { id: 1, nome: 'Imóvel 1' },
  { id: 2, nome: 'Imóvel 2' },
  { id: 3, nome: 'Imóvel 3' },
  { id: 4, nome: 'Imóvel 4' },
  { id: 5, nome: 'Imóvel 5' },
];

export async function GET() {
  return NextResponse.json(imoveis);
}
