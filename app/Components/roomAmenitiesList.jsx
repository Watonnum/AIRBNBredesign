import { TbToolsKitchen2 } from "react-icons/tb";
import { SiBlockbench } from "react-icons/si";
import { FaSwimmingPool } from "react-icons/fa";
import { GiLift } from "react-icons/gi";
import { PiSecurityCamera } from "react-icons/pi";
import { IoWifiSharp, IoCarSportOutline } from "react-icons/io5";
import { IoIosTv } from "react-icons/io";
import { TbWashMachine } from "react-icons/tb";
import { HiOutlineBellAlert } from "react-icons/hi2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AmenitiesList = () => {
  const amenitiesList = [
    {
      id: 1,
      name: "ห้องครัว",
      icon: <TbToolsKitchen2 size={24} />,
    },
    {
      id: 2,
      name: "พื้นที่ทำงาน",
      icon: <SiBlockbench size={24} />,
    },
    {
      id: 3,
      name: "สระว่ายน้ำรวมในร่ม",
      icon: <FaSwimmingPool size={24} />,
    },
    {
      id: 4,
      name: "ลิฟท์",
      icon: <GiLift size={24} />,
    },
    {
      id: 5,
      name: "ที่พักมีกล้องวงจรปิดภายนอก",
      icon: <PiSecurityCamera size={24} />,
    },
    {
      id: 6,
      name: "WiFi",
      icon: <IoWifiSharp size={24} />,
    },
    {
      id: 7,
      name: "มีที่จอดรถฟรีบริเวณที่พัก",
      icon: <IoCarSportOutline size={24} />,
    },
    {
      id: 8,
      name: "ทีวี",
      icon: <IoIosTv size={24} />,
    },
    {
      id: 9,
      name: "เครื่องซักผ้าในห้องพัก",
      icon: <TbWashMachine size={24} />,
    },
    {
      id: 10,
      name: "สัญญาณกันขโมย / กันไฟไหม้",
      icon: <HiOutlineBellAlert size={24} />,
    },
  ];

  return (
    <div className="border-y border-[#E1E1E1] w-full py-8">
      <p className="text-2xl font-bold">ที่พักนี้มีอะไรบ้าง</p>
      {/* list amenities components */}
      <div className="flex w-full py-4 justify-center items-center">
        {/* left */}
        <div className="w-1/2">
          {amenitiesList.slice(0, 5).map((amenities) => (
            <div
              className="flex justify-start items-center pb-2 gap-4 h-10"
              key={amenities.id}
            >
              {amenities.icon}
              <p className="text-lg">{amenities.name}</p>
            </div>
          ))}
        </div>
        {/* left */}
        {/* right */}
        <div className="w-1/2">
          {amenitiesList.slice(5, 10).map((amenities) => (
            <div
              className="flex justify-start items-center pb-2 gap-4 h-10"
              key={amenities.id}
            >
              {amenities.icon}
              <p className="text-lg">{amenities.name}</p>
            </div>
          ))}
        </div>
        {/* right */}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="hover:cursor-pointer hover:scale-102 duration-200 hover:text-[#FF385C] p-6"
          >
            แสดงสิ่งอำนวยความสะดวกทั้งหมด 39 รายการ
          </Button>
        </DialogTrigger>
        {/* รอแก้ เพราะHydration & div nested p */}
        <DialogContent className="sm:max-w-[425px] bg-white max-w-[780px]">
          <DialogHeader className="p-4 rounded-2xl bg-[#FF385C] flex items-center">
            <DialogTitle className="text-white font-bold">
              ที่พักนี้มีอะไรบ้าง
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="hyphens-auto flex flex-col justify-center items-start mt-4">
            eiei
            {/* รอแก้ */}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AmenitiesList;
