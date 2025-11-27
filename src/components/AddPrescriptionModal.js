'use client';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import ImageUploadWithPreview from './ImageUploadWithPreview';
import { Trash, Plus, Minus, X,ChevronDown } from "lucide-react";
import Image from "next/image";

const AddPrescriptionModal = ({ isOpen, onClose }) => {

const [medicines, setMedicines] = useState([
{
id: Date.now(),
name: "",
dosage: "",
times: {
morning: false,
afternoon: false,
evening: false,
night: false,
},
days: "",
instructions: "",
},
]);

// Add new medicine block
const addMedicine = () => {
setMedicines((prev) => [
...prev,
{
id: Date.now(),
name: "",
dosage: "",
times: {
morning: false,
afternoon: false,
evening: false,
night: false,
},
days: "",
instructions: "",
},
]);
};

// Delete one medicine block
const deleteMedicine = (id) => {
setMedicines((prev) => prev.filter((m) => m.id !== id));
};

// Update fields
const updateField = (id, field, value) => {
setMedicines((prev) =>
prev.map((m) =>
m.id === id
? { ...m, [field]: value }
: m
)
);
};

// Update checkboxes
const updateTime = (id, timeKey) => {
setMedicines((prev) =>
prev.map((m) =>
m.id === id
? {
...m,
times: {
...m.times,
[timeKey]: !m.times[timeKey]
}
}
: m
)
);
};

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
        <motion.div className="fixed inset-0 bg-[#1212125c] bg-opacity-40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} // click outside
            to close />

        {/* Modal Box with smooth popup animation */}
        <motion.div className="fixed inset-0 flex justify-center items-center z-50"
            initial={{ opacity: 0, scale: 0.8, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }} transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}>
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-[1300px] w-full relative" onClick={(e)=>
                e.stopPropagation()} // prevent modal close on inner click
                >
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                    aria-label="Close modal">
                    ✕
                </button>

                <div className="mb-1">
                    <div className='mb-4'>
                        <h1 className="text-2xl font-[500] text-[#7026A1]">Add Prescription</h1>

                    </div>
                    <hr className='text-[#EAECF0]' />
                </div>

                {/* Form */}
                <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="overflow-auto max-h-[calc(100vh-310px)] p-1">
                            <section className='bg-[#F5F7F5] p-4 rounded-lg'>
                                <div className="form-group flex-col flex gap-2 mb-4">
                                    <label htmlFor="status" className="text-[#757575]">File Name </label>
                                    <input id="File Name" type="text"
                                        className="border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white"
                                         />
                                </div>

                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">

                                    <div className="form-group flex-col flex gap-2">
                                        <label htmlFor="status" className="text-[#757575]">Appointment Date </label>
                                        <div className="relative w-full">
                                            <input id="date" type="date"
                                                className="border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] w-full pr-2 appearance-none bg-white" />
                                            {/* Custom gray calendar icon */}

                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                <path
                                                    d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z"
                                                    stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="form-group flex-col flex gap-2">
                                        <label htmlFor="status" className="text-[#757575]">Diagnose </label>
                                        <input id="Diagnose" type="text"
                                            className="border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white"
                                             />
                                    </div>

                                </div>

                                <div className="grid  grid-cols-1 gap-4 mt-4 mb-4">
                                    <div className="form-group flex-col flex gap-2">
                                        <label htmlFor="status" className="text-[#757575]">Doctor</label>

                                        <Select>
                                            <SelectTrigger
                                                className="w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#7026A1] border border-[#EBEBEB] px-2 py-3 rounded-[8px] font-poppins bg-white">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent
                                                className="rounded-lg border border-[#F0F0F0] font-poppins bg-white w-full">
                                                <SelectItem value="Active"
                                                    className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-white cursor-pointer">
                                                    Active
                                                </SelectItem>
                                                <SelectItem value="Inactive"
                                                    className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-white cursor-pointer">
                                                    Inactive
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>

                                    </div>

                                </div>

                                <div className="w-full space-y-6">

                                    {/* Header */}
                                    <div className="flex justify-between items-center pt-5">
                                        <h2 className="text-[#757575] font-medium">Medicines</h2>
                                        <button onClick={addMedicine}
                                        type="button"
                                            className="text-[#7026A1] text-sm font-medium flex items-center gap-1 cursor-pointer">
                                            + Add More
                                        </button>
                                    </div>

                                    {/* Medicines List */}
                                    {medicines.map((med, index) => (
                                    <div key={med.id} className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
                                        {/* Header */}
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-gray-700 font-medium">
                                                Medicine #{index + 1}
                                            </h3>

                                            {medicines.length > 1 && (
                                            <button onClick={()=> deleteMedicine(med.id)}>
                                                <X className="text-gray-400 hover:text-red-500" />
                                            </button>
                                            )}
                                        </div>

                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
                                            <div>
                                            <label htmlFor="status" className="text-[#757575]">Medicine Name</label>

                                            <input type="text" placeholder="Medicine Name" value={med.name}
                                                onChange={(e)=> updateField(med.id, "name", e.target.value)}
                                            className="w-full border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white mt-2"
                                            />
                                            </div>
                                            <div>
                                          <label htmlFor="status" className="text-[#757575] mb-2">Dosage</label>

                                            <input type="text" placeholder="Dosage" value={med.dosage} onChange={(e)=>
                                            updateField(med.id, "dosage", e.target.value)}
                                            className="w-full border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white mt-2"
                                            />
                                            </div>
                                  
                                           
                                        </div>

                                        <p className="text-gray-600 mb-2">When To Take</p>

                                        <div className="flex flex-wrap gap-3 mb-4">

                                            {["morning", "afternoon", "evening", "night"].map((time) => (
                                            <button key={time} type="button" onClick={()=> updateTime(med.id, time)}
                                                className={`px-4 py-2 rounded-xl border ${
                                                med.times[time]
                                                ? "bg-purple-600 text-white border-purple-600"
                                                : "bg-white border-gray-300 text-gray-600"
                                                }`}
                                                >
                                                {time.charAt(0).toUpperCase() + time.slice(1)}
                                            </button>
                                            ))}

                                        </div>

                                        <p className="text-gray-600 mb-2">No of Days</p>

                                        <div className="relative mb-4">
                                            <select value={med.days} onChange={(e)=> updateField(med.id, "days",
                                                e.target.value)}
                                                className="w-full border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white mt-2
                                                appearance-none"
                                                >
                                                <option value="">Select Days</option>
                                                <option value="3">3 Days</option>
                                                <option value="5">5 Days</option>
                                                <option value="7">7 Days</option>
                                                <option value="10">10 Days</option>
                                            </select>

                                            <ChevronDown className="absolute right-3 top-3 text-gray-500" />
                                        </div>

                                        <p className="text-gray-600 mb-2">Instructions</p>

                                        <textarea rows="4" placeholder="Type instructions..." value={med.instructions}
                                            onChange={(e)=>
              updateField(med.id, "instructions", e.target.value)
            }
            className="w-full border border-[#EBEBEB] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] bg-white mt-2 "
          />
        </div>
      ))}
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

export default AddPrescriptionModal;