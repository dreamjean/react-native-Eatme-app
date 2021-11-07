import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "../styles";

const Button = ({
  bgColor,
  textStyle,
  title,
  onPress,
  marginVertical,
  primary,
  width,
}) => {
  return (
    <Container {...{ bgColor, onPress, marginVertical, primary, width }}>
      <Text button style={textStyle}>
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
    primary,
    theme: { colors, space, radii },
  }) => ({
    backgroundColor: bgColor
      ? bgColor
      : primary
      ? colors.primary
      : colors.secondary,
    borderRadius: radii.s,
    padding: space.s2,
    marginVertical,
    width,
  })}
`;

export default Button;
