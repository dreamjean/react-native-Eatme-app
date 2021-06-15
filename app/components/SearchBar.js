import { Feather } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";

import { colors } from "../config";

const SearchBar = ({ value, onChangeText }) => {
  return (
    <Container>
      <Feather name="search" size={30} />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        placeholderTextColor={colors.gray2}
        {...{ value, onChangeText }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.gray1,
    borderRadius: radii.s,
    paddingHorizontal: space.m1,
    margin: space.m2,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { size, space } }) => ({
    fontSize: size.m2,
    marginLeft: space.m1,
  })}
`;

export default SearchBar;
