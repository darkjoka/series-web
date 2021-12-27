import { HeroBg, Title, Wrapper } from "./style";

export const Hero = ({ hero, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <HeroBg src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${hero}`} width={1067} height={600} alt={title} />
    </Wrapper>
  );
};
