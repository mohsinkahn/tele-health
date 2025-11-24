"use client";
import { useState } from "react";
import { Plus, X, Copy } from "lucide-react";

export default function WeeklyScheduler() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  // Default: only Mon–Thu available, rest unavailable
  const [schedule, setSchedule] = useState([
    { day: "S", slots: [] },
    { day: "M", slots: [{ start: "9:00am", end: "5:00pm" }] },
    { day: "T", slots: [{ start: "9:00am", end: "5:00pm" }] },
    { day: "W", slots: [{ start: "9:00am", end: "5:00pm" }] },
    { day: "T", slots: [{ start: "9:00am", end: "5:00pm" }] },
    { day: "F", slots: [] },
    { day: "S", slots: [] },
  ]);

  const addSlot = (dayIndex) => {
  const updated = [...schedule];
  updated[dayIndex].slots.push({
    start: "9:00am",
    end: "5:00pm",
    isDuplicate: false   // ← FIX HERE
  });
  setSchedule(updated);
};

  const removeSlot = (dayIndex, slotIndex) => {
    const updated = [...schedule];
    updated[dayIndex].slots.splice(slotIndex, 1);
    setSchedule(updated);
  };

 const duplicateSlot = (dayIndex, slotIndex) => {
  const updated = [...schedule];
  const slot = updated[dayIndex].slots[slotIndex];

  updated[dayIndex].slots.push({
    ...slot,
    isDuplicate: true   // ← IMPORTANT
  });

  setSchedule(updated);
};

  const updateTime = (dayIndex, slotIndex, field, value) => {
    const updated = [...schedule];
    updated[dayIndex].slots[slotIndex][field] = value;
    setSchedule(updated);
  };

  return (
   <div className="space-y-4 w-full p-3 bg-white rounded-lg">
  {schedule.map((item, dayIndex) => (
    <div key={dayIndex} className="flex items-start gap-3">

      {/* Day Circle */}
      <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex justify-center items-center font-semibold">
        {item.day}
      </div>

      <div className="flex-1">
        {item.slots.length === 0 ? (
          <div className="flex items-center gap-3">
            <span className="text-gray-500">Unavailable</span>

            <button
              type="button"
              onClick={() => addSlot(dayIndex)}
              className="text-blue-700 border-[#F3F4F6] border bg-[#F3F4F6] p-2 rounded-4xl"
            >
              <Plus size={18} />
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {item.slots.map((slot, slotIndex) => (
              <div key={slotIndex} className="flex items-center justify-between gap-3">

                {/* Time Inputs */}
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={slot.start}
                    onChange={(e) =>
                      updateTime(dayIndex, slotIndex, "start", e.target.value)
                    }
                    className="px-3 py-2 rounded-md w-28 border-[#F3F4F6] border bg-[#F3F4F6]"
                  />

                  <span className="text-gray-500">-</span>

                  <input
                    type="text"
                    value={slot.end}
                    onChange={(e) =>
                      updateTime(dayIndex, slotIndex, "end", e.target.value)
                    }
                    className="px-3 py-2 rounded-md w-28 border-[#F3F4F6] border bg-[#F3F4F6]"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">

                  {/* DELETE — Always show */}
                  <button
                    type="button"
                    onClick={() => removeSlot(dayIndex, slotIndex)}
                    className="text-gray-600 hover:text-red-600 border-[#F3F4F6] border bg-[#F3F4F6] p-2 rounded-4xl"
                  >
                    <X size={18} />
                  </button>

                  {/* ADD — hide when duplicate */}

                   <button
                    type="button"
                    onClick={() => duplicateSlot(dayIndex, slotIndex)}
                    className={`text-gray-700 border-[#F3F4F6] border bg-[#F3F4F6] p-2 rounded-4xl ${
                      slot.isDuplicate ? "hide-btn" : ""
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                 

                  {/* COPY — hide when duplicate */}
                  <button
                    type="button"
                    // onClick={() => addSlot(dayIndex)}
                    className={`text-gray-700 border-[#F3F4F6] border bg-[#F3F4F6] p-2 rounded-4xl ${
                      slot.isDuplicate ? "hide-btn" : ""
                    }`}
                  >
                    <Copy size={18} />
                    
                  </button>

                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  ))}
</div>
  );
}
