import { getWishlists } from "@/db/models/wishlist";
import { MyResponse } from "@/indexType";
import { NextResponse } from "next/server";

export const GET = async () => {
  const wishlists = await getWishlists();
  return NextResponse.json<MyResponse<unknown>>(
    {
      statusCode: 200,
      message: "Success Read Wishlists",
      data: wishlists
    },
    {
      status: 200
    }
  )
};