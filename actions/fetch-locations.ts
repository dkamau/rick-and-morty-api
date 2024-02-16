"user-server"

import { LocationData } from "@/app/models/LocationData";

export async function fetchLocations(page:number) {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/location?page=" + page);
        const data = await response.json();
        return data as LocationData;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}