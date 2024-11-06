import { HotelSettings } from "./data/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

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

export async function updateHotelSettings(settings: HotelSettings) {
  try {
    const id = 1;
    const res = await fetch(`${BASE_URL}/api/settings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });

    if (!res.ok) {
      throw new Error("Error while updating settings");
    }
  } catch (error) {
    console.log(error);
  }
}
