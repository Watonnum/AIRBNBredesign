import Header from "@/app/Components/header";
import { mockAPI } from "@/utils/mockAPI";
import RoomInfocard from "@/app/Components/roomInfocard";
import RoomImgCard from "@/app/Components/roomImgCard";
import RoomHeader from "@/app/Components/roomheader";
import RoomDesc from "@/app/Components/roomDesc";
import RoomSummary from "@/app/Components/roomSummary";

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
    <div className="flex flex-col max-w-[70rem] mx-auto">
      {/* section name card */}
      <RoomHeader name={room.name} />
      {/* section name card */}

      {/* section image */}
      <RoomImgCard image={room.image} name={room.name} />
      {/* section image */}

      {/* Seperate component */}

      <div className="w-full flex">
        <div className="w-1/2 flex flex-col justify-center items-start">
          {/* section about */}
          <RoomInfocard description={room.des} rating={room.rating} />
          {/* section about */}

          {/* section desc */}
          <RoomDesc />
          {/* section desc */}
        </div>

        <div className="w-1/2 flex justify-end items-start mt-4">
          <RoomSummary price={room.price} />
        </div>
      </div>

      {/* Seperate component */}

      <div className="h-[100vh]" />
    </div>
  );
};

export default page;
