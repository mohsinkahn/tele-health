import React, { useState, useRef, useEffect } from 'react';

const options = ["100% Prepayment", "Cash on Delivery (COD)", "Net 15", "Net 30", "Net 45", "Net 60"];

export default function PaymentTermsSelectTag() {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleSelect = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const removeTag = (option) => {
    setSelected((prev) => prev.filter((item) => item !== option));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Display selected tags */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="min-h-[46px] border border-[#D0D5DD] px-2 py-2 rounded-[8px] flex flex-wrap items-center gap-2 cursor-pointer shadow-sm relative"
      >
        {/* Placeholder */}
        {selected.length === 0 && (
          <span className="text-gray-400 text-sm">Select</span>
        )}

        {/* Selected tags */}
        {selected.map((item) => (
          <span
            key={item}
            className="bg-[#355E5B1A] border border-[#355E5B52] text-sm text-[#101828] rounded-md px-3 py-1 flex items-center gap-2 shadow-sm"
          >
            {item}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTag(item);
              }}
              className="text-[#667085] hover:text-red-500 text-xs"
            >
              ×
            </button>
          </span>
        ))}

        {/* Dropdown Arrow (aligned right) */}
        <div className="ml-auto">
          <svg className="w-4 h-4 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute w-full bg-white border border-[#355E5B52] mt-2 rounded-sm shadow-sm z-10 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleSelect(option)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#355E5B] hover:text-white ${selected.includes(option) ? "bg-[#EEF4F3]" : ""
                }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
