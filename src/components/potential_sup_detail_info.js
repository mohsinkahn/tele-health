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
                                                          value="Form 3"
                                                          className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                                      >
                                                          Form 3
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
                                                <label htmlFor="" className="text-[#202E2D] ">Product Categories</label>
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
                                                <label htmlFor="" className="text-[#202E2D] ">Delivery Terms (Incoterms)</label>
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
                                                <label htmlFor="" className="text-[#202E2D] ">Just-in-Time Delivery Available</label>
                                                <input
                                                    type="text"
                                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                />
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
                                                <label htmlFor="" className="text-[#202E2D] ">Responsible Person </label>
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
                                                <label htmlFor="" className="text-[#202E2D] ">Documents Exchanged </label>
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
                                               <label htmlFor="" className="text-[#202E2D] ">Risks Identified</label>
                                              <input
                                                   type="text"
                                                   className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                               />
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
