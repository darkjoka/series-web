import { Icon } from "../Icon";
import { Button, Clear, Form, Input, Wrapper } from "./style";

export const Search = () => {
  return (
    <Wrapper>
      <Form>
        <Input>
          <input type="text" name="search" id="search" minLength={3} />
          <Clear>
            <Icon icon="close-outline" />
          </Clear>
        </Input>
        <Button>Search</Button>
      </Form>
    </Wrapper>
  );
};
