import { CardProps } from "../../shared/constants/types";
import { Content, Description, Rating, Teaser, Title, Wrapper } from "./style";

export const Card = ({ title, teaser, rating, imageSrc }: CardProps) => {
  return (
    <Wrapper>
      <Teaser alt={title} src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/image/${imageSrc}`} width={250} height={350} />
      <Content>
        <Title>{title}</Title>
        <Description>
          {teaser.slice(0, 80)}
          {teaser.length > 80 ? "..." : ""}
        </Description>
        <Rating>{(Number(rating) * 2).toFixed(1).toString()}</Rating>
      </Content>
    </Wrapper>
  );
};
