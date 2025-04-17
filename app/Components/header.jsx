"use client";
import { useState } from "react";
import SerchingComponent from "./serching";

export default function Header({ isOntop }) {
  const [currentNav, setCurrentNav] = useState("เอ็กซ์พีเรียนซ์");

  const nav = [
    { name: "ที่พัก", path: "/", current: true },
    { name: "เอ็กซ์พีเรียนซ์", path: "/explore", current: false },
  ];

  const sourceImg = [
    { name: "menu-icon", path: "/img/menu.png" },
    { name: "profile-icon", path: "/img/profileUser.png" },
  ];

  console.log(currentNav);
  return (
    <div className="py-10 px-24 border-b-2 border-[#DDDDDD] bg-white sticky top-0 z-30">
      {/* Header (icon nav Acc) */}

      <div className="flex justify-between h-fit">
        {/* logo */}
        <img
          src="/img/airbnb.png"
          alt="Airbnb logo"
          className="h-full items-center"
        />
        {/* logo */}

        {/* 2components nav */}
        <div>
          <div
            className={
              isOntop
                ? `flex gap-x-[3rem] justify-center items-center duration-500`
                : `-my-24 opacity-0 hidden duration-500`
            }
          >
            {nav.map((data, index) => {
              return (
                <p
                  className={`${
                    currentNav === data.name
                      ? "text-black"
                      : "hover:bg-[#DDDDDD]"
                  }
                  text-[2rem] cursor-pointer hover:border-0 rounded-full hover:text-black text-[#DDDD] px-[2rem] py-[1rem] duration-200`}
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

          <SerchingComponent isOntop={isOntop} />
        </div>
        {/* 2components nav */}

        {/* customer Account */}
        <div className="flex border border-[#DDDDDD] h-full px-[1.5rem] py-[1rem] items-center rounded-full hover:shadow-lg cursor-pointer gap-[1.5rem] duration-200">
          {sourceImg.map((data, index) => {
            return (
              <img
                src={data.path}
                alt={data.name}
                key={index}
                className="h-16"
              />
            );
          })}
        </div>
        {/* customer Account */}
      </div>

      {/* serching component */}
    </div>
  );
}
