import React from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: "white",
    fontFamily: "SF-Pro-Text-Bold",
    textAlign: "center",
  },
});

interface ISlideProps {
  title: string;
  right?: boolean;
}

const Slide: React.FC<ISlideProps> = ({ title, right }) => {
  const titleStyle: StyleProp<ViewStyle> = {
    ...styles.titleContainer,
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
      <View style={titleStyle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
