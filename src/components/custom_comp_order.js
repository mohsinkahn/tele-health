"use client";
import { useState } from "react";
import ActionsMenu from "@/components/ActionsMenu";

export default function CustomCompOrder() {


    const suppliers = Array(20).fill({
        id: "#547388",
        supplier_name: "ABC Company",
        client_name: "Company ABC",
        etd: "12/03/2023",
        eta: "12/02/2023",
        assigned_pm: "Sarah Khan, Will Smith ",
        status: "In Progress",
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
        <div className="bg-white rounded-lg overflow-auto max-h-[calc(100vh-530px)] border border-gray-200">
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
                            "ID",
                            "Supplier Name",
                            "Client Name",
                            "ETD",
                            "ETA",
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
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.supplier_name}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.client_name}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.etd}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.eta}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.assigned_pm}</td>
                            
                            <td className="px-6 py-3">
                                <span className="bg-gray-200 text-[#4195A4] px-2 py-1 rounded text-xs">
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
    );
}
