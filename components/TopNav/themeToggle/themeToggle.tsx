import {useTransition, animated} from '@react-spring/web';
import {Moon, Sun} from 'react-feather';
import {ThemeToggleProps} from './themeToggle.type';

const themeConfig = {
  from: {opacity: 0, x: -50, y: 20},
  enter: {opacity: 1, x: 0, y: 0},
  leave: {opacity: 0, x: 50, y: 20},
};

const ThemeToggle = ({isLight, ...handlers}: ThemeToggleProps) => {
  const lightTransition = useTransition(isLight, themeConfig);
  const darkTransition = useTransition(!isLight, themeConfig);
  return (
    <div className="w-8 h-8">
      {lightTransition(
        (style, item) =>
          item && (
            <animated.button
              style={style}
              onClick={handlers.themeHandlerDark}
              className="fixed"
            >
              <Moon />
            </animated.button>
          )
      )}
      {darkTransition(
        (style, item) =>
          item && (
            <animated.button
              style={style}
              onClick={handlers.themeHandlerLight}
              className="fixed"
            >
              <Sun />
            </animated.button>
          )
      )}
    </div>
  );
};

export default ThemeToggle;
