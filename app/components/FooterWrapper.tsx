"use client";

import { useEffect, useRef, useState } from "react";

export default function FooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    // Use ResizeObserver for more reliable height tracking
    const observer = new ResizeObserver(() => updateHeight());
    if (footerRef.current) observer.observe(footerRef.current);
    
    updateHeight();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative w-full"
      style={{ height: footerHeight > 0 ? footerHeight : "auto" }}
    >
      <div className="fixed bottom-0 left-0 w-full z-0" ref={footerRef}>
        {children}
      </div>
    </div>
  );
}
