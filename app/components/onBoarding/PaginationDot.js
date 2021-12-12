import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { colors } from "../../config";

const PaginationDot = ({ index, activeIndex }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [0.35, 1, 0.35],
      Extrapolate.CLAMP
    );
    const width = interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [15, 30, 15],
      Extrapolate.CLAMP
    );
    return {
      backgroundColor: colors.gold2,
      width,
      height: 10,
      borderRadius: 5,
      opacity,
      margin: 4,
    };
  });

  return <Animated.View style={style} />;
};

export default PaginationDot;
