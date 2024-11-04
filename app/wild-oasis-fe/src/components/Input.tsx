import { ReactNode } from "react";
import { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  children: ReactNode;
  htmlFor: string;
  type: string;
  name: Path<T>;
  id: string;
  labelType: "grid";
  inputType: "grid" | "file";
  gridDivider?: boolean;
  register: UseFormRegister<T>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const labelStyles = {
  grid: "col-start-1 col-end-1 self-center",
};

const inputStyles = {
  grid: "border border-gray-300 p-2.5 rounded-sm col-span-3 lg:col-start-2 lg:col-end-2 focus:outline-indigo-700",
  file: "text-gray-700 file:bg-indigo-600 file:hover:bg-indigo-500 file:text-gray-50 file:border-0 file:px-4 file:py-2.5 file:mr-2 file:rounded-sm file:cursor-pointer",
};

const Input = <T extends FieldValues>({
  children,
  htmlFor,
  type,
  name,
  id,
  labelType,
  inputType,
  gridDivider = false,
  register,
  onChange,
}: InputProps<T>) => {
  return (
    <>
      <label htmlFor={htmlFor} className={labelStyles[labelType]}>
        {children}
      </label>
      <input className={inputStyles[inputType]} type={type} id={id} {...register(name)} onChange={onChange} />
      {gridDivider && (
        <div className="col-span-3">
          <hr className="border-t border-gray-100" />
        </div>
      )}
    </>
  );
};

export default Input;
