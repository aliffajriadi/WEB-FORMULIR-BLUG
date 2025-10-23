"use client";

import { useParams } from "next/navigation";
import { webinarOverdue } from "@/lib/dataWebinar";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function ReviewPages() {
  const params = useParams();
  const slug = params.slug as string;
  const data = webinarOverdue.find((item) => item.slug === slug);


  // --- HANDLING WEBINAR TIDAK DITEMUKAN ---
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <Navbar />
        <p className="text-xl text-gray-600">Webinar tidak ditemukan</p>
      </div>
    );
  }

  // --- UI ---
  return (
    <div className="min-h-screen py-10 md:px-6 flex flex-col items-center">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8 md:mb-12">
          Review Webinar{" "}
          <span className="text-primary block sm:inline mt-2 sm:mt-0">
            {data.judul}
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* --- DETAIL WEBINAR --- */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
            <Image
              src={data.gambar || "/placeholder.jpg"}
              alt={data.judul || "Webinar"}
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full mb-4"
            />
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p>
                <strong>Deskripsi:</strong> {data.deskripsi}
              </p>
              <p>
                <strong>Pelaksanaan:</strong> {data.pelaksanaan}
              </p>
              <p>
                <strong>Tempat:</strong> {data.tempat}
              </p>
              <p>
                <strong>Biaya:</strong>{" "}
                <span className="text-primary font-semibold text-lg">
                  {data.biaya}
                </span>
              </p>
            </div>
          </div>

          {/* --- FORM PENDAFTARAN --- */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Webinar Telah Selesai.
            </h2>
            <Button asChild className="w-full"><Link href="/">Kembali</Link></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
