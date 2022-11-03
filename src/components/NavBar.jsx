import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbShoppingCartX } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const NavBar = () => {
  const { data: session } = useSession();

  //* products in the redux store is now passed in items var

  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue h-[3.5rem]">
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <img
            onClick={() => {
              router.push("/");
            }}
            className="w-[120px] h-[80px] object-contain cursor-pointer pt-2 pl-2"
            src="https://links.papareact.com/f90"
            alt="logo"
          />
        </div>
        <div className="hidden sm:flex items-center rounded bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer mx-2">
          <input
            className="p-3 h-full w-6 flex-grow flex-shrink rounded-l focus:outline-none px-4"
            type="text"
          />
          <BsSearch className="h-9 w-auto p-2" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-2 sm:mx-4">
          {/* if there is a user sign out else sign in */}
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello ${session.user.name}` : `Sign In`}</p>
            <p className="font-bold">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div
            onClick={() => {
              router.push("/checkout");
            }}
            className=" relative link flex items-center"
          >
            <span className="absolute top-0 right-5 h-4 w-4 bg-yellow-400 rounded-full text-center font-bold text-black">
              {items.length}
            </span>
            <TbShoppingCartX className="h-8 w-auto" />
            <p className="font-bold"> Cart</p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
        <input
          className="p-3 h-full w-6 flex-grow flex-shrink focus:outline-none px-4"
          type="text"
        />
        <BsSearch className="h-9 w-auto p-2" />
      </div>
      {/* down nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <GiHamburgerMenu className="w-auto h-4" />
        <p className="link">All</p>
        <p className="link">Best Sellers</p>
        <p className="link">Mobiles</p>
        <p className="link">Today's deals</p>
        <p className="link hidden md:inline">Electronics</p>
        <p className="link hidden md:inline">Customer Service</p>
        <p className="link hidden md:inline">Fashion</p>
        <p className="link hidden md:inline">Books</p>
      </div>
    </header>
  );
};

export default NavBar;
