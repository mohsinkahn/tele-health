'use client';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import ImageUploadWithPreview from './ImageUploadWithPreview';
import { Trash, Plus, Minus, X } from "lucide-react";
 import Image from "next/image";

const AddCalendarTaskModal = ({ isOpen, onClose }) => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "4K UHD LED Smart TV with Chromecast Built-in",
            price: 70,
            image: "/tv.png",
            quantity: 1,
        },
        {
            id: 2,
            name: "Wired Over-Ear Gaming Headphones with USB",
            price: 250,
            image: "/head.png",
            quantity: 4,
        },
    ]);

    const increaseQuantity = (id) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((item) => item.id !== id));
    };





    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        onClose();
    };

    const [rows, setRows] = useState([
        { id: Date.now(), product: "", quantity: "", price: "" },
    ]);

    // 🟢 Add new row
    const handleAddRow = () => {
        setRows([
            ...rows,
            { id: Date.now(), product: "", quantity: "", price: "" },
        ]);
    };

    // 🔴 Delete row
    const handleDeleteRow = (id) => {
        setRows(rows.filter((row) => row.id !== id));
    };

    // 🟡 Handle field changes (optional, if you want data tracking)
    const handleChange = (id, field, value) => {
        setRows(
            rows.map((row) =>
                row.id === id ? { ...row, [field]: value } : row
            )
        );
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
                            className="bg-white p-6 rounded-lg shadow-lg lg:w-[1300px] w-full relative"
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
                                    <h1 className="text-2xl font-[500] text-[#7026A1]">Add Task</h1>
                                    
                                </div>
                                <hr className='text-[#EAECF0]' />
                            </div>

                            {/* Form */}
                            <div className="mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="overflow-auto max-h-[calc(100vh-310px)] p-1">
                                        <section className='bg-[#F5F7F5] p-4 rounded-lg'>
                                            
                                            <div className="grid md:grid-cols-1 grid-cols-1 gap-4">

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="status" className="text-[#757575]">Task Name  </label>
                                                     <input
                                                        id="Task Name"
                                                        type="text"
                                                        className="border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="productName" className="text-[#757575]">Description</label>
                                                       <textarea className="border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white">
                                                    </textarea>
                                                </div>

                                                

                                                
                                                
                                              


                                            </div>

                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4 mb-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="status" className="text-[#757575]">Deadline Date</label>
                                                      
                                                    <Select>
                                                        <SelectTrigger className="w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#7026A1] border border-[#EBEBEB] px-2 py-3 rounded-[8px] font-poppins bg-white">
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
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="status" className="text-[#757575]">Deadline Time</label>
                                                    <Select>
                                                        <SelectTrigger className="w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#7026A1] border border-[#EBEBEB] px-2 py-3 rounded-[8px] font-poppins bg-white">
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
                                            

                                                  

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="productName" className="text-[#757575]">Assigned to</label>
                                                    <Select>
                                                        <SelectTrigger className="w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#7026A1] border border-[#EBEBEB] px-2 py-3 rounded-[8px] font-poppins bg-white">
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
                                            Create
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

export default AddCalendarTaskModal;
