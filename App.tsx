import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./src/views/auth/Onboarding";
import useCachedResources from "./src/utils/useCachedResources";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  return isLoadingComplete ? (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  ) : null;
}
