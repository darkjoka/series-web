import { useObserver } from "../../shared/hooks/useObserver";
import { Helper, Main, Wrapper } from "./style";

export const Misc = () => {
  const [ref, onScreen] = useObserver({});

  return (
    <>
      <Helper ref={ref} />
      <Wrapper>
        <Main stay={!onScreen} />
      </Wrapper>
    </>
  );
};
