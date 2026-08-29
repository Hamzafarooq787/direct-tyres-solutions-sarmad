import { NextResponse } from "next/server";

type QuoteRequestBody = {
  name?: string;
  phone?: string;
  tyreSize?: string;
  details?: string;
};

export async function POST(request: Request) {
  let body: QuoteRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, tyreSize, details } = body;

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { error: "Name and phone number are required." },
      { status: 400 },
    );
  }

  // TODO: wire this up to an email/CRM provider (e.g. Resend, SendGrid, HubSpot).
  console.log("New quote request:", { name, phone, tyreSize, details });

  return NextResponse.json({ success: true });
}
