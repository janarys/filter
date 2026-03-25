"use client";
import { ComponentProps, useState } from "react";
import { Icon } from "./icons";

export type SelectOptionProps = { value: number | string; label: string }[];

export type SelectProps = {
  options: SelectOptionProps;
  placeholder?: string;
  name?: string;
  error?: string;
  value?: number | string;
  onChange?: (value: number | string) => void;
} & Omit<ComponentProps<"div">, "value" | "onChange">;

export const Select = ({
  options,
  value,
  onChange,
  error,
  placeholder,
  ...props
}: SelectProps) => {
  const [isOpen, setOpen] = useState(false);

  // Synchronize with value prop
  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  const handleSelect = (option: (typeof options)[0]) => {
    if (onChange) {
      onChange(option.value);
    }
    setOpen(false);
  };

  return (
    <div
      {...props}
      className={`transition-all relative rounded-[8px] flex flex-col bg-[#FFFFFF] p-[16px] w-full ${error ? "bg-[#ecdada] text-[#BF1919] placeholder:text-[#BF1919]" : ""
        } ${props.className || ""}`}
    >
      <div
        className="flex cursor-pointer w-full items-center select-none"
        onClick={() => setOpen((old) => !old)}
      >
        <div className="flex-1 truncate">
          {selectedOption ? selectedOption.label : (placeholder || "Select option")}
        </div>
        <div className="ml-2">
          <Icon name="CaretDown" className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-[8px] border border-gray-100 bg-[#FFFFFF] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-h-[250px] overflow-y-auto">
              {options.map((el) => (
                <div
                  className={`cursor-pointer px-[16px] py-[12px] text-[14px] leading-[18px] font-medium transition-colors hover:bg-gray-50 hover:text-primary ${selectedOption?.value === el.value
                      ? "bg-gray-50 text-primary"
                      : "text-[#929292]"
                    }`}
                  key={el.value}
                  onClick={() => handleSelect(el)}
                >
                  {el.label}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
