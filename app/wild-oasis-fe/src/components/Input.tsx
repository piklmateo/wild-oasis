import { ReactNode } from "react";
import { UseFormRegister, Path, FieldValues } from "react-hook-form";

interface InputConfig<T extends FieldValues> {
  type: string;
  htmlFor: string;
  name: Path<T>;
  id: string;
  labelStyleVariant: "grid";
  inputStyleVariant: "grid" | "file";
  showDivider?: boolean;
  defaultValue?: any;
}

interface InputProps<T extends FieldValues> {
  children: ReactNode;
  inputConfig: InputConfig<T>;
  register: UseFormRegister<T>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const labelStyles = {
  grid: "col-start-1 col-end-1 self-center",
};

const inputStyles = {
  grid: "border border-gray-300 p-2.5 rounded-sm col-span-3 lg:col-start-2 lg:col-end-2 focus:outline-indigo-700",
  file: "text-gray-700 file:bg-indigo-600 file:hover:bg-indigo-500 file:text-gray-50 file:border-0 file:px-4 file:py-2.5 file:mr-2 file:rounded-sm file:cursor-pointer",
};

const Input = <T extends FieldValues>({ children, register, onChange, inputConfig }: InputProps<T>) => {
  const {
    htmlFor,
    type,
    name,
    id,
    labelStyleVariant,
    inputStyleVariant,
    showDivider = false,
    defaultValue,
  } = inputConfig;

  return (
    <>
      <label htmlFor={htmlFor} className={labelStyles[labelStyleVariant]}>
        {children}
      </label>
      {inputConfig.type === "textarea" ? (
        <textarea className={inputStyles[inputStyleVariant]} id={id} {...register(name)} onChange={onChange} />
      ) : (
        <input
          className={inputStyles[inputStyleVariant]}
          type={type}
          id={id}
          {...register(name)}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      )}

      {showDivider && (
        <div className="col-span-3">
          <hr className="border-t border-gray-100" />
        </div>
      )}
    </>
  );
};

export default Input;
