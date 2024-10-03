import { NextRequest, NextResponse } from 'next/server';

import getTags from '@/api/getTags';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  return NextResponse.json(getTags(params), { status: 200 });
}
