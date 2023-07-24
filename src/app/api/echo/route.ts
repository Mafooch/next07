import { NextResponse } from "next/server";

// * routes are dynamic when we use Request object with GET
// * Any other verbs will automatically be dynamic
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const obj = Object.fromEntries(searchParams.entries())

  return NextResponse.json(obj)
}
