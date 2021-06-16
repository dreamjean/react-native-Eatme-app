import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "./styles";

const Button = ({
  title,
  onPress,
  marginVertical,
  padding = 15,
  primary,
  textStyle,
}) => {
  return (
    <Container {...{ onPress, marginVertical, padding, primary }}>
      <Text button style={textStyle}>
        {title}
      </Text>
    </Container>
  );
};

const Container = styled(RectButton)`
  width: 100%;
  ${({ padding, marginVertical, primary, theme: { colors, radii } }) => ({
    backgroundColor: primary ? colors.primary : colors.secondary,
    borderRadius: radii.s,
    padding,
    marginVertical,
  })}
`;

export default Button;
