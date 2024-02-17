"user-server"

import { Resident } from "@/app/models/ResidentData";

export async function fetchResidents(urls: string[] | null) {
    try {
        if (urls !== null) {
            const userIds = getIds(urls);
            if (userIds.length > 0) {
                const response = await fetch("https://rickandmortyapi.com/api/character/[" + userIds + "]");
                const data = await response.json();
                return data as Resident[];
            }
        }
        return null;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}

function getIds(urls: string[]) {
    let ids: number[] = [];

    urls.forEach(url => {
        const userId = url.substring(url.lastIndexOf('/') + 1)
        ids.push(Number(userId))
    });

    return ids;
}