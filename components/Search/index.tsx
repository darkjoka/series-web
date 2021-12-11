import { Button, Clear, Form, Input, Wrapper } from "./style";

export const Search = () => {
  return (
    <Wrapper>
      <Form>
        <Input>
          <input type="text" name="search" id="search" minLength={3} />
          <Clear />
        </Input>
        <Button />
      </Form>
    </Wrapper>
  );
};
