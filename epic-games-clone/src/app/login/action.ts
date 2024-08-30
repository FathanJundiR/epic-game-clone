"use server";

import { getUserByEmail } from "@/db/models/user";
import { compare } from "@/db/utils/bcryptHash";
import { BASE_URL } from "@/db/utils/constant";
import { signToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod"

export const doSignIn = async (formData: FormData) => {
  const loginInputSchema = z.object({
    email: z.string().email(),
    password: z.string()
  });

  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = loginInputSchema.safeParse({
    email,
    password
  });

  if (!parsedData.success) {
    const errorPath = parsedData.error.issues[0].path[0];
    const errorMessage = parsedData.error.issues[0].message;
    const errorFinalMessage = `${errorPath} - ${errorMessage}`;

    return redirect(`${BASE_URL}/login?error=${errorFinalMessage}`);
  }

  const user = await getUserByEmail(parsedData.data.email);
  if (!user || !compare(parsedData.data.password, user.password)) {
    return redirect(`${BASE_URL}/login?error=INVALID_CREDENTIALS`);
  }

  const payload = {
    id: user._id,
    email: user.email
  }

  const token = signToken(payload);

  cookies().set("token", token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 100 * 60 * 60),
    sameSite: "strict"
  });

  return redirect(`${BASE_URL}/`)
}