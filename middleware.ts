import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware triggered:", request.url);

    // Example: Check for a token in cookies
    //   const token = request.cookies.get("authjs.session-token");

    //   if (!token) {
    //     // Redirect to login if no token exists
    //     return NextResponse.redirect(new URL("/login", request.url));
    //   }

    //   // Allow the request if the token exists
    //   return NextResponse.next();

    const refreshToken = request.cookies.get("normplov-refresh-token");

    if (!refreshToken) {
        console.log("No refresh token found, redirecting to login...");
        return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("Refresh token found, allowing request...");
    return NextResponse.next();
}

// Optional: Add matchers to specify which routes the middleware applies to
export const config = {
    matcher: ["/test"], // Example routes
};
