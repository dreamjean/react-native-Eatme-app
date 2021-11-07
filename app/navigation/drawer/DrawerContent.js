import {
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { useEffect } from "react";
import Animated, { interpolateNode } from "react-native-reanimated";
import styled from "styled-components";

import { IconButton } from "../../components";
import { icons, theme } from "../../config";
import dummyData from "../../data/dummyData";
import { Image, Text, View } from "../../styles";
import DrawerItem from "./DrawerItem";

const { colors, space } = theme;
const { myProfile, screens, drawerItems } = dummyData;

const DrawerContent = ({ setDrawerProgress, ...props }) => {
  const progress = useDrawerProgress();

  useEffect(() => {
    setDrawerProgress(progress);
  }, [progress]);

  const scale = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <Animated.View style={{ flex: 1, transform: [{ scale }] }}>
      <DrawerContentScrollView
        scrollEnabled
        contentContainerStyle={{ flex: 1 }}
        {...props}
      >
        <Container>
          <IconButton
            style={{ paddingLeft: space.s2 }}
            image={icons.cross}
            tintColor={colors.white}
            size={35}
            onPress={() => props.navigation.closeDrawer()}
          />
          <Touchable>
            <Image avatar source={myProfile?.profile_image} />
            <Details>
              <Text h3 white>
                {myProfile?.name}
              </Text>
              <Text body4 white>
                View your profile
              </Text>
            </Details>
          </Touchable>

          {screens.map((screen) => (
            <DrawerItem
              key={screen.id}
              label={screen.label}
              icon={screen.icon}
              onPress={() => props.navigation.navigate(screen.label)}
            />
          ))}
          <View seperator />
          {drawerItems.map((item) => (
            <DrawerItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              onPress={() => props.navigation.navigate(item.label)}
            />
          ))}
        </Container>
        <Footer>
          <DrawerItem label="Logout" icon={icons.logout} />
        </Footer>
      </DrawerContentScrollView>
    </Animated.View>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Touchable = styled.TouchableOpacity`
  flex-direction: row;

  ${({ theme: { space } }) => ({
    padding: space.s2,
  })}
`;

const Details = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.s2,
  })}
`;

const Footer = styled.View`
  align-self: flex-start;

  ${({ theme: { space } }) => ({
    marginBottom: space.m2,
  })}
`;

export default DrawerContent;
