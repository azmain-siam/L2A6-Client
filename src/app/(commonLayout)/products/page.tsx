import PageBanner from "@/components/ui/core/PageBanner";
import React from "react";

const ProductPage = () => {
  return (
    <div className="container max-w-7xl mx-auto my-3">
      <PageBanner
        title="Products"
        // subtitle="All products"
        backgroundImage="https://i.ibb.co.com/4R9WNWB0/rsz-1joanna-kosinska-bf2vsubyhcq-unsplash.jpg"
      />
      <h1>Product page</h1>
    </div>
  );
};

export default ProductPage;
