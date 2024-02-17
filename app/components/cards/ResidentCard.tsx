import { fetchResidents } from '@/actions/fetch-residents';
import { Resident } from '@/app/models/ResidentData'
import React from 'react'

export interface ResidentProps {
    residentUrls: string[] | null;
}

const ResidentCard = ({ residentUrls }: ResidentProps) => {
    const residents: Resident[] | null = []; //await fetchResidents(residentUrls);
    
    return (
        <>
            {
                residents && residents.length > 0 ? (residents.map(resident =>
                    <div key={resident.id} className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={resident.image} />
                        <p className="text-xl font-semibold leadi">{resident.name}</p>
                        <p className="dark:text-gray-400">{resident.status}</p>
                    </div>)) : (<div className='text-xl font-bold'>Unfortunately, This is a ghost town! :(</div>)
            }
        </>

    )
}

export default ResidentCard