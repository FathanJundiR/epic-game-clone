import { getProducts } from "@/db/models/product";

type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async () => {
  const products = await getProducts();
  return Response.json(
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