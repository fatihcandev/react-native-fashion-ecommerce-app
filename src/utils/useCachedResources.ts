import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

const images = [
  require("../assets/images/1.png"),
  require("../assets/images/2.png"),
  require("../assets/images/3.png"),
  require("../assets/images/4.png"),
  require("../assets/images/5.png"),
  require("../assets/images/pattern1.png"),
  require("../assets/images/pattern2.png"),
  require("../assets/images/pattern3.png"),
];

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
      await Asset.loadAsync([...images]);
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
