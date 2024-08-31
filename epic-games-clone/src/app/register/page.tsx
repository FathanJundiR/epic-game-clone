import ErrorFlashComponent from "@/components/ErrorFlashComponent";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const RegisterPage = () => {
  const signUpHandler = async (formData: FormData) => {
    "use server";

    type MyResponse<T> = {
      statusCode: number;
      message?: string;
      data?: T;
      error?: string;
    };

    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson: MyResponse<unknown> = await response.json();

    if (!response.ok) {
      let message = responseJson.error ?? "REGISTER_ERROR";
      console.log(responseJson.error);

      return redirect(`/register?error=${message}`);
    }

    return redirect("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center p-5">
        <div className="bg-[#202020] w-[445px] h-[800px] my-10 py-5 px-14">
          <div className=" flex  flex-col items-center h-full ">
            <div className="my-10">LOGO EPiC</div>
            <div className="font-bold">Sign Up</div>
            <Suspense>
              <ErrorFlashComponent></ErrorFlashComponent>
            </Suspense>
            <form action={signUpHandler}>
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
                className="input input-bordered w-full  bg-[#202020] mt-6"
              />
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                className="input input-bordered w-full  bg-[#202020] mt-6"
              />
              <input
                type="text"
                placeholder="Email Address"
                id="email"
                name="email"
                className="input input-bordered w-full  bg-[#202020] mt-6"
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="input input-bordered w-full bg-[#202020] mt-6"
              />
              <button className="flex w-full mt-10 bg-[#116cc2] justify-center py-6">
                Sign Up
              </button>
            </form>
            <div className="flex w-full flex-col border-opacity-50">
              <div className="divider my-14">or sign Up with</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
