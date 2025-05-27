const RoomImgCard = ({ image, name }) => {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-3xl mt-4">
      <img
        src={image.picture_url}
        alt={name}
        className="w-full h-full rounded-l-xl"
      />
      <div className="grid grid-cols-2 gap-2">
        <img
          src={image.picture_url}
          alt=""
          className="object-cover w-full h-full"
        />
        <img
          src={image.picture_url}
          alt=""
          className="object-cover w-full h-full rounded-tr-xl"
        />
        <img
          src={image.picture_url}
          alt=""
          className="object-cover w-full h-full"
        />
        <img
          src={image.picture_url}
          alt=""
          className="object-cover w-full h-full rounded-br-xl"
        />
      </div>
    </div>
  );
};

export default RoomImgCard;
