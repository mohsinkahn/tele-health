'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
// import Doctor from "../components/Doctor";
// import Clinic from "../components/Clinic";
import Message from "../components/Message"

import Image from "next/image";

import {  Trash2 } from "lucide-react";





export default function Messages() {
  
const [loading, setLoading] = useState(true);

// Simulate loading
useEffect(() => {
const timer = setTimeout(() => setLoading(false), 1500);
return () => clearTimeout(timer);
}, []);




return (
<>
  <div>
    {/* ✅ Header always visible */}
    <div
      className="lg:flex lg:justify-between lg:items-center items-baseline lg:flex-row grid grid-cols-1 mx-auto   lg:pl-8 lg:pr-6 lg:pt-6">
      <div>
        <h1 className="text-2xl font-[500] text-[#7026A1]">
          Messages
        </h1>

      </div>
      <div className="flex gap-3 md:flex-row flex-col md:items-center md:mt-0 mt-3">
              
          {/* /client/new path of add new page */}
        <Link href="#" className="btn btn-primary">
        <div className="flex items-center gap-2">
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99984 1.16667V12.8333M1.1665 7H12.8332" stroke="white" strokeWidth="1.67" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
          Add New
        </div>
        </Link>
     

      </div>
    </div>

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
        Loading Messages...
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
     
     
   <Message/>

      
    </>
    )}
  </div>
</>
);
}