import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
// import DrawerNavigator from "./app/navigation/DrawerNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { store } from "./app/store/configureStore";

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <Theme>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </Theme>
    </Provider>
  );
}
