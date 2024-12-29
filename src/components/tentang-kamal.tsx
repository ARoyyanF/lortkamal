"use client";
import Image from "next/image";

export default function TentangKamal() {
  return (
    <div className="leading-tight py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl lg:text-6xl font-bold text-center mb-6 text-white">
          Tak Kenal Maka Tak Melekat
        </h1>
        <p className="text-sm lg:text-lg text-center px-4 mb-6 text-white">
          Kenali lebih dekat Muhammad Kamal, seorang anggota HIMAFI ITB yang
          ingin berkontribusi lebih untuk organisasi ini. Dengan langkah-langkah
          sederhana yang sudah saya lakukan, saya berkomitmen untuk terus
          mendengarkan, belajar, dan bergerak bersama demi HIMAFI ITB yang lebih
          baik.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left side box */}
          <div className="bg-[#0053CF] rounded-3xl flex justify-center">
            <Image
              src="/Profile pic.png"
              alt="Kamal Profile"
              width={200}
              height={200}
              className="object-top object-cover rounded-3xl scale-200"
            />
          </div>

          {/* Right side box*/}
          <div className="flex flex-grow text-gray-100 text-justify text-sm lg:text-lg bg-[#0053CF] rounded-3xl ">
            {/* Description Box */}
            <div className="m-6">
              <p className="mb-3 text-lg font-bold">
                Judulnya biografi sederhana
              </p>
              <p>Lorem ipsum smth smth mager copas templet</p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-gray-100 text-justify text-sm lg:text-lg bg-[#0053CF] rounded-3xl p-6'>
              <h2>
                Judul Rekap Jejak
              </h2>
      </div>

    </div>
  );
}
