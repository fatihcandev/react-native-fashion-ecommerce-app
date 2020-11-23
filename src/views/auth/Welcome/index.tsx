import React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../../components/Button";
import theme, { Box, StyledText } from "../../../theme";
import { AuthRoutes, StackNavigationProps } from "../../../types";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  picture: {
    width: "75%",
    height: "100%",
    alignSelf: "center",
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
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="secondary">
        <Image source={picture.src} style={styles.picture} />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="secondary"
        />
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          paddingHorizontal="xl"
          backgroundColor="white"
          borderTopLeftRadius="xl"
        >
          <StyledText variant="titlePrimary">Let's get started</StyledText>
          <StyledText variant="body" textAlign="center">
            Log in to your account below or sign up for an amazing experience
          </StyledText>
          <Button
            variant="primary"
            label="Have an account? Log in"
            onPress={() => navigation.navigate("LogIn")}
          />
          <Button
            variant="secondary"
            label="Join us. It's free"
            onPress={() => true}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => true}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Welcome;
