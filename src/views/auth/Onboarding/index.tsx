import React, { useRef } from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import {
  onScrollEvent,
  useValue,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import { slides } from "../../../data/onboardingSlides";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const Onboarding: React.FC = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });
  const footerContentStyle: StyleProp<Animated.AnimateStyle<ViewStyle>> = {
    ...styles.footerContent,
    width: width * slides.length,
    transform: [{ translateX: multiply(x, -1) }],
  };

  const handleScrollToNextSlide = (index: number) => {
    if (scroll.current) {
      scroll.current
        .getNode()
        .scrollTo({ x: width * (index + 1), animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
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
        <Animated.View style={footerContentStyle}>
          {slides.map(({ subtitle, desc }, index) => (
            <SubSlide
              key={index}
              {...{ subtitle, desc }}
              last={index === slides.length - 1}
              onButtonPress={() => handleScrollToNextSlide(index)}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
