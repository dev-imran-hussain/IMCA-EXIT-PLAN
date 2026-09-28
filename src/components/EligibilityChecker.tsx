"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, Calculator, Sparkles } from "lucide-react";

export default function EligibilityChecker() {
  const [semesters, setSemesters] = useState<number>(6);
  const [cgpa, setCgpa] = useState<string>("6.5");

  const numCgpa = parseFloat(cgpa) || 0;
  const isEligibleBca = semesters >= 6 && numCgpa >= 5.0;
  const isEligibleBcaHonours = semesters >= 8 && numCgpa >= 5.0;

  return (
    <div id="eligibility" className="my-10 bg-white border-2 border-[#C56A3C]/30 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center gap-1 bg-[#F7ECE4] text-[#C56A3C] text-xs font-mono font-bold px-2.5 py-1 rounded tracking-wide uppercase">
          <Calculator className="w-3.5 h-3.5" /> Interactive Tool
        </span>
      </div>
      
      <h3 className="font-serif text-2xl text-[#2D1F17] font-normal mb-2 !mt-0">
        Apni Exit Eligibility Check Karein
      </h3>
      <p className="text-sm text-[#736155] mb-6">
        Apne completed semesters aur estimated CGPA select karke dekhein ki aap Ordinance 33 ke tehat BCA degree ke haqdaar hain ya nahi:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="sem-select" className="block text-xs font-bold uppercase tracking-wider text-[#2D1F17] mb-2 font-mono">
            Kitne Semesters Pass Kiye Hain?
          </label>
          <select
            id="sem-select"
            value={semesters}
            onChange={(e) => setSemesters(Number(e.target.value))}
            className="w-full bg-[#FAF6F0] border border-[#E6D8C8] rounded-lg px-3.5 py-2.5 text-sm text-[#2D1F17] font-medium focus:outline-none focus:ring-2 focus:ring-[#C56A3C]/40 focus:border-[#C56A3C]"
          >
            <option value={4}>4 Semesters (2nd Year)</option>
            <option value={5}>5 Semesters</option>
            <option value={6}>6 Semesters (3rd Year Completed)</option>
            <option value={7}>7 Semesters</option>
            <option value={8}>8 Semesters (4th Year Completed)</option>
            <option value={10}>10 Semesters (Full 5 Years)</option>
          </select>
        </div>

        <div>
          <label htmlFor="cgpa-input" className="block text-xs font-bold uppercase tracking-wider text-[#2D1F17] mb-2 font-mono">
            Overall CGPA (Estimated / Actual):
          </label>
          <input
            id="cgpa-input"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            placeholder="e.g. 6.5"
            className="w-full bg-[#FAF6F0] border border-[#E6D8C8] rounded-lg px-3.5 py-2.5 text-sm text-[#2D1F17] font-medium focus:outline-none focus:ring-2 focus:ring-[#C56A3C]/40 focus:border-[#C56A3C]"
          />
        </div>
      </div>

      {/* Result Card */}
      {isEligibleBca ? (
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-[#166534]">
          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <div className="font-bold text-base text-[#16A34A] mb-1 flex items-center gap-1.5">
              <span>100% Eligible: Aap BCA Degree Lekar Exit Kar Sakte Hain!</span>
            </div>
            <p className="text-[#166534]">
              {isEligibleBcaHonours ? (
                <>
                  Aapne 8 semesters poore kar liye hain aur aapka CGPA <strong>{numCgpa.toFixed(1)}</strong> (≥ 5.0) hai. Clause 5.8 ke tehat aap <strong>BCA (Honours)</strong> ki 4-year degree lene ke liye eligible hain!
                </>
              ) : (
                <>
                  Aapne 6 semesters successfully pass kar liye hain aur aapka CGPA <strong>{numCgpa.toFixed(1)}</strong> (≥ 5.0) hai. RGPV Ordinance 33, Clause 5.8 ke anusaar aap <strong>Bachelor of Computer Applications (BCA)</strong> degree lene ke liye fully eligible hain.
                </>
              )}
            </p>
            <div className="mt-2 pt-2 border-t border-[#BBF7D0]/60 text-xs text-[#15803D]">
              💡 <strong>Clause 5.9 Bonus:</strong> Baad mein kabhi dobara MCA pura karna chahein toh direct {isEligibleBcaHonours ? "9th" : "7th"} semester mein re-entry mil sakti hai (MCA degree milne par purani BCA degree surrender karni hogi).
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-[#92400E]">
          <AlertTriangle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <div className="font-bold text-base text-[#D97706] mb-1">
              ⚠️ Attention: Minimum Requirements Abhi Poori Nahi Hain
            </div>
            <p>
              {semesters < 6 ? (
                <>
                  Clause 5.8 ke anusar BCA degree lene ke liye kam se kam <strong>6 Semesters (3rd Year)</strong> successfully pass hona zaroori hai. Aapne abhi {semesters} semesters select kiye hain.
                </>
              ) : numCgpa < 5.0 ? (
                <>
                  Ordinance 33 ke niyam ke anusaar overall <strong>CGPA kam se kam 5.0</strong> hona mandatory hai. Aapka current entered CGPA ({numCgpa.toFixed(1)}) 5.0 se kam hai.
                </>
              ) : null}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
