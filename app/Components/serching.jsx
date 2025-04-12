import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SerchingComponent() {
  const navFilter = [
    { name: "item-1", label: "สถานที่", text: "ค้นหาปลายทาง" },
    { name: "item-2", label: "เช็คอิน", text: "เพิ่มวันที่" },
    { name: "item-3", label: "เช็คเอาท์", text: "เพิ่มวันที่" },
  ];
  return (
    <div className="grid grid-cols-6 mx-auto w-[70%] my-[3rem] border border-[#DDDD] justify-center rounded-full shadow-md border-b-2">
      {navFilter.map((data, index) => {
        return (
          <>
            <div
              key={data.name}
              className={`px-[3rem] py-[1rem] hover:bg-[#EBEBEB] items-center rounded-full cursor-pointer flex justify-start duration-200 ${
                index == 0 ? "col-span-2" : ""
              }`}
            >
              <div>
                <p className=" font-bold text-black">{data.label}</p>
                <p className="text-[1.5rem] text-[#6d6c6c] font-bold">
                  {data.text}
                </p>
              </div>
            </div>
          </>
        );
      })}

      {/* textfield & icon */}
      <div className="p-2 pl-8 flex hover:bg-[#EBEBEB] rounded-full h-full cursor-pointer col-span-2 duration-200">
        <div className="w-full flex-col flex justify-center">
          <p className=" font-bold text-black">ใคร</p>
          <p className="text-[1.5rem] text-[#6d6c6c] font-bold">
            เพิ่มผู้เข้าพัก
          </p>
        </div>
        <div className="text-[3rem] text-white bg-[#E31C56] rounded-full p-4 flex justify-center items-center">
          <HiMagnifyingGlass />
        </div>
      </div>
    </div>
  );
}
