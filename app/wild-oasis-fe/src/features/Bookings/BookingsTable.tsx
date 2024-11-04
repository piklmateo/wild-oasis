import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingsService";
import Table from "../../components/Table";
import BookingRow from "./BookingRow";

const bookingTableHeaders: string[] = ["Cabin", "Guest", "Dates", "Status", "Amount", " "];

const BookingsTable = () => {
  const {
    isPending,
    data: bookingsData,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return (
    <div className="max-w-6xl m-10 xl:mx-auto text-gray-900 flex flex-col gap-8">
      <h1 className="text-3xl text-gray-700 font-semibold">All bookings</h1>
      <Table>
        <thead className="text-left bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            {bookingTableHeaders.map((header) => (
              <th className="p-4">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{bookingsData && bookingsData.map((booking) => <BookingRow booking={booking} />)}</tbody>
      </Table>
    </div>
  );
};

export default BookingsTable;
