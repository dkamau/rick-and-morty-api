import { Resident } from '@/app/models/ResidentData'
import Link from 'next/link';
import React from 'react'

export interface ResidentProps {
    residents: Resident[] | null;
}

const ResidentCard = ({ residents }: ResidentProps) => {
    return (
        <>
            {
                residents && residents.length > 0 ? (residents.map(resident =>
                    <Link key={resident.id} href={{
                        pathname: "/resident/details/",
                        query: {
                            userId: resident.id
                        }
                    }}>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 hover:opacity-60" src={resident.image} />
                            <p className="text-xl font-semibold leadi">{resident.name}</p>
                            <p className="dark:text-gray-400">{resident.status}</p>
                        </div>
                    </Link>
                )) : (<div className='text-xl font-bold'>Unfortunately, This is a ghost town! :(</div>)
            }
        </>

    )
}

export default ResidentCard