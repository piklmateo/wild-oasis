import { SpinnerCircularFixed } from "spinners-react";

const PageSpinner = () => {
  return (
    <div className="w-full h-[100dvh] flex justify-center items-start pt-52">
      <SpinnerCircularFixed
        size={100}
        thickness={100}
        speed={150}
        color="var(--color-brand-600)"
        secondaryColor="var(--color-grey-200)"
      />
    </div>
  );
};

export default PageSpinner;
