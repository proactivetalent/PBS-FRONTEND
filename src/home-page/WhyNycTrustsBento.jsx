"use client";

import { useEffect, useRef, useState } from "react";

const TILES = [
  {
    id: "A",
    eyebrow: "Experience",
    title: "of Combined expertise",
    summary:
      "Decades of hands-on experience navigating NYC's complex, ever-evolving building codes, zoning laws, and permit processes.",
    variant: "hero",
    gridClass: "md:col-span-2 lg:col-span-2 lg:row-span-2",
    mobileOrder: "order-1",
  },
  {
    id: "B",
    eyebrow: "Track record",
    title: "Proven across NYC",
    variant: "impact",
    gridClass: "md:col-span-2 lg:col-span-2 lg:row-span-1",
    mobileOrder: "order-2",
    quote: "It's an honour to achieve these numbers.",
    proofPoints: [
      { label: "Properties monitored", value: "1,453+" },
      { label: "Violations corrected", value: "9,852+" },
      { label: "Square footage developed", value: "4.8M+" },
    ],
  },
  {
    id: "C",
    eyebrow: "Compliance",
    title: "360° Compliance Guardrails",
    summary:
      "Full-spectrum code adherence from design to final inspection — streamlined services covering every code regulation.",
    gridClass: "md:col-span-1 lg:col-span-1 lg:row-span-1",
    mobileOrder: "order-3",
    summaryClass: "line-clamp-none",
  },
  {
    id: "D",
    eyebrow: "Audits",
    title: "Pre-inspection audits",
    summary:
      "Identify and resolve compliance gaps before official inspections to guarantee first-time approval.",
    gridClass: "md:col-span-1 lg:col-span-1 lg:row-span-1",
    mobileOrder: "order-4",
  },
  {
    id: "E",
    eyebrow: "Transparency",
    title: "Real-time documentations",
    summary:
      "Digital tracking of permits, revisions, and approvals for full transparency and audit readiness.",
    gridClass: "md:col-span-2 lg:col-span-2 lg:row-span-1",
    mobileOrder: "order-5",
  },
  {
    id: "F",
    eyebrow: "Full service",
    title: "End-to-End Solutions",
    summary:
      "From blueprint reviews to occupancy certificates — every step handled to save time and stress.",
    gridClass: "md:col-span-1 lg:col-span-1 lg:row-span-1",
    mobileOrder: "order-6",
    summaryClass: "line-clamp-none",
  },
  {
    id: "G",
    eyebrow: "Strategy",
    title: "Proactive Approach",
    summary:
      "We anticipate challenges, mitigate risks, and adapt to regulatory changes before they impact your project.",
    gridClass: "md:col-span-1 lg:col-span-1 lg:row-span-1",
    mobileOrder: "order-7",
  },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

function BentoTile({ tile, index, revealed, reducedMotion }) {
  const isHero = tile.variant === "hero";
  const isImpact = tile.variant === "impact";

  return (
    <li
      className={`
        ${tile.mobileOrder} ${tile.gridClass}
        min-h-[160px] lg:min-h-[180px]
        transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none
        ${revealed || reducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 motion-reduce:translate-y-0"}
      `}
      style={{
        transitionDelay: reducedMotion ? "0ms" : `${index * 80}ms`,
      }}
    >
      <article
        className="
          group h-full rounded-xl bg-[#1E2322] border border-white/10
          p-5 sm:p-6 lg:p-7 flex flex-col
          md:transition-[transform,border-color,box-shadow] md:duration-200 md:ease-out
          md:hover:-translate-y-1 md:hover:border-[#8AD5B7] md:hover:shadow-lg md:hover:shadow-black/20
          motion-reduce:md:hover:translate-y-0 motion-reduce:md:hover:shadow-none
        "
      >
        <p className="font-poppins text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#8AD5B7] mb-2">
          {tile.eyebrow}
        </p>

        {isHero ? (
          <div className="flex-1 flex flex-col justify-center">
            <span className="font-conthrax font-semibold text-[#8AD5B7] text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight">
              30+
            </span>
            <span className="font-conthrax font-semibold text-[#DCE2E2] text-lg sm:text-xl uppercase mt-2">
              years
            </span>
            <h3 className="font-conthrax font-semibold text-sm sm:text-base text-[#DCE2E2] uppercase mt-3 mb-2">
              {tile.title}
            </h3>
            <p className="font-poppins text-xs sm:text-sm text-[#89A096] leading-relaxed line-clamp-3">
              {tile.summary}
            </p>
          </div>
        ) : isImpact ? (
          <div className="flex flex-col flex-1 justify-between gap-4">
            <div>
              <h3 className="font-conthrax font-semibold text-sm sm:text-base text-[#DCE2E2] uppercase mb-3">
                {tile.title}
              </h3>
              <blockquote className="border-l-2 border-[#8AD5B7] pl-3 sm:pl-4">
                <p className="font-poppins text-sm sm:text-base text-[#DCE2E2] italic leading-relaxed">
                  &ldquo;{tile.quote}&rdquo;
                </p>
              </blockquote>
            </div>
            <ul className="space-y-2" aria-label="Track record highlights">
              {tile.proofPoints.map((point) => (
                <li
                  key={point.label}
                  className="flex items-baseline justify-between gap-3 border-t border-white/10 pt-2 first:border-t-0 first:pt-0"
                >
                  <span className="font-poppins text-[11px] sm:text-xs text-[#89A096] leading-snug">
                    {point.label}
                  </span>
                  <span className="font-conthrax font-semibold text-xs sm:text-sm text-[#8AD5B7] tabular-nums shrink-0">
                    {point.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <h3 className="font-conthrax font-semibold text-sm sm:text-base text-[#DCE2E2] uppercase mb-2">
              {tile.title}
            </h3>
            <p
              className={`font-poppins text-xs sm:text-sm text-[#89A096] leading-relaxed ${tile.summaryClass || "line-clamp-3"}`}
            >
              {tile.summary}
            </p>
          </>
        )}
      </article>
    </li>
  );
}

export default function WhyNycTrustsBento() {
  const gridRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setRevealed(true);
      return;
    }

    const gridEl = gridRef.current;
    if (!gridEl) return;

    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          gridObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    gridObserver.observe(gridEl);
    return () => gridObserver.disconnect();
  }, [reducedMotion]);

  return (
    <div className="px-4 lg:px-0 lg:w-[980px] xl:w-[1140px] 2xl:w-[1236px] 3xl:w-[1440px] mx-auto py-10 sm:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center uppercase font-conthrax font-semibold text-[#DCE2E2] mb-3">
        Why NYC Trusts PBS?
      </h2>
      <div className="w-[50%] sm:w-[40%] lg:w-[30%] h-1 bg-[#7CE2B8] mx-auto mb-6 sm:mb-8" />

      <ul
        ref={gridRef}
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0
          lg:auto-rows-auto lg:grid-flow-dense lg:items-stretch
        "
        aria-label="Why NYC trusts PBS"
      >
        {TILES.map((tile, index) => (
          <BentoTile
            key={tile.id}
            tile={tile}
            index={index}
            revealed={revealed}
            reducedMotion={reducedMotion}
          />
        ))}
      </ul>
    </div>
  );
}
