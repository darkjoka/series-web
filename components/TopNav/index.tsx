import { useTransition } from "@react-spring/web";
import Link from "next/link";
import { Menu, Moon, Sun } from "react-feather";
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
          <Menu />
        </Hamburger>
        <Link href="/" passHref>
          <Logo>LOGO</Logo>
        </Link>
        <NavLinks>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/trailers" passHref replace>
            <NavLink>Trailers</NavLink>
          </Link>
          <Link href="/filter/action" passHref replace>
            <NavLink>Action</NavLink>
          </Link>
          <Link href="/filter/fantasy" passHref replace>
            <NavLink>Fantasy</NavLink>
          </Link>
          <Link href="/filter/romance" passHref>
            <NavLink>Romance</NavLink>
          </Link>
        </NavLinks>
        {lightTransition(
          (style, item) =>
            item && (
              <ThemeIcon style={style} onClick={themeHandlerDark}>
                <Moon />
              </ThemeIcon>
            )
        )}
        {darkTransition(
          (style, item) =>
            item && (
              <ThemeIcon style={style} onClick={themeHandlerLight}>
                <Sun />
              </ThemeIcon>
            )
        )}
      </Main>
    </Wrapper>
  );
};
