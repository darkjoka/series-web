import Image from "next/image";
import Link from "next/link";
import { TrailerProps } from "../../shared/constants/types";
import { Content, Teaser, Title, Wrapper } from "./styles";

export const WideCard = ({ title, thumbnailSrc, videoSrc, permalink }: TrailerProps) => {
  return (
    <Wrapper>
      <Teaser>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${thumbnailSrc}`}
          alt={title}
          width={331}
          height={216}
        />
      </Teaser>
      <Content>
        <Link href={`detail/${permalink}`} passHref>
          <Title>{title}</Title>
        </Link>
      </Content>
    </Wrapper>
  );
};
