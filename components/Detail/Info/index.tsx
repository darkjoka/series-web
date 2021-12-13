import { Description, Genre, GenreArea, Wrapper } from "./style";

export const Info = () => {
  return (
    <Wrapper>
      <GenreArea>
        {Array(4)
          .fill(0)
          .map(() => (
            <Genre key={Math.random()} />
          ))}
      </GenreArea>
      <Description />
    </Wrapper>
  );
};
