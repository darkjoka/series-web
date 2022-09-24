import Link from "next/link";
import { Description, Genre, GenreArea, Wrapper } from "./style";

type InfoProps = {
  description: string;
  genres: [string];
  title: string;
};

export const Info = ({ description, genres, title }: InfoProps) => {
  return (
    <Wrapper>
      <GenreArea>
        {genres.map((genre) => (
          <Link href={`/filter/${genre.toLowerCase()}`} key={genre} passHref>
            <Genre>{genre}</Genre>
          </Link>
        ))}
      </GenreArea>
      <Description>{description}</Description>
    </Wrapper>
  );
};
