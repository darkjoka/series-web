import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";
import { XCircle } from "react-feather";
import { Button, Clear, Form, Input, Wrapper } from "./style";

export const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);
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
              <XCircle />
            </Clear>
          )}
        </Input>
        <Button onClick={handleSubmit}>Search</Button>
      </Form>
    </Wrapper>
  );
};
