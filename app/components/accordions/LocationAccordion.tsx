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
                            {location.name}
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
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