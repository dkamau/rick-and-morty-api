export interface LocationsAndResidentsData {
  data: Data
}

export interface Data {
  locations: Locations
}

export interface Locations {
  info: Info
  results: LocationResult[]
}

export interface Info {
  next: number
}

export interface LocationResult {
  id: number
  name: string
  type: string
  residents: Resident[]
}

export interface Resident {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: Episode[]
}

export interface Origin {
  id: number
  dimension?: string
}

export interface Location {
  id: number
  dimension: string
}

export interface Episode {
  id: number
  name: string
}

