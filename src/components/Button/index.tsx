import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

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
  const backgroundColor =
    variant === "primary" ? "#2cb9b0" : "rgba(12, 13, 52, 0.05)";

  const color = variant === "primary" ? "white" : "#0c0d34";

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
