import { mockAPI } from "../../utils/mockAPI";

export default function RoomCard({ filter }) {
  return (
    <div className="mx-40 my-4 h-400">
      <div className="grid grid-cols-6 gap-4">
        {mockAPI
          .filter((room) => room.type === filter)
          .map((room, index) => (
            <div
              key={index}
              className="border rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition duration-200 cursor-pointer w-full h-[50rem]"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={room.image[0] || "/placeholder.jpg"}
                  alt={room.name}
                  className="w-full h-[36rem] object-cover "
                />
                <div className="absolute top-2 left-2 bg-white text-black text-sm px-4 py-2 rounded-full">
                  <p className="text-2xl font-bold text-black">
                    โดนใจผู้เข้าพัก
                  </p>
                </div>
                {/* <div className="absolute top-2 right-2">
                  <button className="bg-transparent">❤️</button>
                </div> */}
              </div>

              {/* Content Section */}
              <div className="p-4 mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-2xl font-semibold">{room.name}</p>
                </div>
                <p className="text-gray-600 text-2xl my-4">
                  {room.type || "N/A"}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-black text-2xl font-bold">
                    ฿ {room.price} / คืน
                  </p>
                  <p className="text-gray-600 text-2xl font-semibold">
                    ★ {room.rating || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
