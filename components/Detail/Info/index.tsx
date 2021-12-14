import { Description, Genre, GenreArea, Wrapper } from "./style";

export const Info = ({ description, genres, title }: { description: string; genres: [string]; title: string }) => {
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
