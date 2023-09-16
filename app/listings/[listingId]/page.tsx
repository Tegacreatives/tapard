import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  if (!listing) {
    return <EmptyState />;
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default ListingPage;
