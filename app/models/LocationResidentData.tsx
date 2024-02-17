import { Location } from "./LocationData";
import { Resident } from "./ResidentData";

export interface LocationResidentData {
    location: Location
    residents: Resident[] | null
}