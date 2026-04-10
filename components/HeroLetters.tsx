"use client";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  italicWords?: number[];
  delayStart?: number;
  stagger?: number;
}

export default function HeroLetters({
  text,
  italicWords = [],
  delayStart = 0,
  stagger = 28,
}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const words = text.split(" ");
  let i = 0;
  return (
    <>
      {words.map((word, wi) => {
        const italic = italicWords.includes(wi);
        return (
          <span
            key={wi}
            className={`inline-block whitespace-nowrap ${
              italic ? "font-display-italic text-gold" : ""
            }`}
          >
            {word.split("").map((ch, ci) => {
              const delay = delayStart + i * stagger;
              i++;
              return (
                <span
                  key={ci}
                  className="letter"
                  style={{
                    animationDelay: mounted ? `${delay}ms` : "99999ms",
                  }}
                >
                  {ch}
                </span>
              );
            })}
            {wi < words.length - 1 && (
              <span className="inline-block w-[0.28em]">&nbsp;</span>
            )}
          </span>
        );
      })}
    </>
  );
}
