import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { StyledText, Theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 245,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
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
      <StyledText variant="button" style={{ color }}>
        {children}
      </StyledText>
    </RectButton>
  );
};

export default Button;
