"use client";

import React, { useState } from "react";
import { Share2, MessageCircle, Twitter, Linkedin, Copy, Check } from "lucide-react";

export default function ShareCluster() {
  const [copied, setCopied] = useState(false);

  const shareText = "IMCA Exit Blueprint: 6th Semester ke Baad RGPV Se BCA Degree Kaise Le? (Ordinance 33 Clauses 5.8 & 5.9 Explained by Imran Hussain)";

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(shareText + " - ");
      window.open(`https://api.whatsapp.com/send?text=${text}${url}`, "_blank");
    }
  };

  const handleTwitter = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(shareText);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
    }
  };

  const handleLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    }
  };

  return (
    <section aria-labelledby="share-heading" className="my-10 bg-[#F3E9D8] border border-[#E6D8C8] rounded-2xl p-6 sm:p-8 text-center">
      <div className="w-12 h-12 rounded-full bg-[#C56A3C]/10 text-[#C56A3C] flex items-center justify-center mx-auto mb-3">
        <Share2 className="w-6 h-6" width={24} height={24} aria-hidden="true" />
      </div>

      <h3 id="share-heading" className="font-serif text-2xl text-[#2D1F17] font-normal mb-2 !mt-0">
        Apne IMCA Batchmates Ke Sath Share Karein
      </h3>
      <p className="text-sm text-[#736155] max-w-xl mx-auto mb-6">
        RGPV ke bohot se students ko Ordinance 33 ke is legal exit rule ka pata nahi hota. Is guide ko share karke unki help karein!
      </p>

      {/* Button cluster */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          type="button"
          aria-label="Share on WhatsApp"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#1EBE5D] transition shadow-sm active:scale-95 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white" width={16} height={16} aria-hidden="true" />
          Share on WhatsApp
        </button>

        {/* Twitter / X */}
        <button
          onClick={handleTwitter}
          type="button"
          aria-label="Share on X (formerly Twitter)"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] text-white text-xs sm:text-sm font-semibold hover:bg-[#1F2937] transition shadow-sm active:scale-95 cursor-pointer"
        >
          <Twitter className="w-4 h-4 fill-white" width={16} height={16} aria-hidden="true" />
          Share on X / Twitter
        </button>

        {/* LinkedIn */}
        <button
          onClick={handleLinkedIn}
          type="button"
          aria-label="Share on LinkedIn"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] text-white text-xs sm:text-sm font-semibold hover:bg-[#084e96] transition shadow-sm active:scale-95 cursor-pointer"
        >
          <Linkedin className="w-4 h-4 fill-white" width={16} height={16} aria-hidden="true" />
          LinkedIn
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          type="button"
          aria-label="Copy article link"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E6D8C8] text-[#2D1F17] text-xs sm:text-sm font-semibold hover:bg-[#FAF6F0] transition shadow-sm active:scale-95 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-[#16A34A]" width={16} height={16} aria-hidden="true" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-[#736155]" width={16} height={16} aria-hidden="true" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
