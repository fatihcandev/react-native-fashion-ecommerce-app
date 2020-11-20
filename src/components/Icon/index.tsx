import React from "react";

import * as Icons from "../icons";
import { IconName } from "../../types";

interface IconProps {
  name: string;
  color?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  switch (name) {
    case IconName.google:
      return <Icons.Google {...rest} />;
    case IconName.facebook:
      return <Icons.Facebook {...rest} />;
    case IconName.apple:
      return <Icons.Apple {...rest} />;
    default:
      return null;
  }
};

export default Icon;
