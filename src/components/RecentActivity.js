export default function RecentActivity({ items = [] }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Activity</h4>
      <div className="space-y-4">
        {items.map((it, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">{it.avatar}</div>
            <div>
              <p className="text-sm text-gray-700">{it.title}</p>
              <p className="text-xs text-gray-500 mt-1">{it.desc}</p>
              <p className="text-xs text-gray-400 mt-1">{it.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
