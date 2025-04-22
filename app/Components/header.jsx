"use client";
import { useState } from "react";
import SerchingComponent from "./serching";

export default function Header({ isOntop }) {
  const [currentNav, setCurrentNav] = useState("ที่พัก");

  const nav = [
    { name: "ที่พัก", path: "/" },
    { name: "เอ็กซ์พีเรียนซ์", path: "/" },
  ];

  const sourceImg = [
    { name: "menu-icon", path: "/img/menu.png" },
    { name: "profile-icon", path: "/img/profileUser.png" },
  ];

  return (
    <div className="py-4 border-b-1 border-[#f2f1f1] bg-white sticky top-0 z-30 mx-24">
      {/* Header (icon nav Acc) */}

      <div className="flex justify-between">
        {/* logo */}
        <img src="/img/airbnb.png" alt="Airbnb logo" className="w-16 h-full" />
        {/* logo */}

        {/* 2components nav */}
        <div>
          <div
            className={
              isOntop
                ? `flex gap-x-[3rem] justify-center items-center duration-500 mb-10`
                : `-my-24 opacity-0 hidden duration-500`
            }
          >
            {nav.map((data, index) => {
              return (
                <p
                  className={`${
                    currentNav === data.name
                      ? "text-black"
                      : "hover:bg-[#d6d6d6]"
                  }
                  text-xl font-bold cursor-pointer hover:border-0 rounded-full hover:text-black text-[#DDDD] px-6 py-2 duration-200`}
                  key={index}
                  onClick={() => {
                    setCurrentNav(data.name);
                  }}
                >
                  {data.name}
                </p>
              );
            })}
          </div>

          <SerchingComponent isOntop={isOntop} currentNav={currentNav} />
        </div>
        {/* 2components nav */}

        {/* customer Account */}
        <div className="flex border border-[#DDDDDD] h-full px-4 py-3 items-center rounded-full hover:shadow-lg cursor-pointer gap-4 duration-200">
          {sourceImg.map((data, index) => {
            return (
              <img
                src={data.path}
                alt={data.name}
                key={index}
                className="h-8"
              />
            );
          })}
        </div>
        {/* customer Account */}
      </div>
    </div>
  );
}
