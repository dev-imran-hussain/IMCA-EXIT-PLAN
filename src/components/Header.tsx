import React from "react";
import ProgressBar from "@/components/ProgressBar";
import { Calculator, CheckSquare, ExternalLink } from "lucide-react";

export default function Header() {
  return (
    <>
      <ProgressBar />

      {/* Static Semantic Header */}
      <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-sm border-b border-[#E6D8C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <span className="bg-[#C56A3C] text-white text-xs font-bold px-2.5 py-1 rounded tracking-wide uppercase font-mono">
              RGPV Guide
            </span>
            <span className="font-serif text-lg sm:text-xl font-normal text-[#2D1F17] tracking-tight">
              IMCA Exit Blueprint
            </span>
          </div>

          <nav aria-label="Quick jump" className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
            <a
              href="#eligibility"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[#736155] hover:text-[#C56A3C] hover:bg-[#F3E9D8] transition"
            >
              <Calculator className="w-3.5 h-3.5" width={14} height={14} aria-hidden="true" />
              Eligibility
            </a>
            <a
              href="#tracker"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F3E9D8] text-[#2D1F17] hover:bg-[#ECE0CD] transition border border-[#E6D8C8]"
            >
              <CheckSquare className="w-3.5 h-3.5 text-[#C56A3C]" width={14} height={14} aria-hidden="true" />
              Action Tracker
            </a>
            <a
              href="https://www.rgpv.ac.in/aboutrgtu/frm_viewordinance.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[#C56A3C] hover:text-[#A8542B] underline underline-offset-2 ml-1"
            >
              Ordinance Portal <ExternalLink className="w-3 h-3" width={12} height={12} aria-hidden="true" />
            </a>
          </nav>

        </div>
      </header>
    </>
  );
}
