"use client";
import { useState } from "react";
import ActionsMenu from "@/components/ActionsMenu";
import { Trash, Plus, Minus, X } from "lucide-react";
import Image from "next/image";


export default function OrderOrder() {


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
        {
            id: 3,
            name: "4K UHD LED Smart TV with Chromecast Built-in",
            price: 70,
            image: "/tv.png",
            quantity: 1,
        },
        {
            id: 4,
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
        
            <div className="border border-[#E0E0E0] rounded-lg max-h-[calc(100vh-700px)] overflow-auto shadow-sm mt-6">
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
                                    className="object-contain"
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
        
    );
}
