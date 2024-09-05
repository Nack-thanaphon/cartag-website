import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavigatorBar = () => {
  return (
   <div className="mx-auto">
    <div className="flex justify-center my-4">
      <div className="mr-[60px]">
        <div className="rounded-[20px] w-[200px] bg-white hover:bg-[#1FB698] px-4 py-2   relative">
          <div className="absolute z-[10]   bg-white rounded-full w-[60px]  -top-[10px]  left-0 inset-y-0 h-[60px] shadow-md">
            <img src="" alt="" />
          </div>
          <span className="ml-[80px] mx-auto">คอนโด</span>
        </div>
      </div>
      <div className="mr-[60px]">
        <div className="rounded-[20px] w-[200px] bg-white hover:bg-[#1FB698] px-4 py-2   relative">
          <div className="absolute z-[10]   bg-white rounded-full w-[60px]  -top-[10px]  left-0 inset-y-0 h-[60px] shadow-md">
            <img src="" alt="" />
          </div>
          <span className="ml-[80px] mx-auto">บ้าน</span>
        </div>
      </div>
      <div className="mr-[60px]">
        <div className="rounded-[20px] w-[200px] bg-white hover:bg-[#1FB698] px-4 py-2   relative">
          <div className="absolute z-[10]   bg-white rounded-full w-[60px]   -top-[10px] left-0 inset-y-0 h-[60px] shadow-md">
            <img src="" alt="" />
          </div>
          <span className="ml-[80px] mx-auto">ที่ดิน</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-8 gap-10  mt-10">
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
      <div className="hover:bg-green-200 my-auto py-[20px] rounded-[10px] text-center">
         <FontAwesomeIcon icon={faHeart} />
        <p>สำนักงาน</p>
      </div>
    </div>
   </div>
  );
};

export default NavigatorBar;
