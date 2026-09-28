"use client";

import React, { useState, useEffect } from "react";
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

const STORAGE_KEY = "imca_exit_tracker_v2";

export default function ExitTracker() {
  // Default clean state rendered first to guarantee zero hydration mismatch
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({
    step1: true,
  });
  const [mounted, setMounted] = useState(false);

  // Sync with localStorage safely after mount
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCheckedSteps(JSON.parse(stored));
      }
    } catch (e) {
      // Graceful fallback if localStorage is blocked
    }
  }, []);

  const toggleStep = (id: string) => {
    setCheckedSteps((prev) => {
      const updated = {
        ...prev,
        [id]: !prev[id],
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handleReset = () => {
    const resetState = {};
    setCheckedSteps(resetState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const completedCount = STEPS.filter((s) => checkedSteps[s.id]).length;
  const progressPercent = Math.round((completedCount / STEPS.length) * 100);

  return (
    <section id="tracker" className="my-10 bg-white border border-[#E6D8C8] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="inline-flex items-center gap-1.5 bg-[#F3E9D8] text-[#C56A3C] text-xs font-mono font-bold px-2.5 py-1 rounded tracking-wide uppercase">
          <CheckSquare className="w-3.5 h-3.5" width={14} height={14} aria-hidden="true" /> Exit Action Tracker
        </span>
        <button
          onClick={handleReset}
          type="button"
          aria-label="Reset checklist"
          className="text-xs font-medium text-[#736155] hover:text-[#C56A3C] inline-flex items-center gap-1 transition cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" width={12} height={12} aria-hidden="true" /> Reset
        </button>
      </div>

      <h3 className="font-serif text-2xl text-[#2D1F17] font-normal mb-1 !mt-0">
        Aapka 5-Step Exit Progress Tracker
      </h3>
      <p className="text-sm text-[#736155] mb-5">
        Jaise-jaise aapka college paper-work aage badhe, yahan steps tick karte jayein ({mounted ? "auto-saved" : "saving enabled"}):
      </p>

      {/* Progress Bar with explicit height to prevent CLS */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-xs font-semibold font-mono text-[#736155] mb-2">
          <span>Overall Completion</span>
          <span className={progressPercent === 100 ? "text-[#16A34A] font-bold" : "text-[#C56A3C]"}>
            {completedCount} of {STEPS.length} Completed ({progressPercent}%)
          </span>
        </div>
        <div className="w-full h-3 bg-[#FAF6F0] border border-[#E6D8C8] rounded-full overflow-hidden">
          <div
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
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
                  ? "bg-[#FAF6F0]/70 border-[#C56A3C]/40"
                  : "bg-white border-[#E6D8C8] hover:bg-[#FAF6F0]"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleStep(step.id)}
                className="mt-1 h-4 w-4 rounded border-[#CBB9A5] text-[#C56A3C] focus:ring-[#C56A3C] cursor-pointer"
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
    </section>
  );
}
