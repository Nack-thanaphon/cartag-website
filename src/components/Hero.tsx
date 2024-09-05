import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <>
      <div className="relative sm:h-[650px] h-[350px] overflow-hidden">
        <div className="w-screen">
          <video
            autoPlay
            loop
            id="video-bg"
            className="video-background fade-in  h-[450px] w-full object-cover"
            muted
            playsInline
          >
            <source
              src="https://www.livinginsider.com/upload/background/n_1920_406.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="container sm:block hidden absolute inset-x-0  top-[300px] mx-auto">
          <Search />
        </div>
        <div className="container absolute inset-x-0 sm:hidden block  top-[80px] mx-auto">
          <div className="flex p-3">
            <input
              type="text"
              className="p-4 w-full rounded-[40px] h-[30px] border "
              placeholder="กรอกชื่อ ทำเล คอนโด"
            />
           
          </div>
          <p className=" text-white sm:text-[24px] top-0 text-[14px] sm:hidden block text-center text-shadow-lg">
            เว็บประกาศ ขาย ให้เช่า คอนโด บ้าน
            <br />
            ที่ดิน ยอดนิยม ดีที่สุด ลงประกาศฟรี
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
