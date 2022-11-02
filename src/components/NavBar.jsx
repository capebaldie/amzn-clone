import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbShoppingCartX } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue h-[3.5rem]">
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <img
            className="w-[120px] h-[80px] object-contain cursor-pointer"
            src="https://png2.cleanpng.com/sh/2ef94c63facddffc465c9cf69968cd9a/L0KzQYm3V8IyN5h1fpH0aYP2gLBuTfFuaat0hp9sb32wcsPojvQudJDsh59uLXPyfb7skvNmNZR6iAZ4bXX1Pbr1lPVzdpJ5gdH3YXywhrFzlf51bZZ3gdDwLUXlRYS7hPM3O2M9TtQBLki7QoOCUcM2OWY4SqMDNkC4RIO3V75xdpg=/kisspng-amazon-com-brand-logo-e-commerce-customer-international-volunteering-5b534dc63286b6.882291351532186054207.png"
            alt="logo"
          />
        </div>
        <div className="hidden sm:flex items-center rounded bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer mx-2">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <BsSearch className="h-9 w-auto p-2" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-4">
          <div className="link">
            <p>Hello amal</p>
            <p>Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className=" relative link flex items-center">
            <span className="absolute top-0 right-5 h-4 w-4 bg-yellow-400 rounded-full text-center font-bold text-black">
              0
            </span>
            <TbShoppingCartX className="h-8 w-auto" />
            <p> Cart</p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4"
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
