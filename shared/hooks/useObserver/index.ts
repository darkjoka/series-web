import React from "react";

type ObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
};

export const useObserver = (options: ObserverOptions): [{ current: null | HTMLElement }, boolean] => {
  const ref: { current: null | HTMLElement } = React.useRef(null);
  const [onScreen, setOnScreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
    }, options);

    const elem = ref.current;

    if (elem) {
      observer.observe(elem);
    }
    return () => {
      if (elem) {
        observer.unobserve(elem);
      }
    };
  }, [options]);
  return [ref, onScreen];
};
