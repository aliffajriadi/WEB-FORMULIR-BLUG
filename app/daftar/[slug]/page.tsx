"use client";

import { useParams } from "next/navigation";
import { webinar, contactPerson } from "@/lib/dataWebinar";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function DaftarPages() {
  const params = useParams();
  const slug = params.slug as string;
  const data = webinar.find((item) => item.slug === slug);
  const [isLoading, setIsLoading] = useState(false);
  const [showWhatsappLink, setShowWhatsappLink] = useState(false);

  // --- STATE ---
  const [form, setForm] = useState({
    acara: data?.judul,
    nama: "",
    email: "",
    whatsapp: "",
    status: "",
    sumber: "",
    yakin: false,
    asal_instansi: "",
  });

  const [errors, setErrors] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    status: "",
    sumber: "",
    yakin: "",
    asal_instansi: "",
  });

  // --- VALIDASI ---
  const validate = (name: string, value: string | boolean) => {
    let message = "";
    switch (name) {
      case "nama":
        if (!value) message = "Nama wajib diisi";
        break;
      case "email":
        if (!value) message = "Email wajib diisi";
        else if (
          typeof value === "string" &&
          !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        )
          message = "Format email tidak valid";
        break;
      case "whatsapp":
        if (!value) message = "Nomor WhatsApp wajib diisi";
        else if (typeof value === "string" && !/^08[0-9]{8,11}$/.test(value))
          message = "Nomor harus dimulai dengan 08 dan memiliki 10–13 digit";
        break;
      case "status":
        if (!value) message = "Silakan pilih status kamu";
        break;
      case "sumber":
        if (!value) message = "Silakan pilih sumber informasi";
        break;
      case "yakin":
        if (!value) message = "Kamu harus yakin dulu 😅";
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: val }));
    validate(name, val);
  };

  // --- SUBMIT ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // buat objek error baru secara sinkron
    const newErrors: any = {};
    Object.entries(form).forEach(([key, val]) => {
      let message = "";
      switch (key) {
        case "nama":
          if (!val) message = "Nama wajib diisi";
          break;
        case "email":
          if (!val) message = "Email wajib diisi";
          else if (
            typeof val === "string" &&
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)
          )
            message = "Format email tidak valid";
          break;
        case "whatsapp":
          if (!val) message = "Nomor WhatsApp wajib diisi";
          else if (typeof val === "string" && !/^08[0-9]{8,11}$/.test(val))
            message = "Nomor harus dimulai dengan 08 dan memiliki 10–13 digit";
          break;
        case "status":
          if (!val) message = "Silakan pilih status kamu";
          break;
        case "sumber":
          if (!val) message = "Silakan pilih sumber informasi";
          break;
        case "yakin":
          if (!val) message = "Kamu harus yakin dulu 😅";
          break;
      }
      newErrors[key] = message;
    });

    setErrors(newErrors);

    // cek kalau masih ada error
    const hasError = Object.values(newErrors).some((msg) => msg !== "");
    if (hasError) {
      toast.error("Mohon perbaiki kesalahan di atas.");
      return;
    }
    setIsLoading(true);
    console.log(form);

    // lanjut kirim data
    try {
      await axios.post("/api/daftar", form);
      setForm({
        acara: data?.judul,
        nama: "",
        email: "",
        whatsapp: "",
        status: "",
        sumber: "",
        yakin: false,
        asal_instansi: "",
      });
      setShowWhatsappLink(true);
      toast.success("Formulir berhasil dikirim. Silahkan Cek Whatsapp kamu.");
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat mengirim formulir.");
    } finally {
      setIsLoading(false);
    }
  };

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
          Formulir Pendaftaran Webinar{" "}
          <span className="text-orange-400 block sm:inline mt-2 sm:mt-0">
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
                <strong>Pukul:</strong> {data.pukul}
              </p>
              <p>
                <strong>Tempat:</strong> {data.tempat}
              </p>
              <p>
                <strong>Biaya:</strong>{" "}
                <span className="text-green-500 font-semibold text-lg">
                  {data.biaya}
                </span>
              </p>
            </div>
          </div>

          {/* --- FORM PENDAFTARAN --- */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Isi Data Pendaftaran
            </h2>
            {showWhatsappLink && (
              <div className="mb-4 flex items-center bg-green-200 p-4 rounded-md gap-2">
                <p className="font-semibold">Link Grup WhatsApp:</p>
                <a
                  href="https://chat.whatsapp.com/Dtj5LeknAoJ3QcMM2LES8L?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Join Sekarang
                </a>
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* NAMA */}
              <FormInput
                label="Nama Lengkap"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                error={errors.nama}
                required
              />

              {/* EMAIL */}
              <FormInput
                label="Alamat Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="contoh@email.com"
                error={errors.email}
                required
              />

              {/* WHATSAPP */}
              <FormInput
                label="Nomor WhatsApp"
                name="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                error={errors.whatsapp}
                required
              />

              {/* STATUS */}
              <FormSelect
                label="Status Kamu Sekarang"
                name="status"
                value={form.status}
                onChange={handleChange}
                options={[
                  { value: "", label: "Pilih status" },
                  { value: "siswa", label: "Siswa / Mahasiswa" },
                  { value: "belum", label: "Belum bekerja" },
                  { value: "pekerja", label: "Pekerja" },
                  { value: "lainnya", label: "Lainnya" },
                ]}
                error={errors.status}
                required
              />

              {/* WHATSAPP */}
              <FormInput
                label="Asal Instansi"
                name="asal_instansi"
                type="string"
                value={form.asal_instansi}
                onChange={handleChange}
                placeholder="(opsional)"
                error={errors.asal_instansi}
              />

              {/* SUMBER INFO */}
              <FormSelect
                label="Dapat Informasi Dari Mana"
                name="sumber"
                value={form.sumber}
                onChange={handleChange}
                options={[
                  { value: "", label: "Pilih sumber informasi" },
                  { value: "teman", label: "Teman" },
                  { value: "instagram", label: "Instagram" },
                  { value: "tiktok", label: "TikTok" },
                  { value: "website", label: "Website" },
                  { value: "kampus", label: "Kampus" },
                  { value: "lainnya", label: "Lainnya" },
                ]}
                error={errors.sumber}
                required
              />

              {/* CHECKBOX */}
              <div className="flex items-center text-xs gap-x-2 text-gray-500">
                <input
                  type="checkbox"
                  name="yakin"
                  checked={form.yakin}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                <p>Saya yakin bahwa data di atas sudah benar.</p>
              </div>
              {errors.yakin && (
                <p className="text-red-500 text-xs mt-1">{errors.yakin}</p>
              )}

              <Button
                disabled={isLoading}
                type="submit"
                className={`mt-2 py-2.5 text-sm sm:text-base flex items-center justify-center gap-2 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Loading...
                  </>
                ) : (
                  "Daftar Sekarang"
                )}
              </Button>
            </form>

            <div className="text-gray-500 text-sm mt-4">
              {showWhatsappLink && (
              <div className="mb-4 flex items-center bg-green-200 p-4 rounded-md gap-2">
                <p className="font-semibold">Link Grup WhatsApp:</p>
                <a
                  href="https://chat.whatsapp.com/Dtj5LeknAoJ3QcMM2LES8L?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Join Sekarang
                </a>
              </div>
            )}
              <p>Ada masalah saat pendaftaran? Hubungi:</p>
              {contactPerson.map((item) => (
                <p key={item.id}>
                  {item.name} - {item.phone}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- COMPONENT INPUT REUSABLE --- */
function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required,
}: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-4 py-2.5 text-gray-700 font-semibold bg-amber-50 focus:ring-2 focus:ring-primary transition-all ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
}: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg px-4 py-2.5 text-gray-700 font-semibold bg-amber-50 focus:ring-2 focus:ring-primary transition-all ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
