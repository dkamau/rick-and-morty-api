"use client"

import { Location } from "@/app/models/LocationData"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Spinner } from "./Spinner";
import { fetchLocations, fetchLocationsAndResidents } from "@/actions/fetch-locations";
import LocationAccordion from "../accordions/LocationAccordion";

export interface LoadMoreProps {
    nextUrl: string | null;
}

export function LoadMore({nextUrl}: LoadMoreProps) {
    const [locations, setLocations] = useState<Location[]>([]);
    const [nextPage, setNextPage] = useState(nextUrl);

    const { ref, inView } = useInView();

    const loadMoreLocations = async () => {
        //await delay(2000);
        const locationData = await fetchLocations(nextPage);
        const newLocations = locationData?.results ?? [];
        const next = locationData?.info.next ?? null;

        setLocations((prevLocations: Location[]) => [...prevLocations, ...newLocations]);
        setNextPage(next);
    }

    useEffect(() => {
        if (inView) {
            loadMoreLocations();
        };
    }, [inView]);

    return (
        <>
            <LocationAccordion locations={locations}/>
            <div ref={ref} className="flex justify-center p-4 col-span-1 sm:col-span-2 md:col-span-3">
                <Spinner/>
            </div> 
        </>
    )
}