"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Edit, Trash2, Plus, FileText } from "lucide-react";

export default function ServiceProviderComplaints() {
  const [openIndex, setOpenIndex] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);
  const menuRefs = useRef([]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuIndex !== null &&
        menuRefs.current[menuIndex] &&
        !menuRefs.current[menuIndex].contains(event.target)
      ) {
        setTimeout(() => setMenuIndex(null), 100);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuIndex]);

  const complaints = [
    {
      id: crypto.randomUUID(),
      type: "Complaint Logged",
      author: "Alex Will",
      status: "Closed",
      description:
        "On 10 September 2025, our team received a shipment of 50 units of ceramic floor tiles from the supplier. Upon inspection, we discovered that all 50 units were either cracked, chipped, or otherwise damaged during transit. The packaging appeared insufficient to protect the items, and several boxes showed signs of rough handling. This issue has delayed the ongoing renovation project and requires an urgent replacement or credit adjustment. Supporting images have been uploaded for verification.",
    },
    {
      id: crypto.randomUUID(),
      type: "Complaint Logged",
      author: "Alex Will",
      status: "Pending",
      description:
        "On 10 September 2025, our team received a shipment of 50 units of ceramic floor tiles from the supplier. Upon inspection, we discovered that all 50 units were either cracked, chipped, or otherwise damaged during transit. The packaging appeared insufficient to protect the items, and several boxes showed signs of rough handling. This issue has delayed the ongoing renovation project and requires an urgent replacement or credit adjustment. Supporting images have been uploaded for verification.",
    },
    {
      id: crypto.randomUUID(),
      type: "Complaint Logged",
      author: "Alex Will",
      status: "Pending",
      description:
        "On 10 September 2025, our team received a shipment of 50 units of ceramic floor tiles from the supplier. Upon inspection, we discovered that all 50 units were either cracked, chipped, or otherwise damaged during transit. The packaging appeared insufficient to protect the items, and several boxes showed signs of rough handling. This issue has delayed the ongoing renovation project and requires an urgent replacement or credit adjustment. Supporting images have been uploaded for verification.",
    },
    {
      id: crypto.randomUUID(),
      type: "Complaint Logged",
      author: "Alex Will",
      status: "Closed",
      description:
        "On 10 September 2025, our team received a shipment of 50 units of ceramic floor tiles from the supplier. Upon inspection, we discovered that all 50 units were either cracked, chipped, or otherwise damaged during transit. The packaging appeared insufficient to protect the items, and several boxes showed signs of rough handling. This issue has delayed the ongoing renovation project and requires an urgent replacement or credit adjustment. Supporting images have been uploaded for verification.",
    },
  ];

  return (
    <div className="bg-white rounded-lg overflow-auto max-h-[calc(100vh-530px)] border border-gray-200">
      <div className="relative border-l border-gray-200">
        {complaints.map((complaint, i) => (
          <div key={complaint.id} className="mb-6 mx-4 relative">
            {/* Accordion Header */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left border border-[#EAECF0] rounded-lg shadow-sm p-4 mt-4 transition-all duration-300 hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 mb-1 bg-[#FAFAFA] p-2 border border-[#EAECF0A3] rounded">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      fill="#EAB919"
                      fillOpacity="0.12"
                    />
                    <path
                      d="M12 9.33398V12.0007M12 14.6673H12.0067M5.33333 9.68248V14.3188C5.33333 14.4819 5.33333 14.5634 5.35175 14.6401C5.36808 14.7082 5.39502 14.7732 5.43157 14.8328C5.4728 14.9001 5.53045 14.9578 5.64575 15.0731L8.92758 18.3549C9.04288 18.4702 9.10053 18.5279 9.16781 18.5691C9.22745 18.6056 9.29248 18.6326 9.36051 18.6489C9.43723 18.6673 9.51876 18.6673 9.68182 18.6673H14.3182C14.4812 18.6673 14.5628 18.6673 14.6395 18.6489C14.7075 18.6326 14.7725 18.6056 14.8322 18.5691C14.8995 18.5279 14.9571 18.4702 15.0724 18.3549L18.3542 15.0731C18.4695 14.9578 18.5272 14.9001 18.5684 14.8328C18.605 14.7732 18.6319 14.7082 18.6482 14.6401C18.6667 14.5634 18.6667 14.4819 18.6667 14.3188V9.68248C18.6667 9.51942 18.6667 9.43789 18.6482 9.36116C18.6319 9.29314 18.605 9.22811 18.5684 9.16846C18.5272 9.10118 18.4695 9.04353 18.3542 8.92823L15.0724 5.6464C14.9571 5.5311 14.8995 5.47345 14.8322 5.43222C14.7725 5.39567 14.7075 5.36874 14.6395 5.3524C14.5628 5.33398 14.4812 5.33398 14.3182 5.33398H9.68182C9.51876 5.33398 9.43723 5.33398 9.36051 5.3524C9.29248 5.36874 9.22745 5.39567 9.16781 5.43222C9.10053 5.47345 9.04288 5.5311 8.92758 5.6464L5.64575 8.92823C5.53045 9.04353 5.4728 9.10118 5.43157 9.16846C5.39502 9.22811 5.36808 9.29314 5.35175 9.36116C5.33333 9.43789 5.33333 9.51942 5.33333 9.68248Z"
                      stroke="#EAB919"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[14px] font-medium text-[#202E2DA8]">
                    {complaint.type}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Status badge */}
                  <div
                    className={`p-2 rounded border text-sm ${
                      complaint.status === "Pending"
                        ? "bg-[#EAB9191A] border-[#DBAD14] text-[#DBAD14]"
                        : "bg-white border-[#EAECF0] text-[#202E2DCC]"
                    }`}
                  >
                    {complaint.status}
                  </div>

                  {/* Dropdown menu */}
                  <div
                    className="relative inline-block text-left"
                    ref={(el) => (menuRefs.current[i] = el)}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuIndex(menuIndex === i ? null : i);
                      }}
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

                    {menuIndex === i && (
                      <div className="absolute right-[25px] mt-2 w-32 bg-white border rounded border-[#EAECF0] z-20 shadow-md">
                        <Link
                          href="#"
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Response
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Link>
                        <button
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </button>

            {/* Accordion Body */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === i ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 pl-8 border border-t-0 border-[#EAECF0] rounded-b-lg bg-[#FAFAFA]">
                <p className="text-[14px] text-[#202E2D99] mb-3">
                  By {complaint.author} — <span className="italic">01/12/2024</span>
                </p>

                <p className="text-sm text-[#202E2D99] mb-4 leading-relaxed">
                  {complaint.description}
                </p>

                {/* Attached Files */}
                <div className="flex gap-4 flex-wrap mb-6">
                  {[1, 2, 3].map((file) => (
                    <div
                      key={file}
                      className="flex items-center gap-2 border border-[#EAECF0] rounded-lg bg-white px-3 py-2"
                    >
                      <FileText className="w-4 h-4 text-[#355E5B]" />
                      <div className="text-sm text-gray-700">Doc-0{file}.pdf</div>
                      <span className="text-xs text-gray-400">2m ago</span>
                    </div>
                  ))}
                </div>

                {/* Add Response Form */}
                <div>
                  <h3 className="text-sm font-medium text-[#202E2D] mb-2">
                    Add Response
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Title"
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                    />
                    <select
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                    >
                      <option>Status</option>
                      <option>Pending</option>
                      <option>Closed</option>
                      <option>Resolved</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Description"
                    rows={3}
                    className="w-full border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] mb-4"
                  ></textarea>
                  <div className="text-right">
                  <button className="bg-[#355E5B] text-white text-sm px-6 py-2 rounded hover:bg-[#2b4a48] cursor-pointer">
                    Add
                  </button>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
