import { z } from "zod";

const listingValidationSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.number({ required_error: "Price is required" }),
  condition: z.string({
    required_error: "Please select the condition of the product",
  }),
  images: z.string().array().optional(),
  // userId: z.string(),
});

export default listingValidationSchema;
