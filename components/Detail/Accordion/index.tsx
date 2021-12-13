import { Body, Head, Item, Wrapper } from "./style";

export const Accordion = ({ index, value, season, episodes }) => {
  return (
    <Wrapper>
      <Head>{season}</Head>
      <Body>
        {episodes.map(({ episodeTitle, episodeSize, episodePermalink }) => {
          return <Item key={episodePermalink} />;
        })}
      </Body>
    </Wrapper>
  );
};
