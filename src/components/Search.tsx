import React from "react";

const Search = () => {
  return (
    <div className="w-full sm:p-0 p-1">
      <div className="mb-[10px] ">
        <p className=" text-white text-[24px] sm:block hidden text-shadow-lg">
          เว็บประกาศ ขาย ให้เช่า คอนโด บ้าน ที่ดิน ยอดนิยม ดีที่สุด ลงประกาศฟรี
        </p>
       
        <div className="py-2 text-white sm:block hidden">
          <ul className="flex">
            <li className=" text-shadow mr-2">
              <a href="">คอนโดหรู</a>
            </li>
            <li className=" text-shadow mr-2">
              <a href="">เช่าคอนโด</a>
            </li>
            <li className=" text-shadow mr-2">
              <a href="">ขายคอนโด</a>
            </li>
            <li className=" text-shadow mr-2">
              <a href="">เช่าบ้าน</a>
            </li>
            <li className=" text-shadow mr-2">
              <a href="">ขายบ้าน</a>
            </li>
            <li className=" text-shadow mr-2">
              <a href="">ขายที่ดิน</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-[20px] bg-white shadow-md p-[20px] ">
        <div className="py-3 overflow-x-auto">
          <ul className="flex sm:justify-center mx-auto whitespace-nowrap">
            <li className="text-center px-[10px] border-r-2">
              <a
                className="loading_page hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                href="https://www.livinginsider.com/searchword/all/Buysell/1/รวมประกาศขาย-เช่า-คอนโด-บ้าน-ที่ดิน.html"
              >
                <i className="icon icon-for-sale"></i> หาซื้อ
              </a>
            </li>
            <li className="text-center px-[10px] border-r-2">
              <a
                className="loading_page hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                href="https://www.livinginsider.com/searchword/all/Rent/1/รวมประกาศขาย-เช่า-คอนโด-บ้าน-ที่ดิน.html"
              >
                <i className="icon icon-for-rent"></i> หาเช่า
              </a>
            </li>
            <li className="text-center px-[10px] border-r-2">
              <a
                className="loading_page hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                href="https://www.livinginsider.com/inside/all/1/living-article.html"
              >
                <i className="icon icon-articles"></i> บทความ
              </a>
            </li>
            <li className="text-center px-[10px] border-r-2">
              <a
                className="hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                target="_blank"
                href="https://insurance.livinginsider.com/"
              >
                <i className="icon icon-shield-square"></i> ประกันภัย
                ให้เช่าหายห่วง
              </a>
            </li>
            <li className="text-center px-[10px] border-r-2">
              <a
                className="loading_page hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                href="https://www.livinginsider.com/nearme/รวมทรัพย์ใกล้คุณ.html"
              >
                <i className="icon icon-near-me"></i> ทรัพย์ใกล้ฉัน
              </a>
            </li>
            <li className="text-center px-[10px] border-r-2">
              <a
                className="loading_page hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                href="https://www.livinginsider.com/living_transit/944/Condo/all/1/ทุกสถานี-BTS.html"
              >
                <i className="icon icon-bts"></i> คอนโดใกล้ BTS
              </a>
            </li>
            <li className="text-center px-[10px] border-r-2">
              <a
                className="loading_page hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                href="https://www.livinginsider.com/living_transit/943/Condo/all/1/ทุกสถานี-MRT.html"
              >
                <i className="icon icon-mrt"></i> คอนโดใกล้ MRT
              </a>
            </li>
            <li className="text-center px-[10px]">
              <a
                className="loading_page hover:bg-[#1FB698] text-[14px] hover:text-white p-3 rounded-[20px]"
                href="https://www.livinginsider.com/searchword/Condo/all/1/รวมประกาศขาย-เช่า-คอนโดใกล้มหาวิทยาลัย.html"
              >
                <i className="icon icon-university"></i> คอนโดใกล้มหาวิทยาลัย
              </a>
            </li>
          </ul>
        </div>
        <div className="flex py-3">
          <input
            type="text"
            className="p-4 w-full rounded-[40px] h-[50px] border mr-3"
            placeholder="กรอกชื่อ ทำเล คอนโด"
          />
          <button className="w-[130px] px-[20px] bg-[#4B8FE2] text-white rounded-[40px]">
            ค้นหา
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
