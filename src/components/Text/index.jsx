import React from "react";

const sizeClasses = {
  txtInterSemiBold16Yellow800: "font-inter font-semibold",
  txtInterSemiBold16Indigo900: "font-inter font-semibold",
  txtInterRegular14Bluegray700: "font-inter font-normal",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterSemiBold47: "font-inter font-semibold",
  txtInterRegular16Bluegray50001: "font-inter font-normal",
  txtInterSemiBold16Bluegray800: "font-inter font-semibold",
  txtInterRegular14GreenA700: "font-inter font-normal",
  txtInterSemiBold16Blue600: "font-inter font-semibold",
  txtInterSemiBold16Bluegray700: "font-inter font-semibold",
  txtInterRegular14Deeppurple400: "font-inter font-normal",
  txtInterMedium14Orange600: "font-inter font-medium",
  txtInterMedium14Bluegray600: "font-inter font-medium",
  txtInterSemiBold16Deeppurple400: "font-inter font-semibold",
  txtInterMedium20Gray800: "font-inter font-medium",
  txtInterMedium14Gray800: "font-inter font-medium",
  txtInterMedium14Gray700: "font-inter font-medium",
  txtInterMedium14Bluegray400: "font-inter font-medium",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterRegular14Deeporange300: "font-inter font-normal",
  txtInterRegular12Bluegray600: "font-inter font-normal",
  txtInterRegular12Bluegray400: "font-inter font-normal",
  txtInterMedium14Red600: "font-inter font-medium",
  txtInterRegular16Bluegray700: "font-inter font-normal",
  txtInterMedium14Blue900: "font-inter font-medium",
  txtInterSemiBold16Red300: "font-inter font-semibold",
  txtInterMedium14Blue700: "font-inter font-medium",
  txtInterRegular14Blue900: "font-inter font-normal",
  txtInterRegular14BlueA200: "font-inter font-normal",
  txtInterRegular16Bluegray400: "font-inter font-normal",
  txtInterRegular14Gray70001: "font-inter font-normal",
  txtInterRegular10: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterMedium14Yellow80001: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium14GreenA700: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium14Bluegray50001: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterMedium16Bluegray600: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterSemiBold30Gray900: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
