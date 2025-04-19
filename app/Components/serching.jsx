"use client";

import { useRef } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SerchingComponent({ isOntop, currentNav }) {
  const navFilter = [
    { name: "สถานที่", label: "สถานที่", text: "ค้นหาปลายทาง" },
    { name: "วันที่", label: "เช็คอิน", text: "เพิ่มวันที่" },
    { name: "เช็คเอาท์", label: "เช็คเอาท์", text: "เพิ่มวันที่" },
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
        isOntop ? "w-[96rem]" : "w-[60rem]"
      } mx-auto justify-center bg-white duration-500 rounded-full shadow-md border-2 border-b-2 border-[#DDDD]`}
      // {`${} mx`}
    >
      {isOntop ? (
        <div className="grid grid-cols-6">
          {navFilter.map((data, index) => {
            return (
              <div
                key={data.name}
                onClick={() => handleFocus(index)} // ใช้ index เพื่อ focus input ที่เกี่ยวข้อง
                className={`px-[3rem] py-[1.5rem] hover:bg-[#EBEBEB] items-center rounded-full cursor-pointer flex justify-start duration-200 ${
                  index == 0
                    ? "col-span-2"
                    : currentNav == "เอ็กซ์พีเรียนซ์"
                    ? index == 1
                      ? "col-span-2"
                      : "hidden"
                    : ""
                }`}
              >
                <div className="flex flex-col gap-y-2">
                  <p className="text-3xl text-black">
                    {currentNav == "เอ็กซ์พีเรียนซ์" ? data.name : data.label}
                  </p>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)} // เก็บ ref ของ input แต่ละตัว
                    type="text"
                    placeholder={data.text}
                    className="text-4xl text-[#6d6c6c] bg-transparent border-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            );
          })}

          <div className="p-2 pl-8 flex justify-center items-center hover:bg-[#EBEBEB] rounded-full h-full cursor-pointer col-span-2 duration-200">
            <div className="w-full flex-col flex justify-center gap-y-2">
              <p className="text-3xl text-black">ใคร</p>
              <p className="text-4xl text-[#6d6c6c]">เพิ่มผู้เข้าพัก</p>
            </div>
            <div className="text-5xl text-white bg-[#E31C56] rounded-full h-28 px-8 font-bold flex justify-center items-center">
              <HiMagnifyingGlass />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`
        grid grid-cols-3 justify-center items-center hover:shadow-lg duration-200 rounded-full`}
        >
          <button
            type="submit"
            className="text-4xl text-black px-[4rem] py-[2rem] items-center flex justify-center rounded-full cursor-pointer"
          >
            ทุกที่
          </button>

          <button
            type="submit"
            className="text-4xl text-black px-[4rem] py-[2rem] items-center flex justify-center rounded-full cursor-pointer"
          >
            ทุกเวลา
          </button>

          <button
            type="submit"
            className="text-4xl text-black px-[4rem] py-[2rem] items-center flex justify-center rounded-full cursor-pointer"
          >
            เพิ่มผู้เข้าพัก
          </button>
        </div>
      )}
    </div>
  );
}
