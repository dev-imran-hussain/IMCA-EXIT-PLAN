"use client";

import React, { useState } from "react";
import { CheckSquare, RotateCcw } from "lucide-react";

interface StepItem {
  id: string;
  title: string;
  desc: string;
}

const STEPS: StepItem[] = [
  {
    id: "step1",
    title: "Sabhi Subjects Clear Karein (Zero Backlogs)",
    desc: "1st se lekar 6th semester tak ke sabhi theory aur practical subjects clear hain aur overall CGPA kam se kam 5.0 hai.",
  },
  {
    id: "step2",
    title: "HOD Aur Principal Ko Formal Application Dein",
    desc: "RGPV Ordinance 33, Clause 5.8 cite karte hue HOD aur Principal ke naam formal exit application submit kardi.",
  },
  {
    id: "step3",
    title: "'No Dues' Clearance Form Complete Karein",
    desc: "Central Library, Accounts Department, Computer Labs aur Hostel se signature aur stamp le kar 'No Dues' clear karwaya.",
  },
  {
    id: "step4",
    title: "Consolidated Mark Sheet Aur PDC Ke Liye Apply Karein",
    desc: "6th sem result aane ke baad RGPV student portal / college student section se PDC aur 3-year consolidated marksheet ke liye apply kiya.",
  },
  {
    id: "step5",
    title: "TC Aur Migration Certificate Collect Karein",
    desc: "College se Transfer Certificate (TC) aur RGPV portal se online Migration Certificate download/collect kiya.",
  },
];

export default function ExitTracker() {
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({
    step1: true,
  });

  const toggleStep = (id: string) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReset = () => {
    setCheckedSteps({});
  };

  const completedCount = STEPS.filter((s) => checkedSteps[s.id]).length;
  const progressPercent = Math.round((completedCount / STEPS.length) * 100);

  return (
    <div id="tracker" className="my-10 bg-white border border-[#E6D8C8] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="inline-flex items-center gap-1.5 bg-[#F3E9D8] text-[#C56A3C] text-xs font-mono font-bold px-2.5 py-1 rounded tracking-wide uppercase">
          <CheckSquare className="w-3.5 h-3.5" /> Exit Action Tracker
        </span>
        <button
          onClick={handleReset}
          type="button"
          className="text-xs font-medium text-[#736155] hover:text-[#C56A3C] inline-flex items-center gap-1 transition"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <h3 className="font-serif text-2xl text-[#2D1F17] font-normal mb-1 !mt-0">
        Aapka 5-Step Exit Progress Tracker
      </h3>
      <p className="text-sm text-[#736155] mb-5">
        Jaise-jaise aapka college paper-work aage badhe, yahan steps tick karte jayein:
      </p>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-xs font-semibold font-mono text-[#736155] mb-2">
          <span>Overall Completion</span>
          <span className={progressPercent === 100 ? "text-[#16A34A] font-bold" : "text-[#C56A3C]"}>
            {completedCount} of {STEPS.length} Completed ({progressPercent}%)
          </span>
        </div>
        <div className="w-full h-3 bg-[#FAF6F0] border border-[#E6D8C8] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#C56A3C] to-[#16A34A] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {progressPercent === 100 && (
          <div className="mt-2 text-xs font-bold text-[#16A34A] flex items-center gap-1">
            🎉 Shandar! Aapka BCA exit procedure poori tarah se ready hai.
          </div>
        )}
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {STEPS.map((step, idx) => {
          const isChecked = !!checkedSteps[step.id];
          return (
            <label
              key={step.id}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition select-none ${
                isChecked
                  ? "bg-[#FAF6F0]/60 border-[#C56A3C]/40"
                  : "bg-white border-[#E6D8C8] hover:bg-[#FAF6F0]"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleStep(step.id)}
                className="mt-1 h-4 w-4 rounded border-[#CBB9A5] text-[#C56A3C] focus:ring-[#C56A3C]"
              />
              <div className="flex-1">
                <div
                  className={`text-sm sm:text-base font-semibold leading-snug ${
                    isChecked ? "text-[#736155] line-through" : "text-[#2D1F17]"
                  }`}
                >
                  <span className="font-mono text-xs text-[#C56A3C] mr-1.5 font-bold">
                    0{idx + 1}.
                  </span>
                  {step.title}
                </div>
                <p
                  className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    isChecked ? "text-[#9B897D]" : "text-[#736155]"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
