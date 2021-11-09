import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "../styles";

const Button = ({
  bgColor,
  textStyle,
  title,
  onPress,
  marginVertical,
  padding = 12,
  primary,
  width,
}) => {
  return (
    <Container
      {...{ bgColor, onPress, marginVertical, padding, primary, width }}
    >
      <Text button1 {...{ primary }} style={textStyle}>
        {title}
      </Text>
    </Container>
  );
};

const Container = styled(RectButton)`
  ${({
    bgColor,
    width,
    marginVertical,
    padding,
    primary,
    theme: { colors, radii },
  }) => ({
    backgroundColor: bgColor
      ? bgColor
      : primary
      ? colors.primary
      : colors.secondary,
    borderRadius: radii.s,
    padding,
    marginVertical,
    width,
  })}
`;

export default Button;
