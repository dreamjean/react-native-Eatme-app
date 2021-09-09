import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { ResultsShowScreen, SearchScreen } from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: "Business Search" }}
    />
    <Stack.Screen
      name="Results Show"
      component={ResultsShowScreen}
      options={{
        title: "Business Details",
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
