import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Image, Text } from "../../styles";

const DrawerItem = ({ backgroundColor, icon, label, onPress }) => {
  return (
    <Touchable {...{ backgroundColor, onPress }}>
      <Image icon source={icon} />
      <Text h4 white>
        {label}
      </Text>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  ${({ backgroundColor, theme: { space, radii } }) => ({
    backgroundColor,
    borderRadius: radii.s,
    // marginBottom: space.s1,
    paddingVertical: space.s1,
    paddingHorizontal: space.m2,
  })}
`;

export default DrawerItem;
