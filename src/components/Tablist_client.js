// components/Tabs.js
import { useState } from 'react';
import Client_detail_info from './client_detail_info';
import Client_logs from './client_logs';
import Client_quotes from './client_quotes';
import Client_events from './client_events';
import Client_report from './client_report';
import Client_order from './client_order';
import Client_complaints from './client_complaints';
import Client_attachments from './client_attachments';
import Client_financial from './client_financial';
import Client_notes_summary from './client_notes_summary';


const tabList = [
    { id: 1, label: "Detail Information" },
    { id: 2, label: "Quotes" },
    { id: 3, label: "Notes & Summaries" },
    { id: 4, label: "Orders" },
  
    { id: 6, label: "Events" },
    { id: 7, label: "Financials" },
    { id: 8, label: "Logs" },
    { id: 9, label: "Complaints" },
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
                        <Client_detail_info />
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
                            <Client_quotes />
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
                            <Client_notes_summary />
                        </div>
                
                }
                {activeTab === 4 &&
                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h1 className='text-[#202E2D] text-[20px] font-medium'>Orders</h1>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Client_order />
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
                            <Client_events />
                        </div>
                    </>

                }
                {activeTab === 7 &&
                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h2 className='text-[#202E2D] text-[20px] font-medium'>Financials</h2>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Client_financial />
                        </div>
                    </>

                }
                {activeTab === 8 &&
                    <>
                        <Client_logs />
                    </>
                }
                {activeTab === 9 &&

                    <>
                        <div>
                            <div className="flex w-full justify-between items-center mb-2">
                                <div className="product">
                                    <h2 className='text-[#202E2D] text-[20px] font-medium'>Complaints</h2>
                                </div>

                            </div>

                            <hr className='mb-4 mt-2 bg-[#355E5B7A] text-[#355E5B7A] ' />
                            <Client_complaints />
                        </div>
                    </>
                }
                {activeTab === 10 &&
                    <>




                        <Client_attachments />

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
                            <Client_report />
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
