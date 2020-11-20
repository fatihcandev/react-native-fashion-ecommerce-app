import * as React from "react";

import useCachedResources from "./src/utils/useCachedResources";
import AuthNavigation from "./src/navigation/AuthNavigation";

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();
  return isLoadingComplete ? <AuthNavigation /> : null;
};

export default App;
