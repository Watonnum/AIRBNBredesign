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
        isOntop ? "w-4xl" : "w-96"
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
                className={`px-8 py-0 hover:bg-[#EBEBEB] items-center rounded-full cursor-pointer flex justify-start duration-200 ${
                  index == 0
                    ? "col-span-2"
                    : currentNav == "เอ็กซ์พีเรียนซ์"
                    ? index == 1
                      ? "col-span-2"
                      : "hidden"
                    : ""
                }`}
              >
                <div className="flex flex-col gap-y-0.5">
                  <p className="text-sm text-black">
                    {currentNav == "เอ็กซ์พีเรียนซ์" ? data.name : data.label}
                  </p>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)} // เก็บ ref ของ input แต่ละตัว
                    type="text"
                    placeholder={data.text}
                    className="text-base text-[#6d6c6c] bg-transparent border-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            );
          })}

          <div className="px-4 py-2 flex justify-center items-center hover:bg-[#EBEBEB] rounded-full h-full cursor-pointer col-span-2 duration-200">
            <div className="w-full flex-col flex justify-between gap-y-0.5">
              <p className="text-sm text-black">ใคร</p>
              <p className="text-base text-[#6d6c6c]">เพิ่มผู้เข้าพัก</p>
            </div>
            <div className="text-white bg-[#E31C56] rounded-full h-12 p-4 font-bold flex justify-center items-center">
              <HiMagnifyingGlass size={16} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`
        grid grid-cols-3 justify-center h-12 items-center hover:shadow-lg duration-200 rounded-full`}
        >
          <button
            type="submit"
            className="text-sm text-black items-center flex justify-center rounded-full cursor-pointer"
          >
            ทุกที่
          </button>

          <button
            type="submit"
            className="text-sm text-black items-center flex justify-center rounded-full cursor-pointer"
          >
            ทุกเวลา
          </button>

          <button
            type="submit"
            className="text-sm text-black items-center flex justify-center rounded-full cursor-pointer"
          >
            เพิ่มผู้เข้าพัก
          </button>
        </div>
      )}
    </div>
  );
}
