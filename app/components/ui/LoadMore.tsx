"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Spinner } from "./Spinner";
import LocationAccordion from "./LocationAccordion";
import { fetchLocationsAndResidents } from "@/actions/fetch-data";
import { LocationResult, LocationsAndResidentsData } from "@/app/models/LocationsAndResidentsData";

export interface LoadMoreProps {
    nextPageNumber: number | null;
}

export function LoadMore({nextPageNumber}: LoadMoreProps) {
    const [locationsAndResidents, setLocations] = useState<LocationResult[]>([]);
    const [nextPage, setNextPage] = useState(nextPageNumber);

    const { ref, inView } = useInView();

    

    useEffect(() => {
        const loadMoreLocations = async () => {
            const locationsAndResidentsData: LocationsAndResidentsData | null = await fetchLocationsAndResidents(nextPage);
            const newlocationsAndResidents = locationsAndResidentsData?.data.locations.results ?? [];
            const next = locationsAndResidentsData?.data.locations.info.next ?? null;
    
            setLocations((prevlocationsAndResidents: LocationResult[]) => [...prevlocationsAndResidents, ...newlocationsAndResidents]);
            setNextPage(next);
        }
        
        if (inView) {
            loadMoreLocations();
        };
    }, [inView, nextPage]);

    return (
        <>
            <LocationAccordion locationsAndResidents={locationsAndResidents}/>
            <div ref={ref} className="flex justify-center p-4 col-span-1 sm:col-span-2 md:col-span-3">
                <Spinner/>
            </div> 
        </>
    )
}