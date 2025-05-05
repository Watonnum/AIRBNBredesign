"use client";
import { useState } from "react";
import SerchingComponent from "./serching";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  UserProfile,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header({ isOntop }) {
  const [currentNav, setCurrentNav] = useState("ที่พัก");

  // from clerk
  const { user } = useUser();
  const UserProfilePage = () => <UserProfile />;
  // from clerk

  // info User
  // const infoUser = useUser().user;
  // console.log("info user :", infoUser);

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

      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="w-16 flex justify-center items-center">
          <Link href={"/"}>
            <img
              src="/img/airbnb.png"
              alt="Airbnb logo"
              className="w-16 h-full"
            />
          </Link>
        </div>
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
        {user ? (
          <SignedIn>
            <UserButton
              showName={true}
              appearance={{
                elements: {
                  userButtonBox:
                    "flex justify-center item-center px-2 py-2 hover:shadow-xl rounded-xl duration-200 selection:border-0",
                  avatarBox: "size-16",
                  userButtonOuterIdentifier: "text-xl",
                },
              }}
            />
          </SignedIn>
        ) : (
          <SignInButton>
            <button className="hover:shadow-xl border-[#EBEBEB] rounded-2xl px-6 py-4 cursor-pointer duration-200 hover:scale-105">
              เข้าสู่ระบบ
            </button>
          </SignInButton>
        )}
      </div>
      {/* customer Account */}
    </div>
  );
}

{
  /* <Link href={"/dashboard"}>
                  <img
                    src={data.path}
                    alt={data.name}
                    key={index}
                    className="h-8"
                  />
                </Link> */
}
