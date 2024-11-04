import { Cabin } from "../../services/data/types";
import MenuToggle from "./MenuToggle";

interface CabinRowProps {
  cabin: Cabin;
}

const CabinRow = ({ cabin }: CabinRowProps) => {
  return (
    <tr className="border text-sm text-gray-700" key={cabin.id}>
      <td className="w-32 pr-4">
        <img src={cabin.image} alt={cabin.name} className="w-24" />
      </td>
      <td className="font-semibold">{cabin.name}</td>
      <td className="">Fits up to {cabin.maxCapacity} guests</td>
      <td className="">{cabin.regularPrice}</td>
      <td className="">{cabin.discount}</td>
      <td className="text-2xl relative">
        <MenuToggle item={cabin} />
      </td>
    </tr>
  );
};

export default CabinRow;
