// DynamicForm.tsx
import React, { useState } from "react";

interface DynamicFormProps {
  inputValues: {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
  }[];
  onSubmit: (formData: Record<string, string>) => void;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ inputValues, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      {inputValues.map((input) => (
        <div key={input.name} className="mb-5">
          <label
            htmlFor={input.name}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {input.label}
          </label>
          <input
            type={input.type}
            id={input.name}
            name={input.name}
            placeholder={input.placeholder}
            value={formData[input.name] || ""}
            onChange={(e) => handleInputChange(input.name, e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-orange-300"
            required
          />
        </div>
      ))}
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
            required
          />
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900">
          I agree with the{" "}
          <a
            href="https://app.myghpay.com/privacy"
            className="text-orange-600 hover:underline"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Register new account
      </button>
    </form>
  );
};


// <DynamicForm inputValues={inputValues} onSubmit={handleSubmit} />

//   const inputValues = [
//     { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name' },
//     { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name' },
//     { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
//   ];

//   const handleSubmit = (formData: Record<string, string>) => {
//     console.log('Form Data:', formData);
//     // Add your logic based on the form data
//   };