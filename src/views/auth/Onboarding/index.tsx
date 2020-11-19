import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import {
  onScrollEvent,
  useValue,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import { SLIDE_HEIGHT } from "../../../constants";

import Slide from "./Slide";

interface OnBoardingSlideData {
  label: string;
  color: string;
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerCurvedShape: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 75,
  },
});

const slides: OnBoardingSlideData[] = [
  { label: "Relaxed", color: "#bfeaf5" },
  { label: "Playful", color: "#beecc4" },
  { label: "Excentric", color: "#ffe4d9" },
  { label: "Funky", color: "#ffdddd" },
];

const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slide key={index} {...{ label }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <View style={styles.footerCurvedShape} />
      </View>
    </View>
  );
};

export default Onboarding;
