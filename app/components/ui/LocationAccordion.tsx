import React, { useState } from 'react'
import ResidentCard from './ResidentCard';

import Search from './Search';
import { Episode, LocationResult } from '@/app/models/LocationsAndResidentsData';

export interface LocationProps {
    locationsAndResidents: LocationResult[] | null;
}

export function LocationAccordion({ locationsAndResidents }: LocationProps) {
    const [search, setSearch] = useState("");

    function getEpisodes(locationId: number) {
        const allEpisodes: string | undefined = locationsAndResidents?.filter(l => l.id == locationId)
            .map(l => l.residents
                .map(r => r.episode
                    .map(e => e.name))).join(",");

        const distinctEpisodes = allEpisodes?.split(',').filter((value, index, array) => array.indexOf(value) === index);

        return distinctEpisodes?.join(" | ");
    }

    return (
        <>
            <Search setSearch={setSearch} />
            {
                locationsAndResidents ? (locationsAndResidents.filter((item) => {
                    return search === '' ? item :
                        item.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
                        item.residents?.find(r => r.name.toLowerCase().includes(search.toLocaleLowerCase())) ||
                        item.residents?.find(r => r.episode.find(e => e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
                }).map(data =>
                    <div key={data.id} className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-1" defaultChecked={false} />
                        <div className="collapse-title text-xl font-medium">
                            {data.id}. {data.name} <small className='float-right'>{data.type}</small>
                        </div>
                        <div className="collapse-content">
                            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">{data.name}</h1>
                                    {
                                        data.residents.length <= 1 ?
                                            <p className="max-w-2xl text-center dark:text-gray-400">{data.name} has {data.residents.length} resident(s) </p> :
                                            <p className="max-w-2xl text-center dark:text-gray-400">These are the {data.residents.length} residents of {data.name} {data.type}</p>
                                    }
                                    <div className="flex flex-row flex-wrap-reverse justify-center">
                                        <ResidentCard residents={data.residents} />
                                    </div>
                                    <p className="text-center text-xl font-semibold dark:text-gray-200">Episodes:</p>
                                    <p className="px-20 text-center dark:text-gray-400">{getEpisodes(data.id)}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                )) : (
                    <div className='text-xl font-bold'>No Data Found</div>
                )
            }
        </>
    )
}

export default LocationAccordion