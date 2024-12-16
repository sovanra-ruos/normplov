import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    console.log("Middleware triggered:", request.url);

    // if (url.startsWith("/test")) {
    //     if (!refreshToken) {
    //       console.log("No refresh token found, redirecting to login...");
    //       return NextResponse.redirect(new URL("/login", request.url));
    //     }
    //     console.log("Refresh token found, allowing access to /test/anything...");
    //   }

    //   // Allow the request if the token exists
    //   return NextResponse.next();

    const refreshToken = request.cookies.get("normplov-refresh-token");


    if (!refreshToken) {
        console.log("No refresh token found, redirecting to login...");
        return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("Refresh token found, allowing request...");
    const url = request.nextUrl.pathname;

    // if (url.startsWith("/test")) {
    //     if (!refreshToken) {
    //       console.log("No refresh token found, redirecting to login...");
    //       return NextResponse.redirect(new URL("/login", request.url));
    //     }
    //     console.log("Refresh token found, allowing access to /test/anything...");
    //   }

    // Allow the request to proceed
    return NextResponse.next();
}


export const config = {
    matcher: ["/test","/profile-about-user","/profile-quiz-history","/profile-draft"] // Example routes
};
