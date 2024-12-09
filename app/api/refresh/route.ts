// import { serialize } from "cookie";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// // Create a POST request handler
// export async function POST() {
// 	// Get the refresh token from the client-side cookies
// 	const cookieStore = cookies();
// 	const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
// 	const credential = cookieStore.get(cookieName); 

// 	console.log("Credential", credential);
// 	// If the refresh token is not found, return an error message to the client-side
// 	if (!credential) {
// 		return NextResponse.json(
// 			{
// 				message: "Token not found",
// 			},
// 			{
// 				status: 404,
// 			}
// 		);
// 	}

// 	// get the refresh token value
// 	const refreshToken = credential.value;

// 	// if the refresh token is found, make a POST request to the Our API
// 	const response = await fetch(
// 		`${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}auth/refresh`,
// 		{
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ refresh: refreshToken }),
// 		}
// 	);

// 	// If the request fails, return an error message to the client-side
// 	if (!response.ok) {
// 		return NextResponse.json(
// 			{
// 				message: "Failed to refresh access token",
// 			},
// 			{
// 				status: response.status,
// 			}
// 		);
// 	}

// 	// Parse the response body to get the data
// 	const data = await response.json();
// 	const refresh = data?.refresh_token || null;
// 	const access = data?.access_token || null;

// 	// Serialize the refresh token and set it as a cookie with
// 	// (httpOnly, secure, path, and sameSite options) in the response headers to the client-side
// 	const serialized = serialize(cookieName, refresh, {
// 		httpOnly: true,
// 		secure: process.env.NODE_ENV === "production",
// 		path: "/",
// 		sameSite: "lax",
// 	});

// 	// Return the access token to the client-side with the serialized refresh token as a cookie
// 	return NextResponse.json(
// 		{
// 			accessToken: access,
// 		},
// 		{
// 			headers: {
// 				"Set-Cookie": serialized,
// 			},
// 		}
// 	);
// }


import { serialize } from "cookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = cookies();
  const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
  const credential = cookieStore.get(cookieName);

  console.log("Credential from cookie:", credential);

  if (!credential) {
    console.error("No refresh token found in cookies.");
    return NextResponse.json(
      { message: "Token not found" },
      { status: 404 }
    );
  }

  const refreshToken = credential.value;
  console.log("Extracted Refresh Token:", refreshToken);

  try {
    // Make API call to refresh the token
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}auth/refresh`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }), // Correct payload key
      }
    );

    const rawResponse = await response.text();
    console.log("Raw API Response:", rawResponse);

    if (!response.ok) {
      console.error("Failed to refresh token. Status:", response.status);
      return NextResponse.json(
        { message: "Failed to refresh access token" },
        { status: response.status }
      );
    }

    const data = JSON.parse(rawResponse);
    const { access_token, refresh_token } = data?.payload || {};

    if (!access_token || !refresh_token) {
      console.error("Missing tokens in API response.");
      return NextResponse.json(
        { message: "Invalid token response" },
        { status: 500 }
      );
    }

    // Serialize the refresh token
    const serialized = serialize(cookieName, refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
    });

    console.log("Successfully refreshed tokens.");
    return NextResponse.json(
      { accessToken: access_token },
      {
        headers: { "Set-Cookie": serialized },
      }
    );
  } catch (error) {
    console.error("Error refreshing token:", error);
    return NextResponse.json(
      { message: "An error occurred while refreshing the token." },
      { status: 500 }
    );
  }
}

