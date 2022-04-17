import { useTransition } from "@react-spring/web";
import { BackDrop, Content, Wrapper } from "./styles";

interface DialogProps {
  isOpen: boolean;
  trailer: string;
  close: VoidFunction;
}

export const Dialog = ({ isOpen, trailer, close }: DialogProps) => {
  const transition = useTransition(isOpen, {
    from: { transform: "translate3d(0,-10px,0)", opacity: 0 },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,10px,0)", pointerEvents: "none" },
    delay: 1,
  });

  return (
    <>
      {transition(
        (styles, item) =>
          item && (
            <Wrapper style={{ opacity: styles.opacity, pointerEvents: styles.pointerEvents }}>
              <BackDrop onClick={close} />
              <Content />
            </Wrapper>
          )
      )}
    </>
  );
};
