import React from "react";
import { Text } from "react-native";

import CurvedContainer from "../../../components/CurvedContainer";

import Footer from "./Footer";

const LogIn = () => {
  return (
    <CurvedContainer footer={<Footer />}>
      <Text>Login</Text>
    </CurvedContainer>
  );
};

export default LogIn;
