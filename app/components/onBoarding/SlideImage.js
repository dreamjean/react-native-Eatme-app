import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { constants } from "../../config";
import { Image } from "../../styles";

const { width, SLIDE_BOARDER, SLIDE_IMG_SIZE } = constants;

const SlideImage = ({ image, index, x }) => {
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
      top: 60 + (SLIDE_BOARDER - SLIDE_IMG_SIZE) / 2,
      opacity,
    };
  });

  return (
    <Animated.View style={style}>
      <Image boarding resizeMod="contain" source={image} />
    </Animated.View>
  );
};

export default SlideImage;
