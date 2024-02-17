export interface ResidentData {
    info: ResidentInfo
    results: Resident[]
  }
  
  export interface ResidentInfo {
    count: number
    pages: number
    next: string
    prev: any
  }
  
  export interface Resident {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: ResidentOrigin
    location: ResidentLocation
    image: string
    episode: string[]
    url: string
    created: string
  }
  
  export interface ResidentOrigin {
    name: string
    url: string
  }
  
  export interface ResidentLocation {
    name: string
    url: string
  }
  