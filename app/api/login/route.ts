// import { serialize } from "cookie";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function POST(req: NextRequest) {
// 	// Parse the request body to get the email and password
// 	const body = await req.json();
// 	const { email, password } = body;

//     console.log("Email: ", email);
//     console.log("Password: ", password);

// 	// Make a POST request to the Our API
// 	const response = await fetch(
// 		`${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}auth/login`,
// 		{
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ email, password }),
// 		}
// 	);

// 	// If the request fails, return an error message to the client-side
//     if (!response.ok) {
//         return NextResponse.json(
//             {
//                 message: "Failed to login",
//             },
//             {
//                 status: response.status,
//             }
//         );
//     }

//      // If the request is successful, parse the response body to get the data
//      const data = await response.json();
//      const user = data?.user || null;
//      const accessToken = data?.access_token || null;
//      const refreshToken = data?.refresh_token || null;

//      // Serialize the refresh token and set it as a cookie with
//     // (httpOnly, secure, path, and sameSite options) in the response headers to the client-side
//     const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
//     const serialized = serialize(cookieName, refreshToken, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         path: "/",
//         sameSite: "lax", // or "strict" or "none"
//     });

//         // Return the access token and user data to the client-side
//     // with the serialized refresh token as a cookie
//     return NextResponse.json({
//         accessToken: accessToken,
//         user: user,
//      }, {
//         status: response.status,
//         headers: {
//             "Set-Cookie": serialized,
//         },
//     });
// }


import { serialize } from "cookie";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get the email and password
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    console.log("Email: ", email);
    console.log("Password: ", password);

    // Make a POST request to the API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    // If the request fails, return an error message
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("API Error:", errorResponse);
      return NextResponse.json(
        {
          message: "Failed to login",
          error: errorResponse.message || "An unknown error occurred",
        },
        {
          status: response.status,
        }
      );
    }

    // Parse the successful response
    const data = await response.json();
    const { access_token, refresh_token, ...user } = data.payload;

    if (!access_token || !refresh_token) {
      return NextResponse.json(
        { message: "Invalid response from the server" },
        { status: 500 }
      );
    }

    console.log("Login successful. User:", user);

    // Serialize the refresh token with appropriate options
    const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
    const serialized = serialize(cookieName, refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Example: 7 days expiration
    });

    // Send the access token and user data in the response, with the refresh token as a cookie
    return NextResponse.json(
      {
        accessToken: access_token,
        user,
        message: data.message,
      },
      {
        status: response.status,
        headers: {
          "Set-Cookie": serialized,
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the login request" },
      { status: 500 }
    );
  }
}
