import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({ title, id, description, image, price, category }) => {
  //* this is used to dispatch items to redux store
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const products = { title, id, description, image, price, category };

    //* sending the items as action to redux store
    dispatch(addToBasket(products));
  };
  return (
    <div className="relative flex flex-col m-3 bg-white z-30 p-5 items-center rounded hover:scale-[1.02] ease-in duration-150">
      <p className="italic text-gray-400 mb-3">{category}</p>
      <img className="w-[200px] h-auto object-contain" src={image} alt="nlaa" />
      <h4 className="my-3">{title}</h4>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <h1 className="mb-5 font-extrabold">$ {price}</h1>
      <button onClick={addItemToCart} className="mt-auto btn font-bold">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
