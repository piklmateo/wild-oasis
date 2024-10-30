import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "primary" | "secondary";
  onClick?: () => void;
}

const buttonStyles = {
  primary: "bg-indigo-600 text-gray-50 px-4 py-2.5 text-sm rounded-sm",
  secondary: "border border-gray-300 px-4 py-2.5 rounded-sm text-sm text-gray-700",
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button className={buttonStyles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
