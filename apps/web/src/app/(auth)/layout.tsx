import { BuddioLogo } from "@/components/BuddioLogo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col relative overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
          <BuddioLogo />
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 py-14 relative z-10">{children}</main>
    </div>
  );
}
