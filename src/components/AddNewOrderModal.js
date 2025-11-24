'use client';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ImageUploadWithPreview from './ImageUploadWithPreview';
import { Trash, Plus, Minus, X } from "lucide-react";
 import Image from "next/image";

const AddNewOrderModal = ({ isOpen, onClose }) => {

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
                                    <h1 className="text-2xl font-[500] text-[#101828]">Add Order</h1>
                                    <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                                        Add a new order to your network
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
                                                Order Details
                                            </h2>
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="productName" className="text-[#202E2D]">Order ID</label>
                                                    <input
                                                        id="OrderID"
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="category" className="text-[#202E2D]">Date</label>
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
                                                    <label htmlFor="supplier" className="text-[#202E2D]">Supplier Name</label>
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
                                                    <label htmlFor="status" className="text-[#202E2D]">Client Name</label>
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
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="unitPrice" className="text-[#202E2D]">ETA</label>
                                                    <div className="relative w-full">
                                                        <input
                                                            id="eta"
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
                                                    <label htmlFor="stockQty" className="text-[#202E2D]">ETD</label>
                                                    <div className="relative w-full">
                                                        <input
                                                            id="etd"
                                                            type="date"
                                                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] w-full pr-2 appearance-none"
                                                        />
                                                        {/* Custom gray calendar icon */}

                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                            <path d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </div>
                                                </div>


                                            </div>

                                            <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="description" className="text-[#202E2D]">Status</label>
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
                                            </div>

                                            {/* Your custom Image Upload component with preview */}


                                        </section>
                                        <section className='mt-6'>
                                            <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                                                Delivery Information
                                            </h2>
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="productName" className="text-[#202E2D]">Logistic Partners</label>
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
                                                    <label htmlFor="category" className="text-[#202E2D]">Custom & Compliance</label>
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
                                                    <label htmlFor="supplier" className="text-[#202E2D]">Service Provider</label>
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
                                                    <label htmlFor="status" className="text-[#202E2D]">Delivery Terms</label>
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
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="unitPrice" className="text-[#202E2D]">Country</label>
                                                    <input
                                                        id="country"
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                    />
                                                </div>

                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="stockQty" className="text-[#202E2D]">City</label>
                                                    <input
                                                        id="city"
                                                        type="text"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                    />
                                                </div>


                                            </div>

                                            <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="description" className="text-[#202E2D]">Delivery Address</label>
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
                                            </div>

                                            {/* Your custom Image Upload component with preview */}


                                        </section>
                                        <section className='mt-6'>
                                            <h2 className="font-medium mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D]  text-[18px]">
                                                Products
                                            </h2>
                                            {/* <div className="flex flex-wrap lg:flex-nowrap gap-4">
                                                 <div className="form-group flex-col flex gap-2 w-full">
                                                    <label htmlFor="supplier" className="text-[#202E2D]">Select Product</label>
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
                                                <div className="form-group flex-col flex gap-2 w-full">
                                                    <label htmlFor="productName" className="text-[#202E2D]">Quantity</label>
                                                    <input
                                                        id="quantity"
                                                        type="number"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group flex-col flex gap-2 w-full">
                                                    <label htmlFor="category" className="text-[#202E2D]">Price</label>
                                                      <input
                                                        id="price"
                                                        type="number"
                                                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                        required
                                                       />
                                                   
                                                </div>

                                               
                                                <div className="form-group flex-col flex gap-2 lg:w-auto w-full">
                                                     <button
                                            type='button'
                                            className="btn btn-primary mt-8 lg:w-[50px] w-full"
                                        >
                                            +
                                        </button>
                                                </div>
                                              


                                            </div> */}


                                            {rows.map((row, index) => (
                                                <div
                                                    key={row.id}
                                                    className="flex flex-wrap lg:flex-nowrap gap-4  pb-4"
                                                >
                                                    {/* Select Product */}
                                                    <div className="form-group flex-col flex gap-2 w-full">
                                                        <label className="text-[#202E2D]">Select Product</label>
                                                        <Select
                                                            onValueChange={(value) => handleChange(row.id, "product", value)}
                                                        >
                                                            <SelectTrigger className="w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                                                <SelectValue placeholder="Select" />
                                                            </SelectTrigger>
                                                            <SelectContent className="rounded-lg border border-[#F0F0F0] font-poppins bg-white w-full">
                                                                <SelectItem value="Supplier 1">Supplier 1</SelectItem>
                                                                <SelectItem value="Supplier 2">Supplier 2</SelectItem>
                                                                <SelectItem value="Supplier 3">Supplier 3</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>

                                                    {/* Quantity */}
                                                    <div className="form-group flex-col flex gap-2 w-full">
                                                        <label className="text-[#202E2D]">Quantity</label>
                                                        <input
                                                            type="number"
                                                            value={row.quantity}
                                                            onChange={(e) =>
                                                                handleChange(row.id, "quantity", e.target.value)
                                                            }
                                                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Price */}
                                                    <div className="form-group flex-col flex gap-2 w-full">
                                                        <label className="text-[#202E2D]">Price</label>
                                                        <input
                                                            type="number"
                                                            value={row.price}
                                                            onChange={(e) => handleChange(row.id, "price", e.target.value)}
                                                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B]"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Button — "+" for last row only, else delete */}
                                                    <div className="form-group flex-col flex gap-2 lg:w-auto w-full items-center justify-end">
                                                        {index === rows.length - 1 ? (
                                                            <button
                                                                type="button"
                                                                onClick={handleAddRow}
                                                                className="bg-[#355E5B] text-white rounded-[8px] h-[46px] w-[50px] flex items-center justify-center hover:bg-[#2b4a48] mt-8"
                                                            >
                                                                <Plus className="w-6 h-6 text-white" />
                                                            </button>
                                                        ) : (
                                                            <button
                                                                type="button"
                                                                onClick={() => handleDeleteRow(row.id)}
                                                                className="bg-red-500 text-white rounded-[8px] h-[46px] w-[50px] flex items-center justify-center hover:bg-red-600 mt-8"
                                                            >
                                                                <Trash className="w-6 h-6 text-white" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}

                                            {/* add product table start */}
                                            <div className="border border-[#E0E0E0] rounded-lg overflow-hidden shadow-sm mt-6">
                                                <table className="w-full text-sm text-left">
                                                    <thead className="bg-gray-100">
                                                        <tr>
                                                            <th className="px-6 py-3 font-medium text-gray-600">Products</th>
                                                            <th className="px-6 py-3 font-medium text-gray-600">Price</th>
                                                            <th className="px-6 py-3 font-medium text-gray-600">Quantity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {products.map((item) => (
                                                            <tr key={item.id} className=" hover:bg-gray-50 transition">
                                                                <td className="px-6 py-4 flex items-center gap-3">
                                                                    <button
                                                                        onClick={() => deleteProduct(item.id)}
                                                                        className="text-red-500 hover:text-red-700 transition"
                                                                    >
                                                                        <X size={18} />
                                                                    </button>
                                                                    {/* <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="w-12 h-12 object-contain"
                                                                    /> */}
                                                                    <Image
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        width={12}
                                                                        height={12}
                                                                        className="w-12 h-12 object-contain"
                                                                    
                                                                    />
                                                                    <span className="text-gray-700">{item.name}</span>
                                                                </td>
                                                                <td className="px-6 py-4 text-gray-700">${item.price}</td>
                                                                <td className="px-6 py-4">
                                                                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1 w-fit">
                                                                        <button
                                                                            onClick={() => decreaseQuantity(item.id)}
                                                                            className="text-gray-600 hover:text-gray-800"
                                                                        >
                                                                            <Minus size={14} />
                                                                        </button>
                                                                        <span className="text-gray-700 w-5 text-center">
                                                                            {item.quantity.toString().padStart(2, "0")}
                                                                        </span>
                                                                        <button
                                                                            onClick={() => increaseQuantity(item.id)}
                                                                            className="text-gray-600 hover:text-gray-800"
                                                                        >
                                                                            <Plus size={14} />
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* add product table end */}

                                            <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4">
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">Description</label>
                                                    <textarea name="" id="" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm resize-none"></textarea>
                                                </div>
                                                <div className="form-group flex-col flex gap-2">
                                                    <label htmlFor="" className="text-[#202E2D] ">General Notes</label>
                                                    <textarea name="" id="" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm resize-none"></textarea>
                                                </div>
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
                                            Add Order
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

export default AddNewOrderModal;
