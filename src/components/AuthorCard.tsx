import React from "react";
import { CheckCircle2, BookOpen, GraduationCap, Compass } from "lucide-react";

export default function AuthorCard() {
  return (
    <section aria-labelledby="author-title" className="my-12 bg-gradient-to-br from-white to-[#FAF6F0] border-2 border-[#C56A3C]/40 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
      {/* Top Badge */}
      <div className="absolute top-0 right-0 bg-[#C56A3C] text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl">
        Lead Research &amp; Credit
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-2 sm:pt-0">
        {/* Avatar with fixed dimensions to guarantee 0 CLS */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#C56A3C] via-[#E07A5F] to-[#C56A3C] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md">
            IH
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center border-2 border-white shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5" width={14} height={14} aria-hidden="true" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3 id="author-title" className="font-serif text-2xl text-[#2D1F17] font-normal !m-0">
              Imran Hussain
            </h3>
            <span className="inline-block self-center sm:self-auto text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F7ECE4] text-[#C56A3C] border border-[#C56A3C]/20">
              IMCA Student &amp; Researcher
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#3B2E27] leading-relaxed mb-4">
            Is poore informative guide ki in-depth legal research, RGPV University ke complex Ordinance 33 ke clauses ko dhoondh nikalna, unhe aasaan Hinglish bhasha mein summarize karna, aur college ke practical ground-level paper-work ki sachchai ko students ke aage laane ka poora credit <strong>Imran Hussain (IMCA Student &amp; Researcher)</strong> ko jaata hai.
          </p>

          <blockquote className="bg-[#F3E9D8] border-l-4 border-[#C56A3C] p-3 rounded-r-lg text-xs sm:text-sm italic text-[#2D1F17] mb-4 not-italic">
            "Har student ka yeh adhikar hai ki use University ke aadhikarik niyam pta hon, taaki koi bhi college administration unhe be-vajah rok ya dara na sake."
          </blockquote>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#736155] bg-white border border-[#E6D8C8] px-2.5 py-1 rounded-md">
              <BookOpen className="w-3 h-3 text-[#C56A3C]" width={12} height={12} aria-hidden="true" /> Ordinance 33 Expert
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#736155] bg-white border border-[#E6D8C8] px-2.5 py-1 rounded-md">
              <GraduationCap className="w-3 h-3 text-[#16A34A]" width={12} height={12} aria-hidden="true" /> RGPV Dual Degree
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#736155] bg-white border border-[#E6D8C8] px-2.5 py-1 rounded-md">
              <Compass className="w-3 h-3 text-[#D97706]" width={12} height={12} aria-hidden="true" /> Student Guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
