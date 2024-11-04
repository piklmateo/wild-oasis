import { Booking } from "./data/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getBookings() {
  try {
    const res = await fetch(`${BASE_URL}/api/bookings`);

    if (!res.ok) {
      throw new Error("Error while fetching bookings");
    }

    const bookings: Booking[] = await res.json();
    return bookings;
  } catch (error) {
    console.log("Error: ", error);
  }
}
