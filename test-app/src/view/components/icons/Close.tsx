import { SvgIconProps } from "@mui/material";
import React from "react";

const Close = (props: SvgIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_9955_25312)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9703 4.65685C15.5798 4.26633 14.9466 4.26633 14.5561 4.65685L10.3135 8.89949L6.07084 4.65685C5.68031 4.26633 5.04715 4.26633 4.65662 4.65685C4.2661 5.04738 4.2661 5.68054 4.65662 6.07107L8.89926 10.3137L4.65662 14.5563C4.2661 14.9469 4.2661 15.58 4.65662 15.9706C5.04715 16.3611 5.68031 16.3611 6.07084 15.9706L10.3135 11.7279L14.5561 15.9706C14.9466 16.3611 15.5798 16.3611 15.9703 15.9706C16.3609 15.58 16.3609 14.9469 15.9703 14.5563L11.7277 10.3137L15.9703 6.07107C16.3609 5.68054 16.3609 5.04738 15.9703 4.65685Z"
          fill="#454754"
        />
      </g>
      <defs>
        <clipPath id="clip0_9955_25312">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Close;
