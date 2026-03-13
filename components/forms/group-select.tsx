import React, { useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  reset?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  defaultValue = "",
  onChange,
  reset = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    if (reset) {
      setSelectedValue(defaultValue);
    }
  }, [reset, defaultValue]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="mb-4 ">
      <label
        className="block text-sm font-medium text-gray-700"
      >
        {label || "Select an option:"}
      </label>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="relative w-full md:w-auto flex items-center justify-center mt-4 py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        <option value="" disabled>
          All
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="block py-2 px-4 hover:bg-gray-100"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};