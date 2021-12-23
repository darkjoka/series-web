import Link from "next/link";

import { Content, FilterItem, Head, Section } from "./style";
import { useObserver } from "../../shared/hooks/useObserver";
import { genreFilter, yearFilter } from "../../shared/constants/filters";

interface FilterProps {
  parent: {
    current: null | HTMLElement;
  };
  handler?: null | (() => void);
}

export const Filter = ({ parent, handler }: FilterProps) => {
  const options = {
    root: parent.current,
    rootMargin: "0% -50%",
  };

  const [genreRef]: [any, boolean] = useObserver(options);
  const [yearRef, yearOnScreen]: [any, boolean] = useObserver(options);

  const handleGenre = (): void => {
    genreRef.current?.scrollIntoView();
  };

  const handleYear = (): void => {
    yearRef.current?.scrollIntoView();
  };

  return (
    <>
      <Head item={yearOnScreen}>
        <p onClick={handleGenre}>By Genre</p>
        <p onClick={handleYear}>By Year</p>
      </Head>

      <Content>
        <Section ref={genreRef}>
          {genreFilter.map((genre, index) => {
            return (
              <FilterItem key={index} onClick={handler}>
                <Link href={`/filter/${genre.toLowerCase()}`}>{genre}</Link>
              </FilterItem>
            );
          })}
        </Section>
        <Section ref={yearRef}>
          {yearFilter.map((year, index) => {
            return (
              <FilterItem key={index} onClick={handler}>
                <Link href={`/filter/${year}`}>{year}</Link>
              </FilterItem>
            );
          })}
        </Section>
      </Content>
    </>
  );
};
