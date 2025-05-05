const RoomImgCard = ({ image, name }) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-3xl mt-4">
      <img src={image[0]} alt={name[0]} className="w-full h-full" />
      <div className="grid grid-cols-2 gap-4">
        <img src={image[1]} alt="" className="object-cover w-full h-full" />
        <img src={image[2]} alt="" className="object-cover w-full h-full" />
        <img src={image[3]} alt="" className="object-cover w-full h-full" />
        <img src={image[4]} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default RoomImgCard;
