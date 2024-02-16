"use client"

import { Location } from "@/app/models/LocationData"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Spinner } from "./Spinner";
import { fetchLocations } from "@/actions/fetch-locations";
import LocationAccordion from "../accordions/LocationAccordion";

export function LoadMore() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [pagesLoaded, setPagesLoaded] = useState(1);

    const { ref, inView } = useInView();

    const loadMoreLocations = async () => {
        //await delay(2000);
        const nextPage = pagesLoaded + 1;
        const locationData = await fetchLocations(nextPage);
        const newLocations = locationData?.results ?? [];

        setLocations((prevLocations: Location[]) => [...prevLocations, ...newLocations]);
        setPagesLoaded(nextPage);
    }

    useEffect(() => {
        if (inView) {
            console.log("scrolled to the end");
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