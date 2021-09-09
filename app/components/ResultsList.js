import React from "react";
import styled from "styled-components";

import { Text } from "../styles";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ title, results }) => {
  if (!results.length) return null;

  return (
    <Container>
      <Title title1>{title}</Title>
      <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ResultsDetails result={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: 10px;
`;

const Title = styled(Text)`
  margin-left: 15px;
  margin-bottom: 5px;
`;

const FlatList = styled.FlatList``;

export default ResultsList;
