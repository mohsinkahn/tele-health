"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function MetricCard({ title, value, change }) {
  const PURPLE_COLOR = "#7C3AED";

  // Dummy sparkline data
  const dataPoints = [20, 30, 25, 45, 35, 55, 40, 60, 50, 70];

  // Sparkline Series
  const mainSeries = { name: title, data: dataPoints };
  const markerSeries = {
    name: "Last Point",
    data: dataPoints.map((v, i) => (i === dataPoints.length - 1 ? v : null)),
  };

  // Sparkline Options
  const sparklineOptions = {
    chart: {
      type: "area",
      height: 80,
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [PURPLE_COLOR],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
      colors: [PURPLE_COLOR],
    },
    markers: {
      size: [0, 4],
      colors: [PURPLE_COLOR],
      strokeColors: [PURPLE_COLOR],
      hover: { size: 0 },
    },
    tooltip: { enabled: false },
    grid: { show: false },
    dataLabels: { enabled: false },
    xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { show: false },
  };

  // --------------------------------------------
  // ✅ SEMI CIRCLE GAUGE FOR PATIENTS
  // --------------------------------------------

  const gaugeValue = Number(value) || 0; // convert to number

  const gaugeOptions = {
    chart: {
      type: "radialBar",
      height: 150,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: "60%",
        },
        track: {
          background: "#F3F4F6",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            offsetY: -10,
            fontSize: "22px",
            fontWeight: 700,
            color: PURPLE_COLOR,
          },
        },
      },
    },
    fill: {
      colors: [PURPLE_COLOR],
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#A855F7"],
        shadeIntensity: 0.5,
        stops: [0, 100],
      },
    },
    stroke: { lineCap: "round" },
  };

  const gaugeSeries = [gaugeValue]; // example: 200 → 200%

  const isPatientCard = title.toLowerCase() === "patients";

  return (
    <div className="bg-white rounded-xl p-4  border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex gap-2 items-center">
            <h6 className="text-sm text-gray-600 font-semibold">{title}</h6>

            {change && (
              <span className="text-[#7026A1] bg-[#EBEEF7] rounded-xl px-3">
                {change}
              </span>
            )}
          </div>

          {/* Chart -- SWITCHES between sparkline or gauge */}
          <div className="mt-4">
            {isPatientCard ? (
              <Chart
                options={gaugeOptions}
                series={gaugeSeries}
                type="radialBar"
                height={190}
                width={200}
              />
            ) : (
              <Chart
                options={sparklineOptions}
                series={[mainSeries, markerSeries]}
                type="area"
                height={100}
                width={280}
              />
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="text-right">
          {change ? (
            <p className="text-xs text-gray-400 mt-1">
              Appointment have Increased by <span>{change}</span>
            </p>
          ) : (
            <p className="text-xs text-gray-400 mt-1">No change recorded</p>
          )}

          <div className="text-5xl font-bold text-[#7026A1] mt-6">{value}</div>
        </div>
      </div>
    </div>
  );
}
