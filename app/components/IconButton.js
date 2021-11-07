import { Pressable } from "react-native";

import { colors } from "../config";
import Icon from "./Icon";

const IconButton = ({ onPress, style, ...res }) => {
  return (
    <Pressable
      style={[
        ({ pressed }) => ({
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.5 : 1,
          backgroundColor: pressed ? colors.lightOrange3 : null,
        }),
        style,
      ]}
      {...{ onPress }}
    >
      <Icon {...res} />
    </Pressable>
  );
};

export default IconButton;
