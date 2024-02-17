"use client"

import React, { Dispatch, SetStateAction } from 'react'

export interface SearchProps {
    search: string | null;
    setSearch: Dispatch<SetStateAction<any>>
}

const Search = ({search, setSearch}: SearchProps) => {
    return (
        <div className="form-control pb-5">
            <input onChange={(e) => setSearch(e.target.value)}
                type="text" placeholder="Search by location or character name..." className="input input-bordered w-auto" />
        </div>
    )
}

export default Search