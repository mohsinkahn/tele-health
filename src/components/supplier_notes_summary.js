"use client";
import { useState } from "react";
import { FileText, MoreVertical } from "lucide-react";
import FileUploader from './FileUploader';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { time } from "framer-motion";


export default function SupplierNotesSummary() {

    const data = [
        {
            start_date:"12/02/2025",
            time:"01:23 Pm",
            addedBy: "Initial proposal from supplier: $500/ton, 30-day payment terms.",
            addedBy2: "Elban counter-offer: $470/ton, 45-day payment terms.",
            addedBy3: "Supplier revised: $480/ton, agreed to 45-day terms if order ≥ 500 tons",
            date: "02 sept 2025",
            date2:"04 sept 2025",
            date3:"07 sept 2025",
          
        },
        {
            
            start_date:"12/02/2025",
            time:"01:23 Pm",
            addedBy: "Initial proposal from supplier: $500/ton, 30-day payment terms.",
            addedBy2: "Elban counter-offer: $470/ton, 45-day payment terms.",
            addedBy3: "Supplier revised: $480/ton, agreed to 45-day terms if order ≥ 500 tons",
            date: "02 sept 2025",
            date2:"04 sept 2025",
            date3:"07 sept 2025",
            
        },
    ];



    const [status, setStatus] = useState("Pending");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [actionOpen, setActionOpen] = useState(false);

    return (
        <div className="space-y-6 overflow-auto max-h-[calc(100vh-530px)]">
            {/* Add Attachment Section */}
            <div className="bg-white  p-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Title</label>
                        <input
                            id="title"
                            type="text"
                            className="w-full border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Type</label>
                        <Select>
                            <SelectTrigger className=" w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg border border-[#F0F0F0] font-poppins bg-white w-full">
                                <SelectItem
                                    value="Supplier 1"
                                    className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-white cursor-pointer"
                                >
                                    Supplier 1
                                </SelectItem>
                                <SelectItem
                                    value="Supplier 2"
                                    className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-white cursor-pointer"
                                >
                                    Supplier 2
                                </SelectItem>
                                <SelectItem
                                    value="Supplier 3"
                                    className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-white cursor-pointer"
                                >
                                    Supplier 3
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>

                {/* Description */}
                <div className="mt-6">
                    <label className="block text-sm text-gray-600 mb-1">Add Note</label>
                    <textarea
                        rows="4"
                        placeholder="Write here"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                    ></textarea>
                </div>

                {/* Add Button */}
                <div className="flex justify-end mt-6">
                    <button className="bg-[#355E5B] text-white text-sm px-6 py-2 rounded hover:bg-[#2b4a48] cursor-pointer">
                        Add
                    </button>
                </div>
            </div>

{/* border-left: 1px solid #355E5BB2;
    border-bottom: 1px solid #355E5BB2;
    border-right: 1px solid #355E5BB2;
    border-top: 6px solid #355E5BB2; */}

            {/* Response Card Section */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 ">
                
                <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                <div className="p-4 space-y-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg border-t-[6px] border-t-[#355E5BB2] border-l-[#355E5BB2] border-b-[#355E5BB2] border-r-[#355E5BB2]"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center border border-[#EAECF0] rounded-md px-4 py-3 mx-4 mt-4 bg-[#FAFAFA]">
                                <div className="flex flex-col items-center gap-2">
                                    
                                    <h2>
                                        Payment terms
                                    </h2>
                                <p className="font-normal text-[#202E2DCC] text-sm">Payment details</p>    
                                </div>
                                <div className="flex items-center gap-4">
                                <div className="flex flex-col gap-2">
                                  <span className="font-normal text-[#202E2DCC] text-xs">{item.start_date}    </span>
                                  <span className="font-normal text-[#202E2DCC] text-xs">{item.time}    </span>  
                                   
                                </div>
                                
                                <MoreVertical className="text-gray-500 w-4 h-4 cursor-pointer" />   
                                </div>
                                
                            </div>

                            {/* Subheader */}
                            <div className="flex  px-4 py-2 text-xs text-gray-500 mb-4 mt-3">
                                <span>{item.date}</span> -
                                <span>{item.addedBy}</span>
                                
                            </div>
                            <div className="flex  px-4 py-2 text-xs text-gray-500 mb-4">
                                <span>{item.date2}</span> -
                                <span>{item.addedBy2}</span>
                                
                            </div>
                            <div className="flex  px-4 py-2 text-xs text-gray-500 mb-4">
                                <span>{item.date3}</span> -
                                <span>{item.addedBy3}</span>
                                
                            </div>

                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
