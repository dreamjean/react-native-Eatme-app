import { createStackNavigator } from "@react-navigation/stack";
import Animated from "react-native-reanimated";

import { IconButton } from "../components";
import { icons, images, theme } from "../config";
import {
  FavouriteScreen,
  HomeScreen,
  MyWaletScreen,
  NotificationScreen,
  SettingsScreen,
} from "../screens";
import routes from "./routes";

const { fonts, size, colors, space } = theme;
const Stack = createStackNavigator();

const FeedNavigator = ({ style }) => {
  return (
    <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          title: route.name.toUpperCase(),
          headerTransparent: true,
          headerTitleAlign: "center",
          headerLeft: () => (
            <IconButton
              image={icons.menu}
              borderColor={colors.gray2}
              style={{ margin: space.s3 }}
              iconRatio={0.5}
              size={40}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <IconButton
              image={images.profile}
              style={{ margin: space.s3 }}
              size={41}
              onPress={() => navigation.navigate(route.name)}
            />
          ),
          headerTitleStyle: {
            fontFamily: fonts[3],
            fontSize: size.body3,
          },
        })}
        initialRouteName={routes.HOME}
      >
        <Stack.Screen name={routes.HOME} component={HomeScreen} />
        <Stack.Screen name={routes.MY_WALLET} component={MyWaletScreen} />
        <Stack.Screen
          name={routes.NOTIFICATION}
          component={NotificationScreen}
        />
        <Stack.Screen name={routes.FAVOURITE} component={FavouriteScreen} />
        <Stack.Screen name={routes.SETTINGS} component={SettingsScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default FeedNavigator;
