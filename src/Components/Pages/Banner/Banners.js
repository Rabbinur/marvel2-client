import React from "react";
import Slider from "react-slick";
import "../Banner/BannerItems.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banners = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
            alt=""
            className="w-full h-96 "
          />
          <div className="absolute left-24  top-1/4">
            <h1 className="text-6xl font-bold text-black">
              Spider Man 2
              <br />
              Game of the year
            </h1>
          </div>
          <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-2/5 mt-24 top-2/4">
            <button className="btn btn-warning mr-5">Learn More</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1590845947670-c009801ffa74"
            alt=""
            className="w-full h-96 "
          />
          <div className="absolute left-24  top-1/4">
            <h1 className="text-6xl font-bold text-black">
              Spider Man 2
              <br />
              Game of the year
            </h1>
          </div>
          <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-2/5 mt-24 top-2/4">
            <button className="btn btn-primary mr-5">Learn More</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt=""
            className="w-full h-96 "
          />
          <div className="absolute left-24  top-1/4">
            <h1 className="text-6xl font-bold text-white">
              Spider Man 2
              <br />
              Game of the year
            </h1>
          </div>
          <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-2/5 mt-24 top-2/4">
            <button className="btn btn-warning mr-5">Learn More</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae"
            alt=""
            className="w-full h-96 "
          />
          <div className="absolute left-24  top-1/4">
            <h1 className="text-6xl font-bold text-white">
              Spider Man 2
              <br />
              Game of the year
            </h1>
          </div>
          <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-2/5 mt-24 top-2/4">
            <button className="btn btn-warning mr-5">Learn More</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1610145838179-079ff634b609"
            alt=""
            className="w-full h-96 "
          />
          <div className="absolute left-24  top-1/4">
            <h1 className="text-6xl font-bold text-white">
              Spider Man 2
              <br />
              Game of the year
            </h1>
          </div>
          <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-2/5 mt-24 top-2/4">
            <button className="btn btn-warning mr-5">Learn More</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banners;
