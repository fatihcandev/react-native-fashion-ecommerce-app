import React from "react";
import { Dimensions, StyleProp, ViewStyle } from "react-native";

import { Box, StyledText } from "../../../../theme";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.6 * height;

interface ISlideProps {
  title: string;
  right?: boolean;
}

const Slide: React.FC<ISlideProps> = ({ title, right }) => {
  const titleStyle: StyleProp<ViewStyle> = {
    transform: [
      {
        translateY: (SLIDE_HEIGHT - 100) / 2,
      },
      {
        translateX: right ? width / 2 - 50 : -width / 2 + 50,
      },
      {
        rotate: right ? "-90deg" : "90deg",
      },
    ],
  };

  return (
    <Box {...{ width }}>
      <Box height={100} justifyContent="center" style={titleStyle}>
        <StyledText variant="hero">{title}</StyledText>
      </Box>
    </Box>
  );
};

export default Slide;
