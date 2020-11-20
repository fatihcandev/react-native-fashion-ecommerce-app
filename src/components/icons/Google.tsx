import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGoogle(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.135 5.75c1.865 0 3.344.646 4.285 1.58l2.654-2.654C17.354 3 14.958 2 12.135 2 8.198 2 4.855 4.148 3.17 7.302L6.2 9.7c.897-2.31 3.13-3.95 5.935-3.95z"
        fill="#E94435"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.77 11.99c0-.81.155-1.58.43-2.29L3.17 7.303A9.919 9.919 0 002 11.99c0 1.73.41 3.337 1.136 4.736l3.06-2.423a6.43 6.43 0 01-.425-2.313z"
        fill="#F8BB15"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.81 17.308c-.943.561-2.183.921-3.8.921-2.647 0-4.91-1.564-5.814-3.926l-3.06 2.422C4.784 19.902 8.076 22 12.01 22c2.743 0 5.062-.848 6.777-2.335l-2.977-2.357z"
        fill="#34A751"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11.99c0-.681-.069-1.346-.199-1.99H12v4h6.062l-.044.25c-.234 1.197-.95 2.31-2.207 3.059l2.977 2.357c2.03-1.76 3.212-4.42 3.212-7.676z"
        fill="#547DBE"
      />
    </Svg>
  );
}

export default SvgGoogle;
