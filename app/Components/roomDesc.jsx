import DialogExpand from "./dialogExpand";

const RoomDesc = ({ desc, id }) => {
  return (
    <>
      <div className="flex justify-start items-start w-full pt-8">
        <div className="flex justify-start items-center bg-[#F7F7F7] w-full">
          <p className="text-lg p-2">
            ข้อมูลบางส่วนแสดงเป็นภาษาต้นฉบับ{" "}
            <a href="" className="underline">
              แปล
            </a>
          </p>
        </div>
      </div>
      <div className="pt-4 pb-8 flex flex-col justify-centeritems-start w-full">
        <div className="">
          <p className="text-lg font-bold py-4">{`Description`}</p>
          <p className="text-wrap hyphens-none line-clamp-5 text-base">
            {desc}
          </p>
        </div>

        <div className="pt-4">
          <DialogExpand descriptionMessage={desc} />
        </div>
      </div>
    </>
  );
};

export default RoomDesc;
