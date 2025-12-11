import logo from "../assets/nav_logo.png";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineFire } from "react-icons/ai";
import {
  GiBunkBeds,
  GiFamilyHouse,
  GiSpookyHouse,
  GiWoodCabin,
} from "react-icons/gi";
import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlineBedroomParent, MdOutlinePool } from "react-icons/md";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Nav = () => {
  let [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-slate-100">
      <div className="fixed top-0 bg-slate-100 w-[100vw] min-h-[80px] px-[20px] flex items-center justify-between md:px-[40px] z-10">
        <div>
          <img src={logo} alt="nav_logo" className="w-[130px] cursor-pointer" />
        </div>
        <div className="w-[100%] flex items-center justify-center h-[60px]">
          <div className="w-[80%] relative md:block hidden shadow-2xl rounded-3xl">
            <input
              type="text"
              className="w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px]"
              placeholder="Any Where | Any Location | Any City"
            />
            <button className="absolute p-[8px] rounded-[50px] bg-[#dd3434] right-[0.7%] top-[5px]">
              <CiSearch className="w-[20px] h-[20px] text-[white]" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[10px] relative">
          <span className="text-[16px] cursor-pointer rounded-[50px] hover:bg-[#e0e0e0] px-[8px] py-[7px] md:block hidden text-nowrap font-semibold">
            Become a host
          </span>
          <button className="p-[10px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg bg-gray-300">
            <span>
              <TbWorld className="w-[18px] h-[18px] " />
            </span>
          </button>
          <button
            className="p-[10px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg bg-gray-300"
            onClick={() => setShowPopup((prev) => !prev)}
          >
            <span>
              <RxHamburgerMenu className="w-[18px] h-[18px]" />
            </span>
          </button>
          {showPopup && (
            <div className="w-[260px] h-[240px] absolute bg-white top-[130%] right-[3%] border-[1px] border-[#aaa9a9] z-10 rounded-lg p-2">
              <ul className="w-[100%] h-[100%] text-[14px] flex items-start justify-around flex-col py-[0px]">
                <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer flex items-center gap-2">
                  <FaRegCircleQuestion /> Help Centre
                </li>
                <div className="w-[80%] h-[1px] bg-[#c1c0c0] ml-4"></div>
                <li className="w-[100%] px-[15px] hover:bg-[#f4f3f3] cursor-pointer mt-1 font-semibold">
                  Become a host
                </li>
                <span className="w-[100%] px-[15px] hover:bg-[#f4f3f3] cursor-pointer text-gray-500 text-sm">
                  It's easy to start hosting & earn extra income.
                </span>
                <div className="w-[80%] h-[2px] bg-[#c1c0c0] ml-4"></div>
                <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  Find a co-host
                </li>
                <div className="w-[80%] h-[1px] bg-[#c1c0c0] ml-4"></div>
                <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  Log in or Sign up
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-[100vw] h-[85px] bg-slate-100 flex items-center justify-start cursor-pointer gap-[40px] overflow-auto md:justify-center px-[15px] border-b-[1px] border-[#dcdcdc] mt-20">
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
          <AiOutlineFire className="w-[30px] h-[30px] text-black" />
          <h3>Trending</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
          <GiFamilyHouse className="w-[30px] h-[30px] text-black" />
          <h3>Villas</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap">
          <GiSpookyHouse className="w-[30px] h-[30px] text-black" />
          <h3>Farm House</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap">
          <MdOutlinePool className="w-[30px] h-[30px] text-black" />
          <h3>Pool House</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
          <MdOutlineBedroomParent className="w-[30px] h-[30px] text-black" />
          <h3>Rooms</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
          <PiBuildingOffice className="w-[30px] h-[30px] text-black" />
          <h3>Flats</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
          <GiBunkBeds className="w-[30px] h-[30px] text-black" />
          <h3>PG</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
          <GiWoodCabin className="w-[30px] h-[30px] text-black" />
          <h3>Cottage</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;
