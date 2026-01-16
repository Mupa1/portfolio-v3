import { z } from "zod";

export const ContactFormValidation = z.object({
  name: z
    .string({ required_error: "nameRequired" })
    .min(1, "nameRequired")
    .min(2, "nameMin"),
  email: z
    .string({ required_error: "emailRequired" })
    .min(1, "emailRequired")
    .email("emailInvalid"),
  message: z
    .string({ required_error: "messageRequired" })
    .min(1, "messageRequired")
    .min(10, "messageMin"),
});
