import getPost from '@/api/getPost';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  return NextResponse.json(getPost(id), { status: 200 });
}
