import { Platform } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components";

import { colors, constants } from "../../config";
import TabBarButton from "./TabBarButton";

const { width } = constants;

const getPaddingBottom = (insets) =>
  Math.max(insets.bottom - Platform.select({ ios: 4, default: 0 }), 0);

const TabBar = ({ state, navigation, descriptors }) => {
  const insets = useSafeAreaInsets();
  const paddingBottom = getPaddingBottom(insets);
  const activeIndex = useSharedValue(0);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const {
    tabBarLabelStyle,
    tabBarActiveTintColor,
    tabBarInactiveTintColor,
    tabBarActiveBackgroundColor,
    tabBarInactiveBackgroundColor,
  } = focusedOptions;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const { routes } = state;

  return (
    <Container
      style={{
        shadowColor: colors.lightGray2,
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.7,
        shadowRadius: 15,
        elevation: 25,
      }}
    >
      <Tabs
        style={{
          paddingBottom,
          shadowColor: colors.lightGray1,
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.7,
          shadowRadius: 15,
          elevation: 25,
        }}
      >
        {routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const focused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TabBarButton
              key={`bg-${index}`}
              activeTintColor={tabBarActiveTintColor}
              inactiveTintColor={tabBarInactiveTintColor}
              activeBackgroundColor={tabBarActiveBackgroundColor}
              inactiveBackgroundColor={tabBarInactiveBackgroundColor}
              labelStyle={tabBarLabelStyle}
              renderActiveIcon={options.activeIcon}
              {...{
                activeIndex,
                focused,
                index,
                onPress,
                label,
                route,
              }}
            />
          );
        })}
      </Tabs>
    </Container>
  );
};

const Container = styled.View`
  height: 80px;
  width: ${width}px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.lightGray2,
  })}
`;

const Tabs = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-around;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.l,
    borderTopRightRadius: radii.l,
  })}
`;

export default TabBar;
