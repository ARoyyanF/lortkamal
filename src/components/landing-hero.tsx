import { Instagram, Twitter, Linkedin } from 'lucide-react'
import Image from "next/image"

export default function LandingHero() {
  return (
    <div className="py-6">
      {/* Header with social icons */}
      <header className="flex justify-between items-center mb-12">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="flex gap-4">
          <a href="#" className="text-[#1DA1F2] hover:opacity-80">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#1DA1F2] hover:opacity-80">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#0A66C2] hover:opacity-80">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Memajukan <span className="text-blue-400">HIMAFI</span> bersama
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
              MUHAMMAD
              <br />
              KAMAL
            </h1>
          </div>
        </div>

        {/* Question Section */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            "Apa yang diperlukan <span className="text-blue-400">HIMAFI</span>?"
          </h2>
          <div className="bg-[#002538] p-6 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-blue-400">HIMAFI</span> sebagai wadah kegiatan kita bersama tentu memiliki
              peran penting dalam mendukung pengembangan potensi dan
              aspirasi seluruh anggotanya. Agar <span className="text-blue-400">HIMAFI</span> bisa terus
              berkembang dan memberikan manfaat yang optimal, kami
              mengajak kalian untuk turut serta dalam mengisi analisis kondisi
              ini. Suara dan pandangan kalian sangat berarti untuk memahami
              keadaan <span className="text-blue-400">HIMAFI</span> saat ini dan merancang langkah-langkah
              perbaikan ke depannya. Mari bersama kita bangun <span className="text-blue-400">HIMAFI</span> yang
              lebih baik untuk kita semua!
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

