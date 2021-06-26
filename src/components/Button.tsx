import React from "react";
import Icon from "./Icon";

const sizeClassnames = {
  big: "py-2 px-6 text-lg rounded-lg",
  small: "px-2 py-1 text-sm rounded-md",
  tiny: "px-1 text-sm rounded-5",
};



interface ButtonProps {
  size?: keyof typeof sizeClassnames;
  color?: string;
  className?: string;
  iconName?: string;
  iconClassName?: string;
  iconColor?: string;
  textClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = "big",
  color = "black",
  iconName,
  iconClassName,
  iconColor,
  className,
  textClassName = "text-base",
  ...props
}) => {
  return (
    <div>
      <button
        type="button"
        className={`flex items-center space-x-3 transition text-white font-bold duration-300 ease-in-out bg-${color} ${className} focus:outline-none focus:shadow-outline ${sizeClassnames[size]}`}
      >
        <Icon className={`${iconName ? "" : "hidden"} ${iconClassName}`} name={iconName ? iconName : ""} />
        <h4 className={`${textClassName}`}>{props.children}</h4>
        
      </button>
    </div>
  );
};
