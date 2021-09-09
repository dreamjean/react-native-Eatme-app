import React, { useState } from "react";
import styled from "styled-components";

import { ResultsList, SearchInput } from "../components";
import useSearchResults from "../hooks/useSearchResults";
import { Text } from "../styles";

const results = [
  { title: "Cost Effective", price: "$" },
  { title: "Bit Pricier", price: "$$" },
  { title: "Bit Spender", price: "$$$" },
];

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { searchApi, results: businesses, error } = useSearchResults();

  const filterResultsByPrice = (price) => {
    return businesses.filter((bussiness) => bussiness.price === price);
  };

  return (
    <>
      <SearchInput
        error={error}
        onChangeText={(text) => setTerm(text)}
        onEndEditing={() => searchApi(term)}
        value={term}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        {results.map((result) => (
          <ResultsList
            key={result.title}
            results={filterResultsByPrice(result.price)}
            title={result.title}
          />
        ))}
      </ScrollView>
    </>
  );
};

const ScrollView = styled.ScrollView``;

export default SearchScreen;
