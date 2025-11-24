'use client';
import { useEffect, useState } from "react";
import AddPotentialSupform from "@/components/supplier/AddPotentialSupform";


export default function NewSupplierPage() {
  const [loading, setLoading] = useState(true);

  // Simulate form loading (replace with API condition if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[400px] gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-[#144a6c] border-t-transparent rounded-full animate-spin"></div>

          {/* Loading text */}
          <p className="text-[#4e758d] text-lg font-medium">
            Preparing supplier Form...
          </p>

          {/* Skeleton preview */}
          <div className="w-full max-w-2xl space-y-3 mt-6">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ) : (
        <AddPotentialSupform />
      )}
    </main>
  );
}
