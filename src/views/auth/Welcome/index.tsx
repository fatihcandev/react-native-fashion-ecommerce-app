import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Button from "../../../components/Button";
import theme, { StyledText } from "../../../theme";

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
  footerCurvedShape: {
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

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Image source={picture.src} style={styles.picture} />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerAbsBg} />
        <View style={styles.footerCurvedShape}>
          <StyledText variant="titlePrimary">Let's get started</StyledText>
          <StyledText variant="body" style={styles.body}>
            Log in to your account below or sign up for an amazing experience
          </StyledText>
          <Button variant="primary" onPress={() => {}}>
            Have an account? Log in
          </Button>
          <Button variant="secondary" onPress={() => {}}>
            Join us. It's free
          </Button>
          <Button variant="transparent" onPress={() => {}}>
            Forgot password?
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
