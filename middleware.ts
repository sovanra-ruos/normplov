import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    console.log("Middleware triggered:", request.url);

    const refreshToken = request.cookies.get("normplov-refresh-token");
    const url = request.nextUrl.pathname;

    if (url.startsWith("/test/")) {
        if (!refreshToken) {
          console.log("No refresh token found, redirecting to login...");
          return NextResponse.redirect(new URL("/login", request.url));
        }
        console.log("Refresh token found, allowing access to /test/anything...");
      }

    // Allow the request to proceed
    return NextResponse.next();
}


export const config = {
    matcher: "/test", 
};
