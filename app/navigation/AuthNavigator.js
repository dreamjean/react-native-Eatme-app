import { createStackNavigator } from "@react-navigation/stack";

import {
  ForgotPasswordScreen,
  LoginScreen,
  OnBoardingScreen,
  OtpScreen,
  RegisterScreen,
} from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.ON_BOADING} component={OnBoardingScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    <Stack.Screen name={routes.OTP} component={ForgotPasswordScreen} />
    <Stack.Screen name={routes.FORGOT_PASSWROD} component={OtpScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
