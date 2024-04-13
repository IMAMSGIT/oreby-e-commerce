import React, { useState } from "react";
import Image from "./Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  let [active, setActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        appendDots: (dots) => (
          <div
            style={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              padding: "3px",
            }}
          >
            <ul
              style={{
                margin: "0px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "2%",
              }}
            >
              {" "}
              {dots}{" "}
            </ul>
          </div>
        ),
        customPaging: (i) => (
          <div
            style={
              i === active
                ? {
                    fontSize: "16px",
                    fontWeight: "regular",
                    width: "20px",
                    padding: "5px 0",
                    color: "#262626",
                    borderRight: "2px #262626 solid",
                  }
                : {
                    width: "20px",
                    padding: "5px 0",
                    fontSize: 0,
                    color: "#262626",
                    borderRight: "2px #ffffff solid",
                  }
            }
          >
            0{i + 1}
          </div>
        ),
      },
    ],
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "9%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === active
            ? {
                fontSize: "10px",
                fontWeight: "regular",
                width: "20px",
                padding: "5px 0",
                color: "#262626",
                borderRight: "2px #262626 solid",
              }
            : {
                width: "20px",
                padding: "5px 0",
                fontSize: 0,
                color: "#262626",
                borderRight: "2px #ffffff solid",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image source="images/banner.png" alt="Banner"></Image>
        </div>
        <div>
          <Image source="images/banner.png" alt="Banner"></Image>
        </div>
        <div>
          <Image source="images/banner.png" alt="Banner"></Image>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
