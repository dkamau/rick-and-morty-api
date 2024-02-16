export interface LocationData {
    info: LocationInfo
    results: Location[]
}

export interface LocationInfo {
    count: number
    pages: number
    next: string
    prev: any
}

export interface Location {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
}