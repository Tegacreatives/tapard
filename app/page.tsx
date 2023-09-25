export const dynamic = "force-dynamic";
import Categories from "@/components/Categories";

import getListings, { IListingsParams } from "./actions/getListings";
import Listings from "@/components/listings/Listings";

interface HomeProps {
  searchParams: IListingsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  return (
    <div className="pt-[6.5rem]">
      <Categories />
      <Listings searchParams={searchParams} />
    </div>
  );
}
