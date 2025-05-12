const RoomBedPlace = ({ image, desc, index }) => {
  return (
    <div className="border-y border-[#E1E1E1] w-full py-8">
      <p className="text-2xl font-bold">สถานที่นอน</p>
      <img src={image[4]} alt={index} className="my-4" />
      <p className="text-xl font-bold">ห้องนอน</p>
      <p className="text-base text-[#b7b2b2]">{desc}</p>
    </div>
  );
};

export default RoomBedPlace;
