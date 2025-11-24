import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import MultiSelectTags from "../MultiSelectTags";
import PaymentTermsSelectTag from "../PaymentTermsSelectTag";

export default function AddClientForm() {

     const operatingRegion=["Poland", "Asia", "North America", "South America","Africa", "Middle East"];
     const preferredProductCategories=["Electronics", "Clothing & Textiles", "Chemicals & Cosmetics", "Food Products","Raw Materials & Components", "Machinery & Equipment", "Office Supplies", "Packaging Materials","Medical Supplies","Others"];
     const deliveryMethod=["Courier", "Freight Forwader", "Client Pickup", "Others"]; 
     const fulfilmentOptions=["Standard Delivery", "Dropshipping", "3PL Partner", "Others"];
     const payementTerms=["100% Prepayment", "Partial Prepayment + Balance", "Net 14 / Net 30 / Net 60", "Bank Letter of Credit (L/C)","Cash on Delivery (COD)","Others"];
     const settlementCurrency=["USD", "EUR", "PLN", "CNY","GBP","JPY","INR","Others"];
     const paymentMethod=["Bank Transfer", "Paypal", "Credit / Debit Card", "Revolut / Wise", "SWIFT","SEPA","Cryptocurrencies (e.g., USDT, BTC, ETH)","Other"];
     

    return (
        <main className="">
            <form className="space-y-8">
                {/* Header */}
                <header>
                    <h1 className="text-2xl font-semibold mb-1">Add Client</h1>
                    <p className="text-gray-600 text-sm">
                        Add client information for seamless project and communication management.
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
                                          Others
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                          
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Client Region </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            EU - Client
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Non-EU Client
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
                                            Wholesale Client 
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Retail Client 
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                           VIP Client 
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                           New Client 
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

                    {/* Commercial and Financial Data */}
                    <section className="mt-5">
                        <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                            Commercial and Financial Data
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Terms</label>
                                <MultiSelectTags options={payementTerms} />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Discounts and Loyalty Programs</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Settlement Currency</label>
                                <MultiSelectTags options={settlementCurrency} />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Methods</label>
                                <MultiSelectTags options={paymentMethod} />
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
                                 <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Regular
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Occassional
                                        </SelectItem>
                                       <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            One-time
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
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
                                            Low {"<"} €5,000
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Medium €5,000–25,000
                                        </SelectItem>
                                       <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            High {">"} €25,000
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Operating region</label>
                                <MultiSelectTags   options={operatingRegion}   />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Preferred Product Categories</label>
                                <MultiSelectTags   options={preferredProductCategories}   />
                            </div>

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Delivery Method</label>
                                <MultiSelectTags   options={deliveryMethod}   />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Fulfillment Options</label>
                                <MultiSelectTags   options={fulfilmentOptions}   />
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
                            Cooperation Assessment
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Communication Quality</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Excellent
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Good
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Acceptable
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Poor
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 5"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Not Evaluated
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Timeliness</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Always On Time
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Mostly On Time
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Frequently Delayed
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            High Risk
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 5"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Not Evaluated
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Complaint / Return History</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>

                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
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
                                            Very Flexible
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Somewhat Flexible
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Rigid / Not Open
                                        </SelectItem>
                                         <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Unknown
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
                                            Low Risk
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Moderate Risk
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 3"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            High Risk
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 4"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Blacklisted
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
