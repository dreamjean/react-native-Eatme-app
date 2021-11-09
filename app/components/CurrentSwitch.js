import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";

import { colors } from "../config";
import { Text } from "../styles";

const DOT_BOX_WIDTH = 48;
const DOT_SIZE = 16;

const CurrentSwitch = ({ checked, onPress }) => {
  const style = useAnimatedStyle(() => {
    return {
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: DOT_SIZE / 2,
      backgroundColor: checked ? colors.white : colors.darkGray2,
      transform: [
        {
          translateX: withTiming(checked ? DOT_BOX_WIDTH - 1 - DOT_SIZE : 0),
        },
      ],
    };
  });

  return (
    <Touchable {...{ onPress }}>
      <DotBox {...{ checked }}>
        <Animated.View style={style} />
      </DotBox>
      <Text
        button2
        style={{
          textTransform: "none",
          color: checked ? colors.orange : colors.gray,
        }}
      >
        SaveMe
      </Text>
    </Touchable>
  );
};

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const DotBox = styled.View`
  width: ${DOT_BOX_WIDTH}px;
  height: 24px;
  border-radius: 12px;
  border-width: 1px;
  justify-content: center;

  ${({ checked, theme: { colors, radii, space } }) => ({
    borderRadius: radii.m2,
    borderColor: checked ? colors.orange : colors.gray,
    backgroundColor: checked ? colors.orange : colors.white,
    marginRight: space.s1,
  })}
`;

export default CurrentSwitch;
