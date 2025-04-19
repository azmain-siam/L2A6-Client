const UpdateProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  console.log(await params);
  return <div>UpdateProduct</div>;
};

export default UpdateProduct;
