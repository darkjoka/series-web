import React from "react";
import { useLoader } from "../../shared/hooks/useLoader";
import { useObserver } from "../../shared/hooks/useObserver";

import { Button, Helper, Text, Wrapper } from "./styles";

export const Loader = ({ url, handler }: { url: string; handler: (data: any) => void }) => {
  const [ref, onScreen] = useObserver({});
  const { loadError, resetHandler } = useLoader(url, onScreen, handler);
  const loaderText = loadError ? "An error occurred" : "Loading...";

  return (
    <Wrapper>
      <Helper ref={ref} />
      <Text>{loaderText}</Text>
      {loadError && <Button onClick={resetHandler}>Click to try again</Button>}
    </Wrapper>
  );
};

Loader.displayName = "Loader";
