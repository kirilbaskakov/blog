import getAuthor from '@/api/getAuthor';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json(getAuthor(id), { status: 200 });
}
