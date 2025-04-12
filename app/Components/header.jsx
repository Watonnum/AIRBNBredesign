import SerchingComponent from "./serching";

export default function Header() {
  const nav = [
    { name: "ที่พัก", path: "/", current: true },
    { name: "เอ็กซ์พีเรียนซ์", path: "/explore", current: false },
  ];

  const sourceImg = [
    { name: "menu-icon", path: "/menu.png" },
    { name: "profile-icon", path: "/profileUser.png" },
  ];

  return (
    <div className="py-10">
      {/* Header (icon nav Acc) */}

      <div className="flex justify-between h-24">
        {/* logo */}
        <img src="/airbnb.png" alt="Airbnb logo" className="h-full" />
        {/* logo */}

        {/* 2components nav */}
        <div className="flex gap-x-[3rem] justify-center items-center">
          {nav.map((data, index) => {
            return (
              <p
                className="text-[2rem] cursor-pointer hover:border-0 hover:bg-[#DDDDDD] rounded-full hover:text-black text-[#DDDD] px-[2rem] py-[1rem] duration-200"
                key={index}
              >
                {data.name}
              </p>
            );
          })}
        </div>
        {/* 2components nav */}

        {/* customer Account */}
        <div className="flex border border-[#DDDDDD] h-full px-[1.5rem] py-[1rem] items-center rounded-full hover:shadow-lg cursor-pointer gap-[1.5rem] duration-200">
          {sourceImg.map((data, index) => {
            return (
              <img
                src={data.path}
                alt={data.name}
                key={index}
                className="h-16"
              />
            );
          })}
        </div>
        {/* customer Account */}
      </div>

      {/* serching component */}
      <SerchingComponent />
    </div>
  );
}
