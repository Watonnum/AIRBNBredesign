import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Tag } from "lucide-react";

const RoomSummary = ({ price }) => {
  return (
    <div className="border rounded-xl p-6 w-[400px] sticky top-40 right-0 z-20 shadow-m">
      {/* Price Section */}
      <div className="flex items-end gap-1 mb-4">
        <span className="text-xl font-bold">{`฿` + price}</span>
        <span className="text-gray-500">
          {" "}
          {`( `}1 คน / คืน {`)`}
        </span>
      </div>

      {/* Date and Guest Selection */}
      <div className="grid grid-cols-2 gap-1 border rounded-t-xl mb-1">
        <div className="p-3 border-r hover:cursor-pointer">
          <p className="text-xs">เช็คอิน</p>
          <p className="font-semibold">6/5/2025</p>
        </div>
        <div className="p-3 hover:cursor-pointer">
          <p className="text-xs">เช็คเอาท์</p>
          <p className="font-semibold">11/5/2025</p>
        </div>
      </div>

      {/* Guest Dropdown */}
      <div className="border rounded-b-xl p-3 mb-4">
        <div className="flex justify-between items-center hover:cursor-pointer">
          <div>
            <p className="text-xs">ผู้เข้าพัก</p>
            <p className="font-semibold">ผู้เข้าพัก 1 คน</p>
          </div>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Reserve Button */}
      <Button className="w-full bg-[#FF385C] text-white hover:bg-[#FF385C]/90 hover:cursor-pointer mb-4">
        จอง
      </Button>

      {/* Message */}
      <p className="text-center text-sm text-gray-500 mb-6">
        ยังไม่มีการเรียกเก็บเงินจากคุณ
      </p>

      {/* Promotion */}
      <div className="flex items-center gap-2 p-4 border rounded-xl">
        <Tag className="w-6 h-6 text-[#FF385C]" />
        <div>
          <p className="font-semibold">ประหยัดทันทีเมื่อเพิ่มวันเข้าพัก</p>
          <p className="text-sm">เพิ่ม 7 คืน</p>
        </div>
      </div>

      {/* Report Link */}
      <div className="mt-6 text-center">
        <a href="#" className="text-sm underline">
          รายงานที่พักนี้
        </a>
      </div>
    </div>
  );
};

export default RoomSummary;
