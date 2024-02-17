import { Location } from "./LocationData";
import { Resident } from "./ResidentData";

export interface LocationResidentData {
    locationAndResidents: LocationResident[];
    nextPage: string
}

export interface LocationResident {
    location: Location
    residents: Resident[] | null
}