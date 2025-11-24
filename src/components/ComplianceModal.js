'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MultiSelectTags from "../components/MultiSelectTags";
import PaymentTermsSelectTag from "../components/PaymentTermsSelectTag";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FileUploader from './FileUploader';


const ComplianceModal = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Blur & Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-[#1212125c] bg-opacity-40 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose} // click outside to close
                    />

                    {/* Modal Box with smooth popup animation */}
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center z-50"
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 30 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg w-[1300px] relative"
                            onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                                aria-label="Close modal"
                            >
                                ✕
                            </button>

                            <div className="mb-1">
                                <div className='mb-4'>
                                    <h1 className="text-2xl font-[500] text-[#101828]">Add Customs & Compliance Agencies</h1>
                                    <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                                        Add a new customs or compliance partner to your network
                                    </p>
                                </div>
                                <hr className='text-[#EAECF0]' />
                            </div>

                            {/* Form */}
                            <div className="mt-5">


                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    {/* Company Information */}
                                    <div className="overflow-auto max-h-[calc(100vh-310px)] p-1">
                                        <section>
                                            <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                                                Agency Information    
                                            </h2>
                                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Company Name</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Email Address</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Phone Number</label>
                                                    <input
                                                        type="phone"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Website</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">VAT ID / Tax number</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Company Registration ID</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Contact Person</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Contact Position</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Legal Form </label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Agency Region </label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Entity Type </label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Country</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                
                                            </div>
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">City</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Postal Code</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Head Office Address</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>

                                            </div>
                                        </section>

                                        {/* Commercial and Financial Data */}
                                        <section className="mt-5">
                                            <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                                                Scope of Services
                                            </h2>
                                            <div className="grid grid-cols-1 gap-4">

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Transport Licenses</label>
                                                    <FileUploader/>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Quality & Safety Certifications</label>
                                                    <MultiSelectTags />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Service Type</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Good Handled</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Transport Methods Supported</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Cooperation Model</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Availability for Urgent Cases</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                           
                                        </section>


                                        <section className="mt-5">
                                            <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                                                Commercial Terms
                                            </h2>
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Pricing Model</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Payment Terms</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Settlement Currencies</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Service Pricing Description</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Cooperation History</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Responsible Person</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>


                                        </section>

                                        <section className="mt-5">
                                            <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                                                Performance Assessment
                                            </h2>
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Customer Service & Communication</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Timeliness of Services</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Problem Solving & Customs Expertise</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Knowledge of Regulations</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Partner Status</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Business Risk Level</label>
                                                    <Select>
                                                        <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                                            <SelectItem
                                                                value="Form 1"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 1
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 2
                                                            </SelectItem>
                                                            <SelectItem
                                                                value="Form 2"
                                                                className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                            >
                                                                Form 3
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                            </div>

                                            <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Risks Identified</label>
                                                    <MultiSelectTags />
                                                </div>
                                            </div>
                                            
                                        </section>
                                    </div>
                                    {/* Buttons */}
                                    <section className="flex justify-end gap-4">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                        onClick={onClose}>
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Add
                                        </button>
                                    </section>

                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ComplianceModal;
