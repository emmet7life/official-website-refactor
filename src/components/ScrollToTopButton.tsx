"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 320);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return <button
    type="button"
    className={`scroll-to-top ${isVisible ? "is-visible" : ""}`}
    aria-label="滚动到页面顶部"
    title="返回顶部"
    tabIndex={isVisible ? 0 : -1}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <ArrowUp aria-hidden="true" size={21} strokeWidth={2} />
  </button>;
}
