interface Webinar {
  id: number;
  judul: string;
  pelaksanaan: string;
  tempat: string;
  deskripsi: string;
  pendaftaran: string;
  pukul: string;
  biaya: string;
  slug: string;
  gambar: string;
}
const webinar : Webinar[] = [

  ];

  const webinarOverdue : Webinar[] = [
    {
      id: 1,
      judul: "FrontEnd Web dengan Next.js",
      pelaksanaan: "Selasa, 5 Mei 2025",
      tempat: "Polibatam, GU 805",
      deskripsi: "Mari pelajari standarisasi frontend enginner dengan nextjs, dengan mengutamakan kecepatan dan ringan di End User",
      pendaftaran: "1 Mei - 5 Mei 2025",
      pukul: "13.00 WIB",
      biaya: "Gratis",
      slug: "frontend-web-dengan-nextjs",
      gambar: "/webinar-nextjs.jpeg",
    },
    {
      id: 2,
      judul: "Cicip Programing Pemula: Fast build app with Laravel Vibe Coding",
      pelaksanaan: "Sabtu, 1 November 2025",
      tempat: "Online Zoom",
      deskripsi: "Masih pemula tapi pengen bikin aplikasi web cepet? yuukk gabung webinar bersama dari Developer yang berpengalaman.",
      pendaftaran: "29 - 1 November 2025",
      pukul: "13.00 WIB",
      biaya: "GRATIS",
      slug: "webinar-laravel-vibecode",
      gambar: "/webinar-laravel-vibecode.jpeg",
    },
    {
      id: 3,
      judul: "Mengenal Konsep MVC & Laravel",
      pelaksanaan: "Rabu, 12 Juni 2025",
      tempat: "Online Zoom",
      deskripsi: "Pernah dengar soal MVC tapi masih bingung konsepnya? Atau kamu penasaran gimana cara kerja framework Laravel ? \n yuk ikutiii",
      pendaftaran: "1 Juni - 12 Juni 2025",
      pukul: "13.00 WIB",
      biaya: "Gratis",
      slug: "mengenal-konsep-mvc-laravel",
      gambar: "/webinar-laravel.jpeg",
    },
    {
      id: 4,
      judul: "About React.js",
      pelaksanaan: "Rabu, 12 Juni 2025",
      tempat: "Online Zoom",
      deskripsi: "Pernah penasaran gimana cara membuat tampilan web modern seperti Facebook atau Instagram? Yuk kita Ulik bareng",
      pendaftaran: "1 Juni - 12 Juni 2025",
      pukul: "13.00 WIB",
      biaya: "Gratis",
      slug: "about-reactjs",
      gambar: "/webinar-reactjs.jpeg",
    },
    {
      id: 5,
      judul: "Create your Mobile Firts App with Flutter",
      pelaksanaan: "-",
      tempat: "Politeknik Negeri Batam",
      deskripsi: "-",
      pendaftaran: "-",
      pukul: "10.00 WIB",
      biaya: "Gratis",
      slug: "flutter",
      gambar: "/webinar-flutter.jpeg",
    },
    {
      id: 6,
      judul: "Tailwind CSS for FrontEnd Development",
      pelaksanaan: "11 Mei 2024",
      tempat: "Polibatam TA 10.3",
      deskripsi: "-",
      pendaftaran: "1 - 11 Mei 2024",
      pukul: "13.00 WIB",
      biaya: "Gratis",
      slug: "tailwind-for-development",
      gambar: "/webinar-tailwindcss.jpeg",
    },
    {
      id: 7,
      judul: "Menjadi Programer di tengah Gempuran AI",
      pelaksanaan: "-",
      tempat: "Online Zoom",
      deskripsi: "-",
      pendaftaran: "-",
      pukul: "14.00 WIB",
      biaya: "Gratis",
      slug: "gempuran-ai",
      gambar: "/webinar-gempuran.jpeg",
    },
  ];

  const contactPerson = [
    {
      id: 1,
      name: "Bagas Satrio",
      email: "tN2lT@example.com",
      phone: "081267126694",
    },
    {
      id: 2,
      name: "Alif Fajriadi",
      email: "H4rGc@example.com",
      phone: "0895603792033",
    },
  ];




  export { webinar, webinarOverdue, contactPerson };