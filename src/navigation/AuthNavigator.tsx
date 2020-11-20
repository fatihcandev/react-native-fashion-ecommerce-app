import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../views/auth/Onboarding";
import Welcome from "../views/auth/Welcome";

const AuthStack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
