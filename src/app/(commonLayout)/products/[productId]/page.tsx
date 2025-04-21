import { getSingleListing } from "@/services/ListingService";
import React from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleListing(productId);
  console.log(product);
  return (
    <div>
      <h2>product details</h2>
    </div>
  );
};

export default ProductDetailsPage;
