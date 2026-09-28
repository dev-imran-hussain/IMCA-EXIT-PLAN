"use client";

import React, { useState } from "react";
import { Copy, Check, FileText } from "lucide-react";

const APPLICATION_TEMPLATE = `To,
The Principal / Director,
[Aapke College Ka Naam],
[City, State]

Through: The Head of Department (HOD), Department of Computer Applications

Subject: Application for exit from Integrated MCA (5-Year) and grant of BCA Degree under RGPV Ordinance No. 33, Clause 5.8.

Respected Sir/Madam,

I, [Aapka Naam], am a bona fide student of the Integrated MCA (5-Year Dual Degree) program in your esteemed institution, bearing Enrollment Number: [Aapka RGPV Enrollment No.] and Roll Number: [Aapka Roll No.].

I have successfully completed all theory and practical examinations up to the 6th semester without any active backlogs and have maintained the requisite cumulative grade point average (CGPA >= 5.0).

As per the provisions laid down in RGPV Ordinance No. 33, Clause 5.8:
"A candidate on successfully completion of the first Six semesters with minimum CGPA of 5.0, shall be eligible for the award of a Bachelor Degree of Computer Applications (BCA)..."

Due to my personal career commitments and future academic plans, I wish to exit from the Integrated MCA course at the end of the 6th semester and claim my Bachelor of Computer Applications (BCA) degree.

Kindly initiate my exit clearance, issue the 'No Dues' form, and forward my recommendation to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) for the issuance of my Final Consolidated Mark Sheet, Provisional Degree Certificate (PDC), Transfer Certificate (TC), and Migration Certificate.

Thanking you.

Yours obediently,

[Aapka Naam]
Enrollment No: [_______________________]
Mobile No:     [_______________________]
Date:          [Date yahan likhein]`;

export default function ApplicationCopier() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(APPLICATION_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  return (
    <div id="application-format" className="my-10 rounded-2xl overflow-hidden border border-[#3B2E27] shadow-md bg-[#261D18]">
      {/* Code Header */}
      <div className="bg-[#1E1612] px-4 sm:px-6 py-3 border-b border-[#3B2E27] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#C56A3C]" />
          <span className="font-mono text-xs text-[#CBB9A5]">application_for_bca_exit.txt</span>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold font-mono uppercase tracking-wider transition bg-[#C56A3C] hover:bg-[#A8542B] text-white active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" /> Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" /> Copy to Clipboard
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 sm:p-6 overflow-x-auto max-h-[480px] scrollbar-thin scrollbar-thumb-[#3B2E27]">
        <pre className="font-mono text-xs sm:text-sm text-[#F4EBE3] leading-relaxed whitespace-pre font-normal m-0">
          {APPLICATION_TEMPLATE}
        </pre>
      </div>
      
      <div className="bg-[#1E1612] px-4 sm:px-6 py-2.5 text-xs text-[#CBB9A5]/80 border-t border-[#3B2E27]">
        💡 <strong>Tip:</strong> Copy button dabayein, apne brackets <code className="text-[#C56A3C] bg-[#261D18] px-1 py-0.5 rounded">[...]</code> mein college name aur roll number fill karein aur print lein.
      </div>
    </div>
  );
}
