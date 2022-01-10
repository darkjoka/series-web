import { useTransition } from "@react-spring/web";
import Link from "next/link";
import { Download } from "react-feather";

import { Body, DownloadLink, Head, Item, Size, SubContainer, Title, Wrapper } from "./style";

interface AccordionProps {
  index: number;
  value: boolean;
  season: string;
  handler: (index: number) => void;
  episodes: [Episode];
}

type Episode = {
  episodeTitle: string;
  episodeSize: string;
  episodePermalink: string;
};

export const Accordion = ({ index, value, season, episodes, handler }: AccordionProps) => {
  const transition = useTransition(value, {
    from: { maxHeight: 0, opacity: 0 },
    enter: { maxHeight: 72 * episodes.length, opacity: 1 },
    leave: { maxHeight: 0, opacity: 0 },
  });

  return (
    <Wrapper>
      <Head onClick={() => handler(index)}>{season}</Head>
      {transition(
        (style, item) =>
          item && (
            <Body style={style}>
              {episodes.map((data) => {
                return <DownloadItem key={data.episodePermalink} {...data} />;
              })}
            </Body>
          )
      )}
    </Wrapper>
  );
};

const DownloadItem = ({ episodeTitle, episodeSize, episodePermalink }: Episode) => {
  return (
    <Item>
      <Title>{episodeTitle}</Title>

      <SubContainer>
        <Size>{episodeSize}</Size>
        <Link href={episodePermalink} passHref replace>
          <DownloadLink>
            <Download size={18} /> Download
          </DownloadLink>
        </Link>
      </SubContainer>
    </Item>
  );
};
