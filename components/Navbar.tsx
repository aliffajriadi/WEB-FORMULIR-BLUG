"use client";

import { Globe, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-secondary w-full overflow-hidden py-1 fixed z-30 top-0">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* 👉 Konten pertama */}
        <Content />
        {/* 👉 Duplikat untuk looping halus */}
        <Content />
      </div>

      {/* Animasi marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Pisahkan konten biar rapi
function Content() {
  return (
    <div className="text-primary text-sm font-medium flex items-center gap-2 px-6">
      <Globe className="w-4 h-4" />
      <p>Kunjungi website resmi Batam Linux User Group di</p>
      <a
        href="https://blug.polibatam.ac.id"
        className="underline text-blue-600 hover:text-blue-800"
        target="_blank"
      >
        https://blug.polibatam.ac.id
      </a>
      <Instagram className="w-4 h-4 ml-4" />
      <p>Kunjungi Instagram resmi Batam Linux User Group di</p>
      <a
        href="https://www.instagram.com/batamlinux/"
        className="underline text-blue-600 hover:text-blue-800"
        target="_blank"
      >
        @batamlinux
      </a>
    </div>
  );
}
