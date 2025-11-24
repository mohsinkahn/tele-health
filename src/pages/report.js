'use client';
import { useState, useEffect } from 'react';
import Report from "../components/reports";
import LogisticModal from "../components/report_generateModal";
import ComplianceModal from "../components/ComplianceModal";
import ServiceModal from "../components/ServiceModal";

const tabTitles = {
  potential: "Report",
  active: "Report",
  provider: "Report",
};
const tabSpan = {
  potential: "Comprehensive reports to track performance, costs, and reliability.",
  active: "Comprehensive reports to track performance, costs, and reliability.",
  provider: "Comprehensive reports to track performance, costs, and reliability.",
};

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("potential");
  const [showLogisticsModal, setShowLogisticsModal] = useState(false);
  const [showComplianceModal, setShowComplianceModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Move tabActions inside the component so it can access the modal state setters
  const tabActions = {
    potential: {
      label: "Add New",
      icon: (
        <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      onClick: () => setShowLogisticsModal(true),
    },
    active: {
      label: "Add New",
      icon: (
        <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      onClick: () => setShowComplianceModal(true),
    },
    provider: {
      label: "Add New",
      icon: (
        <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      onClick: () => setShowServiceModal(true),
    },
    Potential_Clients: {
      label: "Add New",
      icon: (
        <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      onClick: () => setShowServiceModal(true),
    },
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[400px] gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-[#144a6c] border-t-transparent rounded-full animate-spin"></div>

          {/* Loading text */}
          <p className="text-[#4e758d] text-lg font-medium">Loading partners...</p>

          {/* Skeleton preview */}
          <div className="w-full max-w-3xl space-y-3 mt-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="lg:flex lg:justify-between lg:items-center items-baseline lg:flex-row grid grid-cols-1">
            <div>
              <h1 className="text-2xl font-[500] text-[#101828]">{tabTitles[activeTab]}</h1>
              <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                {tabSpan[activeTab]}
              </p>
            </div>
            <div className="flex gap-3 md:flex-row flex-col md:mt-0 mt-3">
              <button className="btn btn-filter">
                <div className="flex items-center gap-2">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Filters
                </div>
              </button>

              {/* ✅ Dynamic Add Button */}
              <button className="btn btn-primary cursor-pointer" onClick={tabActions[activeTab].onClick}>
                <div className="flex items-center gap-2">
                  {tabActions[activeTab].icon}
                  {tabActions[activeTab].label}
                </div>
              </button>
            </div>
          </div>

          <hr className="mt-[20px] lg:mb-[30px] text-[#EAECF0]" />
          <Report activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* ✅ Render modals conditionally */}
          {showLogisticsModal && (
            <LogisticModal isOpen={showLogisticsModal} onClose={() => setShowLogisticsModal(false)} />
          )}

          {showComplianceModal && (
            <ComplianceModal isOpen={showComplianceModal} onClose={() => setShowComplianceModal(false)} />
          )}

          {showServiceModal && (
            <ServiceModal isOpen={showServiceModal} onClose={() => setShowServiceModal(false)} />
          )}
        </div>
      )}
    </>
  );
}
