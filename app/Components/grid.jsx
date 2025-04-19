import { mockAPI } from "../../utils/mockAPI";
import Showmore from "./showmore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function RoomCard({ filter }) {
  return (
    <div className="mx-40 my-4 h-500">
      <div className="grid grid-cols-6 gap-8">
        {mockAPI
          .filter((room) => room.type === filter)
          .map((room, index) => (
            <div
              key={index}
              className="rounded-4xl overflow-hidden transition duration-200 cursor-pointer w-full h-[50rem] flex flex-col justify-between"
            >
              {/* Image Section */}
              <div className="relative">
                <Carousel>
                  <CarouselPrevious className="absolute top-1/2 left-4 z-10" />
                  <CarouselContent>
                    {room.image.map((img, index) => (
                      <CarouselItem key={index} className="w-full h-[36rem]">
                        <img
                          src={img}
                          alt={room.name}
                          className="w-full h-full object-cover rounded-4xl"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext className="absolute top-1/2 right-4 z-10" />
                </Carousel>
                {/* <img
                  src={room.image[0] || "/placeholder.jpg"}
                  alt={room.name}
                  className="w-full h-[36rem] object-cover rounded-4xl"
                /> */}
                {room.rating >= 4.9 && (
                  <div className="absolute top-8 left-8 bg-white text-black text-sm px-4 py-2 rounded-full">
                    <p className="text-3xl font-bold text-black">
                      🏆 โดนใจผู้เข้าพัก
                    </p>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col justify-between">
                <div className="flex items-start justify-between h-16">
                  <p className="text-2xl font-semibold">{room.name}</p>
                </div>
                <p className="text-gray-600 text-2xl my-4">
                  {room.type || "N/A"}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-black text-2xl font-bold">
                    ฿ {room.price} / คืน
                  </p>
                  <p className="text-gray-600 text-2xl font-semibold">
                    ★ {room.rating || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Show content more */}
      <Showmore />
    </div>
  );
}
