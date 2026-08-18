import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time. Returns the current slice and
 * whether it's finished, so callers can chain a follow-up animation.
 * Respects prefers-reduced-motion by rendering the full text immediately.
 */
export function useTypewriter(text, { speed = 45, startDelay = 0, start = true } = {}) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, start]);

  return { output, done };
}
