import styled from "styled-components/native";

import { constants } from "../../config";
import slideCircles from "../../data/slideCircles";
import SlideCircle from "./SlideCircle";

const { width, SLIDE_BOARDER, SLIDE_HEIGHT } = constants;

const SlideHeader = () => {
  return (
    <Container>
      <Border>
        {slideCircles.map(({ size, position }) => (
          <SlideCircle key={`circle${size}`} {...{ size, position }} />
        ))}
      </Border>
    </Container>
  );
};

const Container = styled.View`
  width: ${width}px;
  height: ${SLIDE_HEIGHT}px;
  align-items: center;
  padding-top: 60px;
`;

const Border = styled.View`
  width: ${SLIDE_BOARDER}px;
  height: ${SLIDE_BOARDER}px;
  border-radius: ${SLIDE_BOARDER / 2}px;
  border-width: 1px;

  ${({ theme: { colors } }) => ({
    borderColor: colors.orange1,
  })}
`;

export default SlideHeader;
