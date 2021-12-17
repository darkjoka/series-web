import { Hamburger, Logo, Main, NavLinks, ThemeIcon, Wrapper } from "./style";

export const TopNav = ({ handler }: { handler: () => void }) => {
  return (
    <Wrapper>
      <Main>
        <Hamburger onClick={handler} />
        <Logo />
        <NavLinks />
        <ThemeIcon />
      </Main>
    </Wrapper>
  );
};
