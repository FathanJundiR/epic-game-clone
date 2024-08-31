import { getProducts } from "@/db/models/product";
import { MyResponse } from "@/indexType";
import { NextResponse } from "next/server";

export const GET = async () => {
  const products = await getProducts();
  return NextResponse.json<MyResponse<unknown>>(
    {
      statusCode: 200,
      message: "Success Read Products",
      data: products
    },
    {
      status: 200
    }
  )
};