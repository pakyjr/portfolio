"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";

const getOptions = (
  threshold?: number,
  rootMargin?: string,
): IntersectionObserverInit => {
  return {
    root: null,
    rootMargin,
    threshold,
  };
};

/**
 * It will request an animation also if document scroll is beyond the element
 */
export const useAnimateOnVisibility = (
  ref: RefObject<HTMLElement | null>,
  threshold?: number,
  rootMargin?: string,
) => {
  const [animationRequested, setAnimationRequested] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting ||
          window.scrollY >= entry.boundingClientRect.top
        ) {
          requestAnimationFrame(() => setAnimationRequested(true));
          observerRef.current?.disconnect();
          observerRef.current = null;
        }
      });
    },
    [],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const elem = ref.current;
    const observer = new IntersectionObserver(
      handleIntersect,
      getOptions(threshold, rootMargin),
    );

    observer.observe(ref.current);
    observerRef.current = observer;

    return () => {
      observerRef.current?.unobserve(elem);
    };
  }, [handleIntersect, ref, rootMargin, threshold]);

  return { animationRequested };
};
