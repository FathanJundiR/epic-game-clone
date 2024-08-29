import { getWishlists } from "@/db/models/wishlist";


type MyResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async () => {
  const wishlists = await getWishlists();
  return Response.json(
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