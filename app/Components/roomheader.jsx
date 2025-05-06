import { CiShare1, CiHeart } from "react-icons/ci";

const RoomHeader = ({ name }) => {
  return (
    <div className="flex justify-between mt-4">
      <p className="text-2xl font-bold">{name}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex gap-x-2 justify-center items-center hover:underline duration-200">
          <CiShare1 />
          <a href="/">แชร์</a>
        </div>
        <div className="flex gap-x-2 justify-center items-center">
          <CiHeart />
          <a href="">ชอบ</a>
        </div>
      </div>
    </div>
  );
};

export default RoomHeader;
