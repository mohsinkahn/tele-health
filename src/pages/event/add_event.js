'use client';
import { useEffect, useState } from "react";
import AddEventForm from '@/components/event/addeventform';

export default function NewClientPage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[300px] gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-[#144a6c] border-t-transparent rounded-full animate-spin"></div>

          {/* Loading text */}
          <p className="text-[#4e758d] text-lg font-medium">Loading Client form...</p>

          {/* Skeleton preview */}
          <div className="w-full max-w-2xl space-y-3 mt-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse w-2/3"></div>
          </div>
        </div>
      ) : (
        <AddEventForm />
      )}
    </main>
  );
}
