import React from "react";

// Define button status type
type ButtonStatus = "COMPLETED" | "PENDING" | "FAILED";

interface ButtonProps {
  status: ButtonStatus;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ status, onClick }) => {

  return (
    <>
      {status === "COMPLETED" && (
        <button
          type="button"
          className="px-2 py-1 text-xs font-normal text-center text-white bg-green-500 rounded-full disabled cursor-not-allowed"
        >
          {status}
        </button>
      )}
      {status === "FAILED" && (
        <button
          type="button"
          className="px-2 py-1 text-xs font-normal text-center text-white bg-red-500 rounded-full disabled cursor-not-allowed"
        >
          {status}
        </button>
      )}
      {status === "PENDING" && (
        <button
          type="button"
          className="px-2 py-1 text-xs font-normal text-center text-white bg-yellow-500 rounded-full disabled cursor-not-allowed"
        >
          {status}
        </button>
      )}
    </>
  );
};

export default Button;
