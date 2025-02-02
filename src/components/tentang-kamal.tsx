"use client";
import Image from "next/image";

export default function TentangKamal() {
  return (
    <div className="py-8 leading-tight">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-6 text-center text-3xl font-bold text-white animate-delay-300  font-montserrat intersect:animate-jump-in lg:text-6xl">
          Tak Kenal Maka Tak Melekat
        </h1>
        <p className="mb-6 px-4 text-center text-sm text-white font-poppins intersect:animate-fade-down lg:text-lg">
          Kenali lebih dekat Muhammad Kamal, seorang anggota HIMAFI ITB yang
          ingin berkontribusi lebih untuk organisasi ini. Dengan langkah-langkah
          sederhana yang sudah saya lakukan, saya berkomitmen untuk terus
          mendengarkan, belajar, dan bergerak bersama demi HIMAFI ITB yang lebih
          baik.
        </p>
      </div>

      <div className="mx-auto mb-3 max-w-7xl px-4">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Left side box */}
          <div className="mb-4 flex flex-none items-center justify-center rounded-3xl bg-gradient-to-tl from-[#5f2eafd0] to-[#3c3abb] intersect:animate-fade-right">
            <Image
              src="/Profile pic.png"
              alt="Kamal Profile"
              width={200}
              height={200}
              className="scale-200 rounded-3xl object-cover object-top"
            />
          </div>

          {/* Right side box*/}
          <div className="rounded-3xl bg-gradient-to-tr from-[#5f2eafd0] to-[#3c3abb] text-justify text-sm intersect:animate-fade-left lg:text-lg">
            {/* Description Box */}
            <div className="rounded-3xl rounded-b-none bg-[#3735af] text-justify text-sm lg:text-lg">
              <div className="rounded-3xl bg-[#4341cc] text-justify text-sm lg:text-lg">
                <p className="p-6">
                  <span className="text-base font-bold text-yellow-300 lg:text-3xl">
                    Nama saya Muhammad Kamal
                  </span>
                  , biasa dipanggil Kamal atau Hamad Saya lahir di Kota Bandung
                  pada 29 Maret 2003. Sejak kecil, saya selalu ingin belajar dan
                  berbagi. Semangat ini membawa saya menempuh pendidikan di SD
                  Negeri 257 Pelita, SMP Negeri 7, dan SMA Negeri 11 Kota
                  Bandung. Setelah sempat berkuliah di Universitas Padjadjaran,
                  saya kini melanjutkan studi Sarjana Fisika di Institut
                  Teknologi Bandung (ITB).
                </p>
              </div>
              <p className="p-6">
                Di sela kesibukan kuliah, saya terus mengembangkan diri melalui
                berbagai pelatihan dan beasiswa, seperti IndonesiaNEXT oleh
                Telkomsel dan Pacmann Data & Business Scholarship.
                <span className="font-bold text-yellow-300">
                  {" "}
                  Bagi saya, pengetahuan bukan sekadar kumpulan teori, tetapi
                  juga bekal untuk mengabdi.{" "}
                </span>
                Saya pun aktif berkiprah di berbagai organisasi, antara lain
                HIMAFI ITB, Dagozilla ITB, serta komunitas profesional seperti
                American Physical Society.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl rounded-tr-none bg-[#29287c] text-justify text-sm intersect:animate-fade-left lg:text-lg">
          <div className="rounded-3xl rounded-t-none bg-[#302e94] text-justify text-sm md:rounded-tl-3xl lg:text-lg">
            <p className="p-6">
              Walau telah terlibat dalam beragam kepanitiaan dan meraih berbagai
              pengalaman, mulai dari kepala divisi hingga asisten penelitian,{" "}
              <span className="font-bold text-yellow-300">
                saya tetap melihat diri saya sebagai bagian dari banyak orang
                yang sama-sama ingin berbuat lebih bagi lingkungan.
              </span>{" "}
              Melalui peran saya di HIMAFI ITB dan lingkungan sekitar saya, saya
              berharap dapat berkontribusi agar himpunan ini dan rekan-rekan di
              lingkungan sekitar saya semakin mengakar, bertumbuh, dan bergerak
              maju.
            </p>
          </div>
          <p className="p-6">
            Bagi saya, tujuan akhirnya sederhana: menjadi
            <span className="font-bold text-yellow-300">
              {" "}
              insan yang bermanfaat{" "}
            </span>
            dan
            <span className="font-bold text-yellow-300"> tetap membumi</span>.
            Saya yakin bahwa dengan kesungguhan hati, kerja keras, serta
            dukungan semua pihak, HIMAFI ITB dapat terus berkembang dan
            menghadirkan dampak positif bagi masyarakat luas.{" "}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-1">
        <div className="mb-4 rounded-3xl bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] p-6 text-justify text-sm text-gray-100 lg:text-lg">
          <h2 className="text-center text-2xl font-bold font-montserrat intersect:animate-jump-in lg:text-4xl">
            Rekam Jejak
          </h2>
        </div>
      </div>

      <div className="mx-auto mb-4 max-w-7xl px-4">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Left side box */}
          <div className="flex flex-auto flex-col gap-4">
            <div className="rounded-3xl bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] text-justify text-sm text-gray-100 intersect:animate-fade-left lg:text-lg">
              {/* Description Box */}
              <p className="rounded-3xl rounded-b-none bg-[#28267a] p-6 text-center text-xl font-bold lg:text-4xl">
                HIMAFI ITB dan ITB
              </p>
              <p className="my-4 px-4 text-lg font-bold lg:text-xl">
                Organisasi
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/himafi.jpeg"
                      alt="Himpunan Mahasiswa Fisika ITB Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/himafi.itb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold transition-colors duration-300 hover:text-blue-400"
                    >
                      Himpunan Mahasiswa Fisika ITB (2024–Sekarang)
                    </a>
                    <p className="text-[#b5bff8]">
                      Anggota, Kepala Divisi Ekstrakampus
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/dagoz.jpg"
                      alt="Dagozilla ITB Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://dagozilla.itb.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Dagozilla ITB (2023–Sekarang)
                    </a>
                    <p className="text-[#b5bff8]">
                      Anggota Divisi Programming, Kepala Divisi Programming
                    </p>
                  </div>
                </li>
              </ul>
              <p className="my-4 px-4 text-lg font-bold lg:text-xl">
                Kepanitiaan
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/wisoutlaw.png"
                      alt="Wisoutlaw Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      Perayaan Wisuda Oktober HIMAFI ITB 2024 “Wisoutlaw”
                      (2024–2025)
                    </p>
                    <p className="text-[#b5bff8]">Kepala Bidang Pensuasanaan</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/ishimafi.jpg"
                      alt="Intellektuelle Schule Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/ppahimafiitb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Proses Penerimaan Anggota HIMAFI ITB “Intellektuelle
                      Schule” 2024 (2024)
                    </a>
                    <p className="text-[#b5bff8]">
                      Kepala Divisi Keilmuan dan Karir Bidang Materi dan Metode
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/eureka.jpg"
                      alt="EUREKA ITB Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://eurekaitb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      EUREKA ITB! 2024 (2024)
                    </a>
                    <p className="text-[#b5bff8]">Staf Dokumentasi</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/itbfair24.jpg"
                      alt="ITB Fair 2024 Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/itbfair/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      ITB Fair 2024 (2024)
                    </a>
                    <p className="text-[#b5bff8]">Staf Dokumentasi</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/wismurf.webp"
                      alt="Wismurf Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      Parade Wisuda Oktober HIMAFI ITB 2023 “Wismurf” (2023)
                    </p>
                    <p className="text-[#b5bff8]">
                      Tim Dokumentasi Volunteer, Staff Desain
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-1">
                    <Image
                      src="/itb.png"
                      alt="ITB Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      Syukuran Wisuda Pertama Program Studi Sarjana Fisika ITB
                      2023 (2023)
                    </p>
                    <p className="text-[#b5bff8]">Operator</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/oskm23.jpg"
                      alt="OSKM ITB 2023 Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      Orientasi Studi Keluarga Mahasiswa ITB 2023 (2023)
                    </p>
                    <p className="text-[#b5bff8]">
                      Staf Subidang Dokumentasi Divisi Kreatif
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/fmipa22.png"
                      alt="Scientia FMIPA ITB Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      Scientia FMIPA ITB 2023 (2023)
                    </p>
                    <p className="text-[#b5bff8]">Staf Mentor</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="square-full flex h-16 w-16 flex-none items-center justify-center bg-black">
                    <Image
                      src="/tedxitb.webp"
                      alt="TEDxITB Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://tedxitb.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      TEDxITB 6.0 (2022–2023)
                    </a>
                    <p className="text-[#b5bff8]">Staf Sinematografi</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/wisokto22.png"
                      alt="Wisuda Oktober 2022 Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      Parade Wisuda Oktober ITB 2022 (2022)
                    </p>
                    <p className="text-[#b5bff8]">Staf Grafis Bidang Kreatif</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] text-justify text-sm text-gray-100 intersect:animate-fade-left lg:text-lg">
              <p className="rounded-3xl rounded-b-none bg-[#28267a] p-6 text-center text-xl font-bold lg:text-4xl">
                Riwayat Pekerjaan/Magang
              </p>
              <ul className="mt-4 list-none space-y-4">
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                    <Image
                      src="/mejabelajar.webp"
                      alt="Meja Belajar Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/mejabelajaredu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Meja Belajar (2023)
                    </a>
                    <p className="text-[#b5bff8]">
                      Curriculum Team (Physics Specialization)
                    </p>
                  </div>
                </li>

                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                    <Image
                      src="/xeratic.png"
                      alt="Xeratic Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.xeratic.com/id/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Xeratic (2022)
                    </a>
                    <p className="text-[#b5bff8]">Data Engineer</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/pemimpinid.png"
                      alt="Pemimpin.id Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/pemimpin.indonesia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Pemimpin.id (2022)
                    </a>
                    <p className="text-[#b5bff8]">Graphic Designer</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-auto flex-col gap-4">
            <div className="rounded-3xl bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] text-justify text-sm text-gray-100 intersect:animate-fade-right lg:text-lg">
              {/* Description Box */}
              <p className="rounded-3xl rounded-b-none bg-[#28267a] p-6 text-center text-xl font-bold lg:text-4xl">
                Rekam Jejak Lainnya
              </p>
              <p className="my-4 px-4 text-lg font-bold lg:text-xl">
                Riwayat Organisasi Kemahasiswaan
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/pps_society_logo.jpeg"
                      alt="Pajajaran Physical Society Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/pps_society/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Pajajaran Physical Society (2022–2024)
                    </a>
                    <p className="text-[#b5bff8]">
                      Content Writer (One Page Fact), Video Editor, dan Motion
                      Designer
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/hifi.png"
                      alt="Himpunan Mahasiswa Fisika Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://hifi.fmipa.unpad.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Himpunan Mahasiswa Fisika FMIPA Unpad (2021–2022)
                    </a>
                    <p className="text-[#b5bff8]">
                      Staf Departemen Media & Informasi, Anggota Luar Biasa
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/gamabaunpad.png"
                      alt="Keluarga Mahasiswa Bandung Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/gamabanunpad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Keluarga Mahasiswa Bandung Unpad (2021–2022)
                    </a>
                    <p className="text-[#b5bff8]">Anggota</p>
                  </div>
                </li>
              </ul>
              <p className="my-4 px-4 text-lg font-bold lg:text-xl">
                Riwayat Organisasi Umum
              </p>
              <ul className="mb-4 list-none space-y-4">
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                    <Image
                      src="/astm.png"
                      alt="ASTM Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://www.astm.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                      >
                        American Standard Testing and Material International
                        (ASTM) (2024–Sekarang)
                      </a>
                      <p className="text-[#b5bff8]">Student Member</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/iop.png"
                      alt="Institute of Physics Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.iop.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Institute of Physics (2022–Sekarang)
                    </a>
                    <p className="text-[#b5bff8]">Associate Member (AMInstP)</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                    <Image
                      src="/APS.png"
                      alt="American Physical Society Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.aps.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      American Physical Society (2021–Sekarang)
                    </a>
                    <p className="text-[#b5bff8]">
                      Undergraduate Student Member
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/pemimpinid.png"
                      alt="Pemimpin Indonesia Logo"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/pemimpin.indonesia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Pemimpin Indonesia (2022–2023)
                    </a>
                    <p className="text-[#b5bff8]">Associate</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4">
                  <div className="flex h-16 w-16 flex-none items-center justify-center">
                    <Image
                      src="/gdsc.jpeg"
                      alt="Google Developer Student Club ITB Logo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <a
                      href="https://linktr.ee/dscitb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                    >
                      Google Developer Student Club ITB (2022–2023)
                    </a>
                    <p className="text-[#b5bff8]">Member</p>
                  </div>
                </li>
              </ul>
              <p className="my-4 px-4 text-lg font-bold lg:text-xl">
                Riwayat Kepanitiaan
              </p>
              <ul className="list-none space-y-1 lg:space-y-2">
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4 px-8">
                  <div>
                    <p className="font-bold">
                      Pekan Olahraga Fisika (PORSKA) X Putra Putri Fisika (PPF)
                      Himpunan Mahasiswa Fisika FMIPA Unpad (2022)
                    </p>
                    <p className="text-[#b5bff8]">
                      Kepala Divisi Catur Bidang Olahraga, Komentator E-Sport
                    </p>
                  </div>
                </li>

                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4 px-8">
                  <div>
                    <p className="font-bold">
                      Graduating Achievement (Gradient) Part 1 Himpunan
                      Mahasiswa Fisika FMIPA Unpad 2022 Kabinet Saturasi (2022)
                    </p>
                    <p className="text-[#b5bff8]">
                      Staf Divisi Acara dan Master of Ceremonies
                    </p>
                  </div>
                </li>

                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4 px-8">
                  <div>
                    <p className="font-bold">
                      Launching Badan Pengurus dan Dewan Himpunan Mahasiswa
                      Fisika FMIPA Unpad 2022 Kabinet Saturasi (2022)
                    </p>
                    <p className="text-[#b5bff8]">
                      Staf Divisi Acara dan Master of Ceremonies
                    </p>
                  </div>
                </li>

                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4 px-8">
                  <div>
                    <p className="font-bold">
                      Musyawarah Anggota (Musang) 2021 Himpunan Mahasiswa Fisika
                      FMIPA Unpad (2021–2022)
                    </p>
                    <p className="text-[#b5bff8]">Kepala Divisi Acara</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4 px-8">
                  <div>
                    <p className="font-bold">
                      Gamasport 2021 Keluarga Mahasiswa Bandung Universitas
                      Padjadjaran (GAMABAN Unpad) (2021–2022)
                    </p>
                    <p className="text-[#b5bff8]">
                      Staf Divisi Dokumentasi dan Desain
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4 px-8">
                  <div>
                    <p className="font-bold">
                      Aksi Angkatan Epiphaneia Care Himpunan Mahasiswa Fisika
                      FMIPA Unpad (2021)
                    </p>
                    <p className="text-[#b5bff8]">
                      Staf Divisi Dokumentasi dan Desain
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 rounded-3xl bg-[#302e94] p-4 px-8">
                  <div>
                    <p className="font-bold">
                      Gathering Maba 2021 Keluarga Mahasiswa Bandung Universitas
                      Padjadjaran (GAMABAN Unpad) (2021)
                    </p>
                    <p className="text-[#b5bff8]">
                      Staf Divisi Dokumentasi dan Desain
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl flex-1 px-4 pt-1 intersect:animate-fade-down">
        <div className="rounded-3xl bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] text-justify text-sm text-gray-100 intersect:animate-fade-left lg:text-lg">
          <p className="rounded-3xl rounded-b-none bg-[#28267a] p-6 text-center text-xl font-bold lg:text-4xl">
            Akademik
          </p>
          <p className="my-4 px-4 text-lg font-bold lg:text-xl">
            Riwayat Akademik dan Penelitian
          </p>
          <ul className="space-y-4 list-disc md:pl-10 lg:space-y-2">
            <li className="flex items-center space-x-4 rounded-3xl md:rounded-r-none bg-[#302e94] p-4">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                <Image
                  src="/ugv-uav.jpg"
                  alt="Prawira Logo"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">
                  Laboratorium Elektronika dan Instrumentasi UGV & UAV
                  (2024–Sekarang)
                </p>
                <p className="text-[#b5bff8]">
                  Asisten Laboratorium dan Penelitian
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 rounded-3xl md:rounded-r-none bg-[#302e94] p-4">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                <Image
                  src="/fttm.jpg"
                  alt="FTTM Logo"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <a
                  href="https://www.fttm.itb.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                >
                  Asisten Pemrograman Penelitian, Pengabdian Masyarakat, dan
                  Inovasi ITB (Fakultas Teknik Pertambangan dan Perminyakan ITB)
                  (2024–Sekarang)
                </a>
                <p className="text-[#b5bff8]">
                  Asisten Laboratorium dan Penelitian
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 rounded-3xl md:rounded-r-none bg-[#302e94] p-4">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                <Image
                  src="/elka.png"
                  alt="elka Logo"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <a
                  href="https://elka.fi.itb.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                >
                  Elektronika Analog dan Digital (2024–2025)
                </a>
                <p className="text-[#b5bff8]">Asisten Laboratorium Praktikum</p>
              </div>
            </li>
            <li className="flex items-center space-x-4 rounded-3xl md:rounded-r-none bg-[#302e94] p-4">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                <Image
                  src="/pengkom.jpg"
                  alt="pengkom Logo"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <a
                  href="https://www.instagram.com/berpikir_komputasional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                >
                  Pengenalan Komputasi – Stream Programming (2024–2025)
                </a>
                <p className="text-[#b5bff8]">Staf Asisten</p>
              </div>
            </li>
            <li className="flex items-center space-x-4 rounded-3xl md:rounded-tr-none bg-[#302e94] p-4">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white p-2">
                <Image
                  src="/pengkom.jpg"
                  alt="pengkom Logo"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <a
                  href="https://www.instagram.com/berpikir_komputasional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white transition-colors duration-300 hover:text-blue-400"
                >
                  Pengenalan Komputasi -Stream Nonprogramming/Data Analysis
                  (2023–2024)
                </a>
                <p className="text-[#b5bff8]">Staf Asisten</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
