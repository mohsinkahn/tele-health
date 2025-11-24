"use client";
import { useState, useEffect, useRef } from "react";
import ActionsMenu from "@/components/ActionsMenu";
import Link from "next/link";
import { Eye, Edit, Trash2 } from "lucide-react";
// import { a } from "framer-motion/dist/types.d-Cjd591yU";



export default function Event() {

    const [openIndex, setOpenIndex] = useState(null);
    const menuRefs = useRef([]);

    // Close dropdown if clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                openIndex !== null &&
                menuRefs.current[openIndex] &&
                !menuRefs.current[openIndex].contains(event.target)
            ) {
                setTimeout(() => setOpenIndex(null), 100); // Delay to allow link clicks
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openIndex]);




    const suppliers = Array(20).fill({
        order_id: "#547388",
        event_name: "Abc Company",
        organizer: "Abc Company",
        type: "12/03/2023",
        location: "12/03/2023",
        contact_person: "Sarah Khan, Will Smith ",
        assigned_pm: "John Doe",
        start_date: "12/03/2023",
        end_date: "12/03/2023",
        status: "Attended",
        
        
    });

    const [selectedRows, setSelectedRows] = useState([]);

    const toggleSelectAll = () => {
        setSelectedRows(selectedRows.length === suppliers.length ? [] : suppliers.map((_, i) => i));
    };

    const toggleRow = (index) => {
        setSelectedRows((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const isAllSelected = selectedRows.length === suppliers.length;

    return (
        <div className="bg-white rounded-lg overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-425px)] border border-gray-200">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-[#F4F4F4] text-gray-600 uppercase text-xs sticky top-0 z-10 border border-[#EAECF0] whitespace-nowrap">
                    <tr>
                        <th className="px-4 py-3">
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={toggleSelectAll}
                            />
                        </th>
                        {[
                            "Order ID",
                            "Event Name",
                            "Organizer",
                            "Type",
                            "Location",
                            "Contact Person",
                            "Assigned PM",
                            "Start Date",
                            "End Date",
                            "Status",
                            "",
                        ].map((header, idx) => (
                            <th
                                key={idx}
                                className="px-6 py-3 font-[500] text-[#333333] text-[13px]"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((s, i) => (
                        <tr
                            key={i}
                            className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50 ${selectedRows.includes(i) ? "bg-gray-50" : ""
                                }`}
                        >
                            <td className="px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(i)}
                                    onChange={() => toggleRow(i)}
                                />
                            </td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.order_id}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.event_name}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.organizer}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.type}</td>

                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.location}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.contact_person}</td>
                             <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.assigned_pm}</td>
                             <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.start_date}</td>
                             <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.end_date}</td>
                             <td className="px-6 py-3">
                      <span className="bg-[#EAB9193D] text-[#EAB919] px-2 py-1 rounded text-xs">
                        {s.status}
                      </span>
                    </td>
                            
                            <td className="text-center">
                                <div
                                    className="relative inline-block text-left"
                                    ref={(el) => (menuRefs.current[i] = el)}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="p-1 rounded hover:bg-gray-200"
                                    >
                                        <svg
                                            width={25}
                                            height={24}
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
                                                stroke="#202E2D"
                                                strokeOpacity="0.6"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.5 6C13.0523 6 13.5 5.55228 13.5 5C13.5 4.44772 13.0523 4 12.5 4C11.9477 4 11.5 4.44772 11.5 5C11.5 5.55228 11.9477 6 12.5 6Z"
                                                stroke="#202E2D"
                                                strokeOpacity="0.6"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.5 20C13.0523 20 13.5 19.5523 13.5 19C13.5 18.4477 13.0523 18 12.5 18C11.9477 18 11.5 18.4477 11.5 19C11.5 19.5523 11.9477 20 12.5 20Z"
                                                stroke="#202E2D"
                                                strokeOpacity="0.6"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    {openIndex === i && (
                                        <div className="absolute right-[25px] mt-2 w-32 bg-white border rounded border-[#EAECF0] z-20">
                                            {/* ✅ "View" link works now */}
                                            <Link
                                                href="#"
                                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <Eye className="w-4 h-4 mr-2" />
                                                View
                                            </Link>

                                            <Link href="#"
                                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => {
                                                    console.log("Edit supplier", s.id);
                                                    setOpenIndex(null);
                                                }}
                                            >
                                                <Edit className="w-4 h-4 mr-2" />
                                                Edit
                                            </Link>

                                            <button
                                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                                onClick={() => {
                                                    console.log("Delete supplier", s.id);
                                                    setOpenIndex(null);
                                                }}
                                            >
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
