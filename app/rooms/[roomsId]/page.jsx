import Header from "@/app/Components/header";
import { mockAPI } from "@/utils/mockAPI";
import { CiShare1, CiHeart } from "react-icons/ci";
import RoomInfocard from "@/app/Components/roomInfocard";
import RoomImgCard from "@/app/Components/roomImgCard";

export function generateStaticParams() {
  return mockAPI.map((room) => ({ id: `${room.id}` }));
}

const page = async ({ params }) => {
  const param = await params;
  return (
    <div>
      <Header />
      <Room param={param} />
    </div>
  );
};

const Room = ({ param }) => {
  const room = mockAPI.filter((data) => param.roomsId == data.id)[0];

  return (
    <div className="flex flex-col max-w-[108rem] mx-auto">
      {/* section name card */}
      <div className="flex justify-between mt-4">
        <p className="text-2xl font-bold">{room.name}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-x-2 justify-center items-center hover:underline">
            <CiShare1 />
            <a href={"/"}>แชร์</a>
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <CiHeart />
            <a href="">ชอบ</a>
          </div>
        </div>
      </div>
      {/* section name card */}

      {/* section image */}
      <RoomImgCard image={room.image} name={room.name} />
      {/* section image */}

      {/* section about */}
      <RoomInfocard description={room.des} rating={room.rating} />
      {/* section about */}

      <div className="h-[100vh]" />
    </div>
  );
};

export default page;
