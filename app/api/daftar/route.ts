import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Kirim data ke Google Apps Script
  const res = await fetch("https://script.google.com/macros/s/AKfycbyDEg5eBvaFzmjce9-xKvsManOYU0KUPhbgZWLtQcn5ox3yB_RmGR-d8Y4sqt_7vPjSqw/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ success: true });
}
