import React from "react";

import { Box, StyledText } from "../../../theme";
import Button from "../../../components/Button";

import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <Box>
      <Box flexDirection="row" justifyContent="center">
        <SocialIcon name="google" onPress={() => true} />
        <SocialIcon name="facebook" onPress={() => true} />
        <SocialIcon name="apple" onPress={() => true} />
      </Box>
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => true}>
          <Box flexDirection="row">
            <StyledText variant="button" color="white" marginRight="s">
              Don't have an account?
            </StyledText>
            <StyledText variant="button" color="primary">
              Sign up here
            </StyledText>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
