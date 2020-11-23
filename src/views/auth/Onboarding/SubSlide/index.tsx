import React from "react";
import { StyleSheet } from "react-native";

import Button from "../../../../components/Button";
import { Box, StyledText } from "../../../../theme";

const styles = StyleSheet.create({
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
    <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
      <StyledText variant="titleSecondary" style={styles.subtitle}>
        {subtitle}
      </StyledText>
      <StyledText variant="body" style={styles.desc}>
        {desc}
      </StyledText>
      <Button
        variant={last ? "primary" : "secondary"}
        label={last ? "Let's get started" : "Next"}
        onPress={onButtonPress}
      />
    </Box>
  );
};

export default SubSlide;
