import classNames from "classnames";
import React from "react";

export interface Props {
  name: string;
  placeholder: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ name, placeholder, value, onchange }: Readonly<Props>) {
  return (
    <input
      type="text"
      className={classNames(
        "w-full h-12 border-[1px] border-[#171717] rounded-md bg-black text-white px-4 py-2 outline-none ring-offset-[2px] focus:ring-[1px] transition-all ring-[#171717]",
        { "ring-[1px]": value !== "" }
      )}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onchange}
    />
  );
}

export default Input;
