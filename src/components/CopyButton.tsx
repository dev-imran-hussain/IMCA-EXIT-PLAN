"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-label="Copy application letter to clipboard"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold font-mono uppercase tracking-wider transition bg-[#C56A3C] hover:bg-[#A8542B] text-white active:scale-95 shrink-0"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Copy to Clipboard</span>
        </>
      )}
    </button>
  );
}
