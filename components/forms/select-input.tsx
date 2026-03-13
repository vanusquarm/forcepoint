import React, { useState } from "react";

interface SelectInputProps {
  options: { value: string; label: string }[];
  onSelect: (selectedValue: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="select"
        className="block text-sm font-medium text-gray-700"
      >
        Select an option:
      </label>
      <select
        id="select"
        name="select"
        value={selectedValue}
        onChange={handleSelectChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
