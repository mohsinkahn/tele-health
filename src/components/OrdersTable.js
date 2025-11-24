import React from "react";

export default function OrdersTable({ rows = [] }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 overflow-x-auto">
      <h4 className="text-sm font-medium text-gray-700 mb-3">Orders</h4>
      <table className="min-w-full table-auto text-sm">
        <thead className="text-xs text-gray-500 uppercase">
          <tr>
            <th className="px-3 py-2 text-left"><input type="checkbox" /></th>
            <th className="px-3 py-2 text-left">Order ID</th>
            <th className="px-3 py-2 text-left">Supplier</th>
            <th className="px-3 py-2 text-left">Client</th>
            <th className="px-3 py-2 text-left">ETD</th>
            <th className="px-3 py-2 text-left">ETA</th>
            <th className="px-3 py-2 text-left">Assigned PM</th>
            <th className="px-3 py-2 text-left">Status</th>
            <th className="px-3 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-3 py-3"><input type="checkbox" /></td>
              <td className="px-3 py-3 text-gray-700">{r.id}</td>
              <td className="px-3 py-3 text-gray-600">{r.supplier}</td>
              <td className="px-3 py-3 text-gray-600">{r.client}</td>
              <td className="px-3 py-3 text-gray-600">{r.etd}</td>
              <td className="px-3 py-3 text-gray-600">{r.eta}</td>
              <td className="px-3 py-3 text-gray-600">{r.pm}</td>
              <td className="px-3 py-3"><span className="px-2 py-1 rounded text-xs bg-[#EAF6F4] text-[#355E5B]">{r.status}</span></td>
              <td className="px-3 py-3 text-gray-600">{r.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
