import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems_1 = [
  { img: "/svg/room-service-hotel.svg", label: "penthouse", id: 1 },
  { img: "/svg/fish-plate.svg", label: "beach", id: 2 },
  { img: "/svg/tray-dinner.svg", label: "treeHouse", id: 3 },
  { img: "/svg/sushi.svg", label: "poolHouse", id: 4 },
  { img: "/svg/pancakes-dessert.svg", label: "hitz", id: 5 },
];
export default function AnchorStyle({ filter, setFilter }) {
  return (
    <Carousel className="w-3/4 mx-auto my-4">
      <CarouselPrevious />
      <CarouselContent>
        {/* Category 1 section */}
        <CarouselItem className="items-center m-4 grid grid-cols-5 gap-4">
          {carouselItems_1.slice(0, 5).map((item, index) => {
            return (
              <div
                className={` ${
                  filter === item.label ? "text-black bg-red" : "opacity-50"
                } 
                item-center flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 p-4 rounded-lg shadow-md transition duration-200`}
                key={index}
                onClick={() => {
                  setFilter(item.label);
                  console.log(filter);
                }}
              >
                <img src={item.img} alt="svg" className="w-14" />
                <p className="">{item.label}</p>
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
