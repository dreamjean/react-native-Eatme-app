import { Feather } from "@expo/vector-icons";
import { forwardRef } from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";

const TextInput = forwardRef(
  (
    { error, touched, leftIcon, rightIcon, errorIcon, width, onPress, ...rest },
    ref
  ) => {
    const dangerPrimery = error ? colors.red : colors.green;
    const reColor = !touched ? colors.darkGray : dangerPrimery;

    return (
      <Wrapper {...{ error, touched, width }}>
        <Feather name={leftIcon} size={24} color={reColor} />
        <Input
          {...{ ref }}
          {...rest}
          numberOfLines={1}
          placeholderTextColor={colors.gray2}
          selectionColor={colors.orange}
          underlineColorAndroid={colors.transparent}
        />
        {touched && (
          <Pressable {...{ onPress }}>
            <Feather
              name={error ? errorIcon : rightIcon}
              size={24}
              color={reColor}
            />
          </Pressable>
        )}
      </Wrapper>
    );
  }
);

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;

  ${({ error, touched, width, theme: { colors, radii, space } }) => ({
    backgroundColor: colors.lightGray2,
    borderColor: touched && error ? colors.red : colors.transparent,
    borderWidth: 1,
    borderRadius: radii.s,
    padding: space.s2,
    paddingHorizontal: space.m1,
    marginVertical: space.s1,
    width,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, fonts, size, space } }) => ({
    color: colors.darkGray,
    fontSize: size.body4,
    fontFamily: fonts[3],
    marginLeft: space.s2,
  })}
`;

export default TextInput;
