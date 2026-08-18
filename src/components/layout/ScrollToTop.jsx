import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on every route change, except when the URL carries a hash
 * (e.g. `/#projects` from the nav) — then it scrolls to that section
 * instead, with a short delay so the target page has mounted first.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const raf = requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        );
        return () => cancelAnimationFrame(raf);
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);

  return null;
}
