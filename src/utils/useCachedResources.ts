import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  const loadResourcesAndDataAsync = useCallback(async () => {
    try {
      // Load fonts
      await Font.loadAsync({
        "SF-Pro-Text-Regular": require("../assets/fonts/SF-Pro-Text-Regular.otf"),
        "SF-Pro-Text-Semibold": require("../assets/fonts/SF-Pro-Text-Semibold.otf"),
        "SF-Pro-Text-Bold": require("../assets/fonts/SF-Pro-Text-Bold.otf"),
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
}
