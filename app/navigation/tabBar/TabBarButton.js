import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

import { theme } from "../../config";
import { Text } from "../../styles";

const size = 30;

const config = { duration: 500 };

const TabBarButton = ({
  activeTintColor,
  inactiveTintColor,
  activeBackgroundColor,
  inactiveBackgroundColor,
  labelStyle,
  renderActiveIcon,
  activeIndex,
  focused,
  index,
  onPress,
  label,
  route,
}) => {
  const color = focused ? activeTintColor : inactiveTintColor;

  const isActive = useDerivedValue(() => {
    return activeIndex.value === index;
  });

  const outerStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(isActive.value ? 160 : 40, config),
    };
  });

  const innerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isActive.value ? activeBackgroundColor : inactiveBackgroundColor,
        { duration: 500 }
      ),
    };
  });

  return (
    <Pressable
      onPress={() => {
        onPress();
        activeIndex.value = index;
      }}
      style={styles.container}
    >
      <Animated.View style={[styles.tab, outerStyle]}>
        <Animated.View style={[styles.icon, innerStyle]}>
          {renderActiveIcon({
            route,
            size,
            color,
          })}
          {focused && (
            <Text h5 numberOfLines={1} style={[styles.label, labelStyle]}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: "100%",
  },
  label: {
    marginLeft: theme.space.s1,
    color: theme.colors.white,
  },
});

export default TabBarButton;
