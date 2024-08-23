import clsx from "clsx";
import React from "react";

type FormItemProps = {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string | string[];
  position?: "row" | "col";
  onChange?: (value: any) => void;
};

const FormItem = (props: FormItemProps) => {
  const { label, name, type, placeholder, value, onChange } = props;

  return (
    <div className="flex flex-col xl:gap-3 gap-2 bg-white">
      <label htmlFor={name} className="font-[500] text-[16px] text-left">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required
        id={name}
        value={value}
        className="h-16 placeholder:font-[400] placeholder:text-[14px] placeholder:text-tertiaryColor2 text-[#231F20] opacity-70 font-dm_sans text-[16px] rounded-xl border border-[#E4E1E1] bg-white focus:outline-none w-full px-4"
        onChange={onChange}
      />
    </div>
  );
};

export default FormItem;
