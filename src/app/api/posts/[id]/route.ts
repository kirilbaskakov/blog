import { NextRequest, NextResponse } from 'next/server';

import getPost from '@/api/getPost';

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json(getPost(id), { status: 200 });
}
