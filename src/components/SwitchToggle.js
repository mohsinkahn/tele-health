"use client";
import { useState } from "react";

export default function SwitchToggle({
  value,
  onChange,
  defaultValue = false,
  size = "md",
  activeColor = "bg-[#7026A1]",
  inactiveColor = "bg-gray-300",
}) {
  const [internal, setInternal] = useState(defaultValue);
  const isControlled = value !== undefined;
  const enabled = isControlled ? value : internal;

  const toggle = () => {
    if (isControlled) {
      onChange && onChange(!value);
    } else {
      setInternal(!internal);
      onChange && onChange(!internal);
    }
  };

  // sizes
  const sizes = {
    sm: "h-5 w-9",
    md: "h-6 w-11",
    lg: "h-7 w-14",
  };

  const circleSizes = {
    sm: "h-4 w-4",
    md: "h-4 w-5",
    lg: "h-6 w-6",
  };

  const translate = {
    sm: enabled ? "translate-x-4" : "translate-x-1",
    md: enabled ? "translate-x-5" : "translate-x-1",
    lg: enabled ? "translate-x-7" : "translate-x-1",
  };

  return (
    <button
      onClick={toggle}
      type="button"
      className={`relative inline-flex rounded-full transition py-1 
        ${sizes[size]} 
        ${enabled ? activeColor : inactiveColor}`}
    >
      <span
        className={`inline-block rounded-full bg-white transform transition 
          ${circleSizes[size]} 
          ${translate[size]}`}
      />
    </button>
  );
}
