import React from "react";

interface InputComponentProps {
  label: string;
  value: string; // ISO date string format (YYYY-MM-DD)
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputComponentProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="relative w-full md:w-auto flex items-center justify-center mt-4 py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
      <label
        htmlFor="input"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="date"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded border-[1.4px] border-gray-600 h-10 p-2 focus:outline-0"
      />
    </div>
  );
};

export default Input;

// Usage:
            // <Input
            //   label="First Name"
            //   value={}
            //   onChange={(value) => handleInputChange("First Name", value)}
            // />;