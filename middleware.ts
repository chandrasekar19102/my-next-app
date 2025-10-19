import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  // Skip middleware for the sign-in page and static files
  if (
    request.nextUrl.pathname.startsWith("/signin") ||
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/public")
  ) {
    return NextResponse.next();
  }

  // Get the user's token (if any)
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If no token, redirect to sign-in
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // If token exists, allow the request
  return NextResponse.next();
}
