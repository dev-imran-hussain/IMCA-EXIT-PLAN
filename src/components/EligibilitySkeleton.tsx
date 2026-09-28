import React from "react";

export default function EligibilitySkeleton() {
  return (
    <div
      aria-hidden="true"
      className="my-10 bg-white border-2 border-[#C56A3C]/20 rounded-2xl p-6 sm:p-8 shadow-sm animate-pulse min-h-[340px]"
    >
      <div className="w-32 h-6 bg-[#F7ECE4] rounded mb-3" />
      <div className="w-3/4 h-8 bg-[#FAF6F0] rounded mb-2" />
      <div className="w-1/2 h-4 bg-[#FAF6F0] rounded mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="h-16 bg-[#FAF6F0] rounded-lg" />
        <div className="h-16 bg-[#FAF6F0] rounded-lg" />
      </div>

      <div className="h-24 bg-[#FAF6F0] rounded-xl" />
    </div>
  );
}
