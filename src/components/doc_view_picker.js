"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DocViewPicker() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const previousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const nextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="w-full  pb-2 mb-4 mt-5">
      <div className="flex items-center justify-between px-4">

        {/* LEFT ARROW */}
        <button onClick={previousDay} className="text-gray-500 hover:text-black">
          <ChevronLeft size={26} strokeWidth={1.5} />
        </button>

        {/* DATE TEXT */}
        <h2 className="text-[18px] font-medium text-center">
          {formatDate(currentDate)}
        </h2>

        {/* RIGHT ARROW */}
        <button onClick={nextDay} className="text-gray-500 hover:text-black">
          <ChevronRight size={26} strokeWidth={1.5} />
        </button>

      </div>
    </div>
  );
}
