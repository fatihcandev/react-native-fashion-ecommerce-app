import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../Theme";

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 245,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    // Update font
    fontSize: 15,
    fontFamily: "SF-Pro-Text-Regular",
    textAlign: "center",
  },
});

interface IButtonProps {
  variant: "primary" | "secondary";
  onPress: () => void;
}

const Button: React.FC<IButtonProps> = ({
  variant = "secondary",
  onPress,
  children,
}) => {
  const theme = useTheme<Theme>();
  const backgroundColor = theme.colors[variant];
  const color = variant === "primary" ? theme.colors.white : theme.colors.text;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{children}</Text>
    </RectButton>
  );
};

export default Button;
