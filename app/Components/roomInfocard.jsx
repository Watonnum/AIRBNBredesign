import Link from "next/link";
import { BsDoorOpen } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { IoIosGitNetwork } from "react-icons/io";
import Divider from "@mui/material/Divider";

const RoomInfocard = ({
  name,
  rmtype,
  rating,
  countReview,
  hostName,
  hostThumbNail,
}) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col justify-center items-start">
        <p className="text-xl">{name}</p>
        <p className="text-gray-400">{rmtype}</p>
      </div>

      <div className="flex flex-col justify-center items-start mt-4">
        {/* review */}
        {rating >= 95 ? (
          <div className="border border-[#E1E1E1] rounded-xl flex gap-2 p-4 justify-center items-center">
            <img src="/img/bookmark.png" alt="" className="mx-2 p-2" />
            <div className="mx-2">
              หนึ่งในที่พักสุดเลิฟของผู้เข้าพักใน Airbnb
            </div>
            <div className="flex flex-col justify-center items-center mx-2">
              <p className="text-xl font-bold">{rating}</p>
              {Array.from(Array(Math.floor(rating / 20)), (_, index) => "★")}
            </div>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="mx-2"
            />
            <Link href="">
              <div className="flex flex-col justify-center items-center mx-2">
                <p className="text-2xl no-underline">{countReview}</p>
                <p className="underline">view</p>
              </div>
            </Link>
          </div>
        ) : (
          <></>
        )}
        {/* review */}

        {/* hostinfo */}
        <div className="flex justify-start items-center mt-2 p-4 w-full">
          <img src={hostThumbNail || "No pic"} className="rounded-full" />
          <div className="flex flex-col justify-center items-start mx-4">
            <p>Posted by</p>
            <p>{hostName}</p>
          </div>
        </div>
        {/* hostinfo */}

        {/* award */}
        <div className="flex flex-col justify-center items-start px-4 py-6 gap-4 border-y border-[#E1E1E1] w-full">
          <div className="flex justify-start items-center gap-x-8">
            <BsDoorOpen size={24} />
            <div className="flex flex-col">
              <p className="text-lg">Award 1</p>
              <p className="text-sm text-gray-400">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-8">
            <IoIosGitNetwork size={24} />
            <div className="flex flex-col">
              <p className="text-lg">Award 2</p>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, recusandae?
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-8">
            <GiClockwork size={24} />
            <div className="flex flex-col">
              <p className="text-lg">Award 3</p>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
        {/* award */}
      </div>
    </div>
  );
};

export default RoomInfocard;
