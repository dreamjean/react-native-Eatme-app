import React, { useState } from "react";
import styled from "styled-components";

import { ResultsList, SearchInput } from "../components";
import useSearchResults from "../hooks/useSearchResults";
import { Text } from "../styles";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { searchApi, results: businesses, error } = useSearchResults();

  return (
    <Container>
      <SearchInput
        error={error}
        onChangeText={(text) => setTerm(text)}
        onEndEditing={() => searchApi(term)}
        value={term}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {businesses?.length} results</Text>
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Bit Spender" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default SearchScreen;
