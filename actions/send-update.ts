"use server";
import { EmailTemplate } from "@/components/email-template";
import { formSchema } from "@/components/po-form";
import { UpdateTemplate } from "@/components/update-template";
import { Id } from "@/convex/_generated/dataModel";
import { Resend } from "resend";
import { z } from "zod";
export async function sendUpdate(
  email: string,
  item: string,
  amount: number,
  status: string
) {
  const resend = new Resend("re_gLWkB4j8_696ABZnRK56f1zEieEeZVUt2");

  const { data, error } = await resend.emails.send({
    from: "Juan <onboarding@resend.dev>",
    to: ["arzsahag@gmail.com"],
    subject: "PO Status",
    react: UpdateTemplate(email, item, amount, status),
  });

  console.log("data: ", data);
  console.log("error: ", error);
}
