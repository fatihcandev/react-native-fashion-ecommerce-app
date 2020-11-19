import React from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { SLIDE_HEIGHT } from "../../../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
  },
  labelContainer: {
    height: 100,
    justifyContent: "center",
  },
  label: {
    fontSize: 80,
    lineHeight: 80,
    color: "white",
    fontFamily: "SF-Pro-Text-Bold",
    textAlign: "center",
  },
});

interface ISlideProps {
  label: string;
  right?: boolean;
}

const Slide: React.FC<ISlideProps> = ({ label, right }) => {
  const labelStyle: StyleProp<ViewStyle> = {
    ...styles.labelContainer,
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
    <View style={styles.container}>
      <View style={labelStyle}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
