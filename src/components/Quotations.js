"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import ActionsMenu from "@/components/ActionsMenu";
import Link from "next/link";
import { Eye, Edit, Trash2 } from "lucide-react";
import Image from "next/image";




export default function Quotations({ activeTab, setActiveTab }) {

  const [openIndex, setOpenIndex] = useState(null);
  const menuRefs = useRef([]);

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
      id: "#547388",
      supplier_name: "ABC metals",
      client_name: "ABC company",
      total_product: "23",
      amount: "50$",
      assigned_pm: "Jhon doe",
      date: "12/02/2024",
      action: "Download",
      status: "Approved",

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
    <div className="p-4">
      {/* Tabs */}
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab("potential")}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === "potential"
            ? "bg-[#355E5B1F] text-[#355E5B] border border-b-0 border-[#355E5B1A] shadow-sm"
            : "bg-[#FFFFFF] shadow-sm text-black hover:text-[355E5B]"
            }`}
        >
          Suppliers
        </button>
        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-3 text-sm font-medium rounded-t-lg ${activeTab === "active"
            ? "bg-[#355E5B1F] text-[#355E5B] border border-b-0 border-[#355E5B1A] shadow-sm"
            : "bg-[#FFFFFF] shadow-sm text-black hover:text-[355E5B]"
            }`}
        >
          Clients
        </button>
        {/* Add more tabs as needed */}
      </div>

      {/* Table (shown only on "Potential Suppliers" tab) */}
      {activeTab === "potential" && (
        <div className="bg-white overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-425px)] border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#F4F4F4] text-[#333333] capitalize text-xs sticky top-0 z-10 border border-[#EAECF0] whitespace-nowrap">
              <tr>
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                {[
                  "Company ID",
                  "Supplier Name",
                  "Client Name",
                  "Total Products",
                  "Amount",
                  "Assigned PM",
                  "Date",
                  "Status",
                  "Action",
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
              {suppliers.length > 0 ? (
                suppliers.map((s, i) => (
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
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.total_product}</td>
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.amount}</td>
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.assigned_pm}</td>
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.date}</td>

                    <td className="px-6 py-3">
                      <span className="bg-[#4EC48333] text-[#4EC483] px-2 py-1 rounded text-xs">
                        {s.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="bg-[#355E5B] text-[white] px-2 py-1 rounded text-xs">
                        {s.action}
                      </span>
                    </td>
                    <td className="text-center">
                      {/* <ActionsMenu /> */}
                      <div
                        className="relative inline-block text-left"
                        ref={(el) => (menuRefs.current[i] = el)}
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="p-1 rounded hover:bg-gray-200"
                        >
                          <svg
                            width={25}
                            height={24}
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
                              stroke="#202E2D"
                              strokeOpacity="0.6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.5 6C13.0523 6 13.5 5.55228 13.5 5C13.5 4.44772 13.0523 4 12.5 4C11.9477 4 11.5 4.44772 11.5 5C11.5 5.55228 11.9477 6 12.5 6Z"
                              stroke="#202E2D"
                              strokeOpacity="0.6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.5 20C13.0523 20 13.5 19.5523 13.5 19C13.5 18.4477 13.0523 18 12.5 18C11.9477 18 11.5 18.4477 11.5 19C11.5 19.5523 11.9477 20 12.5 20Z"
                              stroke="#202E2D"
                              strokeOpacity="0.6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {openIndex === i && (
                          <div className="absolute right-[25px] mt-2 w-32 bg-white border rounded border-[#EAECF0] z-20">
                            {/* ✅ "View" link works now */}
                            <Link
                              href="#"
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Link>

                            <Link href="#"
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => {
                                console.log("Edit supplier", s.id);
                                setOpenIndex(null);
                              }}
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Link>

                            <button
                              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                              onClick={() => {
                                console.log("Delete supplier", s.id);
                                setOpenIndex(null);
                              }}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13" className="text-center py-10">
                    {/* <img
                      src="/no-data.png"
                      alt="No Data"
                      className="mx-auto mb-4 w-40 h-40 object-contain"
                    /> */}
                    <Image
                      src="/no-data.png"
                      alt="No Data"
                      width={40}
                      height={40}
                      className="mx-auto mb-4 w-40 h-40 object-contain"
                    />
                    <p className="text-gray-500 text-sm">No data available</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab === "active" && (
        <div className="bg-white overflow-auto max-h-[calc(100vh-290px)] border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#F4F4F4] text-[#333333] capitalize text-xs sticky top-0 z-10 border border-[#EAECF0] whitespace-nowrap">
              <tr>
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                {[
                  "Company ID",
                  "Supplier Name",
                  "Client Name",
                  "Total Products",
                  "Amount",
                  "Assigned PM",
                  "Date",
                  "Status",
                  "Action",
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
              {suppliers.length > 0 ? (
                suppliers.map((s, i) => (
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
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.total_product}</td>
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.amount}</td>
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.assigned_pm}</td>
                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.date}</td>

                    <td className="px-6 py-3">
                      <span className="bg-[#4EC48333] text-[#4EC483] px-2 py-1 rounded text-xs">
                        {s.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="bg-[#355E5B] text-[white] px-2 py-1 rounded text-xs">
                        {s.action}
                      </span>
                    </td>
                    <td className="text-center">
                      <ActionsMenu />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13" className="text-center py-10">
                    {/* <img
                      src="/no-data.png"
                      alt="No Data"
                      className="mx-auto mb-4 w-40 h-40 object-contain"
                    /> */}
                     <Image
                      src="/no-data.png"
                      alt="No Data"
                      width={40}
                      height={40}
                      className="mx-auto mb-4 w-40 h-40 object-contain"
                    />
                    <p className="text-gray-500 text-sm">No data available</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
