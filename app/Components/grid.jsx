"use client";
import Link from "next/link";
import { mockAPI } from "../../utils/mockAPI";
import Showmore from "./showmore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

export default function RoomCard({ filter }) {
  return (
    <div className="mx-24 my-4 h-250">
      <div className="grid grid-cols-6 gap-5">
        {mockAPI
          .filter((room) => room.type === filter)
          .map((room, index) => (
            <ContentGrid key={index} room={room} />
          ))}
      </div>

      {/* Show content more */}
      <Showmore />
    </div>
  );
}

function ContentGrid({ room, index }) {
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // เซ็ต mounted เป็น true เมื่อ component โหลดเสร็จ
    return () => setMounted(false); // cleanup เมื่อ component ถูกทำลาย
  }, []); // [] หมายถึงทำงานครั้งเดียวตอน mount

  if (!mounted) return null; // ไม่แสดงอะไรถ้ายังไม่ mount

  return (
    <div
      key={index}
      onMouseEnter={() => {
        console.log("hover");
        setHover(true);
      }}
      onMouseLeave={() => {
        console.log("unhover");
        setHover(false);
      }}
      className="rounded-lg overflow-hidden transition duration-200 cursor-pointer h-[24rem] flex flex-col justify-between [$_.opop1]:hidden"
    >
      {/* Image Section */}
      <div className="relative">
        <Carousel>
          <CarouselPrevious
            className={`${
              hover ? "left-4" : "-left-20"
            } absolute top-1/2 z-10 duration-200 transition-all bg-white size-10 border-0`}
          />
          <Link
            key={index}
            href={`/rooms/${room?.id}`}
            target="_blank" //for new tab
            rel="noopener noreferrer" //protect access window.open & ไม่ส่งข้อมูล referrer ไปยังหน้าปลายทาง
          >
            <CarouselContent>
              {room.image.map((img, index) => (
                <CarouselItem key={index} className="w-full p-0 rounded-4xl">
                  <img
                    src={img}
                    alt={room.name}
                    className="w-full h-64 object-cover rounded-xl hover:scale-110 duration-200"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Link>
          <CarouselNext
            className={`${
              hover ? "right-4" : "-right-20"
            } absolute top-1/2 z-10 bg-white size-10 border-0`}
          />
        </Carousel>

        {room.rating >= 4.9 && (
          <div className="absolute top-4 left-4 bg-white text-black text-sm px-4 py-2 rounded-full">
            <p className="text-sm font-bold text-black">🏆 โดนใจผู้เข้าพัก</p>
          </div>
        )}
      </div>

      {/* Content Section */}
      <Link key={index} href={`/rooms/${room?.id}`}>
        <div className="flex flex-col justify-between mt-4">
          <div className="flex items-start justify-between h-5">
            <p className="text-sm font-semibold">{room.name}</p>
          </div>
          <p className="text-gray-600 text-base mt-8">{room.type || "N/A"}</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-black text-sm font-bold">฿ {room.price} / คืน</p>
            <p className="text-gray-600 text-sm font-semibold">
              ★ {room.rating || "N/A"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
