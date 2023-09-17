import EmptyState from "@/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <div>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </div>
    );
  }

  return (
    <div className="pt-24">
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
