import * as React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/utils/useCachedResources";
import AuthNavigation from "./src/navigation/auth";
import theme from "./src/theme";

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();
  return isLoadingComplete ? (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <AuthNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  ) : null;
};

export default App;
