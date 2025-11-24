"use client";
import { useState } from "react";
import { FileText, MoreVertical } from "lucide-react";
import FileUploader from './FileUploader';


export default function AddResponsePage() {

    const data = [
        {
            title: "Product Inspection",
            addedBy: "Will John",
            date: "12/07/2023",
            files: [
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
            ],
        },
        {
            title: "Product Inspection",
            addedBy: "Will John",
            date: "12/07/2023",
            files: [
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
                { name: "Doc-01.pdf", size: "50KB", time: "2m ago" },
            ],
        },
    ];



    const [status, setStatus] = useState("Pending");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [actionOpen, setActionOpen] = useState(false);

    return (
        <div className="p-6   space-y-6 overflow-auto max-h-[calc(100vh-530px)]">
            {/* Add Attachment Section */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Add Attachment</h2>
                <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />


                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Title</label>
                        <input
                            id="title"
                            type="text"
                            className="w-full border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                        />
                    </div>

                </div>

                {/* Description */}
                <div className="mt-6">
                    <label className="block text-sm text-gray-600 mb-1">Upload File</label>
                    <FileUploader />
                </div>

                {/* Add Button */}
                <div className="flex justify-end mt-6">
                    <button className="bg-[#355E5B] text-white text-sm px-6 py-2 rounded hover:bg-[#2b4a48] cursor-pointer">
                        Add
                    </button>
                </div>
            </div>



            {/* Response Card Section */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5">
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                    Attachment
                </h2>
                <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                <div className="p-4 space-y-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg "
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center border border-[#EAECF0] rounded-md px-4 py-3 mx-4 mt-4 bg-[#FAFAFA]">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">

                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="28" height="28" rx="14" fill="#355E5B" fill-opacity="0.12" />
                                            <rect x="2" y="2" width="24" height="24" rx="12" fill="#355E5B" fill-opacity="0.12" />
                                            <path d="M20.1017 13.266L14.0913 19.2764C12.7244 20.6432 10.5084 20.6432 9.14152 19.2764C7.77469 17.9095 7.77469 15.6935 9.14152 14.3266L15.1519 8.31623C16.0632 7.40501 17.5405 7.40501 18.4518 8.31623C19.363 9.22745 19.363 10.7048 18.4518 11.6161L12.6771 17.3908C12.2214 17.8464 11.4827 17.8464 11.0271 17.3908C10.5715 16.9352 10.5715 16.1965 11.0271 15.7409L16.0947 10.6733" stroke="#355E5B" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <h2 className="font-normal text-[#202E2DCC] text-sm">
                                        {item.title}
                                    </h2>
                                </div>
                                <MoreVertical className="text-gray-500 w-4 h-4 cursor-pointer" />
                            </div>

                            {/* Subheader */}
                            <div className="flex justify-between px-4 py-2 text-xs text-gray-500">
                                <span>Added by: {item.addedBy}</span>
                                <span>Date: {item.date}</span>
                            </div>

                            {/* Files */}
                            <div className="flex flex-wrap gap-3 px-4 pb-4">
                                {item.files.map((file, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between border border-[#EAECF0] rounded-lg p-3 flex-1 min-w-[200px] max-w-[230px] "
                                    >
                                        <div className="flex items-center gap-2">
                                            <FileText className="text-teal-600 w-5 h-5" />
                                            <div>
                                                <p className="text-sm font-normal text-gray-800">
                                                    {file.name}
                                                </p>
                                                <p className="text-[11px] text-gray-500">{file.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[11px] text-gray-500">
                                                {file.size}
                                            </span>
                                            <MoreVertical className="text-gray-500 w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
