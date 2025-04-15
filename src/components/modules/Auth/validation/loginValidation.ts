import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Please provide your email address" })
    .email(),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});
