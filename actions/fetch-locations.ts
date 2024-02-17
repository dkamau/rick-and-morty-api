"user-server"

import { LocationData } from "@/app/models/LocationData";
import { LocationResidentData } from "@/app/models/LocationResidentData";
import { Resident } from "@/app/models/ResidentData";
import { fetchResidents } from "./fetch-residents";

export async function fetchLocations(url: string | null) {
    try {
        if (url !== null) {
            let x = fetchLocationsAndResidents(url);

            const response = await fetch(url);
            let data = await response.json();
            return data as LocationData;
        }
        return null;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}

export async function fetchLocationsAndResidents(url: string | null) {
    let locationsAndResidents: LocationResidentData[] = [];

    try {
        if (url !== null) {
            const response = await fetch(url);
            let data: LocationData = await response.json();

            data.results.forEach(async item => {
                const residents: Resident[] | null = await fetchResidents(item.residents); 
                locationsAndResidents.push({
                    location: item,
                    residents: residents
                });
            });

            console.log(locationsAndResidents);
            return locationsAndResidents;
        }
        return null;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}