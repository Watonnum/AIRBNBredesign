import { mockAPI } from "../../utils/mockAPI";

export default function RoomCard({ filter }) {
  return (
    <div className="mx-40 my-4 h-400">
      <div className="grid grid-cols-4 gap-8">
        {mockAPI
          .filter((room) => room.type === filter)
          .map((room, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200 cursor-pointer w-full h-[33rem]"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={room.image || "/placeholder.jpg"}
                  alt={room.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white text-black text-sm px-4 py-2 rounded-full">
                  <p className="text-xl font-bold text-black">
                    โดนใจผู้เข้าพัก
                  </p>
                </div>
                <div className="absolute top-2 right-2">
                  <button className="bg-transparent">❤️</button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">{room.name}</h2>
                  <p className="text-gray-600 text-lg">
                    ★ {room.rating || "N/A"}
                  </p>
                </div>
                <p className="text-gray-600 text-lg my-4">
                  {room.type || "N/A"}
                </p>
                <p className="text-black text-xl font-bold">
                  ฿ {room.price} / คืน
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
