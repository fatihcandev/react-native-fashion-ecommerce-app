import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";
import {
  onScrollEvent,
  useValue,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import theme from "../../../theme";
import { slides } from "../../../constants/onboardingSlides";
import { AuthRoutes, StackNavigationProps } from "../../../types";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
  picture: {
    width: "75%",
    height: "100%",
    alignSelf: "center",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});

const Onboarding = ({
  navigation,
}: StackNavigationProps<AuthRoutes, "Onboarding">) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  const handleScrollToNextSlide = (index: number, last: boolean) => {
    if (last) {
      navigation.navigate("Welcome");
    } else {
      scroll.current
        ?.getNode()
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
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image source={picture} style={styles.picture} />
            </Animated.View>
          );
        })}
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
            {slides.map(({ subtitle, desc }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  key={index}
                  {...{ subtitle, desc, last }}
                  onButtonPress={() => handleScrollToNextSlide(index, last)}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
