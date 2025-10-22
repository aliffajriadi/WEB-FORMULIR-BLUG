import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Kirim data ke Google Apps Script
  const res = await fetch("https://script.google.com/macros/s/AKfycbxbrLKhzb45EWs6DEO9RLNPcipA2zecT_JJ-K0MlzKfPeVzpgJ1T3Q3ya-7IXgl4OBjaA/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ success: true });
}
