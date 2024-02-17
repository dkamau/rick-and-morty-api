import { LoadMore } from "./components/ui/LoadMore";

export default async function Home() {
  return (
    <>
      <LoadMore nextUrl={"https://rickandmortyapi.com/api/location"}/>
    </>
  );
}
