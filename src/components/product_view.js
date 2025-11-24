"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown,Edit3 } from "lucide-react";
import Image from 'next/image';
import TabsList from "./product_tablist";

const statuses = [
    { label: "Active", value: "Active", bgColor: "bg-green-100", textColor: "text-green-700" },
    { label: "Onboarding", value: "Onboarding", bgColor: "bg-orange-100", textColor: "text-orange-700" },
    { label: "Blocked", value: "Blocked", bgColor: "bg-red-100", textColor: "text-red-700" },
];

export default function ProductViewComponent({ ProductId }) {
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
    name: "Safety Helmet",
    supplier: "ABC Metals",
    category: "Construction",
    unitPrice: "$ 45",
    stockQty: "200 pcs",
    status: "Active",
    description:
      "High-strength steel bars used for concrete reinforcement in construction projects. Available in multiple sizes with certifications for durability and compliance. High-strength steel bars used for concrete reinforcement in construction projects. Available in multiple sizes with certifications for durability and compliance.",
    images: [
      "/cap2.png",
      "/cap2.png",
      "/cap2.png",
    ],
  };

    return (
        <>
            <div className="bg-white">
                 <div className="bg-white border border-[#E5E7EB] rounded-md p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium text-[14px] text-[#202E2D]">Product Information</h2>
        <button className="text-[#355E5B] hover:text-[#1E3A39]">
          <Edit3 className="w-4 h-4" />
        </button>
        
      </div>
       <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />

      <div className="flex gap-4">
        {/* Left - Product Images */}
        <div className="w-1/4 border border-[#E5E7EB] rounded-md p-3 flex flex-col items-center">
          {/* <img
            src={product.images[0]}
            alt="Product"
            className="w-50 h-24 object-contain mb-3"
          /> */}
          <Image
          src={product.images[0]}
          alt="Product"
          width={50}
          height={24}
          className="w-50 h-24 object-contain mb-3"
          />
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-[#355E5B]">&lt;</button>
            {product.images.map((img, index) => (
              // <img
              //   key={index}
              //   src={img}
              //   alt="thumb"
              //   className="w-10 h-10 object-contain border border-[#E5E7EB] rounded-md"
              // />
               <Image
          key={index}
          src={img}
          alt="thumb"
          width={10}
          height={10}
          className="w-10 h-10 object-contain border border-[#E5E7EB] rounded-md"
          />
            ))}
            <button className="text-gray-400 hover:text-[#355E5B]">&gt;</button>
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="w-3/4 flex flex-col gap-3 ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 text-sm text-[#202E2D] border border-[#E5E7EB] rounded-md p-3">
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Product Name</p>
              <p className="text-[#202E2D99]">{product.name}</p>
            </div>
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Category</p>
              <p className="text-[#202E2D99]">{product.category}</p>
            </div>
            <div className="flex justify-between ">
              <p className="font-medium text-[#202E2D]">Stock Quantity</p>
              <p className="text-[#202E2D99]">{product.stockQty}</p>
            </div>
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Supplier Company</p>
              <p className="text-[#202E2D99]">{product.supplier}</p>
            </div>
            <div className="flex justify-between border-r border-[#E5E7EB] pr-2">
              <p className="font-medium text-[#202E2D]">Unit Price</p>
              <p className="text-[#202E2D99]">{product.unitPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-[#202E2D]">Status</p>
              <span className="bg-[#E1F7E6] text-[#357A38] px-3 py-1 rounded text-xs">
                {product.status}
              </span>
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
