import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";

import useCachedResources from "./src/utils/useCachedResources";
import AuthNavigation from "./src/navigation/auth";
import theme from "./src/theme";

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();
  return isLoadingComplete ? (
    <ThemeProvider theme={theme}>
      <AuthNavigation />
    </ThemeProvider>
  ) : null;
};

export default App;
