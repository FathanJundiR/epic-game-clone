import { createUser, getUsers } from "@/db/models/user";
import { MyResponse } from "@/indexType";
import { NextResponse } from "next/server";
import { z } from "zod";

const userInputSchema = z
  .object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(5)
  });

export const GET = async () => {
  const users = await getUsers();
  return NextResponse.json<MyResponse<unknown>>(
    {
      statusCode: 200,
      message: "Success Read Users",
      data: users
    },
    {
      status: 200
    }
  )
};

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    //hapus
    console.log(data);
    
    const parsedData = userInputSchema.safeParse(data);
    if (!parsedData.success) {
      throw parsedData.error;
    }
    const user = await createUser(parsedData.data);

    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 201,
        message: "Success Register User",
        data:user
      },
      {
        status: 201
      }
    )
  } catch (error) {
    //hapus
    console.log(error);
    
    if (error instanceof z.ZodError) {
      console.log(error);
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;
      return NextResponse.json<MyResponse<never>>(
        {
          statusCode: 400,
          error: `${errorPath} - ${errorMessage}`
        },
        {
          status: 400
        }
      );
    }

    return NextResponse.json<MyResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      {
        status: 500
      }
    )
  }
}