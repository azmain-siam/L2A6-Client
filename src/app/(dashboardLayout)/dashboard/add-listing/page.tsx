import ProductForm from "@/components/modules/Dashboard/Products/ProductForm";
import DashHeading from "@/components/ui/DashHeading";

const AddListingPage = () => {
  return (
    <div>
      <DashHeading title="Add Listings" />
      <div>
        <ProductForm />
      </div>
    </div>
  );
};

export default AddListingPage;
