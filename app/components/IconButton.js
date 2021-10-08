import React from "react";
import { Pressable } from "react-native";

import Icon from "./Icon";

const IconButton = ({ onPress, style, ...res }) => {
  return (
    <Pressable
      style={[
        ({ pressed }) => ({
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.5 : 1,
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
