import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Image, Text } from "../../styles";

const DrawerItem = ({ icon, label, focused, onPress }) => {
  return (
    <Touchable {...{ focused, onPress }}>
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

  ${({ focused, theme: { colors, space, radii } }) => ({
    backgroundColor: focused ? colors.transparentBlack1 : null,
    borderRadius: radii.s,
    paddingVertical: space.s1,
    paddingHorizontal: space.s3,
    marginLeft: space.s1,
  })}
`;

export default DrawerItem;
