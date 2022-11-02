import React from "react";
import Image from "next/image";
const Product = ({ title, id, description, image, price, category }) => {
  return (
    <div className="relative flex flex-col m-3 bg-white z-30 p-5 items-center rounded hover:scale-[1.02] ease-in duration-150">
      <p className="italic text-gray-400 mb-3">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <h1 classname="mb-5 font-bold">$ {price}</h1>
      <button className="mt-auto btn">Add To Cart</button>
    </div>
  );
};

export default Product;
