"use client";

import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          if (total > 0) {
            setProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C56A3C] via-[#E07A5F] to-[#16A34A] z-50 transition-all duration-75 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
