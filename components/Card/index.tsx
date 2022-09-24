import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { CardProps } from "../../shared/constants/types";
import { Content, Description, Rating, Teaser, Title, Wrapper } from "./style";

export const Card = ({ title, teaser = "", rating, imageSrc, permalink }: CardProps) => {
  const router = useRouter();
  const route = `/detail/${permalink}`;
  const pushRoute = () => {
    router.push(route);
  };

  return (
    <Wrapper>
      <Teaser>
        <Image
          alt={title}
          src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${imageSrc}`}
          width={250}
          height={350}
          onClick={pushRoute}
        />
      </Teaser>
      <Content hasTeaser={teaser}>
        <Link href={route} passHref>
          <Title>{title}</Title>
        </Link>
        <Description>
          {teaser.slice(0, 80)}
          {teaser.length > 80 ? "..." : ""}
        </Description>
        {rating && <Rating>{(Number(rating) * 2).toFixed(1).toString()}</Rating>}
      </Content>
    </Wrapper>
  );
};
