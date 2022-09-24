import React from "react";

export const useAccordion = (length: number) => {
  const [accordion, setAccordion] = React.useState<boolean[]>(new Array(length).fill(false));

  const handleAccordion = (index: number) => {
    const active = accordion[index];
    const value: boolean[] = new Array(length).fill(false);
    value[index] = !active;
    return setAccordion(value);
  };
  return { accordion, handleAccordion };
};
