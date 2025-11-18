import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({ children, variant = "primary", onClick, type = "button", className = "" }: ButtonProps) => {
  const getButtonClasses = () => {
    const baseClasses = "";
    const variants = {
      primary: "",
      secondary: "",
      danger: "",
      success: "",
    };
    return `${baseClasses} ${variants[variant]} ${className}`;
  };

  return (
    <button type={type} className={getButtonClasses()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;