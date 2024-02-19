"user-server"

import { LocationsAndResidentsData, Resident } from "@/app/models/LocationsAndResidentsData";

export async function fetchLocationsAndResidents(pageNumber: number | null) {
  try {
    if (pageNumber !== null) {
      let results = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          query: `{
            locations(page: ${pageNumber}) {
              info {
                next
              },
              results {
                id
                name
                type
                residents {
                  id
                  image
                  name
                  status
                  episode {
                    id
                    name
                  }
                }
              }
            }
          }`
        })
      })
      let locationsAndResidentsData: LocationsAndResidentsData | null = await results.json();
      return locationsAndResidentsData;
    }
    return null;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export async function fetchResident(residentId: number) {
  try {
    let result = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        query: `{
          character(id: ${residentId}) {
            id
            name
            status
            species
            type
            gender
            origin {
              id
              dimension
            }
            location {
              id
              dimension
            }
            image
            episode {
              id
              name
            }
          }
        }`
      })
    })

    let residentData: ResidentData | null | undefined = await result.json();
    let resident = residentData?.data.character;
    return resident;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export interface ResidentData {
  data: Data
}
export interface Data {
  character: Resident
}