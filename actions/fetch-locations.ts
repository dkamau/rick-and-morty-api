"user-server"

import { LocationData } from "@/app/models/LocationData";
import { LocationResident, LocationResidentData } from "@/app/models/LocationResidentData";
import { Resident } from "@/app/models/ResidentData";
import { fetchResidents } from "./fetch-residents";

export async function fetchLocationsAndResidents(url: string | null) {
    try {
        if (url !== null) {
            const response = await fetch(url);
            let data: LocationData = await response.json();

            let locationsAndResidents: LocationResident[] = [];

            for (const item of data.results) {
                const residents: Resident[] | null = await fetchResidents(item.residents); 
                locationsAndResidents.push({
                    location: item,
                    residents: residents,
                });
            }
            
            const locationsResidentData: LocationResidentData = {
                nextPage: data.info.next,
                locationAndResidents: locationsAndResidents
            };
            return locationsResidentData;
        }
        return null;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}