"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

export default function AnchorStyle({ filter, setFilter }) {
  const [mounted, setMounted] = useState(false);
  const [localFilter, setLocalFilter] = useState(filter);

  useEffect(() => {
    setMounted(true);
    // โหลดค่า filter จาก localStorage เมื่อ component mount
    const savedFilter = localStorage.getItem("filterLCstorage");
    if (savedFilter) {
      setLocalFilter(savedFilter);
      setFilter(savedFilter);
    }
  }, []);
  const carouselItems_1 = [
    { img: "/svg/beach-umbrella.svg", label: "ริมทะเล", id: 1 },
    { img: "/svg/ufo.svg", label: "แปลก", id: 2 },
    { img: "/svg/treehouse.svg", label: "บ้านต้นไม้", id: 3 },
    { img: "/svg/penthouse.svg", label: "มีดีไซน์", id: 4 },
    { img: "/svg/green-house.svg", label: "บ้านสีเขียว", id: 5 },
  ];
  const handleItemClick = (label) => {
    localStorage.setItem("filterLCstorage", label);
    setLocalFilter(label);
    setFilter(label);
  };

  if (!mounted) return null;
  return (
    <Carousel className="mx-20">
      <CarouselPrevious />
      <CarouselContent>
        {/* Category 1 section */}
        <CarouselItem className="items-center my-2 grid grid-cols-16">
          {carouselItems_1.map((item) => (
            <div
              className={`${
                localFilter === item.label
                  ? "text-black font-bold border-b-2"
                  : "opacity-40"
              } w-full mt-3 mb-2.5 py-1 text-sm flex flex-col justify-center items-center cursor-pointer transition duration-200 `}
              key={item.id}
              onClick={() => handleItemClick(item.label)}
            >
              <img src={item.img} alt={item.label} className="w-6" />
              <p className="mt-2">{item.label}</p>
            </div>
          ))}
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
