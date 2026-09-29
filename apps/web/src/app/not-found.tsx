import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#4F8EF7] text-white flex items-center justify-center text-2xl font-extrabold shadow-md">
        404
      </div>
      <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center px-5 py-2.5 text-sm font-bold bg-[#4F8EF7] text-white rounded-xl shadow-md transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
