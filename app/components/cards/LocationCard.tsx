import { Location } from '@/app/models/LocationData'
import React from 'react'

const LocationCard = (props: Location) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default LocationCard