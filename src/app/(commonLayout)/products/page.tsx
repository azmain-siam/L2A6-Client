export const dynamic = "force-dynamic";
import AllListings from "@/components/modules/Listings/AllListings";
// import PageBanner from "@/components/ui/core/PageBanner";
import { getListings } from "@/services/ListingService";
import React from "react";

const ProductPage = async () => {
  const { data: listings } = await getListings();
  return (
    <div className="container max-w-7xl px-4 mx-auto my-3 mb-10">
      {/* <PageBanner
        title="Products"
        // subtitle="All products"
        backgroundImage="https://i.ibb.co.com/4R9WNWB0/rsz-1joanna-kosinska-bf2vsubyhcq-unsplash.jpg"
      /> */}
      <AllListings products={listings} />
    </div>
  );
};

export default ProductPage;
