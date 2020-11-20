import React from "react";
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.6 * height;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
  },
  picture: {
    width: "75%",
    height: "100%",
    alignSelf: "center",
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
  picture: number;
}

const Slide: React.FC<ISlideProps> = ({ title, right, picture }) => {
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
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={titleStyle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
