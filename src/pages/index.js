"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import MetricCard from "@/components/MetricCards";

// dynamic import for react-apexcharts (works in Next client)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Colors used (you can move them to tailwind config if desired)
const PURPLE = "#CA61EDA3"; // accent
const LIGHT_PURPLE = "#CA61ED00"; // soft area
const PURPLE_BUBBLE = "#A42EA6"; // alternative purple
const appoint_chart_color = "#7026A1"
export default function App() {
  // sample series / data for charts
  const areaSeries = [
    {
      name: "Total Seal",
      data: [200000, 400000, 350000, 450000, 300000, 800000, 950000, 1200000, 900000, 1000000, 850000, 950000],
    },
  ];

  const areaOptions = {
    chart: {
      id: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      sparkline: { enabled: false },
    },
    stroke: { curve: "smooth", width: 0.3 },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: [LIGHT_PURPLE],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.15,
        stops: [0, 90, 100],
      },
    },
    colors: [PURPLE],
    xaxis: {
      categories: ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"],
      labels: { style: { colors: "#9CA3AF" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          if (val >= 1000000) return `${val/1000000}M`;
          if (val >= 1000) return `${val/1000}k`;
          return val;
        },
        style: { colors: "#9CA3AF" }
      },
      show: true,
    },
    grid: {
      borderColor: "#CA61ED00",
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
    },
    tooltip: { theme: "light" },
     dataLabels: {
    enabled: false
  }
  };

  const donutSeries = [62, 38];
  const donutOptions = {
    chart: { type: "donut" },
    labels: ["Customers", "Agent"],
    colors: [appoint_chart_color, "#F5C2F5"],
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "72%",
          labels: { show: false },
           bar: { borderRadius: 8, columnWidth: "50%" }
        }
      }
    },
    

  };
 
// const donutSeries = [62, 38];

// const donutOptions = {
//   chart: {
//     type: "donut",
//     height: 260,
//   },

//   labels: ["Customers", "Agent"],
//   colors: [appoint_chart_color, "#F5C2F5"],
//   legend: { show: false },

//   // ⭐ Rounded edges & spacing between slices
//   stroke: {
//     width: 5,
//     lineCap: "round",   
    
//   },

//   plotOptions: {
//     pie: {
//       startAngle: 0,
//       endAngle: 360,
//       expandOnClick: false,

//       donut: {
//         size: "72%",
//         labels: { show: false },
//       }
//     }
//   },

//   // Optional gradient (only applies to first slice)
//   fill: {
//     type: "gradient",
//     gradient: {
//       shade: "dark",
//       shadeIntensity: 0.5,
//        inverseColors: true,
//         opacityFrom: 1,
//             opacityTo: 1,
//       type: "horizontal",
//       gradientToColors: ["#A855F7"],
//       stops: [0, 100],
//     }
//   },
  
