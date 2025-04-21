import ProductInfo from "@/components/modules/Listings/ProductDetails/ProductInfo";
import { getSingleListing } from "@/services/ListingService";
import React from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleListing(productId);

  return (
    <div className="container max-w-7xl mx-auto py-5">
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetailsPage;
