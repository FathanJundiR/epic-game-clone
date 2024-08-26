export default function SingIn() {
  return (
    <>
      <div className="flex flex-col items-center p-5">
        <div className="bg-[#202020] w-[445px] h-[800px] my-10 py-5 px-14">
          <div className=" flex  flex-col items-center h-full ">
            <div className="my-10">LOGO EPiC</div>
            <div className="font-bold">Sign In</div>
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full  bg-[#202020] mt-6"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full bg-[#202020] mt-6"
            />
            <button className="flex w-full mt-10 bg-[#116cc2] justify-center py-6">
              Sign In
            </button>
            <div className="flex w-full flex-col border-opacity-50">
              <div className="divider my-14">or sign in with</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
