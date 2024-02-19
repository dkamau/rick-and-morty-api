import { LoadMore } from "./components/ui/LoadMore";

export default async function Home() {
  return (
    <>
      <LoadMore nextPageNumber={1}/>
    </>
  );
}
