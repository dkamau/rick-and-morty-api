## About
This app uses the [Rick & Morty API](https://rickandmortyapi.com/) GraphQL endpoints to do the following:
- Retrieve a list of locations (name and type), along with the residents of that location and their status.
- Implement the ability to search or filter location results by location name, character name or episode name.
- Display the data in a manner that allows you to view the location, its residents and see an image of the resident with a representation of their name & status.
  
Tapping on a resident will navigate to a screen with the resident’s details. 
On this screen, you will be able to open a form that allows you to add persisted notes about the character.
The app uses local storage to implement persistence. 

## Why GraphQL over REST Api?

- GraphQL has the ability to dictate exactly what you need from the server, and receive that data in a predictable way. i.e when fetching a list of locations, you can just request for id, name and type.
- Ability to retrieve many resources in a single request. i.e you can fetch for location, resident and episode information in a single request which is not possible with Rest API calls.
- GraphQL is strongly-typed which allows API consumers to know exactly what data is available, and in what form it exists (See sample queries below)

## Why local storage?

- Increased performance. By storing data locally, web applications can access the data faster than if it were stored on a server. This can result in faster loading times and smoother user experience.
- Quick to implement within a short period of time.
- Amount of data to be stored is minimal. (User notes only)

## Screen Shots

Landing Page:
<img width="1885" alt="landing-page" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/2fa447ff-cba7-4a79-be12-04086ba375ff">

Search By Location Name:
<img width="1884" alt="search-by-location" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/c3101ebf-7d39-41e9-a275-f57f1545ccc5">

Search By Resident Name:
<img width="1884" alt="search-by-resident" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/a400d972-4896-45a2-8b37-a3b15671b639">

Search By Episode Name: 
<img width="1883" alt="search-by-episode" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/a17d6e62-69a2-4446-bf13-4cd060e6e545">

Resident Details:
<img width="1883" alt="resident-details" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/96627671-6cf7-4c03-8d8a-fb3b5819991a">

Add Resident Notes:
<img width="1883" alt="resident-details-and-notes" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/da69a99d-7784-49a8-a37b-b3ffd3c8143e">

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## GraphQL Queries

Get Locations
<img width="1870" alt="image" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/e09a206a-4542-4d74-9c95-50c3abda9e96">

Get Character Details
<img width="1883" alt="image" src="https://github.com/dkamau/rick-and-morty-api/assets/34334743/cbf59463-4a9c-4267-b66e-be34e0e838cf">



Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
