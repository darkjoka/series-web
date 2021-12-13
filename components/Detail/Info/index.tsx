import { Description, Genre, GenreArea, Wrapper } from "./style";

export const Info = ({ description, genres, title }) => {
  return (
    <Wrapper>
      <GenreArea>
        {genres.map(() => (
          <Genre key={Math.random()} />
        ))}
      </GenreArea>
      <Description>{description}</Description>
    </Wrapper>
  );
};
