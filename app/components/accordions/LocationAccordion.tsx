import { Location } from '@/app/models/LocationData'
import React from 'react'
import ResidentCard from '../cards/ResidentCard';

export interface LocationProps {
    locations: Location[] | null;
}

export function LocationAccordion({ locations }: LocationProps) {
    return (
        <>
            {
                locations ? (locations.map(location =>
                    <div key={location.id} className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-1" defaultChecked={false} />
                        <div className="collapse-title text-xl font-medium">
                            {location.id}. {location.name} <small className='float-right'>{location.type}</small>
                        </div>
                        <div className="collapse-content">
                            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">{location.name}</h1>
                                    {
                                        location.residents.length <= 1 ?
                                            <p className="max-w-2xl text-center dark:text-gray-400">{location.name} has {location.residents.length} resident(s) </p> :
                                            <p className="max-w-2xl text-center dark:text-gray-400">These are the {location.residents.length} residents of {location.name} {location.type}</p>
                                    }
                                    <div className="flex flex-row flex-wrap-reverse justify-center">
                                        <ResidentCard residentUrls={location.residents} />
                                    </div>
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