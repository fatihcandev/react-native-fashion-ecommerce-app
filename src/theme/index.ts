import { createText, createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2cb9b0",
    secondary: "rgba(12, 13, 52, 0.05)",
    title: "#0c0d34",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
    },
    titlePrimary: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "title",
    },
    titleSecondary: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Medium",
      textAlign: "center",
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const StyledText = createText<Theme>();
export default theme;
