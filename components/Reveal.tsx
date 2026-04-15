"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait a paint tick so newly-mounted page content is in the DOM.
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
      if (els.length === 0) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
      );

      els.forEach((el) => io.observe(el));

      // Safety net: if the observer never fires for some reason (tab
      // resume, zoom, fast navigation), force everything visible after 2s
      // so the user never sees empty content on a tour detail page.
      const fallback = setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(".reveal:not(.in)")
          .forEach((el) => el.classList.add("in"));
        io.disconnect();
      }, 2000);

      return () => {
        clearTimeout(fallback);
        io.disconnect();
      };
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
