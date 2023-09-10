import Categories from "@/components/Categories";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import getListings from "./actions/getListings";
import ListingCard from "@/components/ListingCard";

export default async function Home() {
  const listings = await getListings();
  if (listings.length === 0) {
    return (
      <div className="pt-[7rem]">
        <Categories />
        <EmptyState showReset />
      </div>
    );
  }
  return (
    <div className="pt-[7rem]">
      <Categories />
      <Container>
        <div
          className="
            pt-28
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard key={listing.id} data={listing} />
          ))}
        </div>
      </Container>
    </div>
  );
}
