import Header from "@/app/Components/header";
import { mockAPI } from "@/utils/mockAPI";
import { CiShare1, CiHeart } from "react-icons/ci";

export async function generateStaticParams() {
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
    <div className="flex flex-col mx-auto">
      <div className="flex justify-between">
        <p>{room.name}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex">
            <CiShare1 />
            <a href="">แชร์</a>
          </div>
          <div className="flex">
            <CiHeart />
            <a href="">แชร์</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-3xl">
        <img src={room.image[0]} alt={room.name[0]} className="w-full h-full" />
        <div className="grid grid-cols-2 gap-4">
          <img
            src={room.image[1]}
            alt=""
            className="object-cover w-full h-full"
          />
          <img
            src={room.image[2]}
            alt=""
            className="object-cover w-full h-full"
          />
          <img
            src={room.image[3]}
            alt=""
            className="object-cover w-full h-full"
          />
          <img
            src={room.image[4]}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
