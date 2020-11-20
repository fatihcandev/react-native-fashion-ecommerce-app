import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../../../components/Button";
import { StyledText } from "../../../../components/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    marginBottom: 12,
  },
  desc: {
    marginBottom: 40,
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
      <StyledText variant="titleSecondary" style={styles.subtitle}>
        {subtitle}
      </StyledText>
      <StyledText variant="body" style={styles.desc}>
        {desc}
      </StyledText>
      <Button variant={last ? "primary" : "secondary"} onPress={onButtonPress}>
        {last ? "Let's get started" : "Next"}
      </Button>
    </View>
  );
};

export default SubSlide;
