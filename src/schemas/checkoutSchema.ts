import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Minimum 2 characters"),
  email: z.email("Invalid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  address: z.string().min(5, "Enter a delivery address"),
});

export type CheckoutForm = z.infer<typeof checkoutSchema>;
