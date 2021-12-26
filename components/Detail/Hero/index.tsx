import { HeroBg, Title, Wrapper } from "./style";

export const Hero = ({ hero, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <HeroBg src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${hero}}`} width={200} height={300} />
    </Wrapper>
  );
};
