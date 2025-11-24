"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from 'next/image';
import TabsList from "./service_provider_tablist";

const statuses = [
    { label: "Active", value: "Active", bgColor: "bg-green-100", textColor: "text-green-700" },
    { label: "Onboarding", value: "Onboarding", bgColor: "bg-orange-100", textColor: "text-orange-700" },
    { label: "Blocked", value: "Blocked", bgColor: "bg-red-100", textColor: "text-red-700" },
];

export default function ServiceProviderViewComponent({ supplierId }) {
    const [status, setStatus] = useState(statuses[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="bg-white">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white w-full shadow-sm p-4" style={{ boxShadow: "0 0 4px 0 #355E5B52" }}>
                    {/* Left: Avatar and Info */}
                    <div className="flex items-center space-x-4">
                        {/* Avatar Circle with M */}
                        <Image
                            src="/mlogo.png"
                            alt="My Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        {/* Company Info */}
                        <div>
                            <h2 className="text-[#355E5B] font-semibold text-[24px]">ABC Company LTD</h2>
                            <p className="text-[#202E2D] text-[18px]">UAE</p>
                        </div>
                    </div>

                    {/* Right: Edit Icon and Custom Dropdown */}
                    <div className="flex items-center space-x-2" ref={dropdownRef}>
                        {/* Edit Button */}
                        <button
                            aria-label="Edit Supplier"
                            className="p-1.5 rounded hover:bg-gray-100 text-[#355E5B] cursor-pointer"
                        >
                            <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.6666 4.33331H8.06663C5.82642 4.33331 4.70631 4.33331 3.85066 4.76929C3.09802 5.15278 2.48609 5.7647 2.1026 6.51735C1.66663 7.373 1.66663 8.4931 1.66663 10.7333V21.9333C1.66663 24.1735 1.66663 25.2936 2.1026 26.1493C2.48609 26.9019 3.09802 27.5138 3.85066 27.8973C4.70631 28.3333 5.82642 28.3333 8.06663 28.3333H19.2666C21.5068 28.3333 22.6269 28.3333 23.4826 27.8973C24.2352 27.5138 24.8472 26.9019 25.2307 26.1493C25.6666 25.2936 25.6666 24.1735 25.6666 21.9333V16.3333M9.66659 20.3333H11.8993C12.5516 20.3333 12.8777 20.3333 13.1846 20.2596C13.4567 20.1943 13.7168 20.0866 13.9554 19.9404C14.2245 19.7754 14.4551 19.5448 14.9163 19.0836L27.6666 6.33331C28.7712 5.22874 28.7712 3.43788 27.6666 2.33331C26.5621 1.22874 24.7712 1.22874 23.6666 2.33331L10.9163 15.0836C10.4551 15.5448 10.2245 15.7754 10.0596 16.0446C9.91334 16.2831 9.8056 16.5433 9.74027 16.8154C9.66659 17.1223 9.66659 17.4484 9.66659 18.1006V20.3333Z"
                                    stroke="#355E5B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </button>

                        {/* Custom Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`flex w-[150px] items-center space-x-2 justify-between rounded-md border px-3 py-1 focus:outline-none cursor-pointer
                ${status.bgColor} ${status.textColor} border-transparent`}
                            >
                                <span>{status.label}</span>
                                <ChevronDown size={16} />
                            </button>

                            {isOpen && (
                                <ul
                                    className="absolute right-0 mt-1 w-40 bg-white rounded-md border border-[#ccc] z-10"
                                    style={{ boxShadow: "0 0 4px 0 #355E5B52" }}
                                >
                                    {statuses.map(({ label, value, bgColor, textColor }) => {
                                        const isSelected = status.value === value;

                                        return (
                                            <li
                                                key={value}
                                                onClick={() => {
                                                    setStatus({ label, value, bgColor, textColor });
                                                    setIsOpen(false);
                                                }}
                                                className={`cursor-pointer px-4 py-2 border-b border-[#ccc] hover:bg-opacity-30 hover:font-semibold
          ${value === "Active" ? "hover:bg-green-100 hover:text-green-700" : ""}
          ${value === "Onboarding" ? "hover:bg-orange-100 hover:text-orange-700" : ""}
          ${value === "Blocked" ? "hover:bg-red-100 hover:text-red-700" : ""}
        `}
                                            >
                                                {label}
                                            </li>
                                        );
                                    })}
                                </ul>

                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* tabs */}
            <div className="tabs-list mt-5">
                <TabsList />
            </div>
            
        </>
    );
}
