import { getProductById } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
}

export const GET = async (
  _request: NextRequest,
  {params}: {params: {id: string}}
) => {
  const id = params.id;
  const user = await getProductById(id);
  return NextResponse.json<MyResponse<unknown>>({
    statusCode: 200,
    message: `Success Read Product with Id: ${id}`,
    data: user
  })
}