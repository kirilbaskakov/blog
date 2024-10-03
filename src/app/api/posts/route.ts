import { NextRequest, NextResponse } from 'next/server';

import getPosts from '@/api/getPosts';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  return NextResponse.json(getPosts(params), { status: 200 });
}
