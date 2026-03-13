import React, { useState } from "react";

interface SelectInputProps {
  label: string;
  options: { value: string; label: string }[];
  // value: string;
  onSelect: (selectedValue: string) => void;
}


export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  // value,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isExpand, setIsExpand] = useState(false);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    closeDropdown();

    return value;
  };

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   onChange(event.target.value);
  // };

  const closeDropdown = () => {
    setIsExpand(false);
  };

  return (
    <div className="mb-4 ">
      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsExpand((curr) => !curr)}>
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      </svg>

      {isExpand && (
        <div className="origin-top-right absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
          <ul
            className="py-1 text-sm text-gray-700"
            aria-labelledby="actionsDropdownButton"
          >
            {options.map((option, key) => (
              <li
                key={key}
                className="block py-2 px-4 hover:bg-gray-100"
                onClick={() => handleSelectChange(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
