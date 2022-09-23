import React from "react";

type ObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
};

export const useObserver = (options: ObserverOptions): [any, boolean, any] => {
  const ref: { current: null | HTMLElement } = React.useRef(null);
  const [onScreen, setOnScreen] = React.useState(false);
<<<<<<< HEAD
  let observer = React.useRef<any>() as React.MutableRefObject<any>;
=======
  let observer = React.useRef<IntersectionObserver>();
>>>>>>> parent of 0dfe1e8 (force types)

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
