import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

import { colors } from "../../config";

const SlideCircle = ({ size, position }) => {
  return (
    <Container {...{ size }} style={position}>
      <LinearGradient
        colors={[colors.yellow1, colors.orange1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      />
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  overflow: hidden;

  ${({ size }) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
  })}
`;

export default SlideCircle;
