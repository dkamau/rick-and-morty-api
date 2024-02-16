"user-server"

import { LocationData } from "@/app/models/LocationData";

export async function fetchLocations(url: string | null) {
    try {
        if (url !== null) {
            const response = await fetch(url);
            const data = await response.json();
            return data as LocationData;
        }
        return null;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}