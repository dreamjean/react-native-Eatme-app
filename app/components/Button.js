import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors } from "../config";
import { Text } from "../styles";

const Button = ({
  textStyle,
  title,
  startColor = colors.yellow1,
  endColor = colors.orange1,
  onPress,
  marginVertical,
  padding = 14,
  primary,
  width,
}) => {
  return (
    <Touchable {...{ onPress }}>
      <Container
        colors={[startColor, endColor]}
        {...{ marginVertical, padding, primary, width }}
      >
        <Text button1 {...{ primary }} style={textStyle}>
          {title}
        </Text>
      </Container>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  ${({ theme: { radii } }) => ({
    borderRadius: radii.m,
  })}
`;

const Container = styled(LinearGradient)`
  ${({ width, marginVertical, padding, theme: { radii } }) => ({
    borderRadius: radii.m,
    padding,
    marginVertical,
    width,
  })}
`;

export default Button;
