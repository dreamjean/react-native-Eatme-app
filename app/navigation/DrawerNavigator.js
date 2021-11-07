import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Animated, {
  Extrapolate,
  interpolateNode,
} from "react-native-reanimated";
import styled from "styled-components";

import { colors } from "../config";
import DrawerContent from "./drawer/DrawerContent";
import MainNavigator from "./MainNavigator";
import routes from "./routes";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [drawerProgress, setDrawerProgress] = useState(new Animated.Value(0));

  const scale = interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });

  const borderRadius = interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
    extrapolate: Extrapolate.CLAMP,
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
  };

  return (
    <Container>
      <LinearGradient
        colors={[colors.orange, colors.primary]}
        style={{ flex: 1 }}
      >
        <Drawer.Navigator
          initialRouteName={routes.HOME}
          drawerContent={(props) => (
            <DrawerContent {...props} setDrawerProgress={setDrawerProgress} />
          )}
          screenOptions={{
            drawerType: "slide",
            overlayColor: colors.transparent,
            drawerContentContainerStyle: {
              flex: 1,
            },
            drawerStyle: {
              flex: 1,
              width: "65%",
              paddingRight: 20,
              backgroundColor: colors.transparent,
            },
            sceneContainerStyle: {
              backgroundColor: colors.transparent,
            },
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Screens">
            {(props) => <MainNavigator {...props} style={animatedStyle} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </LinearGradient>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.primary,
  })}
`;

export default DrawerNavigator;
