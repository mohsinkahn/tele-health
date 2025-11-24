"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SupplierViewComponent from "../components/custom_comp_view";

export default function CustomCompViewPage() {
  const router = useRouter();
  const { id } = router.query;
  const [supplierId, setSupplierId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setSupplierId(id);
      setTimeout(() => setLoading(false), 1500); // simulate delay
    }
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[400px] gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-[#144a6c] border-t-transparent rounded-full animate-spin"></div>

          {/* Loading text */}
          <p className="text-[#4e758d] text-lg font-medium">
            Loading supplier details...
          </p>

          {/* Skeleton preview */}
          <div className="w-full max-w-3xl space-y-3 mt-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-[500] text-[#101828]">Customs & Compliance Agencies</h1>
          <p className="text-[#202E2D] font-[100] text-[14px] m-0">
            Track and manage all customs & compliance partners in one place.
          </p>
          <hr className="mt-[20px] mb-[30px] text-[#EAECF0]" />
          <SupplierViewComponent supplierId={supplierId} />
        </>
      )}
    </div>
  );
}
