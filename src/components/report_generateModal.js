'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MultiSelectTags from "../components/MultiSelectTags";
import PaymentTermsSelectTag from "../components/PaymentTermsSelectTag";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FileUploader from './FileUploader';
const ReportGenerateModal = ({ isOpen, onClose }) => {
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
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
                                aria-label="Close modal"
                            >
                                ✕
                            </button>

                            <div className="mb-1">
                                <div className='mb-4'>
                                    <h1 className="text-2xl font-[500] text-[#101828]">Generate Report</h1>
                                    <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                                        Add a new report to your network
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
                                           
                                            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Start Date</label>
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
                                                    <label htmlFor="" className="text-[#202E2D] ">End Date</label>
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
                                                    <label htmlFor="" className="text-[#202E2D] ">Type</label>
                                                    <input
                                                        type="phone"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
                                                </div>

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Company</label>
                                                    <input
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                                    />
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

export default ReportGenerateModal;
