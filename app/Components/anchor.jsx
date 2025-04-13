import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems_1 = [
  { img: "/svg/room-service-hotel.svg", label: "Hotel" },
  { img: "/svg/fish-plate.svg", label: "Seafood" },
  { img: "/svg/tray-dinner.svg", label: "Tray" },
  { img: "/svg/sushi.svg", label: "Sushi" },
  { img: "/svg/pancakes-dessert.svg", label: "Dessert" },
  { img: "/svg/meat.svg", label: "Meat" },
  { img: "/svg/juice.svg", label: "Juice" },
  { img: "/svg/chinese-food-chinese.svg", label: "Chinese-Foods" },
  { img: "/svg/Wine.svg", label: "Wine" },
  { img: "/svg/chef.svg", label: "Chef" },
];
export default function AnchorStyle() {
  return (
    <Carousel className="w-3/4 mx-auto my-4">
      <CarouselPrevious />
      <CarouselContent>
        {/* Category 1 section */}
        <CarouselItem className="items-center m-4 grid grid-cols-10 gap-4">
          {carouselItems_1.map((item, index) => {
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
        {/* Category 2 section */}
        <CarouselItem className="items-center m-4 grid grid-cols-10 gap-4">
          {carouselItems_1.reverse().map((item, index) => {
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
