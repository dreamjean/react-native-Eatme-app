import React, { useState } from "react";
import styled from "styled-components";

import { SearchBar } from "../components";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <SearchBar
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default SearchScreen;
