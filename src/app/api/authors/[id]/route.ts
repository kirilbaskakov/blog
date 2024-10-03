import { NextRequest, NextResponse } from 'next/server';

import getAuthor from '@/api/getAuthor';

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json(getAuthor(id), { status: 200 });
}
