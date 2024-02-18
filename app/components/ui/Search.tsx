"use client"

import React, { Dispatch, SetStateAction } from 'react'

export interface SearchProps {
    setSearch: Dispatch<SetStateAction<any>>
}

const Search = ({ setSearch }: SearchProps) => {
    return (
        <div className="pb-5">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input onChange={(e) => setSearch(e.target.value)}
                type="text" placeholder="Search by location or character name..." className="input input-bordered w-full ps-10" />
            </div>
        </div>
    )
}

export default Search