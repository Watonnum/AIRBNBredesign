import Header from "@/app/Components/header";
import { mockAPI } from "@/utils/mockAPI";
import RoomInfocard from "@/app/Components/roomInfocard";
import RoomImgCard from "@/app/Components/roomImgCard";
import RoomHeader from "@/app/Components/roomheader";
import RoomDesc from "@/app/Components/roomDesc";
import RoomSummary from "@/app/Components/roomSummary";
import Roombedplace from "@/app/Components/roombedplace";
import AmenitiesList from "@/app/Components/roomAmenitiesList";
import Calendar from "@/app/Components/calendar";

export function generateStaticParams() {
  return mockAPI.map((room) => ({ id: `${room._id}` }));
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

      {/* Seperate 2 component */}

      <div className="w-full flex pb-4 border-b-2 border-[#E4E4E4]">
        <div className="w-1/2 flex flex-col justify-center items-start">
          {/* section about */}
          <RoomInfocard description={room.des} rating={room.rating} />
          {/* section about */}

          {/* section desc */}
          <RoomDesc />
          {/* section desc */}

          {/* bed place */}
          <Roombedplace image={room.image} desc={room.des} />
          {/* bed place */}

          {/* amenities list */}
          <AmenitiesList />
          {/* amenities list */}

          {/* react day picker */}
          <Calendar />
          {/* react day picker */}
        </div>

        <div className="w-1/2 flex justify-end items-start mt-4">
          <RoomSummary price={room.price} />
        </div>
      </div>

      {/* Seperate 2 component */}

      <div className="h-[50vh]" />
    </div>
  );
};

export default page;
