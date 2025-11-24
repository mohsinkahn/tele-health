// components/Tabs.js
import { useState } from 'react';
import Detailinformation from './potential_sup_detail_info';
import SupplierLogs from './potential_sup_logs';
import Product from './potential_sup_product';
import Supplier_quotes from './potential_sup_quotes';
import Supplier_event from './potential_sup_events';
import Supplier_report from './potential_sup_reports';
// import Supplier_order from './supplier_order';
// import Supplier_complaints from './supplier_complaints';
import Supplier_attachments from './potential_sup_attachments';
// import Supplier_financial from './supplier_financial';
import Supplier_notes_summary from './potential_sup_note_summary';

import AddNewProductModal from "./AddNewProductModal";
const tabList = [
    { id: 1, label: "Detail Information" },
    { id: 2, label: "Quotes" },
    { id: 3, label: "Notes & Summaries" },
    // { id: 4, label: "Orders" },
    { id: 5, label: "Products" },
    { id: 6, label: "Events" },
    // { id: 7, label: "Financials" },
    { id: 8, label: "Logs" },
    // { id: 9, label: "Complaints" },
    { id: 10, label: "Attachments" },
    { id: 11, label: "Reports" },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="">
            {/* Tabs */}
            <div className="flex border-b border-[#EAECF0] gap-2 overflow-x-auto scrollbar-hide w-[100%]">
                {tabList.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-2 py-2 rounded-t-md text-sm font-medium transition-all w-[100%] duration-200 whitespace-nowrap overflow-x-auto scrollbar-hide 
                         ${activeTab === tab.id
                                ? "bg-[#355E5B1F] text-[#355E5B]"
                                : "bg-white text-[#202E2D] hover:bg-[#355E5B1F] hover:text-[#355E5B]"
                            }`}
                        style={
                            activeTab === tab.id
                                ? {
                                    boxShadow: "0px 0px 4px 0px #355E5B3D",
                                    borderBottom: "none",
                                }
                                : {
                                    boxShadow: "0px 0px 4px 0px #355E5B33",
                                }
                        }
                    >
                        {tab.label}
                    </button>

                ))}
            </div>

            {/* Content */}
            <div className="mt-6 p-4 rounded-md bg-white" style={{ boxShadow: "0 0 4px 0 #355E5B52" }}>
                {activeTab === 1 &&
                    <>
                        <Detailinformation />
                    </>
                }
                {activeTab === 2 &&
                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h1 className='text-[#202E2D] text-[20px] font-medium'>Quotes</h1>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Supplier_quotes />
                        </div>
                    </>
                }
                {activeTab === 3 && 
                <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h2 className='text-[#202E2D] text-[20px] font-medium'>Notes & Summary</h2>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Supplier_notes_summary />
                        </div>
                
                }
                {/* {activeTab === 4 &&
                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h1 className='text-[#202E2D] text-[20px] font-medium'>Orders</h1>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Supplier_order />
                        </div>
                    </>

                } */}
                {activeTab === 5 &&
                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h2 className='text-[#202E2D] text-[20px] font-medium'>Products</h2>
                                </div>
                                <div className="button">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setShowModal(true)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.99984 1.16667V12.8333M1.1665 7H12.8332"
                                                    stroke="white"
                                                    strokeWidth="1.67"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <AddNewProductModal
                                isOpen={showModal}
                                onClose={() => setShowModal(false)}
                            />
                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Product />
                        </div>
                    </>
                }
                {activeTab === 6 &&

                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h2 className='text-[#202E2D] text-[20px] font-medium'>Events</h2>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Supplier_event />
                        </div>
                    </>

                }
                {/* {activeTab === 7 &&
                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h2 className='text-[#202E2D] text-[20px] font-medium'>Financials</h2>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Supplier_financial />
                        </div>
                    </>

                } */}
                {activeTab === 8 &&
                    <>
                        <SupplierLogs />
                    </>
                }
                {/* {activeTab === 9 &&

                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h2 className='text-[#202E2D] text-[20px] font-medium'>Complaints</h2>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Supplier_complaints />
                        </div>
                    </>
                } */}
                {activeTab === 10 &&
                    <>




                        <Supplier_attachments />

                    </>


                }
                {activeTab === 11 &&
                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h1 className='text-[#202E2D] text-[20px] font-medium'>Reports</h1>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Supplier_report />
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
