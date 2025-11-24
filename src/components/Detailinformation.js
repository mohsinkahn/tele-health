import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MultiSelectTags from "./MultiSelectTags";
import PaymentTermsSelectTag from "./PaymentTermsSelectTag";

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
                        {/* Row 1 */}
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Company Name</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Email Address</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Phone Number</label>
                            <input type="phone" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Website</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>

                        {/* Row 2 */}
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">VAT ID / Tax number</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Company Registration ID</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Contact Person</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Contact Position</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>

                        {/* Row 3 */}
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Legal Form</label>
                            <Select>
                                <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                    <SelectItem value="Form 1" className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer">Form 1</SelectItem>
                                    <SelectItem value="Form 2" className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer">Form 2</SelectItem>
                                    <SelectItem value="Form 3" className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer">Form 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Country</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">City</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Postal Code</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                    </div>

                    {/* Row 4 (Street + Head Office Address) */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Street</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Head Office Address</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                    </div>
                </section>

                {/* Commercial and Financial Data */}
                <section className="mt-5">
                    <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                        Commercial and Financial Data
                    </h2>

                    {/* Row 1 */}
                    <div className="form-group flex-col flex gap-2 mb-4">
                        <label className="text-[#202E2D] ">Licenses and Certifications</label>
                        <MultiSelectTags />
                    </div>

                    {/* Row 2 */}
                    <div className="form-group flex-col flex gap-2 mb-4">
                        <label className="text-[#202E2D] ">Payment Terms</label>
                        <PaymentTermsSelectTag />
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Settlement Currency</label>
                            <MultiSelectTags />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D] ">Payment Methods</label>
                            <PaymentTermsSelectTag />
                        </div>
                    </div>
                </section>



                <section className="mt-5">
                    <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                        Cooperation History
                    </h2>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Total Number of Orders</label>
                            <input
                                type="text"
                                className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                            />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Total Transaction Volume </label>
                            <input
                                type="text"
                                className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                            />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Years of Cooperation </label>
                            <input
                                type="text"
                                className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                            />
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                        Cooperation Details
                    </h2>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Purchase Frequency</label>
                            <input
                                type="text"
                                className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                            />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Average Order Value </label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Operating region</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Preferred Product Categories</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Delivery Method</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Fulfillment Options</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Delivery Addresses</label>
                            <input
                                type="text"
                                className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                            />
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
                                        value="Form 3"
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
                        Operational Data
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Supplier Type</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Product Categories</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Operating Region</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Available Transport Methods</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Delivery Terms (Incoterms)</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Just-in-Time Delivery Available</label>
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
                                        value="Form 3"
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
                            <label className="text-[#202E2D]">Minimum Order Quantity</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Maximum Order Quantity</label>
                            <input type="text" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm 
      focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm" />
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label className="text-[#202E2D]">Responsible Person</label>
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
                                        value="Form 3"
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
                    <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D] text-[18px]">
                        Cooperation Assessment
                    </h2>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Product Quality</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Delivery Punctuality</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Customer Service & Communication</label>
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
                                        value="Form 3"
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
                            <label htmlFor="" className="text-[#202E2D] ">Flexibility in Negotiation</label>
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
                                        value="Form 3"
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">Emergency contact persons</label>
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
                                        value="Form 3"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                    >
                                        Form 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="form-group flex-col flex gap-2">
                            <label htmlFor="" className="text-[#202E2D] ">General Notes</label>
                            <textarea name="" id="" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm resize-none"></textarea>
                        </div>
                    </div>
                </section>
            </div>
            {/* Buttons */}
        </form>
    );
}
