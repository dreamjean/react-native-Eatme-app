import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { SearchScreen } from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: "Business Search",
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
