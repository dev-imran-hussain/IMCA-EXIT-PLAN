import React from "react";
import { Clock, ShieldCheck, Award, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 border-b border-[#E6D8C8] bg-gradient-to-b from-[#F5EAE0]/50 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Metadata Tags Pill Cluster */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-[#F7ECE4] text-[#C56A3C] border border-[#C56A3C]/20">
            <Award className="w-3.5 h-3.5" width={14} height={14} aria-hidden="true" />
            Updated for RGPV Students
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0]">
            <ShieldCheck className="w-3.5 h-3.5" width={14} height={14} aria-hidden="true" />
            Verified via Ordinance 33
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-[#736155] bg-[#F3E9D8]">
            <Clock className="w-3.5 h-3.5" width={14} height={14} aria-hidden="true" />
            6 min read
          </span>
        </div>

        {/* Hero Title (LCP Target: Pure Static HTML, display font, zero CLS) */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl text-[#2D1F17] leading-[1.18] tracking-tight mb-5">
          IMCA Exit Blueprint: 6th Semester Ke Baad RGPV Se <span className="italic text-[#C56A3C]">BCA Degree</span> Kaise Le?
        </h1>

        {/* Hero Deck */}
        <p className="text-lg sm:text-xl text-[#3B2E27] leading-relaxed mb-8 max-w-3xl">
          Agar aap 5-Year Integrated MCA (IMCA) program ke student hain aur 3rd year (6th semester) ke baad course se exit lena chahte hain, toh university ke rules samajhna behad zaroori hai. RGPV ke aadhikarik <strong>"Ordinance 33"</strong> ke anusaar, students legally 6th semester ya 8th semester ke baad BCA degree lekar course chhod sakte hain.
        </p>

        {/* Author Attribution Card */}
        <div className="bg-white border border-[#E6D8C8] rounded-xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C56A3C] to-[#E07A5F] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm shrink-0">
              IH
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[#2D1F17]">
                Researched &amp; Written by <span className="text-[#C56A3C]">Imran Hussain</span>
              </div>
              <div className="text-xs sm:text-sm text-[#736155]">
                IMCA Student &amp; Researcher • Rajiv Gandhi Proudyogiki Vishwavidyalaya
              </div>
            </div>
          </div>

          <a
            href="https://www.rgpv.ac.in/aboutrgtu/frm_viewordinance.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#F7ECE4] text-[#C56A3C] hover:bg-[#C56A3C] hover:text-white transition border border-[#C56A3C]/20 shrink-0"
          >
            🏛️ Official RGPV Portal <ExternalLink className="w-3.5 h-3.5" width={14} height={14} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
