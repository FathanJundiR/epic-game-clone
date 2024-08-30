import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export const middleware = async (request: NextRequest) => {
  //ganti
  //hapus
  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("favicon.ico")
  ) {
    console.log(request.method, request.url);
  }

  if (request.url.includes("/api")) {
    //hapus
    console.log('API', request.method, request.url);

    const cookiesStore = cookies();
    const token = cookiesStore.get("token");
    //hapus
    console.log("token dari cookiesStores", token);

    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized"
      })
    }

    const tokenData = await verifyToken<{
      id: string;
      email: string;
    }>(
      token.value
    );

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", tokenData.id);
    requestHeaders.set("x-user-email", tokenData.email);

    return NextResponse.next({
      headers: requestHeaders
    });
  }
  //hapus
  console.log(request.method, request.url);
  return NextResponse.next();
};