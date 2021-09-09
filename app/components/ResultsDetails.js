import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

const ResultsDetails = ({ result }) => {
  const navigation = useNavigation();

  return (
    <Touchable
      onPress={() => navigation.navigate("Results Show", { id: result.id })}
    >
      <Image source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Rating>
        {result.rating} Stars, {result.review_count}
      </Rating>
    </Touchable>
  );
};

const Touchable = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  margin-left: 15px;
`;

const Image = styled.Image`
  width: 250px;
  height: 150px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  font-weight: bold;
`;

const Rating = styled.Text``;

export default ResultsDetails;
