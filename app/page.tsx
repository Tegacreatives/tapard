import Categories from "@/components/Categories";
import dynamic from "next/dynamic";
import { IListingsParams } from "./actions/getListings";

const Listings = dynamic(() => import("@/components/listings/Listings"));

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
