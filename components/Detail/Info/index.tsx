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
          <Genre key={genre}>{genre}</Genre>
        ))}
      </GenreArea>
      <Description>{description}</Description>
    </Wrapper>
  );
};
