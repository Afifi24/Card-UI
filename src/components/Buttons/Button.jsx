import React from "react";

const Button = ({ size, variant, children }) => {
  const baseStyle = "px-8 py-3 cursor-pointer rounded-lg font-bold  tracking-widest ";
  const sizeStyle =
    size === "small"
      ? "text-sm"
      : size === "medium"
      ? "text-md"
      : size === "large"
      ? "text-lg"
      : size === "extraLarge"
      ? "text-xl"
      : "";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-500  text-white  hover:bg-blue-900 duration-300"
      : variant === "secondary"
      ? "bg-green-500 text-white"
      : variant === "outlined"? 'border-2 border-black':'';
  const Styles = `${baseStyle} ${sizeStyle} ${variantStyle}`;

  return <div className={Styles}>{children}</div>;
};

export default Button;
