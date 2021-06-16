import { Feather } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";

import { colors } from "../config";

const SearchInput = ({ touched, error, ...rest }) => {
  const dangerPrimery = error ? colors.danger : colors.secondary;
  const reColor = !touched ? colors.dark : dangerPrimery;

  return (
    <Wrapper {...{ error, touched }}>
      <Feather name="search" color={reColor} size={30} />
      <Input
        {...rest}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        placeholderTextColor={colors.gray2}
        selectionColor={colors.secondary}
        underlineColorAndroid={colors.transparent}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.gray2,
    borderRadius: radii.l,
    paddingVertical: space.s3,
    paddingHorizontal: space.m,
    marginVertical: space.s3,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, fonts, space, size } }) => ({
    color: colors.medium,
    fontSize: size.body2,
    fontFamily: fonts[0],
    marginLeft: space.s2,
  })}
`;

export default SearchInput;
