import { HeroBg, Title, Wrapper } from "./style";

export const Hero = ({ hero, title }) => {
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${hero}`);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <HeroBg src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${hero}`} width={1067} height={600} alt={title} />
    </Wrapper>
  );
};
