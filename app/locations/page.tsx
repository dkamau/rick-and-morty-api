import React from 'react'
import { LocationData, Location } from '../models/LocationData';
import { LoadMore } from '../components/ui/LoadMore';
import LocationAccordion from '../components/accordions/LocationAccordion';

const LocationsPage = async () => {
    const locationData : LocationData = await getLocations();

    return (
        <>
            <div className="join join-vertical w-full">
                <LocationAccordion locations={locationData.results}/>
            </div>
            <LoadMore/>
        </>
    )
}

async function getLocations() {
    const response = await fetch("https://rickandmortyapi.com/api/location");
    const data = await response.json();
    return data;
}

export default LocationsPage