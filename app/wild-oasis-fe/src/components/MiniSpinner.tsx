import { SpinnerCircularFixed } from "spinners-react";

interface MiniSpinnerProps {
  color: string;
  secondaryColor: string;
}

const MiniSpinner = ({ color, secondaryColor }: MiniSpinnerProps) => {
  return <SpinnerCircularFixed size={20} thickness={200} speed={150} color={color} secondaryColor={secondaryColor} />;
};

export default MiniSpinner;
