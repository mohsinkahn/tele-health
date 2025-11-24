'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ImageUploadWithPreview from './ImageUploadWithPreview';
import FileUploader from './FileUploader';


const AddNewProductModal = ({ isOpen, onClose }) => {
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
                            className="bg-white p-6 rounded-lg shadow-lg lg:w-[1300px] w-full  relative"
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
                                    <h1 className="text-2xl font-[500] text-[#101828]">Add Product</h1>
                                    <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                                        Add a new product to the system
                                    </p>
                                </div>
                                <hr className='text-[#EAECF0]' />
                            </div>

                            {/* Form */}
                            <div className="mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="overflow-auto max-h-[calc(100vh-310px)] p-1">
<section>
                                        <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                                            Product Details
                                        </h2>
                                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                            <div className="form-group flex-col flex gap-2">
                                                <label htmlFor="productName" className="text-[#202E2D]">Product Name</label>
                                                <input
                                                    id="productName"
                                                    type="text"
                                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group flex-col flex gap-2">
                                                <label htmlFor="category" className="text-[#202E2D]">Category</label>
                                                <input
                                                    id="category"
                                                    type="text"
                                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                />
                                            </div>

                                            <div className="form-group flex-col flex gap-2">
                                                <label htmlFor="supplier" className="text-[#202E2D]">Supplier</label>
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

                                            <div className="form-group flex-col flex gap-2">
                                                <label htmlFor="unitPrice" className="text-[#202E2D]">Unit Price</label>
                                                <input
                                                    id="unitPrice"
                                                    type="number"
                                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                />
                                            </div>

                                            <div className="form-group flex-col flex gap-2">
                                                <label htmlFor="stockQty" className="text-[#202E2D]">Stock Quantity</label>
                                                <input
                                                    id="stockQty"
                                                    type="number"
                                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                />
                                            </div>

                                            <div className="form-group flex-col flex gap-2">
                                                <label htmlFor="status" className="text-[#202E2D]">Status</label>
                                                <Select>
                                                    <SelectTrigger className="w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent className="rounded-lg border border-[#F0F0F0] font-poppins bg-white w-full">
                                                        <SelectItem
                                                            value="Active"
                                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-white cursor-pointer"
                                                        >
                                                            Active
                                                        </SelectItem>
                                                        <SelectItem
                                                            value="Inactive"
                                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-white cursor-pointer"
                                                        >
                                                            Inactive
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4 mb-6">
                                            <div className="form-group flex-col flex gap-2">
                                                <label htmlFor="description" className="text-[#202E2D]">Description</label>
                                                <input
                                                    id="description"
                                                    type="text"
                                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                />
                                            </div>
                                        </div>

                                        {/* Your custom Image Upload component with preview */}
                                       <FileUploader/>

                                    </section>
                                    </div>
                                    

                                    <hr className='text-[#EAECF0] mt-5' />

                                    {/* Action Buttons */}
                                    <div className="flex justify-end gap-2 mt-4">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="btn btn-secondary"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AddNewProductModal;
