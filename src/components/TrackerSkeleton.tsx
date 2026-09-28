import React from "react";

export default function TrackerSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="my-10 bg-white border border-[#E6D8C8] rounded-2xl p-6 sm:p-8 shadow-sm animate-pulse min-h-[460px]"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="w-36 h-6 bg-[#F3E9D8] rounded" />
        <div className="w-16 h-4 bg-[#FAF6F0] rounded" />
      </div>

      <div className="w-2/3 h-8 bg-[#FAF6F0] rounded mb-2" />
      <div className="w-1/2 h-4 bg-[#FAF6F0] rounded mb-5" />

      <div className="h-4 bg-[#FAF6F0] rounded-full mb-6" />

      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-16 bg-[#FAF6F0] rounded-xl border border-[#E6D8C8]/60" />
        ))}
      </div>
    </div>
  );
}
