import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
const ProductFeed = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setproducts(res.data);
    });
  }, []);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 md:-mt-52">
      {products
        .slice(0, 2)
        .map(({ title, id, description, image, price, category }) => {
          return (
            <Product
              key={id}
              title={title}
              id={id}
              description={description}
              image={image}
              price={price}
              category={category}
            />
          );
        })}
      <div className=" sm:hidden cursor-pointer">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt="product"
        />
      </div>
      {products
        .slice(2, 20)
        .map(({ title, id, description, image, price, category }) => {
          return (
            <Product
              key={id}
              title={title}
              id={id}
              description={description}
              image={image}
              price={price}
              category={category}
            />
          );
        })}
    </div>
  );
};

export default ProductFeed;
