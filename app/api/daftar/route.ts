import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Kirim data ke Google Apps Script
  const res = await fetch("https://script.google.com/macros/s/AKfycbws6M-9ZU3LSLO8hEnjkbTJ9SO-LBVjCFnByCZ-fMQXxE21Ft5tjGCVd33xP5QygOF8xQ/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ success: true });
}
