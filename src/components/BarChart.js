"use client";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BarChart({ categories = [], series = [] }) {
  const options = {
    chart: { toolbar: { show: false } },
    xaxis: { categories, labels: { style: { fontSize: "12px" } } },
    grid: { borderColor: "#EEF2F7" },
    dataLabels: { enabled: false },
    stroke: { show: false },
    colors: ["#2F6B66", "#9DC6BE"],
    legend: { show: true, position: "top" },
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h4 className="text-sm font-medium text-gray-700 mb-3">Total Orders</h4>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
}
