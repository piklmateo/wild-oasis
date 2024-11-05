import { Cabin, CabinDto } from "./data/types";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SUPABASE_IMAGE_PATH = import.meta.env.VITE_SUPABASE_IMAGE_PATH;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

export async function getCabin(id: number) {
  try {
    const res = await fetch(`${BASE_URL}/api/cabins/${id}`);

    if (!res.ok) {
      throw new Error("Error while fetching cabins.");
    }

    const cabin: Cabin = await res.json();
    return cabin;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function insertCabin(cabin: CabinDto, isDuplicate = false) {
  try {
    const cabinImage = cabin.image[0];
    let uniqueImageName;
    if (typeof cabin.image === "string") {
      const uniqueImageString = `${cabin.image}`;
      uniqueImageName = uniqueImageString.replace(SUPABASE_IMAGE_PATH, "");
    } else {
      uniqueImageName = `${uuidv4()}-${cabinImage.name}`;
    }

    const cabinImageNameTable = `${SUPABASE_IMAGE_PATH}${uniqueImageName}`;
    const cabinDto = { ...cabin, image: cabinImageNameTable };

    console.log("UNIQUE----: ", uniqueImageName);

    let uploadError;
    if (isDuplicate) {
      const { error } = await supabase.storage
        .from("cabin-images")
        .copy(uniqueImageName, `${uuidv4()}-${uniqueImageName}`);
      uploadError = error;
    } else {
      const { error } = await supabase.storage.from("cabin-images").upload(uniqueImageName, cabinImage, {
        cacheControl: "3600",
        upsert: false,
      });
      uploadError = error;
    }

    if (uploadError) {
      throw new Error("Error while uploading cabin image");
    }

    const res = await fetch(`${BASE_URL}/api/cabins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cabinDto),
    });
    const cabinFetch = await res.json();

    if (!res.ok) {
      await supabase.storage.from("cabin-images").remove([uniqueImageName]);
      throw new Error("Error while inserting cabin data...");
    }
    return cabinFetch;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function duplicateCabin(cabinId: number) {
  try {
    const originalCabin = await getCabin(cabinId);
    if (!originalCabin) throw new Error("Cabin not found");

    const duplicateCabinData = { ...originalCabin, name: `${originalCabin.name} Copy` };
    const newCabin = await insertCabin(duplicateCabinData, true);

    return newCabin;
  } catch (error) {
    console.error("Failed to duplicate cabin:", error);
  }
}

export async function deleteCabin(id: number) {
  try {
    const cabinToDelete = await getCabin(id);
    const cabinImageName = cabinToDelete?.image;
    const res = await fetch(`${BASE_URL}/api/cabins/${id}`, {
      method: "DELETE",
    });
    const { error } = await supabase.storage.from("cabin-images").remove([`${cabinImageName}`]);

    if (!res.ok || error) throw new Error("Error while deleting cabin");
  } catch (error) {
    console.log(error);
  }
}
