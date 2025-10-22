"use client";

import { useParams } from "next/navigation";
import { webinar } from "@/lib/dataWebinar";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function DaftarPages() {
  const params = useParams();
  const slug = params.slug as string;

  const data = webinar.find((item) => item.slug === slug);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <Navbar />
        <p className="text-xl text-gray-600">Webinar tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 md:px-6 flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8 md:mb-12">
          Formulir Pendaftaran Webinar{" "}
          <span className="text-primary block sm:inline mt-2 sm:mt-0">
            {data.judul}
          </span>
        </h1>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* DATA WEBINAR */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
            <div className="mb-4 sm:mb-6">
              <Image
                src={data.gambar || "/placeholder.jpg"}
                alt={data.judul || "Webinar"}
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full"
              />
            </div>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Deskripsi:</h3>
                <p className="text-gray-600">{data.deskripsi}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Pelaksanaan:</h3>
                <p className="text-gray-600">{data.pelaksanaan}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Tempat:</h3>
                <p className="text-gray-600">{data.tempat}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Biaya:</h3>
                <p className="text-primary font-semibold text-lg">{data.biaya}</p>
              </div>
            </div>
          </div>

          {/* FORMULIR */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Isi Data Pendaftaran
            </h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  placeholder="contoh@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dapat Informasi Dari Mana
                </label>
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
              <div className="flex items-center text-xs gap-x-2 text-gray-500">
              <Checkbox/>
              <p>Saya menyetujui syarat dan ketentuan yang berlaku</p>

              </div>
              <Button 
                type="submit" 
                variant="default" 
                className="mt-2 py-2.5 text-sm sm:text-base"
              >
                Daftar Sekarang
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}