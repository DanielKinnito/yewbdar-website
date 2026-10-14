import { z } from "zod";

export const estimateSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)."),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number (at least 10 digits).")
    .regex(/^[0-9+()\-.\s]{10,20}$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").optional().or(z.literal("")),
  address: z.string().trim().min(3, "Please enter your street address."),
  zip: z
    .string()
    .trim()
    .regex(/^(30\d{3}|31\d{3})$/, "Please enter a valid Metro Atlanta ZIP code (starts with 30 or 31)."),
  serviceType: z.string().trim().min(1, "Please select a service type."),
  timeWindow: z.string().trim().min(1, "Please select an arrival window."),
  details: z.string().trim().optional(),
});

export type EstimateInput = z.infer<typeof estimateSchema>;

export interface EstimateActionResult {
  success: boolean;
  mock?: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
