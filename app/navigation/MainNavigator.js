import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Animated from "react-native-reanimated";

import { Icon, IconButton } from "../components";
import { icons, images, theme } from "../config";
import {
  CartScreen,
  FavouriteScreen,
  HomeScreen,
  NotificationScreen,
  SearchScreen,
} from "../screens";
import routes from "./routes";
import TabBar from "./tabBar/TabBar";

const { fonts, size, colors, space } = theme;
const Tab = createBottomTabNavigator();

const MainNavigator = ({ style }) => {
  return (
    <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
      <Tab.Navigator
        initialRouteName={routes.HOME}
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={({ navigation, route }) => ({
          title: route.name.toUpperCase(),
          headerTransparent: true,
          headerTitleAlign: "center",
          headerStyle: {
            height: 80,
          },
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
          // tabBarIcon: () => {
          //   let icon;

          //   switch (route.name) {
          //     case routes.HOME:
          //       icon = icons.home;
          //       break;

          //     case routes.SEARCH:
          //       icon = icons.search;
          //       break;

          //     case routes.CART:
          //       icon = icons.cart;
          //       break;

          //     case routes.FAVOURITE:
          //       icon = icons.favourite;
          //       break;

          //     case routes.NOTIFICATION:
          //       icon = icons.notification;
          //       break;
          //   }

          //   return <Icon image={icon} tintColor={colors.gray} size={20} />;
          // },
          activeIcon: ({ color }) => {
            let icon;

            switch (route.name) {
              case routes.HOME:
                icon = icons.home;
                break;

              case routes.SEARCH:
                icon = icons.search;
                break;

              case routes.CART:
                icon = icons.cart;
                break;

              case routes.FAVOURITE:
                icon = icons.favourite;
                break;

              case routes.NOTIFICATION:
                icon = icons.notification;
                break;
            }

            return <Icon image={icon} tintColor={color} size={20} />;
          },
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.gray,
          tabBarActiveBackgroundColor: colors.primary,
          tabBarInactiveBackgroundColor: colors.white,
        })}
      >
        <Tab.Screen name={routes.HOME} component={HomeScreen} />
        <Tab.Screen name={routes.SEARCH} component={SearchScreen} />
        <Tab.Screen name={routes.CART} component={CartScreen} />
        <Tab.Screen name={routes.FAVOURITE} component={FavouriteScreen} />
        <Tab.Screen name={routes.NOTIFICATION} component={NotificationScreen} />
      </Tab.Navigator>
    </Animated.View>
  );
};

export default MainNavigator;
