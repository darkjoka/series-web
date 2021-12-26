import Link from "next/link";
import { Icon } from "../Icon";
import { Nav } from "../SideNav/style";
import { Hamburger, Logo, Main, NavLink, NavLinks, ThemeIcon, Wrapper } from "./style";

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
        <NavLinks>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/trailers" passHref>
            <NavLink>Trailers</NavLink>
          </Link>
          <Link href="filter/action" passHref>
            <NavLink>Action</NavLink>
          </Link>
          <Link href="filter/fantasy" passHref>
            <NavLink>Fantasy</NavLink>
          </Link>
          <Link href="filter/romance" passHref>
            <NavLink>Romance</NavLink>
          </Link>
        </NavLinks>
        <ThemeIcon onClick={handler}>
          <Icon icon="moon-outline" />
        </ThemeIcon>
      </Main>
    </Wrapper>
  );
};
