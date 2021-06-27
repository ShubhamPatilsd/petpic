import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
  } from "react";
import Icon from "./Icon";

const sizeClassnames = {
  big: "py-2 px-6 text-lg rounded-lg",
  small: "px-2 py-1 text-sm rounded-md",
  tiny: "px-1 text-sm rounded-5",
};



export type ButtonProps = DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames;
  color?: string;
  className?: string;
  textClassName?: string;
  onClick?: any;
}

export const Button: React.FC<ButtonProps> = ({
  size = "big",
  color = "black",
  className,
  textClassName = "text-base",
  onClick = ()=>{},
  ...props
}) => {
  return (
      <button
        type="button"
        onClick={onClick}
        className={`flex items-center justify-center space-x-3 transition text-white font-bold duration-300 ease-in-out bg-${color} ${className} focus:outline-none focus:shadow-outline ${sizeClassnames[size]}`}
      >
        
        <h4 className={`${textClassName}`}>{props.children}</h4>
        
      </button>
  );
};