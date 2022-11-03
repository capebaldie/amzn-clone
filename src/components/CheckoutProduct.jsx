import Image from "next/legacy/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  title,
  id,
  description,
  image,
  price,
  category,
}) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const products = { title, id, description, image, price, category };

    //* sending the items as action to redux store
    dispatch(addToBasket(products));
  };

  const removeItemsFromCart = () => {
    //* removing items from redux based on id
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 bg-white p-5 -m-5">
      <Image
        className="object-contain"
        src={image}
        height={200}
        width={200}
        alt="aba"
      />
      <div className="col-span-3 mx-5">
        <p className="font-bold">{title}</p>
        <p className="line-clamp-3 sm:line-clamp-5 text-xs sm:text-sm my-2">
          {description}
        </p>
        <p className="font-bold">$ {price}</p>
        <div className="sm:hidden flex flex-col space-y-4 mt-2 justify-self-end">
          <button onClick={addItemToCart} className="btn">
            Add
          </button>
          <button onClick={removeItemsFromCart} className="btn">
            Remove
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col space-y-4 my-auto justify-self-end">
        <button onClick={addItemToCart} className="btn">
          Add
        </button>
        <button onClick={removeItemsFromCart} className="btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
