import Table from "../../components/Table";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/cabinsService";
import CabinRow from "./CabinRow";
import Button from "../../components/Button";
import AddCabinModal from "./AddCabinModal";
import { useModal } from "../../context/ModalContext";

const cabinTableHeaders: string[] = [" ", "Cabin", "Capacity", "Price", "Discount", " "];

const CabinsTable = () => {
  const { openModal } = useModal();

  const {
    isPending,
    error,
    data: cabinsData,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <div className="max-w-6xl m-10 xl:mx-auto text-gray-900 flex flex-col gap-8">
      <h1 className="text-3xl text-gray-700 font-semibold">All cabins</h1>
      <Table>
        <thead className="text-left bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            {cabinTableHeaders.map((header, i) => (
              <th key={i} className="py-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{cabinsData && cabinsData.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}</tbody>
      </Table>
      <div>
        <Button onClick={openModal} style="primary">
          Add new cabin
        </Button>
      </div>
      <div>
        <AddCabinModal />
      </div>
    </div>
  );
};

export default CabinsTable;
