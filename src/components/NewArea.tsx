import React from "react";

const BannerNewArea = () => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <p className="text-[18px]">อสังหาฯ ใหม่แนะนำ</p>
        <a
          href="#"
          className="hover:underline underline-dotted leading-loose text-[14px]"
        >
          สถานีทั้งหมด {">"}
        </a>
      </div>
      <div className="grid grid-cols-2  gap-2">
        <div className="rounded-[10px] overflow-hidden sm:h-[250px]">
          <div className="sm:flex ">
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 sm:w-[250px] relative overflow-hidden">
              <div className="bg-[#F4A522] absolute text-[10px] w-full sm:top-7 top-4 -left-[4rem] sm:-left-12 text-center transform -rotate-45 py-1 font-bold text-white">
                {" "}
                คอนโดใหม่
              </div>
              <div className="sm:mt-[80px] sm:p-3 mx-auto text-center text-white pt-10">
                <p className="text-bold sm:text-[20px]">โครงการใหม่</p>
                <p className="text-[14px]">รวมประกาศขายคอนโด</p>
                <p className="text-[14px]">โครงการใหม่ มือหนึ่ง</p>
              </div>
              <div className="sm:absolute  mb-2 inset-x-0 mt-3">
                <img
                  src="image/logo/logo.png"
                  className="w-[40px] mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <img
                src="https://www.livinginsider.com/assets18/images/property_new/Home_new.png"
                className="object-cover w-full h-full hover:scale-105 transform transition duration-300"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="rounded-[10px] overflow-hidden sm:h-[250px]">
          <div className="sm:flex ">
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 sm:w-[250px] relative overflow-hidden">
              <div className="bg-[#F4A522] absolute text-[10px] w-full sm:top-7 top-4 -left-[4rem] sm:-left-12 text-center transform -rotate-45 py-1 font-bold text-white">
                {" "}
                คอนโดใหม่
              </div>
              <div className="sm:mt-[80px] sm:p-3 mx-auto text-center text-white  pt-10">
                <p className="text-bold sm:text-[20px]">โครงการใหม่</p>
                <p className="text-[14px]">รวมประกาศขายคอนโด</p>
                <p className="text-[14px]">โครงการใหม่ มือหนึ่ง</p>
              </div>
              <div className="sm:absolute  mb-2 inset-x-0 mt-3">
                <img
                  src="image/logo/logo.png"
                  className="w-[40px] mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <img
                src="https://www.livinginsider.com/assets18/images/property_new/Home_new.png"
                className="object-cover w-full h-full hover:scale-105 transform transition duration-300"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerNewArea;
