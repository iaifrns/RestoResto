import { Icon } from "@iconify/react";
import React from "react";
import { NormalInputType, SelectInputType } from "../types/inputType";

const NormalInputBox: React.FC<NormalInputType> = ({
  onChange,
  value,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-[50px] px-4 bg-[rgba(255,255,255,0.1)] w-full text-white"
    />
  );
};

const SelectInput: React.FC<SelectInputType> = ({
  value,
  onChange,
  placeholder,
  data,
}) => {
  const [isdrop, setIsdrop] = React.useState(false);
  const handleAsynValue = (value: string) => {
    onChange(value);
    setIsdrop(false);
  };
  return (
    <div className="h-[50px] bg-[rgba(255,255,255,0.1)] w-full px-4 cursor-default relative">
      <div
        className="w-full h-full flex justify-between items-center"
        onClick={() => setIsdrop(!isdrop)}
      >
        {value.length == 0 ? (
          <p className="text-gray-300">{placeholder}</p>
        ) : (
          <p className="text-white">{value}</p>
        )}
        {isdrop ? (
          <Icon
            icon="ri:arrow-drop-up-line"
            className="text-secondary"
            width="32"
            height="32"
          />
        ) : (
          <Icon
            icon="ri:arrow-drop-down-line"
            className="text-secondary"
            width="32"
            height="32"
          />
        )}
      </div>
      <div
        className={`${
          isdrop ? "absolute" : "hidden"
        } w-full h-fit max-h-[200px] z-10 overflow-auto bg-[rgba(255,255,255,0.9)] top-[55px] left-0 border border-[rgba(255,255,255,0.2)]`}
      >
        {data.map((item, index) => (
          <p
            className={`w-full p-2 hover:bg-secondary cursor-pointer text-sm ${
              value == item.value && "bg-secondary"
            }`}
            key={index}
            onClick={() => handleAsynValue(item.value)}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

const CustomTextArea: React.FC<NormalInputType> = ({onChange, value, placeholder})=>{
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange as any}
            className="h-[100px] px-4 bg-[rgba(255,255,255,0.1)] w-full text-white"
        />
    )
}

export { NormalInputBox, SelectInput, CustomTextArea };
