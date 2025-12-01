'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
// import Doctor from "../components/Doctor";
// import Clinic from "../components/Clinic";
import {  Trash2 } from "lucide-react";
// import { Scheduler, SchedulerProvider } from "mina-scheduler";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import AddCalendarTaskModal from "@/components/AddCalendarTaskModal";


export default function Calendar() {
  const [showModal, setShowModal] = useState(false);  

const [loading, setLoading] = useState(true);

// Simulate loading
useEffect(() => {
const timer = setTimeout(() => setLoading(false), 1500);
return () => clearTimeout(timer);
}, []);


 const events = [
    { title: 'Meeting', start: '2025-11-21T10:00:00', end: '2025-11-21T12:00:00' },
    { title: 'Conference', start: '2025-11-23', end: '2025-11-24' },
  ];


return (
<>
  <div>
    {/* ✅ Header always visible */}
    <div
      className="lg:flex lg:justify-between lg:items-center items-baseline lg:flex-row grid grid-cols-1 mx-auto   lg:pl-8 lg:pr-6 lg:pt-6">
      <div>
        <h1 className="text-2xl font-[500] text-[#7026A1]">
          Calendar
        </h1>

      </div>
      <div className="flex gap-3 md:flex-row flex-col md:items-center md:mt-0 mt-3">
        
           <Link href="#" className="btn btn-danger hidden" id="deleteBtn">
        <div className="flex items-center gap-2">
          
          <Trash2 width={16} height={16} stroke="white" />
          Delete
        </div>
        </Link>
          {/* /client/new path of add new page */}
        <Link href="#" className="btn btn-primary" onClick={() => setShowModal(true)}>
        <div className="flex items-center gap-2">
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99984 1.16667V12.8333M1.1665 7H12.8332" stroke="white" strokeWidth="1.67" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
          Add Task
        </div>
        </Link>
         <AddCalendarTaskModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                    />
     

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
        Loading Calendar...
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
     <div className="bg-white overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-425px)] px-5 py-5 mt-4 mx-5 rounded-lg">
       <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }}
      events={events}
      
    />
    </div>
     
    </>
    )}
  </div>
</>
);
}