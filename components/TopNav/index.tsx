import Link from "next/link";
import { Icon } from "../Icon";
import { Hamburger, Logo, Main, NavLinks, ThemeIcon, Wrapper } from "./style";

export const TopNav = ({ handler }: { handler: () => void }) => {
  return (
    <Wrapper>
      <Main>
        <Hamburger onClick={handler}>
          <Icon icon="menu-outline" />
        </Hamburger>
        <Link href="/" passHref>
          <Logo>LOGO</Logo>
        </Link>
        <NavLinks />
        <ThemeIcon onClick={handler}>
          <Icon icon="moon-outline" />
        </ThemeIcon>
      </Main>
    </Wrapper>
  );
};
