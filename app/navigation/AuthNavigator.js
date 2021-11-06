import { createStackNavigator } from "@react-navigation/stack";

import { OnBoardingScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.ON_BOADING} component={OnBoardingScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
