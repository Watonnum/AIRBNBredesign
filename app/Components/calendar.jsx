"use client";

import { DayPicker } from "react-day-picker";
import { th } from "date-fns/locale";
import "react-day-picker/style.css";
import { useState } from "react";
import { addMonths } from "date-fns";

const Calendar = ({ selected, onSelect }) => {
  const today = new Date();
  const nextMonth = addMonths(today, 1);
  const [month, setMonth] = useState(nextMonth);

  return (
    <div className="flex flex-col justify-center items-center p-8 box-border w-[690px]">
      <DayPicker
        animate
        mode="range" // เปลี่ยนเป็น range เพื่อเลือกช่วงวันเช็คอิน-เช็คเอาท์
        month={month}
        onMonthChange={setMonth}
        selected={selected}
        onSelect={onSelect}
        locale={th} // เพิ่มภาษาไทย
        numberOfMonths={2} // แสดง 1 เดือน
        showOutsideDays
        startMonth={new Date(2025, 4, today)} // ป้องกันการเลือกวันที่ผ่านมาแล้ว
        classNames={{
          range_start: "bg-[#FF385C] text-white",
          range_end: "bg-[#FF385C] text-white",
          selected: `rounded-full text-[#FFFFF] bg-[#F7F7F7]`,
          months: "flex flex-row space-x-4 text-sm",
          table: "w-full border-collapse space-y-1",
          outside: "text-gray-300",
        }}
      />
      <div className="flex justify-around">
        <button
          onClick={() => setMonth(today)}
          className="mt-4 hover:cursor-pointer hover:underline hover:text-[#FF385C]"
        >
          Go to Today
        </button>
      </div>
    </div>
  );
};

export default Calendar;
