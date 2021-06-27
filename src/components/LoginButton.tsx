import React from "react"
import Icon from "./Icon";
import {signIn} from 'next-auth/client'

const sizeClassnames = {
  big: "py-2 px-6 text-lg rounded-lg",
  small: "px-2 py-1 text-sm rounded-md",
  tiny: "px-1 text-sm rounded-5",
};



interface LoginButtonProps{
  size?: keyof typeof sizeClassnames;
  name?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  size = "big",
  name="",
  ...props
}) => {
  return (
      <button
        type="button"
        className={`flex items-center space-x-3 transition text-white font-bold duration-300 ease-in-out bg-${name} w-full justify-center focus:outline-none focus:shadow-outline ${sizeClassnames[size]}`}
        onClick={()=>{signIn(name)}}
      >
        <Icon className={`${name ? "" : "hidden"} w-6 w-6 sm:w-8 sm:h-8`} name={name ? name : ""} />
        <h4 className="text-base md:text-lg">{props.children}</h4>
        
      </button>
  );
};
