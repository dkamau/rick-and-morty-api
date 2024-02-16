import { fetchLocations } from "@/actions/fetch-locations";
import { LocationData } from "./models/LocationData";
import LocationAccordion from "./components/accordions/LocationAccordion";
import { Spinner } from "./components/ui/Spinner";
import { LoadMore } from "./components/ui/LoadMore";

export default async function Home() {

  const locationData: LocationData | null = await fetchLocations(1);
  const newLocations = locationData?.results ?? [];

  return (
    <>
      <div className="join join-vertical w-full">
        <LocationAccordion locations={newLocations} />
      </div>
      <LoadMore/>
    </>
  );
}
