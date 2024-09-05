import {
  faBell,
  faHeart,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed top-0 z-40 py-[8px] transition-colors duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#1FB698] to-[#0395F4]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between p-3">
          <div className="my-auto">
            <img src="image/logo/logo.png" className="w-[150px]" alt="" />
          </div>
          <div>
            <div className="">
              <ul className=" hidden sm:flex justify-end text-white ">
                <li className="mb-2 text-[14px]">
                  <button>เข้าสู่ระบบ</button>
                </li>
                <span className="mx-2">/</span>
                <li className="mb-2 text-[14px]">
                  <button>สมัครสมาชิก</button>
                </li>
                <span className="mx-2">|</span>
                <li className="mb-2 px-3 text-[14px]">
                  <FontAwesomeIcon icon={faHome} />
                </li>
                <li className="mb-2 px-3 text-[14px]">
                  <FontAwesomeIcon icon={faHeart} />
                </li>
                <li className="mb-2 px-3 text-[14px]">
                  <FontAwesomeIcon icon={faBell} />
                </li>
                <span className="mx-2">|</span>
                <li className="mb-2 px-3 text-[14px]">
                  <button className="">
                    <img src="image/icon/flag_th.jpg" alt="" />
                  </button>
                </li>
                <li className="mb-2 text-[14px]">
                  <button>คู่มือการใช้งาน</button>
                </li>
                <span className="mx-2">|</span>
                <li className="mb-2 text-[14px]">
                  <button>ติดต่อเรา</button>
                </li>
              </ul>
              <ul className="sm:hidden flex justify-center my-auto">
                <li className="mr-2 text-[14px]">
                  <div className="my-auto">
                    <img src="https://www.livinginsider.com/assets18/images/no-user.png" className="w-[30px] h-[30px]" alt="" />
                  </div>
                </li>
                <li className="text-[14px] my-auto">
                  <div className="my-auto">
                    <img src="image/icon/flag_th.jpg"className="my-auto" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-x-auto hidden sm:block">
              <ul className="flex justify-between whitespace-nowrap">
                <li className="mr-2 px-3 py-1 my-auto text-[14px] text-white hover:text-[#0395F4] hover:bg-white rounded-[20px]">
                  หน้าหลัก
                </li>
                <li className="mr-2 px-3 py-1 my-auto text-[14px] text-white hover:text-[#0395F4] hover:bg-white rounded-[20px]">
                  ค้นหาด่วน
                </li>
                <li className="mr-2 px-3 py-1 my-auto text-[14px] text-white hover:text-[#0395F4] hover:bg-white rounded-[20px]">
                  รายการขาย เช่า
                </li>
                <li className="mr-2 px-3 py-1 my-auto text-[14px] text-white hover:text-[#0395F4] hover:bg-white rounded-[20px]">
                  ประกาศแนะนำ
                </li>
                <li className="mr-2 px-3 py-1 my-auto text-[14px] text-white hover:text-[#0395F4] hover:bg-white rounded-[20px]">
                  ขายราคาทุน
                </li>
                <li className="mr-2 px-3 py-1 my-auto text-[14px] text-white hover:text-[#0395F4] hover:bg-white rounded-[20px]">
                  AgentClub
                </li>
                <li className="mr-2 px-3 py-1 my-auto text-[14px] text-white hover:text-[#0395F4] hover:bg-white rounded-[20px]">
                  Looking
                </li>
                <li className="mr-2 px-3 py-2 text-[14px] text-white bg-orange-400 rounded-[20px]">
                  <FontAwesomeIcon icon={faPlus} className="mr-3" />
                  ลงประกาศขาย
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
