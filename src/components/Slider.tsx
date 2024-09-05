"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <p className="text-[18px]">ทำเลยอดนิยม</p>
        <a
          href="#"
          className="hover:underline underline-dotted leading-loose text-[14px]"
        >
          ทำเลอื่นๆ {">"}
        </a>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-2 ">
            <div className=" rounded-[10px]  col-span-2 overflow-hidden ">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-1">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-1">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-span-2">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-2 ">
            <div className="overflow-hidden rounded-[10px]  col-span-2 overflow-hidden ">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-1">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-1">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-span-2">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-2 ">
            <div className="overflow-hidden rounded-[10px]  col-span-2 overflow-hidden ">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-1">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-1">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
            <div className="overflow-hidden rounded-[10px]  col-span-2">
              <img
                src="https://www.livinginsider.com/upload/background/77232_78751.png"
                className="hover:scale-105 transform transition duration-300 w-full h-full object-cover rounded-[10px]"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
