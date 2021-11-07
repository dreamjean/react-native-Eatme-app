import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import styled from "styled-components/native";

import { constants } from "../../config";
import { Image } from "../../styles";

const { width, SLIDE_HEIGHT } = constants;

const SlideHeader = ({ bgImage, index, x, picture }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      x.value,
      [width * (index - 0.5), width * index, width * (index + 0.5)],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      position: "absolute",
      alignSelf: "center",
      bottom: -30,
      opacity,
    };
  });

  return (
    <Container>
      <Image bg resizeMode="stretch" source={bgImage} />
      <Animated.View style={style}>
        <Image boarding resizeMode="contain" source={picture} />
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  width: ${width}px;
  height: ${SLIDE_HEIGHT}px;
  align-items: center;
  justify-content: center;
`;

export default SlideHeader;
