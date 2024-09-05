"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <p className="text-[18px]">อสังหาฯ ใกล้รถไฟฟ้า</p>
        <a
          href="#"
          className="hover:underline underline-dotted leading-loose text-[14px]"
        >
          สถานีทั้งหมด {">"}
        </a>
      </div>
      <div className="flex gap-2 overflow-x-auto  sm:mx-[40px]">
        <div className="text-center p-3">
          <img src="https://test.livinginsider.com/upload/background/MRT_yellow.png" className="p-3" alt="" />
          <p className="text-nowrap text-[14px] text-bold">MRT บางขวาง</p>
        </div>
        <div className="text-center p-3">
          <img src="https://test.livinginsider.com/upload/background/MRT_yellow.png" className="p-3" alt="" />
          <p className="text-nowrap text-[14px] text-bold">MRT บางขวาง</p>
        </div>
        <div className="text-center p-3">
          <img src="https://test.livinginsider.com/upload/background/MRT_yellow.png" className="p-3" alt="" />
          <p className="text-nowrap text-[14px] text-bold">MRT บางขวาง</p>
        </div>
        <div className="text-center p-3">
          <img src="https://test.livinginsider.com/upload/background/MRT_yellow.png" className="p-3" alt="" />
          <p className="text-nowrap text-[14px] text-bold">MRT บางขวาง</p>
        </div>
        <div className="text-center p-3">
          <img src="https://test.livinginsider.com/upload/background/MRT_yellow.png" className="p-3" alt="" />
          <p className="text-nowrap text-[14px] text-bold">MRT บางขวาง</p>
        </div>
        <div className="text-center p-3">
          <img src="https://test.livinginsider.com/upload/background/MRT_yellow.png" className="p-3" alt="" />
          <p className="text-nowrap text-[14px] text-bold">MRT บางขวาง</p>
        </div>
        <div className="text-center p-3">
          <img src="https://test.livinginsider.com/upload/background/MRT_yellow.png" className="p-3" alt="" />
          <p className="text-nowrap text-[14px] text-bold">MRT บางขวาง</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
