import { Cabin } from "./data/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getCabins() {
  try {
    const res = await fetch(`${BASE_URL}/api/cabins`);

    if (!res.ok) {
      throw new Error("Error while fetching cabins.");
    }

    const cabins: Cabin[] = await res.json();
    return cabins;
  } catch (error) {
    console.error("Error: ", error);
  }
}
