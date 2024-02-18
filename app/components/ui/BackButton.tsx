"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const BackButton = () => {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Go Back
        </button>
    )
}

export default BackButton