// };


  const barSeries = [
    {
      name: "Clinic Registrations",
      data: [30, 50, 40, 60, 45, 70, 65, 68, 72, 80, 90, 75]
    },
  ];
  const barOptions = {
    chart: { toolbar: { show: false }, zoom: { enabled: false } },
    plotOptions: {
      bar: { borderRadius: 8, columnWidth: "90%" }
    },
    colors: [appoint_chart_color],
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], labels: { style: { colors: "#9CA3AF" } } },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { theme: "light" },
  };

  // small metric cards (top)
  const metrics = [
    { title: "Appointments", value: "160", change: "+20%" },
    { title: "Subscriptions", value: "160", change: "+20%" },
    { title: "Subscriptions", value: "160", change: "+20%" },
    { title: "Patients", value: "200", change: "" },
  ];

  return (
    <div className=" bg-gray-50 lg:p-6">
      <h1 className="text-2xl font-semibold mb-5 text-[#7026A1]">Dashboard</h1>





      <div className=" mx-auto overflow-auto lg:max-h-[calc(100vh-200px)] max-h-[calc(100vh-165px)]">

        <div className="grid lg:grid-cols-4 grid-cols-1 mb-4 gap-3 mt-6">
          <div className="bg-white rounded-lg p-3 lg:col-span-2 border border-gray-100">
            <div className="lg:flex lg:items-center lg:justify-between grid grid-cols-1 relative">
              <div>
                 <p className="text-[#32393C] text-[20px] mb-3">Total Rev From Clinics</p>
                 <p className="text-[#7026A1] text-[32px] mb-3">$4,562</p>
                 <p className="text-[#32393C] text-[14px]">431 more to break last month record</p>
              </div>
              <div>
                 <Image
                 src="/card-img.png"
                 alt="card top img"
                 width={200}
                 height={193}
                  className=" my-img"        
                 />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-100">
               <div className="mx-auto w-fit text-center mt-4">
                 <p className="text-[#32393C] text-[20px] mb-3">Total Sales</p>
                 <p className="text-[#7026A1] text-[32px] mb-3">$4,562</p>
                 
              </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-100">
             <div className="mx-auto w-fit text-center mt-4">
                 <p className="text-[#32393C] text-[20px] mb-3">Total Doctors</p>
                 <p className="text-[#7026A1] text-[32px] mb-3">562</p>
                 
              </div>
          </div>

        </div>


        {/* Top metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((m, idx) => (
          <MetricCard
            key={idx}
            title={m.title}
            value={m.value}
            change={m.change}
          />
        ))}
        </div>

        {/* Main grid */}
       


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left big area chart spanning 2 cols on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-5  border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="text-gray-700 font-medium">Patients Per Month</h4>
                  <p className="text-sm text-gray-400">Total Seal • Total Rent</p>
                </div>
                <div className="text-sm text-gray-500">$2,346</div>
              </div>

              <div className="mt-2">
                <Chart options={areaOptions} series={areaSeries} type="area" height={260} />
              </div>
            </div>
          </div>

          {/* Right column: donut card + small stat */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5  border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-gray-700 font-medium">Appointments</h5>
                <div className="text-gray-400 text-sm">...</div>
              </div>
              <div className="flex items-center justify-center">
                <Chart options={donutOptions} series={donutSeries} type="donut" height={260} />
              </div>
              <div className="mt-2 flex justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-700 inline-block" /> Customers</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-pink-200 inline-block" /> Agent</div>
              </div>
            </div>

           
          </div>
        </div>

        {/* Bottom row: bar chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div>
             <div className="bg-white rounded-xl p-5  border border-gray-100">
              <h5 className="text-gray-700 font-medium">Total Patients</h5>
              <div className="mt-6 grid lg:grid-cols-3 grid-cols-1">
                <div className="space-y-2 border-l border-[#F2F4F7] ">
                  <div className="text-sm text-gray-500 flex gap-1 items-center px-4">
                    <span className="bg-[#7026A1] w-2 flex p-1 rounded-full"></span>
                   <span>New</span> </div>
                  <div className="text-2xl font-bold text-gray-700 px-4">100</div>
                  <div className="mt-32">
                <div className="h-8 bg-gray-100 rounded-md overflow-hidden">
                  <div className="h-8 bg-[#7026A1] w-full" />
                </div>
              </div>
                </div>
                <div className="space-y-2 border-l border-[#F2F4F7] ">
                  <div className="text-sm text-gray-500 flex gap-1 items-center px-4">
                    <span className="bg-[#BB88CE] w-2 flex p-1 rounded-full"></span>
                   <span>Existing</span> </div>
                  <div className="text-2xl font-bold text-gray-700 px-4">100</div>
                  <div className="mt-32">
                <div className="h-8 bg-gray-100 rounded-md overflow-hidden">
                  <div className="h-8 bg-[#BB88CE] w-full" />
                </div>
              </div>
                </div>
                <div className="space-y-2 border-l border-[#F2F4F7] ">
                  <div className="text-sm text-gray-500 flex gap-1 items-center px-4">
                    <span className="bg-[#DDCEE5] w-2 flex p-1 rounded-full"></span>
                   <span>Total</span> </div>
                  <div className="text-2xl font-bold text-gray-700 px-4">100</div>
                  <div className="mt-32">
                <div className="h-8 bg-gray-100 rounded-md overflow-hidden">
                  <div className="h-8 bg-[#DDCEE5] w-full" />
                </div>
              </div>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-5  border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-gray-700 font-medium">Clinic Registrations <span className="text-2xl text-purple-700 font-semibold ml-2">214,000</span></h5>
                <div className="text-gray-400">...</div>
              </div>

              <div className="mt-4">
                <Chart options={barOptions} series={barSeries} type="bar" height={220} />
              </div>
            </div>
          </div>

          
        </div>

       
      </div>
    </div>
  );
}
