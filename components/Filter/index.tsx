import Link from "next/link";

import { Content, FilterItem, Head, Section } from "./style";
import { useObserver } from "../../shared/hooks/useObserver";
import { genreFilter, yearFilter } from "../../shared/constants/filters";

interface FilterProps {
  parent: {
    current: null | HTMLElement;
  };
  handler?: null | (() => void);
  cStyle?: {
    [key: string]: string;
  };
  hStyle?: {
    [key: string]: string;
  };
}

export const Filter = ({ parent, handler, cStyle = {}, hStyle = {} }: FilterProps) => {
  const options = {
    root: parent.current,
    rootMargin: "0% -50%",
  };

  const [genreRef] = useObserver(options);
  const [yearRef, yearOnScreen] = useObserver(options);

  const handleGenre = (): void => {
    genreRef.current?.scrollIntoView();
  };

  const handleYear = (): void => {
    yearRef.current?.scrollIntoView();
  };

  return (
    <>
      <Head item={yearOnScreen} style={hStyle}>
        <p onClick={handleGenre}>By Genre</p>
        <p onClick={handleYear}>By Year</p>
      </Head>
      <Content style={cStyle}>
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
