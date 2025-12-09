"use client"

import React, { useState } from "react";
import Image from "next/image";

const conversations = Array.from({ length: 8 }, (_, i) => ({
id: i + 1,
name: [
"Phoenix Baker",
"Andi Lane",
"Mollie Hall",
"Rosalee Melvin",
"Jordan Smith",
"Alex Khan",
"Priya Patel",
"Sam Carter",
][i % 8],
subject: [
"Confirmation of Shipment Booking for Order #12345",
"Your Quotation for Cargo Shipment",
"Shipping Schedule Change Notification",
"Request for Additional Information for Your Shipment",
"Custom Clearance Update",
"Invoice and Payment Details",
"Follow up: Documents Required",
"Delivery Reschedule",
][i % 8],
snippet:
"Hey — I just wanted to say thanks for chasing up the release for me. Really appreciate it...",
time: ["5min ago", "20min ago", "1hr ago", "1hr ago", "2hr ago", "3hr ago", "Yesterday", "2 days ago"][i % 8],
unread: i % 3 === 0,
}));

// const messages = [
// { id: 1, from: "Andi Lane", text: "Sure thing, I'll have a look today.", time: "Friday 2:20pm", side: "left" },
// { id: 2, from: "You", text: "Sure thing, I'll have a look today.", time: "Friday 2:20pm", side: "right" },
// { id: 3, from: "You", text: "Sure thing, I'll have a look today.", time: "Friday 2:20pm", side: "right" },
// { id: 4, from: "You", text: "Sure thing, I'll have a look today.", time: "Friday 2:20pm", side: "right" },
// ];
const messages = [
{
id: 1,
date: "Jan 6, 2024" // shows center divider
},
{
id: 2,
from: "Andi Lane",
time: "2:20pm",
text: "Sure thing, I'll have a look today.",
side: "left"
},
{
id: 3,
from: "You",
time: "2:21pm",
text: "Sure thing, I’ll have a look today.",
side: "right"
},
{
id: 2,
from: "Andi Lane",
time: "2:20pm",
text: "Sure thing, I'll have a look today.",
side: "left"
},
{
id: 4,
from: "You",
time: "2:21pm",
text: "Sure thing, I’ll have a look today.",
side: "right"
},
{
id: 5,
date: "Jan 6, 2024" // shows center divider
},
{
id: 6,
from: "You",
time: "2:21pm",
text: "Sure thing, I’ll have a look today.",
side: "right"
},
];

