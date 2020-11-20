import React from "react";

import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import theme, { Box } from "../../../theme";

interface ISocialIconProps {
  name: string;
  onPress: () => void;
}

const SocialIcon: React.FC<ISocialIconProps> = ({ name, onPress }) => {
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="m"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Button variant="transparent" onPress={onPress}>
        <Icon {...{ name }} />
      </Button>
    </Box>
  );
};

export default SocialIcon;
