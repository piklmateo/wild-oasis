const BASE_URL = import.meta.env.VITE_BASE_URL;

interface HotelSettings {
  id: number;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

export async function getHotelSettings() {
  try {
    const res = await fetch(`${BASE_URL}/api/settings`);

    if (!res.ok) throw new Error("Error while fetching hotel settings.");

    const settings: HotelSettings[] = await res.json();
    return settings[0];
  } catch (error) {
    console.log(error);
  }
}
