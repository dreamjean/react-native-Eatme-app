import React, { useEffect } from "react";
import styled from "styled-components";

import businessesApi from "../api/businesses";
import useApi from "../hooks/useApi";

const ResultsShowScreen = ({ route }) => {
  const { id } = route?.params;
  const { data: result, request: loadingResult } = useApi(
    businessesApi.getBusiness
  );

  useEffect(() => {
    loadingResult(id);
  }, []);

  if (!result) return null;

  return (
    <Container>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <Image source={{ uri: item }} />}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const FlatList = styled.FlatList``;

const Image = styled.Image`
  height: 200px;
  width: 300px;
`;

export default ResultsShowScreen;
