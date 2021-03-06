import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigator";

const AuthNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AuthNavigation;
