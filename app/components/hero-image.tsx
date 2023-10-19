"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import hero from "~/public/images/hero.webp";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface Line {
  id: string;
  direction: "to bottom" | "to right";
  size: number;
  duration: number;
}
const HeroImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to bottom" : "to right",
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 30),
            id: Math.random().toString(36).substring(7),
          },
        ]);
        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div ref={ref} className="[perspective:2000px] py-[6.4rem] mt-[12.8rem]">
      <div
        className={twMerge(
          "relative bg-hero-gradient border border-transparent-white bg-opacity-[0.2] rounded-lg",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0",
          inView && "before:animate-image-glow",
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 z-20 overflow-hidden">
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={twMerge(
                "bg-glow-lines block absolute top-0 w-[10rem] h-[1px]",
                line.direction === "to bottom" &&
                  "h-[calc(var(--size)*1rem)] w-[1px] right-0 animate-glow-line-vertical",
                line.direction === "to right" &&
                  "w-[calc(var(--size)*1rem)] h-[1px] left-0 animate-glow-line-horizontal",
              )}
            />
          ))}
        </div>
        <svg
          className={twMerge(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-sketch-lines",
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <Image
          className={twMerge(
            "relative z-10 transition-opacity delay-[680ms]",
            inView ? "opacity-100" : "opacity-0",
          )}
          src={hero}
          alt="hero image"
        />
      </div>
    </div>
  );
};
export default HeroImage;
