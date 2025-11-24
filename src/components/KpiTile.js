export default function KpiTile({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h5 className="text-xs text-gray-500">{title}</h5>
      <p className="text-lg font-semibold text-gray-800 mt-2">{value}</p>
    </div>
  );
}
