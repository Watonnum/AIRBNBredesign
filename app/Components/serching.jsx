"use client";

import { useRef } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SerchingComponent({ isOntop }) {
  const navFilter = [
    { name: "item-1", label: "สถานที่", text: "ค้นหาปลายทาง" },
    { name: "item-2", label: "เช็คอิน", text: "เพิ่มวันที่" },
    { name: "item-3", label: "เช็คเอาท์", text: "เพิ่มวันที่" },
  ];

  // สร้าง array ของ refs สำหรับ input แต่ละตัว
  const inputRefs = useRef([]);

  const handleFocus = (index) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }
  };

  return (
    <div
      className={`${
        isOntop ? "w-[70rem]" : "w-[38rem]"
      } mx-auto my-[3rem] justify-center bg-white duration-500 rounded-full shadow-md border-2 border-b-2 border-[#DDDD]`}
      // {`${} mx`}
    >
      {isOntop ? (
        <div className="grid grid-cols-6">
          {navFilter.map((data, index) => {
            return (
              <div
                key={data.name}
                onClick={() => handleFocus(index)} // ใช้ index เพื่อ focus input ที่เกี่ยวข้อง
                className={`px-[3rem] py-[1rem] hover:bg-[#EBEBEB] items-center rounded-full cursor-pointer flex justify-start duration-200 ${
                  index == 0 ? "col-span-2" : ""
                }`}
              >
                <div>
                  <p className=" font-bold text-black">{data.label}</p>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)} // เก็บ ref ของ input แต่ละตัว
                    type="text"
                    placeholder={data.text}
                    className="text-[1.5rem] text-[#6d6c6c] font-bold bg-transparent border-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            );
          })}

          <div className="p-2 pl-8 flex hover:bg-[#EBEBEB] rounded-full h-full cursor-pointer col-span-2 duration-200">
            <div className="w-full flex-col flex justify-center">
              <p className=" font-bold text-black">ใคร</p>
              <p className="text-[1.5rem] text-[#6d6c6c] font-bold">
                เพิ่มผู้เข้าพัก
              </p>
            </div>
            <div className="text-[3rem] text-white bg-[#E31C56] rounded-full p-4 flex justify-center items-center">
              <HiMagnifyingGlass />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`
        grid grid-cols-3`}
        >
          <div
            className={`px-[3rem] py-[1rem] hover:bg-[#EBEBEB] items-center rounded-full cursor-pointer `}
          >
            <div>
              <p className=" font-bold text-black">สถานที่</p>
            </div>
          </div>
          <div
            className={`px-[3rem] py-[1rem] hover:bg-[#EBEBEB] items-center rounded-full cursor-pointer `}
          >
            <div>
              <p className=" font-bold text-black">สถานที่</p>
            </div>
          </div>
          <div
            className={`px-[3rem] py-[1rem] hover:bg-[#EBEBEB] items-center rounded-full cursor-pointer `}
          >
            <div>
              <p className=" font-bold text-black">สถานที่</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
