"use client";
import { useState } from "react";
import ActionsMenu from "@/components/ActionsMenu";

export default function CustomCompFinancial() {


    const suppliers = Array(20).fill({
        id: "#547388",
        order_id: "#89976",
        total_amount: "$ 6782",
        paid_amount: "$ 6782",
        payment_method: "Bank Transfer",
        issue_date: "12/02/2023",
        payment_date: "12/03/2023",
        assigned_pm: "Sarah Khan",
        status: "Paid",
        notes: "Request samples",
    });

    const [selectedRows, setSelectedRows] = useState([]);

    const toggleSelectAll = () => {
        setSelectedRows(selectedRows.length === suppliers.length ? [] : suppliers.map((_, i) => i));
    };

    const toggleRow = (index) => {
        setSelectedRows((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const isAllSelected = selectedRows.length === suppliers.length;

    return (
        <>
            <div className="overflow-auto max-h-[calc(100vh-530px)]">
                <div className="bg-white rounded-lg grid lg:grid-cols-3 grid-cols-1 gap-3  mb-4">
                    <div className="flex flex-col justify-between p-4 bg-white rounded-xl shadow-custom border border-gray-100 mb-2">
                        <div className="flex justify-between  mb-2 items-center">
                            <div>
                                <h3 className="text-sm font-medium text-[#636d6c] mb-2">Total Invoices </h3>
                                <p className="text-2xl font-medium text-[#485453]">4,533</p>
                            </div>

                            <div className="p-1 rounded-full bg-light-teal">


                                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.333313" width="38" height="38" rx="19" fill="#355E5B" fill-opacity="0.12" />
                                    <rect x="4.33331" y="4" width="30" height="30" rx="15" fill="#355E5B" fill-opacity="0.12" />
                                    <path d="M12.6667 15.5C12.6667 14.0999 12.6667 13.3998 12.9391 12.865C13.1788 12.3946 13.5613 12.0122 14.0317 11.7725C14.5665 11.5 15.2665 11.5 16.6667 11.5H22C23.4001 11.5 24.1002 11.5 24.635 11.7725C25.1054 12.0122 25.4878 12.3946 25.7275 12.865C26 13.3998 26 14.0999 26 15.5V26.5L23.7083 24.8333L21.625 26.5L19.3333 24.8333L17.0417 26.5L14.9583 24.8333L12.6667 26.5V15.5Z" stroke="#355E5B" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-4 bg-white rounded-xl shadow-custom border border-gray-100 mb-2">
                        <div className="flex justify-between  mb-2 items-center">
                            <div>
                                <h3 className="text-sm font-medium text-[#636d6c] mb-2">Paid Invoices</h3>
                                <p className="text-2xl font-medium text-[#485453]">4,533</p>
                            </div>

                            <div className="p-1 rounded-full bg-light-teal">

                                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.666687" width="38" height="38" rx="19" fill="#355E5B" fill-opacity="0.12" />
                                    <rect x="4.66669" y="4" width="30" height="30" rx="15" fill="#355E5B" fill-opacity="0.12" />
                                    <path d="M16.75 21.2216C16.75 22.2955 17.6206 23.166 18.6945 23.166H20.5C21.6506 23.166 22.5834 22.2333 22.5834 21.0827C22.5834 19.9321 21.6506 18.9993 20.5 18.9993H18.8334C17.6828 18.9993 16.75 18.0666 16.75 16.916C16.75 15.7654 17.6828 14.8327 18.8334 14.8327H20.6389C21.7128 14.8327 22.5834 15.7032 22.5834 16.7771M19.6667 13.5827V14.8327M19.6667 23.166V24.416M28 18.9993C28 23.6017 24.2691 27.3327 19.6667 27.3327C15.0643 27.3327 11.3334 23.6017 11.3334 18.9993C11.3334 14.397 15.0643 10.666 19.6667 10.666C24.2691 10.666 28 14.397 28 18.9993Z" stroke="#355E5B" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-4 bg-white rounded-xl shadow-custom border border-gray-100 mb-2">
                        <div className="flex justify-between  mb-2 items-center">
                            <div>
                                <h3 className="text-sm font-medium text-[#636d6c] mb-2">Due Invoices</h3>
                                <p className="text-2xl font-medium text-[#485453]">4,533</p>
                            </div>

                            <div className="p-1 rounded-full bg-light-teal">

                                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.333313" width="38" height="38" rx="19" fill="#355E5B" fill-opacity="0.12" />
                                    <rect x="4.33331" y="4" width="30" height="30" rx="15" fill="#355E5B" fill-opacity="0.12" />
                                    <path d="M12.6667 15.5C12.6667 14.0999 12.6667 13.3998 12.9391 12.865C13.1788 12.3946 13.5613 12.0122 14.0317 11.7725C14.5665 11.5 15.2665 11.5 16.6667 11.5H22C23.4001 11.5 24.1002 11.5 24.635 11.7725C25.1054 12.0122 25.4878 12.3946 25.7275 12.865C26 13.3998 26 14.0999 26 15.5V26.5L23.7083 24.8333L21.625 26.5L19.3333 24.8333L17.0417 26.5L14.9583 24.8333L12.6667 26.5V15.5Z" stroke="#355E5B" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex w-full justify-between items-center mb-2">
                    <div className="product">
                        <h2 className='text-[#202E2D] text-[20px] font-medium'>Invoices</h2>
                    </div>

                </div>
                <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                <div className="bg-white rounded-lg  border border-gray-200">

                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-[#F4F4F4] text-gray-600 uppercase text-xs sticky top-0 z-10 border border-[#EAECF0] whitespace-nowrap">
                            <tr>
                                <th className="px-4 py-3">
                                    <input
                                        type="checkbox"
                                        checked={isAllSelected}
                                        onChange={toggleSelectAll}
                                    />
                                </th>
                                {[
                                    "Invoice ID",
                                    "Order ID",
                                    "Total Amount",
                                    "Paid Amount",
                                    "Payment Method",
                                    "Issue Date",
                                    "Payment Date",
                                    "Assigned PM ",
                                    "Status",
                                    "Notes",
                                    "",
                                ].map((header, idx) => (
                                    <th
                                        key={idx}
                                        className="px-6 py-3 font-[500] text-[#333333] text-[13px]"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((s, i) => (
                                <tr
                                    key={i}
                                    className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50 ${selectedRows.includes(i) ? "bg-gray-50" : ""
                                        }`}
                                >
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(i)}
                                            onChange={() => toggleRow(i)}
                                        />
                                    </td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.id}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.order_id}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.total_amount}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.paid_amount}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.payment_method}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.issue_date}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.payment_date}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.assigned_pm}</td>

                                    <td className="px-6 py-3">
                                        <span className="bg-[#4EC48333] text-[#4EC483] px-2 py-1 rounded text-xs">
                                            {s.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.notes}</td>
                                    <td className="text-center">
                                        {/* dynamic id action menu */}
                                        {/* <ActionsMenu viewLink="/client" editLink="/client/edit" /> */}
                                        {/* dynamic id action menu end */}
                                        <ActionsMenu viewLink="" editLink="" />

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
