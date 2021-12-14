import { CardProps } from "../../shared/constants/types";
import { Content, Description, Rating, Teaser, Title, Wrapper } from "./style";

export const Card: React.FC<CardProps> = ({ title, teaser, rating, ...other }) => {
  return (
    <Wrapper>
      <Teaser />
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
