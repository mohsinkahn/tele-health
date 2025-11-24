"use client";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutCard({ title, value, series, colors, legendItems = [] }) {
  const options = {
    chart: { sparkline: { enabled: true } },
    labels: legendItems.length ? legendItems : ["A", "B"],
    stroke: { width: 0 },
    colors,
    tooltip: { enabled: true },
    legend: { show: false },
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-xs text-gray-500">{title}</h4>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
        </div>
        <div className="w-28">
          <Chart options={options} series={series} type="donut" width="100%" />
        </div>
      </div>

      {/* small labels to the right (optional) */}
      <div className="mt-3 flex flex-col gap-2">
        {legendItems.map((l, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
            <span style={{ background: colors[i] }} className="w-2 h-2 rounded-full inline-block" />
            <span>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
