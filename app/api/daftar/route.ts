import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Kirim data ke Google Apps Script
  const res = await fetch("https://script.google.com/macros/s/AKfycbw70qWaDu9WRmRJALyfFyAK1wqo8kzt5qH8dKRqk1B6ckdevTKMsIj8LcRL5DZq6rkhjw/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.text();
  return NextResponse.json({ success: true, message: data });
}
