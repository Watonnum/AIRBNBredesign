const RoomImgCard = ({ image, name }) => {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-3xl mt-4">
      <img
        src={image[0]}
        alt={name[0]}
        className="w-full h-full rounded-l-xl"
      />
      <div className="grid grid-cols-2 gap-2">
        <img src={image[1]} alt="" className="object-cover w-full h-full" />
        <img
          src={image[2]}
          alt=""
          className="object-cover w-full h-full rounded-tr-xl"
        />
        <img src={image[3]} alt="" className="object-cover w-full h-full" />
        <img
          src={image[4]}
          alt=""
          className="object-cover w-full h-full rounded-br-xl"
        />
      </div>
    </div>
  );
};

export default RoomImgCard;
