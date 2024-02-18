"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Spinner } from "./Spinner";
import { fetchLocationsAndResidents } from "@/actions/fetch-locations";
import LocationAccordion from "../accordions/LocationAccordion";
import { LocationResident } from "@/app/models/LocationResidentData";

export interface LoadMoreProps {
    nextUrl: string | null;
}

export function LoadMore({nextUrl}: LoadMoreProps) {
    const [locationAndResidents, setLocations] = useState<LocationResident[]>([]);
    const [nextPage, setNextPage] = useState(nextUrl);

    const { ref, inView } = useInView();

    const loadMoreLocations = async () => {
        //await delay(2000);
        const locationAndResidentsData = await fetchLocationsAndResidents(nextPage);
        const newLocationAndResidents = locationAndResidentsData?.locationAndResidents ?? [];
        const next = locationAndResidentsData?.nextPage ?? null;

        setLocations((prevLocationAndResidents: LocationResident[]) => [...prevLocationAndResidents, ...newLocationAndResidents]);
        setNextPage(next);
    }

    useEffect(() => {
        if (inView) {
            loadMoreLocations();
        };
    }, [inView]);

    return (
        <>
            <LocationAccordion locationAndResidents={locationAndResidents}/>
            <div ref={ref} className="flex justify-center p-4 col-span-1 sm:col-span-2 md:col-span-3">
                <Spinner/>
            </div> 
        </>
    )
}