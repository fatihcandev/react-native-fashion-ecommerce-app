import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../../../../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    fontFamily: "SF-Pro-Text-Semibold",
    color: "#0c0d34",
  },
  desc: {
    marginBottom: 40,
    fontFamily: "SF-Pro-Text-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0c0d34",
    textAlign: "center",
  },
});

interface ISubSlideProps {
  subtitle: string;
  desc: string;
  last?: boolean;
  onButtonPress: () => void;
}

const SubSlide: React.FC<ISubSlideProps> = ({
  subtitle,
  desc,
  last,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Button variant={last ? "primary" : "secondary"} onPress={onButtonPress}>
        {last ? "Let's get started" : "Next"}
      </Button>
    </View>
  );
};

export default SubSlide;
