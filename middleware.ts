import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    // Example: Check for a token in cookies
    //   const token = request.cookies.get("authjs.session-token");

    //   if (!token) {
    //     // Redirect to login if no token exists
    //     return NextResponse.redirect(new URL("/login", request.url));
    //   }

    //   // Allow the request if the token exists
    //   return NextResponse.next();

    // If the request is for a sub-path under '/test' (e.g., '/test/anything'), redirect to '/test'

    console.log("Middleware triggered:", request.url);

    const refreshToken = request.cookies.get("normplov-refresh-token");
    const url = request.nextUrl.pathname;

    if (url.startsWith("/test/")) {
        console.log("Blocked sub-path under '/test', redirecting to '/test'...");
        return NextResponse.redirect(new URL("/test", request.url));
    }

    // If the request is for '/test' and no refresh token, redirect to login
    if (url === "/test/" && !refreshToken) {
        console.log("No refresh token found, redirecting to login...");
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Allow the request to proceed
    return NextResponse.next();
}


export const config = {
    matcher: "/test", 
};
