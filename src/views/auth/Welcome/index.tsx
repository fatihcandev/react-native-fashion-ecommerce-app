import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../../components/Button";
import theme, { StyledText } from "../../../theme";
import { AuthRoutes, StackNavigationProps } from "../../../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  heroSection: {
    flex: 1,
    borderBottomRightRadius: theme.borderRadii.xl,
    backgroundColor: theme.colors.secondary,
  },
  picture: {
    width: "75%",
    height: "100%",
    alignSelf: "center",
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  footerAbsBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.secondary,
  },
  footerContent: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: theme.spacing.xl,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  body: {
    textAlign: "center",
  },
});

const picture = {
  src: require("../../../assets/images/5.png"),
};

const Welcome = ({
  navigation,
}: StackNavigationProps<AuthRoutes, "Onboarding">) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heroSection}>
        <Image source={picture.src} style={styles.picture} />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerAbsBg} />
        <View style={styles.footerContent}>
          <StyledText variant="titlePrimary">Let's get started</StyledText>
          <StyledText variant="body" style={styles.body}>
            Log in to your account below or sign up for an amazing experience
          </StyledText>
          <Button
            variant="primary"
            onPress={() => navigation.navigate("LogIn")}
          >
            Have an account? Log in
          </Button>
          <Button variant="secondary" onPress={() => true}>
            Join us. It's free
          </Button>
          <Button variant="transparent" onPress={() => true}>
            Forgot password?
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
