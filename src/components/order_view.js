"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown,Edit3 } from "lucide-react";
import Image from 'next/image';
import TabsList from "./order_tablist";

const statuses = [
    { label: "Active", value: "Active", bgColor: "bg-green-100", textColor: "text-green-700" },
    { label: "Onboarding", value: "Onboarding", bgColor: "bg-orange-100", textColor: "text-orange-700" },
    { label: "Blocked", value: "Blocked", bgColor: "bg-red-100", textColor: "text-red-700" },
];

export default function OrderViewComponent({ ProductId }) {
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

    const product = {
    order_id:"#4455",
    supplier_name: "ABC Metals",
    status: "Active",
    order_date: "12/02/2021",
    client_name: "John Lewis",
    delivery_terms: "3 - 6 Days ",
    etd: "12/03/2021",
    partner: "Logistic ",
    country: "USA",
    eta: "12/03/2021",
    partner_company: "ABC Logistic ",
    delivery_address: "123 Abc Area",
    
    description:
      "High-strength steel bars used for concrete reinforcement in construction projects. Available in multiple sizes with certifications for durability and compliance. High-strength steel bars used for concrete reinforcement in construction projects. Available in multiple sizes with certifications for durability and compliance.",
    
  };

    return (
        <>
            <div className="bg-white">
                 <div className="bg-white border border-[#E5E7EB] rounded-md p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium text-[14px] text-[#202E2D]">Order Information</h2>
        <button className="text-[#355E5B] hover:text-[#1E3A39]">
          <Edit3 className="w-4 h-4" />
        </button>
        
      </div>
       <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />

      <div className="flex gap-4">
        {/* Left - Product Images */}
        

        {/* Right - Product Info */}
        <div className="flex flex-col gap-2 ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm text-[#202E2D] border border-[#E5E7EB] rounded-md p-3">
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Order ID</p>
              <p className="text-[#202E2D99]">{product.order_id}</p>
            </div>
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Supplier Name</p>
              <p className="text-[#202E2D99]">{product.supplier_name}</p>
            </div>
            <div className="flex justify-between ">
              <p className="font-medium text-[#202E2D]">Status</p>
              <span className="bg-[#E1F7E6] text-[#357A38] px-3  rounded text-xs">
                {product.status}
              </span>
            </div>
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Order Date</p>
              <p className="text-[#202E2D99]">{product.order_date}</p>
            </div>
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Client Name</p>
              <p className="text-[#202E2D99]">{product.client_name}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">Delivery Terms</p>
              <p className="text-[#202E2D99]">{product.delivery_terms}</p>
              
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">ETD</p>
              <p className="text-[#202E2D99]">{product.etd}</p>
              
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">Partner</p>
              <p className="text-[#202E2D99]">{product.partner}</p>
              
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">Country</p>
              <p className="text-[#202E2D99]">{product.country}</p>
              
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">ETA</p>
              <p className="text-[#202E2D99]">{product.eta}</p>
              
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">Partners Company</p>
              <p className="text-[#202E2D99]">{product.partner_company}</p>
              
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">Delivery Address</p>
              <p className="text-[#202E2D99]">{product.delivery_address}</p>
              
            </div>
            
          </div>

          {/* Description */}
          <div className="border border-[#E5E7EB] rounded-md p-3 text-sm text-[#202E2D99] leading-relaxed">
            <p>
              <span className="font-medium text-[#202E2D]">Description </span>
              {product.description}
            </p>
          </div>
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
