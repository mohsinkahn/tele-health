import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MultiSelectTags from "./MultiSelectTags";
import PaymentTermsSelectTag from "./PaymentTermsSelectTag";
import FileUploader from './FileUploader';


export default function DetailInformation() {
    return (
        <form className="space-y-8">
            {/* Company Information */}
            <div className="overflow-auto max-h-[calc(100vh-469px)] p-1">
                <section>
                    <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                        Company Information
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
                            <label htmlFor="" className="text-[#202E2D] ">Company Region  </label>
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
                            <label htmlFor="" className="text-[#202E2D] ">Provider Type</label>
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
                            <label htmlFor="" className="text-[#202E2D] ">Industry Certifications</label>
                            <FileUploader />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Sector Specialization</label>
                            <MultiSelectTags />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
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
                            <label htmlFor="" className="text-[#202E2D] ">Service Delivery Method</label>
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
                            <label htmlFor="" className="text-[#202E2D] ">Geographic Coverage</label>
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
                    </div>
                    <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4">
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
                            <label htmlFor="" className="text-[#202E2D] ">Quality of Services</label>
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
                            <label htmlFor="" className="text-[#202E2D] ">Fit for Business Needs</label>
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


                </section>
            </div>
            {/* Buttons */}
        </form>
    );
}
