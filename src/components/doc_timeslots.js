"use client";
import { useState } from "react";

export default function DocTimeSlots() {
  const [selected, setSelected] = useState(null);

  // You can replace this with your own backend data
  const timeSlots = [
    "05:30pm", "10:30am", "11:30am", "02:30pm", "03:00pm",
    "03:30pm", "03:30pm", "04:30pm", "05:00pm", "05:00pm",
    "05:00pm", "05:30pm", "05:30pm", "05:30pm", "05:30pm",
    "05:30pm", "05:30pm", "05:30pm", "05:30pm", "05:30pm"
  ];

  return (
    <div className="w-full mt-4">
      {/* Grid of Time Slots */}
      <div className="grid grid-cols-5 gap-4">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            onClick={() => setSelected(time)}
            className={`px-4 py-3 rounded-md border text-sm font-medium transition
              ${
                selected === time
                  ? "bg-[#E5CEE4] text-gray-900 border-[#E5CEE4]"
                  : "bg-white text-gray-700 border-gray-300"
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
