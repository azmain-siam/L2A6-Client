import UpdateProductForm from "@/components/modules/Dashboard/Products/UpdateProductForm";
import DashHeading from "@/components/ui/DashHeading";
import { getSingleListing } from "@/services/ListingService";

const UpdateProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleListing(productId);

  return (
    <div>
      <DashHeading>Update Product</DashHeading>

      <UpdateProductForm listing={product} />
    </div>
  );
};

export default UpdateProduct;
