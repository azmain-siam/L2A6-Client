"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string; // can be local (/images/...) or full URL
  overlayColor?: string; // like "bg-black/50"
  className?: string;
  children?: ReactNode;
  height?: string; // optional: custom height (e.g. "h-96")
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage,
  overlayColor = "bg-black/50",
  className,
  children,
  height = "h-[200px]",
}: PageBannerProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl overflow-hidden shadow-md",
        height,
        className
      )}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
      <div className={cn("absolute inset-0", overlayColor)} />
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg md:text-xl text-white/90">{subtitle}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
