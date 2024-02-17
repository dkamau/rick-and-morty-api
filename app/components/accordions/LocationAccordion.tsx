import { Location } from '@/app/models/LocationData'
import React from 'react'

export interface LocationProps {
    locations: Location[] | null;
}

export function LocationAccordion({ locations }: LocationProps) {
    return (
        <>
            {
                locations ? (locations.map(location =>
                    <div key={location.id} className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-1" defaultChecked={true} />
                        <div className="collapse-title text-xl font-medium">
                            {location.id}. {location.name} <small className='float-right'>{location.type}</small>
                        </div>
                        <div className="collapse-content">
                            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Residents</h1>
                                    <p className="max-w-2xl text-center dark:text-gray-400">These are the residents of {location.name} {location.type}</p>
                                    <div className="flex flex-row flex-wrap-reverse justify-center">
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                                            <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                                            <p className="dark:text-gray-400">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                                            <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                                            <p className="dark:text-gray-400">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                                            <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                                            <p className="dark:text-gray-400">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                                            <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                                            <p className="dark:text-gray-400">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                                            <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                                            <p className="dark:text-gray-400">Visual Designer</p>
                                        </div>
                                        <div className="flex flex-col justify-center m-8 text-center">
                                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                                            <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                                            <p className="dark:text-gray-400">Visual Designer</p>
                                        </div>
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