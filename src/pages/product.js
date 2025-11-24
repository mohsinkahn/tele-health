"use client";
import { useState, useEffect } from "react";
import AddNewProductModal from "../components/AddNewProductModal";
import Link from "next/link";
import Product from "../components/Product";

export default function ProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[400px] gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-[#144a6c] border-t-transparent rounded-full animate-spin"></div>

          {/* Loading text */}
          <p className="text-[#4e758d] text-lg font-medium">Loading products...</p>

          {/* Skeleton preview */}
          <div className="w-full max-w-4xl space-y-3 mt-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="lg:flex lg:justify-between lg:items-center items-baseline lg:flex-row grid grid-cols-1">
            <div>
              <h1 className="text-2xl font-[500] text-[#101828]">Products</h1>
              <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                Manage all products supplied and ordered across your network with detailed tracking of pricing, categories, and availability.
              </p>
            </div>
            <div className="flex gap-3 md:flex-row flex-col md:mt-0 mt-3">
              <Link href="#" className="btn btn-filter">
                <div className="flex items-center gap-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                      stroke="#344054"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Filters
                </div>
              </Link>

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
                  Add New
                </div>
              </button>
              <AddNewProductModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
              />
            </div>
          </div>
          <hr className="mt-[20px] lg:mb-[30px] text-[#EAECF0]" />
          <Product />
        </div>
      )}
    </>
  );
}
