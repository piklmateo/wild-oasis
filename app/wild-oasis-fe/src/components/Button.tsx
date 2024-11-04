import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: "primary" | "secondary";
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

const buttonStyles = {
  primary: "bg-indigo-600 hover:bg-indigo-500 text-gray-50 px-4 py-2.5 text-sm rounded-sm transition-all",
  secondary: "border border-gray-300 hover:bg-gray-100 px-4 py-2.5 rounded-sm text-sm text-gray-700 transition-all",
};

const Button = ({ children, style, type, className, onClick }: ButtonProps) => {
  return (
    <button type={type} className={className ? className : buttonStyles[style!]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
