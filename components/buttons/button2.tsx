import React from "react";

// Define button status type
type ButtonStatus = "normal" | "disabled" | "loading";

interface ButtonProps {
  status: ButtonStatus;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ status, onClick }) => {
  let buttonClassName = "button";
  let buttonText = "Click Me";

  // Update button appearance and behavior based on status
  switch (status) {
    case "disabled":
      buttonClassName += " button-disabled";
      break;
    case "loading":
      buttonClassName += " button-loading";
      buttonText = "Loading...";
      break;
    default:
      break;
  }

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={status === "disabled"}
    >
      {buttonText}
    </button>
  );
};

export default Button;
