import AllListings from "@/components/modules/Listings/AllListings";
// import PageBanner from "@/components/ui/core/PageBanner";
import { getListings } from "@/services/ListingService";
import React from "react";

const ProductPage = async () => {
  const { data: listings } = await getListings();
  console.log(listings);
  return (
    <div className="container max-w-7xl mx-auto my-3">
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
