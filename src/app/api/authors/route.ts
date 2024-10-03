import { NextRequest, NextResponse } from 'next/server';

import getAuthors from '@/api/getAuthors';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  return NextResponse.json(getAuthors(params), { status: 200 });
}
