import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, DollarSignIcon } from "lucide-react";
import Image from "next/image";
import { webinar, webinarOverdue } from "@/lib/dataWebinar";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen py-16 px-6 flex flex-col items-center">
      <Navbar />
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Webinar Programming by{" "}
          <span className="text-primary">Batam Linux User Group</span>
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Temukan wawasan baru seputar dunia open source dan teknologi modern.
        </p>
      </div>

      {/* Logo Section */}
      <div className="flex items-center justify-center gap-8 mb-14">
        <Image
          src="/logoprog.svg"
          alt="Program Logo"
          width={70}
          height={70}
          className="drop-shadow-md"
        />
        <Image
          src="/bluglogo.svg"
          alt="BLUG Logo"
          width={200}
          height={200}
          className="drop-shadow-md"
        />
      </div>

      {/* Section: Webinar Akan Datang */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Webinar Yang Akan Datang
      </h2>

      {/* Grid Webinar Akan Datang */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {webinar.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition flex flex-col items-center"
          >
            <div className="bg-gray-100 rounded-xl w-full aspect-[4/3] overflow-hidden mb-5">
              <Image
                src={item.gambar}
                alt={item.judul}
                loading="lazy"
                width={400}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 text-center">
              {item.judul}
            </p>
            <p className="text-gray-500 text-sm text-center mb-4">
              {item.deskripsi}
            </p>
            <ul className="text-gray-500 text-sm mb-4 text-start">
              <li className="flex items-center gap-x-1"><CalendarIcon size={15}/> Pelaksanaan: <b>{item.pelaksanaan}</b></li>
              <li className="flex items-center gap-x-1"><ClockIcon size={15}/> Jam: <b>{item.pukul}</b></li>
              <li className="flex items-center gap-x-1"><MapPinIcon size={15}/> Tempat: <b>{item.tempat}</b></li>
              <li className="flex items-center gap-x-1"><UsersIcon size={15}/> Pendaftaran: <b>{item.pendaftaran}</b></li>
              <li className="flex items-center gap-x-1"><DollarSignIcon size={15}/> Biaya: <b>{item.biaya}</b></li>
            </ul>
            <Button variant="default" asChild className="cursor-pointer">
              <Link href={`/daftar/${item.slug}`}>Daftar Sekarang</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Section: Webinar Selesai */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Webinar Sebelumnya
      </h2>

      {/* Grid Webinar Sebelumnya */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {webinarOverdue.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition flex flex-col items-center opacity-80"
          >
            <div className="bg-gray-100 rounded-xl w-full aspect-[4/3] overflow-hidden mb-5">
              <Image
                src={item.gambar}
                alt={item.judul}
                loading="lazy"
                width={400}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 text-center">
              {item.judul}
            </p>
            <p className="text-gray-500 text-sm text-center mb-4">
              {item.deskripsi}
            </p>
            <ul className="text-gray-500 text-sm text-start">
              <li className="flex items-center gap-x-1"><CalendarIcon size={15}/> Pelaksanaan: <b>{item.pelaksanaan}</b></li>
              <li className="flex items-center gap-x-1"><ClockIcon size={15}/> Jam: <b>{item.pukul}</b></li>
              <li className="flex items-center gap-x-1"><MapPinIcon size={15}/> Tempat: <b>{item.tempat}</b></li>
              <li className="flex items-center gap-x-1"><UsersIcon size={15}/> Pendaftaran: <b>{item.pendaftaran}</b></li>
              <li className="flex items-center gap-x-1"><DollarSignIcon size={15}/> Biaya: <b>{item.biaya}</b></li>
            </ul>
            <Button className="mt-2" disabled={true} variant="default">Webinar telah selesai</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
