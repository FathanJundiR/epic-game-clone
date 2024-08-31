import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const NavbarComponent = () => {
  const doLogOut = async () => {
    "use server";
    cookies().get("token") && cookies().delete("token");

    redirect("/login");
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Epic</a>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <a className="btn btn-ghost text-md">Discover</a>
        <a className="btn btn-ghost text-md">Browse</a>
        <a className="btn btn-ghost text-md">News</a>
      </div>
      <div className="flex-none gap-2">
        <a className="btn btn-ghost text-md">Wishlist</a>
        <a className="btn btn-ghost text-md">Cart</a>
        <div className="divider lg:divider-horizontal"></div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <form action={doLogOut}>
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
