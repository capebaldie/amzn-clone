import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative ">
      <div className="absolute w-full bg-gradient-to-t h-32 from-gray-100 bottom-0 z-30" />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000}
      >
        <div className="">
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/51O6w2srBuL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61y1VmTqAAL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61HxPf9YLiL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71Gb1RjRdNL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
