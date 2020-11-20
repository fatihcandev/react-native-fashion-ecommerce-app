import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  const loadResourcesAndDataAsync = useCallback(async () => {
    try {
      // Load fonts
      await Font.loadAsync({
        "SFProDisplay-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
        "SFProDisplay-Medium": require("../assets/fonts/SF-Pro-Display-Medium.otf"),
        "SFProDisplay-Semibold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
        "SFProDisplay-Bold": require("../assets/fonts/SF-Pro-Display-Bold.otf"),
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
    }
  }, []);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, [loadResourcesAndDataAsync]);

  return isLoadingComplete;
};

export default useCachedResources;
