import React, { useRef } from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import {
  onScrollEvent,
  useValue,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import { slides } from "../../../constants/onboardingSlides";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: BORDER_RADIUS,
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

  const handleScrollToNextSlide = (index: number) => {
    if (scroll.current) {
      scroll.current
        .getNode()
        .scrollTo({ x: width * (index + 1), animated: true });
    }
  };

  const subSliderContainerStyle: StyleProp<Animated.AnimateStyle<ViewStyle>> = {
    flex: 1,
    flexDirection: "row",
    width: width * slides.length,
    transform: [{ translateX: multiply(x, -1) }],
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
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} {...{ title, picture }} right={!!(index % 2)} />
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
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View style={subSliderContainerStyle}>
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
    </View>
  );
};

export default Onboarding;
