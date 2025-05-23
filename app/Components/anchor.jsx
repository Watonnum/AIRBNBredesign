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
  const carouselItems = [
    { img: "/svg/prototype_type_apartment.svg", label: "Apartment", id: 1 },
    { img: "/svg/prototype_type_house.svg", label: "House", id: 2 },
    { img: "/svg/prototype_type_condominium.svg", label: "Condominium", id: 3 },
    {
      img: "/svg/prototype_type_serviceAparthment.svg",
      label: "Serviced apartment",
      id: 4,
    },
    { img: "/svg/prototype_type_loft.svg", label: "Loft", id: 5 },
    { img: "/svg/prototype_type_townhouse.svg", label: "Townhouse", id: 6 },
    { img: "/svg/prototype_type_guestSuite.svg", label: "Guest suite", id: 7 },
    {
      img: "/svg/prototype_type_breakfast.svg",
      label: "Bed and breakfast",
      id: 8,
    },
    { img: "/svg/protype_type_boutique.svg", label: "Boutique hotel", id: 9 },
    { img: "/svg/prototype_type_guestHouse.svg", label: "Guesthouse", id: 10 },
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
        <CarouselItem className="items-center my-2 grid grid-cols-10">
          {carouselItems.map((item) => (
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
