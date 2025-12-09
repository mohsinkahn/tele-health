"use client";
import { useState, useMemo,useRef, useEffect } from "react";
import ActionsMenu from "@/components/ActionsMenu";
import Link from "next/link";
import { Eye, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

export default function DoctorEarningTable() {

const [openIndex, setOpenIndex] = useState(null);
const menuRefs = useRef([]);

// delete button hide and visible logic
useEffect(() => {
const deleteBtn = document.getElementById("deleteBtn");
const checkAll = document.getElementById("checkAll");
const checkboxes = document.querySelectorAll(".row-check");

if (!deleteBtn || !checkAll || checkboxes.length === 0) {
console.warn("Elements not found, skipping checkbox handler...");
return;
}

const updateVisibility = () => {
const anyChecked = [...checkboxes].some(cb => cb.checked);
deleteBtn.classList.toggle("hidden", !anyChecked);
};

checkAll.addEventListener("change", () => {
checkboxes.forEach(cb => (cb.checked = checkAll.checked));
updateVisibility();
});

checkboxes.forEach(cb => {
cb.addEventListener("change", updateVisibility);
});

return () => {
// Cleanup to avoid listener duplication
checkAll.removeEventListener("change", updateVisibility);
checkboxes.forEach(cb => {
cb.removeEventListener("change", updateVisibility);
});
};
}, []);

// Close dropdown if clicking outside
useEffect(() => {
function handleClickOutside(event) {
if (
openIndex !== null &&
menuRefs.current[openIndex] &&
!menuRefs.current[openIndex].contains(event.target)
) {
setTimeout(() => setOpenIndex(null), 100); // Delay to allow link clicks
}
}

document.addEventListener("mousedown", handleClickOutside);
return () => {
document.removeEventListener("mousedown", handleClickOutside);
};
}, [openIndex]);

const [suppliers] = useState(
Array(20).fill({

id_no:"234",
complaint: "Muscle Weakness",
appointment_date: "25 - July - 2024",
doctor:"Dr. Cody Fisher",
email:"johndoe@example.com",
phone_no:"(619) 555-0123",
earning:"$15,182.32",


})
);
// for no data state

// const [suppliers] = useState([]);

// end for no data state

const [selectedRows, setSelectedRows] = useState([]);

const toggleSelectAll = () => {
setSelectedRows(selectedRows.length === suppliers.length ? [] : suppliers.map((_, i) => i));
};

const toggleRow = (index) => {
setSelectedRows((prev) =>
prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
);
};

// const isAllSelected = suppliers && suppliers.length > 0 && selectedRows.length === suppliers.length;
const isAllSelected = useMemo(
() => suppliers?.length > 0 && selectedRows.length === suppliers.length,
[suppliers, selectedRows]
);
return (
<div className=" mx-auto ">

    <div className="bg-white rounded-xl shadow-custom border border-gray-100 p-4 flex flex-col">

        <div className="bg-white overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-445px)] ">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-[#F8FAF8] text-[#333333] capitalize text-xs sticky top-0 z-10  whitespace-nowrap">
                    <tr>
                        {/* <th className="px-4 py-3">
                            <input type="checkbox" checked={isAllSelected} onChange={toggleSelectAll} id="checkAll" />
                        </th> */}
                        {[
                        "ID No",
                        "Complaint",
                        "Appointment Date",
                        "Doctors",
                        "Email Address",
                        "Phone Number",
                        "Earnings",
                      


                        ].map((header, idx) => (
                        <th key={idx} className="px-6 py-3 font-[400] text-[#475467] text-[13px]">
                            {header}
                        </th>
                        ))}
                        
                    </tr>
                </thead>
                <tbody>
                    {suppliers.length > 0 ? (
                    suppliers.map((s, i) => (
                    <tr key={i} className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50
                        ${selectedRows.includes(i) ? "bg-gray-50" : "" }`}>
                        {/* <td className="px-4 py-3">
                            <input type="checkbox" checked={selectedRows.includes(i)} onChange={()=> toggleRow(i)}
                            className="row-check"
                            />
                        </td> */}
                        <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                            <Link href="" className="flex items-center">
                            {s.id_no}
                            </Link>

                        </td>
                       
                        <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                            <Link href="" className="flex items-center">
                            {s.complaint}
                            </Link>

                        </td>
                       
                        <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                            
                            {s.appointment_date}
                            

                        </td>
                         <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                            <Link href="" className="flex items-center">
                            {s.doctor}
                            </Link>

                        </td>
                         <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                            <Link href="" className="flex items-center">
                            {s.email}
                            </Link>

                        </td>
                         <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                            <Link href="" className="flex items-center">
                            {s.phone_no}
                            </Link>

                        </td>
                         <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                            <Link href="" className="flex items-center">
                            {s.earning}
                            </Link>

                        </td>
                         

                        
                    </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="13" className="text-center py-10">
                            {/* <img src="/no-data.png" alt="No Data"
                                className="mx-auto mb-4 w-40 h-40 object-contain" /> */}
                            <Image src="/no-data.png" alt="No Data" width={40} height={40}
                                className="mx-auto mb-4 w-40 h-40 object-contain" />
                            <p className="text-gray-500 text-sm">No data available</p>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>

</div>
);
}