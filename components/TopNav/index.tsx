import { useTransition } from "@react-spring/web";
import Link from "next/link";
import { Icon } from "../Icon";
import { Nav } from "../SideNav/style";
import { Hamburger, Logo, Main, NavLink, NavLinks, ThemeIcon, Wrapper } from "./style";

interface TopNavProps {
  handler: () => void;
  themeHandlerLight: () => void;
  themeHandlerDark: () => void;
  isLight: boolean;
}

export const TopNav = ({ handler, themeHandlerLight, themeHandlerDark, isLight }: TopNavProps) => {
  const themeConfig = {
    from: { opacity: 0, x: -50, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    leave: { opacity: 0, x: 50, y: 20 },
  };
  const lightTransition = useTransition(isLight, themeConfig);
  const darkTransition = useTransition(!isLight, themeConfig);

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
        {lightTransition(
          (style, item) =>
            item && (
              <ThemeIcon style={style} onClick={themeHandlerDark}>
                <Icon icon="moon-outline" />
              </ThemeIcon>
            )
        )}
        {darkTransition(
          (style, item) =>
            item && (
              <ThemeIcon style={style} onClick={themeHandlerLight}>
                <Icon icon="sun-outline" />
              </ThemeIcon>
            )
        )}
      </Main>
    </Wrapper>
  );
};
