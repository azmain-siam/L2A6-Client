import { z } from "zod";

export const registerValidationSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be between 2 and 50 characters")
    .max(50, "Name must be between 2 and 50 characters"),

  email: z
    .string({ required_error: "Provide your email address" })
    .email("Invalid email address"),

  phone: z.string({ required_error: "Provide your phone number" }).min(11),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: z
    .string({ required_error: "Please confirm your password" })
    .min(1),
});
