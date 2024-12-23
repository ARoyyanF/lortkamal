import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function LandingHero() {
  return (
    <div className="py-6">
      {/* Header with social icons */}
      <header className="flex justify-between items-center mb-12">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/panggilsajakamal/"
            className="text-[#1DA1F2] hover:opacity-80"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/hamad-muhammad-kamal/"
            className="text-[#0A66C2] hover:opacity-80"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* <Image
              src="/logo.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
              priority
            /> */}
            <Image src="/profile.png" alt="Logo" width={300} height={300} />
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
            &quot;Apa yang diperlukan{" "}
            <span className="text-blue-400">HIMAFI</span>?&quot;
          </h2>
          <div className="bg-gradient-to-tr from-[#111142] to-[#071532] p-6 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-blue-400">HIMAFI</span> sebagai wadah
              kegiatan kita bersama tentu memiliki peran penting dalam mendukung
              pengembangan potensi dan aspirasi seluruh anggotanya. Agar{" "}
              <span className="text-blue-400">HIMAFI</span> bisa terus
              berkembang dan memberikan manfaat yang optimal, kami mengajak
              kalian untuk turut serta dalam mengisi analisis kondisi ini. Suara
              dan pandangan kalian sangat berarti untuk memahami keadaan{" "}
              <span className="text-blue-400">HIMAFI</span> saat ini dan
              merancang langkah-langkah perbaikan ke depannya. Mari bersama kita
              bangun <span className="text-blue-400">HIMAFI</span> yang lebih
              baik untuk kita semua!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
