import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-sky-300 sticky top-0 z-50">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Rick & Morty Locations and Residents</Link>
            </div>
        </div>
    )
}

export default Navbar