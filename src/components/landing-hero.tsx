"use client";
import Image from "next/image";

export default function Beranda() {
  const scrollToForm = () => {
    const formSection = document.getElementById("survey-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="leading-tight py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl lg:text-6xl font-bold text-center mb-6 text-white">
          Mengakar. Bertumbuh. Bergerak.
        </h1>
        <p className="text-sm lg:text-lg text-center px-4 mb-6 text-white text-just">
          HIMAFI ITB berakar kuat dalam setiap anggotanya, menumbuhkan potensi
          individu sekaligus organisasi, dan terus bergerak untuk memberdayakan
          diri serta memberikan dampak positif bagi lingkungan sekitarnya.
        </p>
      </div>

      <div className="flex max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 flex-grow">
          {/* Left side large box */}
          <div className="col-span-1 bg-[#0053CF] rounded-3xl flex-1">
            <Image
              src="/Profile pic.png"
              alt="Kamal Profile"
              width={400}
              height={400}
              className="w-full h-full object-top object-cover rounded-3xl"
            />
          </div>

          {/* Right side three boxes */}
          <div className="col-span-2 grid grid-cols-1 gap-3">
            {/* Description Box */}
            <div className="flex flex-col bg-[#0053CF] rounded-3xl p-2 items-center">
              <div className="flex items-center justify-center h-full">
                <h2 className="text-xl lg:text-4xl text-center font-bold p-4">
                  Bangun HIMAFI ITB Bersama <br className="newline" />
                  <span className="text-yellow-300 font-bold">
                    Muhammad Kamal!
                  </span>
                </h2>
              </div>
            </div>

            {/* Call to Action Box */}
            <div className="text-gray-100 text-justify text-sm lg:text-lg bg-[#4C81CF] rounded-3xl p-6">
              <div className="text-gray-100 text-justify text-sm lg:text-lg bg-[#4C81CF] rounded-3xl p-6">
                <p className="mb-3">
                  Saya percaya bahwa HIMAFI ITB yang lebih baik hanya bisa
                  terwujud jika dibangun bersama, satu aspirasi dari aspirasi.
                  Setiap pendapat, ide, dan masukanmu adalah batu bata penting
                  yang akan memperkuat fondasi organisasi ini. Saya berkomitmen
                  untuk mendengarkan dengan tulus dan menjadikan aspirasimu
                  sebagai bagian nyata dari langkah besar HIMAFI ITB ke depan.
                </p>
                <p>
                  Tidak ada aspirasi yang terlalu kecil atau terlalu besar.
                  Semuanya berarti, semuanya penting.
                </p>
              </div>

              {/* Button Box */}
              <div className="flex items-center justify-center text-lg lg:text-xl">
                <button
                  onClick={scrollToForm}
                  className="text-xl text-[#4C81CF] bg-white p-5 rounded-3xl font-semibold hover:bg-blue-300 transition-colors w-full"
                >
                  Berikan Aspirasimu!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
