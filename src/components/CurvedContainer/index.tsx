import React, { ReactNode } from "react";
import {
  Dimensions,
  Image,
  ImageRequireSource,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import theme, { Box } from "../../theme";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.darkBlue,
  },
  pattern: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    borderBottomLeftRadius: theme.borderRadii.xl,
  },
});

const patterns: ImageRequireSource[] = [
  require("../../assets/images/pattern1.png"),
  require("../../assets/images/pattern2.png"),
  require("../../assets/images/pattern3.png"),
];

interface ICurvedContainerProps {
  footer: ReactNode;
}

const CurvedContainer: React.FC<ICurvedContainerProps> = ({
  children,
  footer,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Box backgroundColor="white">
        <Box
          height={height * 0.6}
          borderBottomLeftRadius="xl"
          overflow="hidden"
        >
          <Image source={patterns[0]} style={styles.pattern} />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={patterns[0]}
          style={[styles.pattern, { top: -height * 0.6 }]}
        />
        <Box
          flex={1}
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="darkBlue" paddingVertical="m">
        {footer}
      </Box>
    </SafeAreaView>
  );
};

export default CurvedContainer;
