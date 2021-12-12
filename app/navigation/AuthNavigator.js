import { createStackNavigator } from "@react-navigation/stack";

import {
  ForgotPasswordScreen,
  LoginScreen,
  OnBoardingScreen,
  OtpScreen,
  RegisterScreen,
  WelcomeScreen,
} from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.ON_BOARDING} component={OnBoardingScreen} />
    <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    <Stack.Screen
      name={routes.FORGOT_PASSWORD}
      component={ForgotPasswordScreen}
    />
    <Stack.Screen name={routes.OTP} component={OtpScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
