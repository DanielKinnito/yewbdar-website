"use server";

import { Resend } from "resend";
import { estimateSchema, type EstimateInput, type EstimateActionResult } from "@/lib/estimate-schema";

export async function submitEstimate(
  rawInput: EstimateInput
): Promise<EstimateActionResult> {
  const parsed = estimateSchema.safeParse(rawInput);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please check the form for missing or invalid details.",
      errors: fieldErrors,
    };
  }

  const data = parsed.data;
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || "dispatch@yewbdarjunk.com";

  // If RESEND_API_KEY is not provided (local dev / preview without keys), gracefully mock and log
  if (!resendApiKey) {
    console.log("--------------------------------------------------");
    console.log("[MOCK LEAD DISPATCH - RESEND_API_KEY not configured]");
    console.log(`🚨 New Estimate Request: ${data.name} - ${data.zip}`);
    console.log(`Customer: ${data.name}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Email: ${data.email || "Not provided"}`);
    console.log(`Address: ${data.address}, Atlanta ZIP ${data.zip}`);
    console.log(`Service: ${data.serviceType}`);
    console.log(`Arrival Window: ${data.timeWindow}`);
    console.log(`Items/Notes: ${data.details || "None"}`);
    console.log("--------------------------------------------------");

    return {
      success: true,
      mock: true,
      message: "Estimate request received! Dispatch has been notified.",
    };
  }

  try {
    const resend = new Resend(resendApiKey);

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 16px; background-color: #fafafa;">
        <div style="background-color: #1A4D2E; padding: 18px 24px; border-radius: 12px; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">🚨 New Estimate Request</h2>
          <p style="color: #EAF5EE; margin: 4px 0 0 0; font-size: 13px;">Yewbdar Junk Removal Atlanta Dispatch</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555; width: 35%;">Customer Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111; font-weight: 700;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Phone Number:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111; font-weight: 700;"><a href="tel:${data.phone}" style="color: #1A4D2E;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Email Address:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111;">${data.email || "None provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Street Address:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111;">${data.address}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Atlanta ZIP:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #1A4D2E; font-weight: 700;">${data.zip}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Service Requested:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111; font-weight: 600;">${data.serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Requested Arrival:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #111111; font-weight: 600;">${data.timeWindow}</td>
          </tr>
        </table>

        <div style="background-color: #ffffff; padding: 16px; border-radius: 12px; border: 1px solid #e0e0e0; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; font-size: 13px; color: #666666; text-transform: uppercase; letter-spacing: 0.5px;">Items / Clutter Notes:</h4>
          <p style="margin: 0; font-size: 14px; color: #222222; line-height: 1.5;">${data.details || "No special instructions entered."}</p>
        </div>

        <p style="font-size: 12px; color: #888888; text-align: center; margin: 0;">
          Submitted via Yewbdar Junk Removal online estimate portal
        </p>
      </div>
    `;

    const fromEmail = process.env.RESEND_FROM_EMAIL || "Yewbdar Junk Removal <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject: `🚨 New Estimate Request: ${data.name} - ${data.zip}`,
      html: emailHtml,
    });

    if (error) {
      console.error("[Resend Error]", error);
      return {
        success: false,
        message: "Failed to dispatch email notification. Please call (770) 676-0810.",
      };
    }

    return {
      success: true,
      message: "Estimate request dispatched successfully!",
    };
  } catch (err) {
    console.error("[Server Action Exception]", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please call (770) 676-0810 directly.",
    };
  }
}
