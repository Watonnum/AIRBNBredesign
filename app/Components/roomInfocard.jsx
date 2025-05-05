import Link from "next/link";
import { BsDoorOpen } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { IoIosGitNetwork } from "react-icons/io";

const RoomInfocard = ({ description, rating }) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col justify-center items-start">
        <p className="text-2xl">Subname_notyetinfo</p>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="flex flex-col justify-center items-start mt-4">
        {/* review */}
        {rating == 5 ? (
          <div className="border border-[#E1E1E1] rounded-xl flex gap-2 p-4 justify-center items-center">
            <img src="/img/bookmark.png" alt="" className="mx-2 p-2" />
            <div>หนึ่งในที่พักสุดเลิฟของผู้เข้าพักใน Airbnb</div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-bold">{rating}</p>
              {Array.from(Array(Math.floor(rating)), (_, index) => "★")}
            </div>
            <p className="text-gray-400 text-2xl"> </p>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl">XX</p>
              <Link href="/" className="hover:underline">
                click to view count of view
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* review */}

        {/* hostinfo */}
        <div className="flex justify-start items-center mt-2 p-4 w-[50%]">
          <img src={"/img/user.png"} />
          <div className="flex flex-col justify-center items-start mx-4">
            <p>Posted by</p>
            <p>medal's user & period of user</p>
          </div>
        </div>
        {/* hostinfo */}

        {/* award */}
        <div className="flex flex-col justify-center items-start px-4 py-6 gap-4 border-y border-[#E1E1E1] w-[50%]">
          <div className="flex justify-start items-center gap-x-4">
            <BsDoorOpen size={24} />
            <div className="flex flex-col">
              <p className="text-lg">Award 1</p>
              <p className="text-sm text-gray-400">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-4">
            <IoIosGitNetwork size={24} />
            <div className="flex flex-col">
              <p className="text-lg">Award 2</p>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, recusandae?
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-4">
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
