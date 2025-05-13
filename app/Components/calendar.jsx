"use client";

import { DayPicker, isDateRange } from "react-day-picker";
import { th } from "date-fns/locale";
import "react-day-picker/style.css";
import { useState } from "react";
import { addMonths, differenceInDays } from "date-fns";

const Calendar = () => {
  const today = new Date();
  const nextDay = new Date(today);
  const nextMonth = addMonths(today, 1);
  const [month, setMonth] = useState(today);
  const [selectedRange, setSelectedRange] = useState({
    from: "",
    to: "",
  });

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  const showRange = () => {
    if (isDateRange(selectedRange)) {
      return (
        <>
          <p>
            {convertTimestampToDate(Date.parse(selectedRange.from.toString()))}{" "}
            - {convertTimestampToDate(Date.parse(selectedRange.to.toString()))}{" "}
          </p>
          <p className="text-[#FF385C]">
            ทั้งหมด :{" "}
            {differenceInDays(
              new Date(selectedRange.to),
              new Date(selectedRange.from)
            )}{" "}
            วัน
          </p>
        </>
      );
    }
    return <p>Please select a range.</p>;
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 box-border w-[690px]">
      <DayPicker
        animate
        mode="range" // เปลี่ยนเป็น range เพื่อเลือกช่วงวันเช็คอิน-เช็คเอาท์
        month={month}
        onMonthChange={setMonth}
        selected={selectedRange}
        onSelect={setSelectedRange}
        // onDayClick={(from, to) => {
        //   if (from) {
        //     console.log(from.toLocaleDateString());
        //   } else if (to) {
        //     console.log(to);
        //   }
        // }}
        locale={th} // เพิ่มภาษาไทย
        numberOfMonths={2} // แสดง 1 เดือน
        showOutsideDays
        startMonth={new Date(2025, 4, today)}
        classNames={{
          range_start: "bg-[#FF385C] text-white",
          range_end: "bg-[#FF385C] text-white",
          selected: `rounded-full text-[#FFFFF] bg-[#F7F7F7]`,
          months: "flex flex-row space-x-4 text-sm",
          table: "w-full border-collapse space-y-1",
          outside: "text-gray-300",
        }}
      />
      <div className="flex justify-around items-center w-full mt-4 h-14 box-border ">
        <button
          onClick={() => setMonth(today)}
          className="hover:cursor-pointer hover:underline hover:text-[#FF385C] items-center"
        >
          Go to Today
        </button>
        {/* {console.log(
          convertTimestampToDate(Date.parse(selectedRange.from.toString()))
        )}
        {console.log(
          convertTimestampToDate(Date.parse(selectedRange.to.toString()))
        )} */}

        <p className="text-lg font-semibold flex flex-col justify-center items-center">
          {showRange()}
        </p>
      </div>
    </div>
  );
};

export default Calendar;
