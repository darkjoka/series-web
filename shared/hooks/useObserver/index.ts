import React from "react";

type ObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
};

export const useObserver = (options: ObserverOptions): [any, boolean, IntersectionObserver] => {
  const ref: { current: null | HTMLElement } = React.useRef(null);
  const [onScreen, setOnScreen] = React.useState(false);
  let observer = React.useRef<IntersectionObserver>() as React.MutableRefObject<IntersectionObserver>;

  React.useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
    }, options);

    const elem = ref.current;

    if (elem) {
      observer.current.observe(elem);
    }
    return () => {
      if (elem) {
        observer.current.unobserve(elem);
      }
    };
  }, [options]);
  return [ref, onScreen, observer.current];
};
