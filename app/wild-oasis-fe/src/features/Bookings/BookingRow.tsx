import { Booking } from "../../services/data/types";
import MenuToggle from "../Cabins/MenuToggle";
import Button from "../../components/Button";
import { HiEye, HiTrash } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
interface BookingRowProps {
  booking: Booking;
}

const BookingRow = ({ booking }: BookingRowProps) => {
  return (
    <tr className="border text-sm text-gray-700" key={booking.id}>
      <td className="p-4 font-semibold">{booking.cabinName}</td>
      <td className="p-4">
        <div className="flex flex-col gap-1">
          <span>{booking.guestFullName}</span>
          <span className="text-xs text-gray-600">{booking.guestEmail}</span>
        </div>
      </td>
      <td className="p-4">
        <div className="flex flex-col gap-1">
          <span>In 2 years → {booking.numNights} night stay</span>
          <span className="text-xs text-gray-600">
            {booking.startDate} &#8594; {booking.endDate}
          </span>
        </div>
      </td>
      <td className="p-4 ">
        <span className="bg-blue-100 text-blue-700 font-medium px-4 py-1 rounded-full uppercase">{booking.status}</span>
      </td>
      <td className="p-4">{booking.totalPrice}</td>
      <td className="text-2xl relative">
        <MenuToggle item={booking}>
          <Button className="hover:bg-gray-100 w-full px-4 py-2.5 text-start flex items-center gap-4 capitalize">
            <HiEye className="text-base text-gray-400" />
            details
          </Button>
          <Button className="hover:bg-gray-100 w-full px-4 py-2.5 text-start flex items-center gap-4 capitalize">
            <HiDownload className="text-base text-gray-400" />
            check in
          </Button>
          <Button className="hover:bg-gray-100 w-full px-4 py-2.5 text-start flex items-center gap-4 capitalize">
            <HiTrash className="text-base text-gray-400" />
            delete booking
          </Button>
        </MenuToggle>
      </td>
    </tr>
  );
};

export default BookingRow;
