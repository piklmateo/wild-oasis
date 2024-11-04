import { ReactNode } from "react";

interface CustomFormProps {
  children: ReactNode;
  heading: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  type: "grid";
  headingType: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "xxxxl";
}

const formStyles = {
  grid: "grid grid-cols-3 gap-x-6 gap-y-4 text-sm",
};

const headingStyles = {
  sm: "text-normal text-gray-700",
  md: "text-md text-gray-700",
  lg: "text-lg text-gray-700",
  xl: "text-xl text-gray-700",
  xxl: "text-2xl text-gray-700",
  xxxl: "text-3xl font-semibold text-gray-700",
  xxxxl: "text-4xl font-semibold text-gray-700",
};

const Form = ({ children, type, heading, headingType, onSubmit }: CustomFormProps) => {
  return (
    <>
      <h1 className={headingStyles[headingType]}>{heading}</h1>
      <div className="bg-white py-5 px-8 rounded-lg">
        <form onSubmit={onSubmit} className={formStyles[type]}>
          {children}
        </form>
      </div>
    </>
  );
};

export default Form;
