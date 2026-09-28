"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, CheckSquare, Calculator, ExternalLink } from "lucide-react";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C56A3C] via-[#E07A5F] to-[#16A34A] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E6D8C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#C56A3C] text-white text-xs font-bold px-2.5 py-1 rounded tracking-wide uppercase font-mono">
              RGPV Guide
            </span>
            <span className="font-serif text-lg sm:text-xl font-normal text-[#2D1F17] tracking-tight">
              IMCA Exit Blueprint
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
            <a
              href="#eligibility"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[#736155] hover:text-[#C56A3C] hover:bg-[#F3E9D8] transition"
            >
              <Calculator className="w-3.5 h-3.5" />
              Eligibility
            </a>
            <a
              href="#tracker"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F3E9D8] text-[#2D1F17] hover:bg-[#ECE0CD] transition border border-[#E6D8C8]"
            >
              <CheckSquare className="w-3.5 h-3.5 text-[#C56A3C]" />
              Action Tracker
            </a>
            <a
              href="https://www.rgpv.ac.in/aboutrgtu/frm_viewordinance.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[#C56A3C] hover:text-[#A8542B] underline underline-offset-2 ml-1"
            >
              Ordinance Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
