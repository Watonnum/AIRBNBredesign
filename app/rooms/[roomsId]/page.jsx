import Header from "@/app/Components/header";
import RoomInfocard from "@/app/Components/roomInfocard";
import RoomImgCard from "@/app/Components/roomImgCard";
import RoomHeader from "@/app/Components/roomheader";
import RoomDesc from "@/app/Components/roomDesc";
import RoomSummary from "@/app/Components/roomSummary";
import Roombedplace from "@/app/Components/roombedplace";
import AmenitiesList from "@/app/Components/roomAmenitiesList";
import Calendar from "@/app/Components/calendar";
import GetLocalData from "@/app/api/apiLocal";

export async function generateStaticParams() {
  try {
    const response = await GetLocalData();
    const data = response.data;
    if (data) {
      return data.map((room) => ({
        roomsId: room._id.toString(), // Ensure the id is a string
      }));
    } else {
      throw new Error("ไม่สามารถดึงข้อมูลได้");
    }
  } catch (err) {
    console.error("Error from catch fetching data:", err.message);
  }
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

const Room = async ({ param }) => {
  const response = await GetLocalData();
  const data = response?.data || [];
  if (!data.length) {
    return (
      <div className="col-span-6 text-center">
        <p className="text-lg font-semibold text-gray-500">
          ไม่พบห้องพักที่ตรงตามเงื่อนไข
        </p>
      </div>
    );
  }

  const room = data.find((item) => param.roomsId == item._id);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="flex flex-col max-w-[70rem] mx-auto">
      {/* section name card */}
      <RoomHeader name={room.name} />
      {/* section name card */}

      {/* section image */}
      <RoomImgCard image={room.images} name={room.name} />
      {/* section image */}

      {/* Seperate 2 component */}

      <div className="w-full flex pb-4 border-b-2 border-[#E4E4E4]">
        <div className="w-1/2 flex flex-col justify-center items-start">
          {/* section about */}
          <RoomInfocard
            name={room.name}
            rmtype={room.room_type}
            rating={room.review_scores.review_scores_rating}
            countReview={room.reviews.length}
            hostName={room.host.host_name}
            hostThumbNail={room.host.host_thumbnail_url}
          />
          {/* section about */}

          {/* section desc */}
          <RoomDesc desc={room.description} id={room._id} />
          {/* section desc */}

          {/* bed place */}
          <Roombedplace image={room.images} desc={room.bed_type} />
          {/* bed place */}

          {/* amenities list */}
          <AmenitiesList />
          {/* amenities list */}

          {/* react day picker */}
          <Calendar />
          {/* react day picker */}
        </div>

        <div className="w-1/2 flex justify-end items-start mt-4">
          <RoomSummary price={room.price.$numberDecimal || "N/A"} />
        </div>
      </div>

      {/* Seperate 2 component */}

      <div className="h-[50vh]" />
    </div>
  );
};

export default page;
