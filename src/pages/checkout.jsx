import Image from "next/legacy/image";
import React from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { checkoutFromBasket } from "../slices/basketSlice";
import { useRouter } from "next/router";

const checkout = () => {
  const items = useSelector(selectItems);

  const total = useSelector(selectTotal);

  const { data: session } = useSession();

  const dispatch = useDispatch();

  const router = useRouter();

  const checkoutFromCart = () => {
    dispatch(checkoutFromBasket());
    router.push("/sucess");
  };

  const signInToBuy = () => {
    alert("sign in to checkout");
  };
  return (
    <>
      <NavBar />
      <main className="bg-gray-100">
        <div className="m-3">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt="bla"
          />

          <div className="flex flex-col p-5 space-y-5">
            <h1 className="text-3xl pb-4 font-bold">
              {items.length === 0
                ? `Your Shopping Cart is empty`
                : `Continue Shopping`}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                title={item.title}
                id={item.id}
                description={item.description}
                image={item.image}
                price={item.price}
                category={item.category}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 ">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold">${total}</span>
              </h2>
              {session ? (
                <button onClick={checkoutFromCart} className="btn mt-2">
                  Proceed to Checkout
                </button>
              ) : (
                <button onClick={signInToBuy} className="btngray mt-2">
                  Proceed to Checkout
                </button>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default checkout;
