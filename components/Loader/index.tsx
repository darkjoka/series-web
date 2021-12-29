import React from "react";

import { Button, Helper, Text, Wrapper } from "./styles";

export const Loader = React.forwardRef(({ error, handler }: { error: boolean; handler: () => void }, ref: any) => {
  const loaderText = error ? "An error occurred" : "Loading...";
  return (
    <Wrapper>
      <Helper ref={ref} />
      <Text>{loaderText}</Text>
      <Button onClick={handler}>Click to try again</Button>
    </Wrapper>
  );
});

Loader.displayName = "Loader";
