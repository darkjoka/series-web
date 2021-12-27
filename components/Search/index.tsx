import { useRouter } from "next/router";
import React from "react";
import { Icon } from "../Icon";
import { Button, Clear, Form, Input, Wrapper } from "./style";

export const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();

  const handleSearch = (event) => setSearchTerm(event.target.value);
  const handleClear = () => setSearchTerm("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input>
          <input type="text" name="search" id="search" minLength={3} value={searchTerm} onChange={handleSearch} />
          {searchTerm && (
            <Clear onClick={handleClear}>
              <Icon icon="close-outline" />
            </Clear>
          )}
        </Input>
        <Button onClick={handleSubmit}>Search</Button>
      </Form>
    </Wrapper>
  );
};
