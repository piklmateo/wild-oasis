import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Button from "../../components/Button";
import { Cabin } from "../../services/data/types";
import MenuToggle from "./MenuToggle";
import { useModal } from "../../context/ModalContext";

interface CabinRowProps {
  cabin: Cabin;
}

const CabinRow = ({ cabin }: CabinRowProps) => {
  const { openModal } = useModal();

  return (
    <tr className="border text-sm text-gray-600" key={cabin.id}>
      <td className="w-32 pr-4">
        <img src={cabin.image} alt={cabin.name} className="w-24" />
      </td>
      <td className="font-semibold">{cabin.name}</td>
      <td className="">Fits up to {cabin.maxCapacity} guests</td>
      <td className="">{cabin.regularPrice}</td>
      <td className="">{cabin.discount}</td>
      <td className="text-2xl relative">
        <MenuToggle item={cabin}>
          <Button className="hover:bg-gray-100 w-full px-4 py-2.5 text-start flex items-center gap-4 capitalize">
            <HiSquare2Stack className="text-base text-gray-400" />
            duplicate
          </Button>
          <Button
            onClick={() => openModal("edit", cabin)}
            className="hover:bg-gray-100 w-full px-4 py-2.5 text-start flex items-center gap-4 capitalize"
          >
            <HiPencil className="text-base text-gray-400" />
            edit
          </Button>
          <Button className="hover:bg-gray-100 w-full px-4 py-2.5 text-start flex items-center gap-4 capitalize">
            <HiTrash className="text-base text-gray-400" />
            delete
          </Button>
        </MenuToggle>
      </td>
    </tr>
  );
};

export default CabinRow;
