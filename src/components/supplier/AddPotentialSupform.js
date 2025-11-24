import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import MultiSelectTags from "../MultiSelectTags";
import PaymentTermsSelectTag from "../PaymentTermsSelectTag";
import FileUploader from '../FileUploader';


export default function AddSupplierForm() {

    const productCategories = ["Electronics", "Clothing & Textiles", "Food Product", "Raw materials & Component", "Packaging Materials", "Medical Supplies", "Office Supplies", "Machinery & Equipment", "Chemical & Cosmetics","Others"];
    const deliveryTerms = ["EXW – Ex Works", "FOB – Free on Board", "CIF – Cost, Insurance & Freight", "DDP – Delivered Duty Paid", "FCA, DAP, CPT, etc.", "Others"];
    const paymentTerms = ["100% Prepayment", "Partial Prepayment + Balance", "Net 14 / Net 30 / Net 60", "Bank Letter of Credit (L/C)", "Cash on Delivery (COD)", "Others"];
    const operatingRegion = ["Poland", "European Union", "Asia", "North America", "South America", "Africa", "Middle East"];
    const documentExchanged = ["NDA", "Offer", "Product List", "Price List", "Brochure", "Certificates"];
    const riskIdentified = ["No certifications/licenses", "Pricing instability", "Long lead time", "Limited shipping methods", "No quality control evidence", "Limited production scale","Poor communication","Country under sanctions","No warranty on goods"];



    return (
        <main className="">
            <form className="space-y-8">
                {/* Header */}
                <header>
                    <h1 className="text-2xl font-semibold mb-1">Add Potential Supplier</h1>
                    <p className="text-gray-600 text-sm">
                        Add potential supplier information for easy tracking and collaboration
                    </p>
                </header>

                {/* Company Information */}
                <div className="overflow-auto max-h-[calc(100vh-310px)] p-1">
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
                                            Sole Proprietorship/Freelancer
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            General / Civil Partnership - SNC, SCS, SC
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Limited Liability Company - LLC, Ltd., Co., SARL, GmbH, Sp. z o.o., G.K., BV, Pvt Ltd, HK Ltd., Sdn. Bhd., Pte. Ltd., Pty Ltd, Yuhan Hoesa
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Joint Stock Company – S.A., JSC, K.K., A.Ş., AG, NV, SpA, Bhd., Chusik Hoesa
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 5"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Limited Partnership – LP, LLP, KG, SCA
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 6"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            State-Owned Enterprise – SOE, State Enterprise, Public Corporation
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 7"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Joint Venture – JV, Konsorcjum, Strategic Alliance, GIE
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 8"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Representative Office
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 9"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Branch Office

                                        </SelectItem>
                                         <SelectItem
                                            value="Form 10"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Other

                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Supplier Region </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            EU supplier 
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Non-EU supplier 
                                        </SelectItem>
                                        
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Client Type </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Prospect 
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            In Negotiation
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Inactive
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Declined
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 5"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Suspended
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 6"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Blacklisted
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

                    <section className="mt-5">
                        <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                            Business Characteristics
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Licenses and Certifications</label>
                                <FileUploader />
                            </div>
                           

                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                             <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Supplier Type</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Manufacturer
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Wholesaler
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Distributor
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Agent / Broker
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 5"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            OEM Partner
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 6"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Service Provider
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Product Categories</label>
                                <MultiSelectTags options={productCategories}   />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Delivery Terms (Incoterms)</label>
                                <MultiSelectTags options={deliveryTerms}   />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Just-in-Time Delivery Available</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                           Yes
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            No
                                        </SelectItem>
                                       
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Minimum Order Quantity</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Maximum Order Quantity</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Terms</label>
                                <MultiSelectTags options={paymentTerms}   />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Operating region</label>
                                <MultiSelectTags options={operatingRegion}   />
                            </div>

                        </div>
                    </section>


                    <section className="mt-5">
                        <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                            Contact and Communication History
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">First Contact Date</label>
                                 <div className="relative w-full">
                                                        <input
                                                            id="date"
                                                            type="date"
                                                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] w-full pr-2 appearance-none"
                                                        />
                                                        {/* Custom gray calendar icon */}

                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                            <path d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </div>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Contact Source </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Trade Show
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Website
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Referral
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Ad
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 5"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Cold Call
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 6"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Email Inquiry
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 7"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Others
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Responsible Person </label>
                               <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Interaction Log</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Last Outcome </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            No Interest
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Follow-up Planned
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Waiting Reply
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Negotiation Status </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Initial Talk
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Offer Sent
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Under Review
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            In Price Negotiation
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 5"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Final Stage
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 6"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Paused
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 7"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Rejected / Dropped
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                             <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Rejection Reason (if declined) </label>
                               <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                         Price
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Timing
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Documents missing
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Others
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Documents Exchanged </label>
                                <MultiSelectTags  options={documentExchanged}  />
                            </div>
                        </div>
                    </section>



                    <section className="mt-5">
                        <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                            Commercial Evaluation
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Potential Contract Value</label>
                               <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Chance of Closing Cooperation</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            High {">"} 80% 
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Medium 50 - 80%
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Low {"<"} 50%
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Long-term Potential</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Yes
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Maybe
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            No
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Risks Identified</label>
                               <MultiSelectTags  options={riskIdentified}  />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Fit to Import Needs</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Strong
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Partial
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Weak
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Recommended Next Step</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Followup In The Future
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Finalize Cooperation
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Close Contact
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
                <section className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="btn btn-secondary"
                    >
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
        </main>
    );
}
