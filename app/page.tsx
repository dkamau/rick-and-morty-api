import { fetchLocationsAndResidents } from "@/actions/fetch-locations";
import LocationAccordion from "./components/accordions/LocationAccordion";
import { LoadMore } from "./components/ui/LoadMore";
import { LocationResidentData } from "./models/LocationResidentData";

export default async function Home() {

  const locationAndResidentsData: LocationResidentData | null = await fetchLocationsAndResidents("https://rickandmortyapi.com/api/location");
  const newLocations = locationAndResidentsData?.locationAndResidents ?? [];
  const nextUrl = locationAndResidentsData?.nextPage ?? null;

  return (
    <>
      <div className="join join-vertical w-full">
        <LocationAccordion locationAndResidents={newLocations} />
      </div>
      <LoadMore nextUrl={nextUrl}/>
    </>
  );
}