export default function Message() {
const [activeId, setActiveId] = useState(2);
const [query, setQuery] = useState("");
const [text, setText] = useState("");

const activeConv = conversations.find((c) => c.id === activeId) || conversations[0];

return (
<div className="min-h-screen bg-gray-50 px-1 py-2  overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-295px)] ">
  <div className=" mx-auto bg-white rounded-xl shadow-sm border border-gray-100 ">
    {/* Header (optional) */}
    {/* <div className="p-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-medium text-gray-700">Messages</h2>
          <p className="text-sm text-gray-400">Conversation panel</p>
        </div>
        <div className="text-sm text-pink-600">View Profile</div>
      </div>
    </div> */}

    <div className="lg:flex grid grid-cols-1 lg:my-par">
      {/* Left: conversations */}
      <aside className="lg:w-80 w-full md:w-96 border-r border-gray-100 p-2 lg:p-4">
        <div className="mb-4">
          <div className="relative">
            <input value={query} onChange={(e)=> setQuery(e.target.value)}
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-100 bg-white text-sm placeholder-gray-400
            focus:outline-none focus:ring-1 focus:ring-purple-200"
            />
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z" />
            </svg>
          </div>
        </div>

        <div className="space-y-3 max-h-[25vh] lg:max-h-[60vh] overflow-y-auto pr-2">
          {conversations.map((c) => (
          <button key={c.id} onClick={()=> setActiveId(c.id)}
            className={`w-full text-left flex items-start gap-3 p-3 rounded-lg transition-colors ${
            activeId === c.id ? "bg-gray-50" : "hover:bg-gray-50"
            }`}
            >
            <div className="flex-shrink-0 mt-1">
              <span className={`inline-block w-3 h-3 rounded-full ${c.unread ? "bg-pink-600" : "bg-gray-300" }`} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">{c.name}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{c.subject}</p>
                </div>
                <div className="text-xs text-gray-400">{c.time}</div>
              </div>
              <p className="text-xs text-gray-400 mt-2 line-clamp-2">{c.snippet}</p>
            </div>
          </button>
          ))}
        </div>
      </aside>

      {/* Right: chat */}
      <main className="flex-1 lg:p-6 px-5 py-4">
        <div className="flex items-center justify-between mb-6 border-b border-[#f6f3f4] pb-4">
          <div>
            <h3 className="text-lg font-medium text-gray-800">{activeConv.name}</h3>
            <p className="text-xs text-gray-400">Bill of Lading Issuance for Your Shipment</p>
          </div>
          <div className="text-sm text-pink-600">View Profile</div>
        </div>

        <div className="bg-white   rounded-xl p-6 mb-4  max-h-[23vh] lg:max-h-[50vh] overflow-y-auto">
          <div className="space-y-6">

            {messages.map((m) => (
            <div key={m.id}>

              {/* ✨ Center Date Separator */}
              {m.date && (
              <div className="flex justify-center my-4">
                <span className="text-[11px] px-3 py-1 bg-gray-100 text-gray-500 rounded-full">
                  {m.date}
                </span>
              </div>
              )}

              {/* Chat Bubbles */}
              <div className={`flex ${m.side==="right" ? "justify-end" : "justify-start" }`}>
                <div className={`max-w-[60%] ${m.side==="right" ? "text-right" : "text-left" }`}>

                  {/* Name + Time */}
                  <div className="text-xs text-[#344054] mb-2 flex justify-between">
                    <div>{m.from}</div>
                    <div>
                      <span className="ml-2 text-[11px] px-2 py-[2px] ">
                        {m.time}
                      </span>
                    </div>
                  </div>

                  {/* Bubble */}
                  <div className={ `inline-block px-4 py-3 rounded-lg ${ m.side==="right"
                    ? "bg-[#A42EA6] text-white rounded-tr-md" : m.text?.trim() ? "bg-white border border-gray-100"
                    : "bg-white" } `}>
                    <p className="text-sm leading-relaxed">{m.text}</p>
                  </div>

                </div>
              </div>
            </div>
            ))}

          </div>
        </div>

        {/* Composer */}
        <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3">
          <input placeholder="Email" value={text} onChange={(e)=> setText(e.target.value)}
          className="flex-1 border-none outline-none text-sm placeholder-gray-400"
          />

          <div className="flex items-center lg:gap-2">
            <button className="p-2 rounded-md hover:bg-gray-50">

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_371_1892)">
                  <path
                    d="M6.66699 11.6667C6.66699 11.6667 7.91699 13.3334 10.0003 13.3334C12.0837 13.3334 13.3337 11.6667 13.3337 11.6667M12.5003 7.50008H12.5087M7.50033 7.50008H7.50866M18.3337 10.0001C18.3337 14.6025 14.6027 18.3334 10.0003 18.3334C5.39795 18.3334 1.66699 14.6025 1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675C14.6027 1.66675 18.3337 5.39771 18.3337 10.0001ZM12.917 7.50008C12.917 7.7302 12.7304 7.91675 12.5003 7.91675C12.2702 7.91675 12.0837 7.7302 12.0837 7.50008C12.0837 7.26996 12.2702 7.08341 12.5003 7.08341C12.7304 7.08341 12.917 7.26996 12.917 7.50008ZM7.91699 7.50008C7.91699 7.7302 7.73044 7.91675 7.50033 7.91675C7.27021 7.91675 7.08366 7.7302 7.08366 7.50008C7.08366 7.26996 7.27021 7.08341 7.50033 7.08341C7.73044 7.08341 7.91699 7.26996 7.91699 7.50008Z"
                    stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_371_1892">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </button>
            <button className="p-2 rounded-md hover:bg-gray-50">

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.99967 10.8334C10.4599 10.8334 10.833 10.4603 10.833 10.0001C10.833 9.53984 10.4599 9.16675 9.99967 9.16675C9.53944 9.16675 9.16634 9.53984 9.16634 10.0001C9.16634 10.4603 9.53944 10.8334 9.99967 10.8334Z"
                  stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.833 10.8334C16.2932 10.8334 16.6663 10.4603 16.6663 10.0001C16.6663 9.53984 16.2932 9.16675 15.833 9.16675C15.3728 9.16675 14.9997 9.53984 14.9997 10.0001C14.9997 10.4603 15.3728 10.8334 15.833 10.8334Z"
                  stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M4.16634 10.8334C4.62658 10.8334 4.99967 10.4603 4.99967 10.0001C4.99967 9.53984 4.62658 9.16675 4.16634 9.16675C3.7061 9.16675 3.33301 9.53984 3.33301 10.0001C3.33301 10.4603 3.7061 10.8334 4.16634 10.8334Z"
                  stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>
            <button
              className="inline-flex items-center gap-2 bg-[#A73493] hover:bg-[#A73493] text-white px-4 py-2 rounded-md">
              Send
            </button>
          </div>
        </div>

      </main>
    </div>
  </div>

  {/* NOTE: You uploaded the screenshot. Local path: /mnt/data/8439242b-074f-43da-989b-e9f9b0a7bd6e.png */}
</div>
);
}