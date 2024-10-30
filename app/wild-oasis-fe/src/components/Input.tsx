import { ReactNode } from "react";

interface InputProps {
  children: ReactNode;
  htmlFor: string;
  type: string;
  name: string;
  id: string;
  labelType: "grid";
  inputType: "grid" | "file";
  gridDivider?: boolean;
}

const labelStyles = {
  grid: "col-start-1 col-end-1 self-center",
};

const inputStyles = {
  grid: "border border-gray-300 p-2.5 rounded-sm col-span-3 lg:col-start-2 lg:col-end-2 focus:outline-indigo-700",
  file: "text-gray-700 file:bg-indigo-600 file:text-gray-50 file:border-0 file:px-4 file:py-2.5 file:mr-2 file:rounded-sm file:cursor-pointer",
};

const Input = ({ children, htmlFor, type, name, id, labelType, inputType, gridDivider = false }: InputProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className={labelStyles[labelType]}>
        {children}
      </label>
      <input className={inputStyles[inputType]} type={type} name={name} id={id} />
      {gridDivider && (
        <div className="col-span-3">
          <hr className="border-t border-gray-100" />
        </div>
      )}
    </>
  );
};

export default Input;
