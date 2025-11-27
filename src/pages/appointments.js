'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
// import Doctor from "../components/Doctor";
// import Clinic from "../components/Clinic";
// import Document from "../components/Document"
import Appointment from "../components/Appointment"

import {  Trash2 } from "lucide-react";
export default function Documents() {
  const [showModal, setShowModal] = useState(false);

const [loading, setLoading] = useState(true);

// Simulate loading
useEffect(() => {
const timer = setTimeout(() => setLoading(false), 1500);
return () => clearTimeout(timer);
}, []);





return (
<>
  <div>
    

    {/*
    <hr className="mt-[20px] lg:mb-[30px] text-[#EAECF0]" /> */}

    {/* ✅ Loader only replaces content below header */}
    {loading ? (
    <div className="flex flex-col items-center justify-center h-[300px] gap-4 mt-[40px]">
      {/* Spinner */}
      <div class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
             aspect-square w-8 flex justify-center items-center text-yellow-700 mt-2"></div>
      {/* Loading text */}
      <p className="text-[#4e758d] text-lg font-medium">
        Loading Appointments...
      </p>

      {/* Skeleton table preview */}
      <div className="w-full max-w-8xl border border-gray-200 rounded-lg shadow-sm mt-6">
        {/* Table header skeleton */}
        <div className="grid grid-cols-13 bg-gray-100 px-4 py-3 rounded-t-lg gap-2">
          <div className="h-4 bg-gray-300 rounded w-4"></div> {/* Checkbox */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* ID */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Company */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Category */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Email */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Phone */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Country */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Contact */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* PM */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Date */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Status */}
          <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Notes */}
          <div className="h-4 bg-gray-300 rounded w-6"></div> {/* Actions */}
        </div>

        {/* Table rows skeleton */}
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, i) => (
          <div key={i} className="grid grid-cols-13 px-4 py-3 animate-pulse gap-2">
            <div className="h-4 bg-gray-200 rounded w-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-6"></div>
          </div>
          ))}
        </div>
      </div>
    </div>

    ) : (
    <>

      <Appointment />
    </>
    )}
  </div>
</>
);
}