import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Animated from "react-native-reanimated";

import { IconButton } from "../components";
import { icons, theme } from "../config";
import { MainLayoutScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const AppNavigator = ({ style }) => {
  return (
    <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTransparent: true,
          title: null,
          headerLeft: () => (
            <IconButton
              style={{ margin: theme.space.s2 }}
              image={icons.menu}
              size={20}
              onPress={() => navigation.openDrawer()}
            />
          ),
        })}
        initialRouteName={routes.MAIN_LAYOUT}
      >
        <Stack.Screen name={routes.MAIN_LAYOUT} component={MainLayoutScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default AppNavigator;
