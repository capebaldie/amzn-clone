import React from "react";
import NavBar from "../components/NavBar";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

const sucess = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <NavBar />
      <main className="bg-gray-100">
        <div className="flex flex-col p-10 bg-white sm:mx-20">
          <div className="flex items-center justify-center space-x-2 mb-5">
            <BsBagCheckFill className="text-green-400" />
            <h1 className="text-3xl">Your order has been confirmed</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium est, itaque id porro quas labore fuga ea vitae?
              Adipisci id suscipit accusantium, qui facilis dignissimos saepe
              deleniti veritatis maxime magni?
            </p>
            <div className="flex flex-col  items-center">
              <button
                onClick={() => {
                  router.push("/");
                }}
                className="btn my-4"
              >
                Return Home
              </button>
              <button
                onClick={() => {
                  router.push("/checkout");
                }}
                className="btn my-4"
              >
                Return to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default sucess;
