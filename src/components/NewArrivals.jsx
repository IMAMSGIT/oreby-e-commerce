import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from "./Container";
import Product from "./Product";
import Title from "./Title";

const NewArrivals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !w-[34px] !h-[34px] lg:!h-[64px] lg:!w-[64px]`}
        style={{
          ...style,
          alignItems: "center",
          background: "#979797",
          borderRadius: "50%",
          display: "block",
          display: "flex",
          height: "64px",
          justifyContent: "center",
          left: "0%",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "64px",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-xl text-white" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !w-[34px] !h-[34px] lg:!h-[64px] lg:!w-[64px]`}
        style={{
          ...style,
          alignItems: "center",
          background: "#979797",
          borderRadius: "50%",
          display: "block",
          height: "64px",
          justifyContent: "center",
          right: "0%",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "64px",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <FaArrowRight className="text-xl text-white" />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <section className="mt-[123px] mb-[73px]">
      <Container>
        <Title className="mb-12" heading="New Arrivals"></Title>
        <Slider {...settings}>
          <Product pImage="images/product1.png" isNew={true} />
          <Product pImage="images/product2.png" isNew={true} />
          <Product pImage="images/product3.png" isNew={true} />
          <Product pImage="images/product4.png" isNew={true} />
        </Slider>
        {/* <Flex className="flex-wrap justify-between gap-10 xl:flex-nowrap">
          <Product pImage="images/product1.png" isNew={false} />
          <Product pImage="images/product1.png" isNew={true} />
          <Product pImage="images/product1.png" isNew={false} />
        </Flex> */}
      </Container>
    </section>
  );
};

export default NewArrivals;
