import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AnchorStyle({ filter, setFilter }) {
  const carouselItems_1 = [
    { img: "/svg/beach-umbrella.svg", label: "ริมทะเล", id: 1 },
    { img: "/svg/ufo.svg", label: "แปลก", id: 2 },
    { img: "/svg/treehouse.svg", label: "บ้านต้นไม้", id: 3 },
    { img: "/svg/penthouse.svg", label: "มีดีไซน์", id: 4 },
    { img: "/svg/green-house.svg", label: "บ้านสีเขียว", id: 5 },
  ];
  return (
    <Carousel className="w-3/4 mx-auto my-4">
      <CarouselPrevious />
      <CarouselContent>
        {/* Category 1 section */}
        <CarouselItem className="items-center m-4 grid grid-cols-5 gap-4">
          {carouselItems_1.slice(0, 5).map((item, index) => {
            return (
              <div
                className={`${
                  filter === item.label ? "text-black font-bold" : "opacity-50"
                } text-2xl item-center flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 p-4 rounded-lg shadow-md transition duration-200 border-2 border-b-2 border-[#DDDD]`}
                key={index}
                onClick={() => {
                  localStorage.setItem("filterLCstorage", item.label);
                  setFilter(item.label);
                }}
              >
                <img src={item.img} alt="svg" className="w-20" />
                <p className="mt-4">{item.label}</p>
              </div>
            );
          })}
        </CarouselItem>
        {/* Category 2 section */}
        <CarouselItem className="items-center m-4 grid grid-cols-5 gap-4">
          {carouselItems_1.slice(5, 10).map((item, index) => {
            return (
              <div
                className="item-center flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 p-4 rounded-lg shadow-md transition duration-200"
                key={index}
              >
                <img src={item.img} alt="svg" className="w-14" />
                <p className="font-bold text-black">{item.label}</p>
              </div>
            );
          })}
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
