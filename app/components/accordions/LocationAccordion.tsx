import { Location } from '@/app/models/LocationData'
import React from 'react'
import ResidentCard from '../cards/ResidentCard';
import { LocationResident, LocationResidentData } from '@/app/models/LocationResidentData';

export interface LocationProps {
    locationAndResidents: LocationResident[] | null;
}

export function LocationAccordion({ locationAndResidents }: LocationProps) {
    return (
        <>
            {
                locationAndResidents ? (locationAndResidents.map(data =>
                    <div key={data.location.id} className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-1" defaultChecked={false} />
                        <div className="collapse-title text-xl font-medium">
                            {data.location.id}. {data.location.name} <small className='float-right'>{data.location.type}</small>
                        </div>
                        <div className="collapse-content">
                            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">{data.location.name}</h1>
                                    {
                                        data.location.residents.length <= 1 ?
                                            <p className="max-w-2xl text-center dark:text-gray-400">{data.location.name} has {data.location.residents.length} resident(s) </p> :
                                            <p className="max-w-2xl text-center dark:text-gray-400">These are the {data.location.residents.length} residents of {data.location.name} {data.location.type}</p>
                                    }
                                    <div className="flex flex-row flex-wrap-reverse justify-center">
                                        <ResidentCard residents={data.residents} />
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