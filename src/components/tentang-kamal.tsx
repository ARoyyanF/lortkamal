"use client";
import Image from "next/image";

export default function TentangKamal() {
  return (
    <div className="leading-tight py-8">
      <div className="max-w-7xl mx-auto px-4 ">
        <h1 className="intersect:animate-jump-in animate-delay-300 text-3xl lg:text-6xl font-bold text-center mb-6 text-white">
          Tak Kenal Maka Tak Melekat
        </h1>
        <p className="intersect:animate-fade-down text-sm lg:text-lg text-center px-4 mb-6 text-white">
          Kenali lebih dekat Muhammad Kamal, seorang anggota HIMAFI ITB yang
          ingin berkontribusi lebih untuk organisasi ini. Dengan langkah-langkah
          sederhana yang sudah saya lakukan, saya berkomitmen untuk terus
          mendengarkan, belajar, dan bergerak bersama demi HIMAFI ITB yang lebih
          baik.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-3">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left side box */}
          <div className=" intersect:animate-fade-right bg-gradient-to-tl from-[#5f2eafd0] to-[#3c3abb] rounded-3xl justify-center flex-none items-center flex">
            <Image
              src="/Profile pic.png"
              alt="Kamal Profile"
              width={200}
              height={200}
              className="object-top object-cover rounded-3xl scale-200"
            />
          </div>

          {/* Right side box*/}
          <div className=" intersect:animate-fade-left text-gray-100 text-justify text-sm lg:text-lg bg-gradient-to-tr from-[#5f2eafd0] to-[#3c3abb] rounded-3xl ">
            {/* Description Box */}
            <div className="m-6">
              <p className="mb-4 text-lg lg:text-2xl font-bold">
                Jejak Saya Sejauh Ini
              </p>
              <p>
                Nama saya Muhammad Kamal, biasa dipanggil <span className="text-yellow-300 font-bold text-base lg:text-2xl">
                  Kamal </span>
                atau <span className="text-yellow-300 font-bold text-base lg:text-2xl" >
                  Hamad</span>.
                Saya lahir di Kota Bandung pada 29 Maret 2003. Sejak kecil,
                saya selalu ingin belajar dan berbagi. Semangat ini membawa
                saya menempuh pendidikan di SD Negeri 257 Pelita, SMP Negeri
                7, dan SMA Negeri 11 Kota Bandung. Setelah sempat berkuliah
                di Universitas Padjadjaran, saya kini melanjutkan studi
                Sarjana Fisika di Institut Teknologi Bandung (ITB).
              </p>
              <br />
              <p>
                <span className="text-yellow-300 font-bold text-base lg:text-2xl"> Di sela kesibukan kuliah, saya terus mengembangkan diri </span>
                melalui berbagai pelatihan dan beasiswa, seperti IndonesiaNEXT
                oleh Telkomsel dan Pacmann Data & Business Scholarship. Bagi saya,
                pengetahuan bukan sekadar kumpulan teori, tetapi juga bekal untuk
                mengabdi. Saya pun aktif berkiprah di berbagai organisasi,
                antara lain HIMAFI ITB, Dagozilla ITB, serta komunitas
                profesional seperti American Physical Society.
              </p>
              <br />
              <p>
                Walau telah terlibat dalam beragam kepanitiaan dan meraih berbagai
                pengalaman, mulai dari kepala divisi hingga asisten penelitian, <span className="text-yellow-300 font-bold text-base lg:text-2xl">
                  saya tetap melihat diri saya sebagai bagian dari banyak orang yang sama-sama ingin berbuat lebih bagi lingkungan.</span> Melalui
                peran saya di HIMAFI ITB dan lingkungan sekitar saya, saya berharap dapat
                berkontribusi agar himpunan ini dan rekan-rekan di lingkungan sekitar
                saya semakin mengakar, bertumbuh, dan bergerak maju.
              </p>
              <br />
              <p>
                Bagi saya, tujuan akhirnya sederhana: menjadi <span className="text-yellow-300 font-bold text-base lg:text-2xl">insan yang bermanfaat</span> dan <span className="text-yellow-300 font-bold text-base lg:text-2xl">tetap membumi</span>. Saya yakin bahwa dengan kesungguhan hati, kerja
                keras, serta dukungan semua pihak, HIMAFI ITB dapat terus berkembang
                dan menghadirkan dampak positif bagi masyarakat luas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 pt-1 max-w-7xl">
        <div className="text-gray-100 text-justify text-sm lg:text-lg bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] rounded-3xl p-6 mb-4">
          <h2 className="intersect:animate-jump-in text-2xl lg:text-4xl font-bold text-center">
            Rekam Jejak
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left side box */}
          <div className=" intersect:animate-fade-left flex-1 text-gray-100 text-justify text-sm lg:text-lg bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] rounded-3xl ">
            {/* Description Box */}
            <div className="m-6">
              <p className="mb-4 text-lg lg:text-2xl font-bold text-center">
                Rekam Jejak HIMAFI ITB dan ITB
              </p>
              <p className="mb-3 text-base lg:text-xl font-bold">
                Organisasi
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1 lg:space-y-2">
                <li className="font-bold">Himpunan Mahasiswa Fisika ITB (2024–Sekarang)</li>
                Anggota, Kepala Divisi Ekstrakampus
                <li className="font-bold">Dagozilla ITB (2023–Sekarang)</li>
                Anggota Divisi Programming, Kepala Divisi Programming
              </ul>
              <p className="mb-3 text-base lg:text-xl font-bold">
                Kepanitiaan
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1 lg:space-y-2">
                <li className="font-bold">Perayaan Wisuda Oktober HIMAFI ITB 2024 “Wisoutlaw” (2024–2025)</li>
                Kepala Bidang Pensuasanaan
                <li className="font-bold">Proses Penerimaan Anggota HIMAFI ITB “Intellektuelle Schule” 2024 (2024)</li>
                Kepala Divisi Keilmuan dan Karir Bidang Materi dan Metode
                <li className="font-bold">EUREKA ITB! 2024 (2024)</li>
                Staf Dokumentasi
                <li className="font-bold">ITB Fair 2024 (2024)</li>
                Staf Dokumentasi
                <li className="font-bold">Parade Wisuda Oktober HIMAFI ITB 2023 “Wismurf” (2023)</li>
                Tim Dokumentasi Volunteer, Staff Desain
                <li className="font-bold">Syukuran Wisuda Pertama Program Studi Sarjana Fisika ITB 2023 (2023)</li>
                Operator
                <li className="font-bold">Orientasi Studi Keluarga Mahasiswa ITB 2023 (2023)</li>
                Staf Subidang Dokumentasi Divisi Kreatif
                <li className="font-bold">Scientia FMIPA ITB 2023 (2023)</li>
                Staf Mentor
                <li className="font-bold">TEDxITB 6.0 (2022–2023)</li>
                Staf Sinematografi
                <li className="font-bold">Parade Wisuda Oktober ITB 2022 (2022)</li>
                Staf Grafis Bidang Kreatif
              </ul>
            </div>
            {/* Right side box*/}
          </div>
          <div className="intersect:animate-fade-right flex-1 text-gray-100 text-justify text-sm lg:text-lg bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] rounded-3xl ">
            {/* Description Box */}
            <div className="m-6">
              <p className="mb-4 text-lg lg:text-2xl font-bold text-center">
                Rekam Jejak Lainnya
              </p>
              <p className="mb-3 text-base lg:text-xl font-bold">
                Riwayat Organisasi Kemahasiswaan
              </p>
              <ul className="list-none space-y-4 mb-4">
                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none flex items-center justify-center">
                    <Image
                      src="/pps_society_logo.jpeg"
                      alt="Pajajaran Physical Society Logo"
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/pps_society/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      Pajajaran Physical Society (2022–2024)
                    </a>
                    <p className="text-white">
                      Content Writer (One Page Fact), Video Editor, dan Motion Designer
                    </p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none flex items-center justify-center">
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
                      className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      Himpunan Mahasiswa Fisika FMIPA Unpad (2021–2022)
                    </a>
                    <p className="text-white">
                      Staf Departemen Media & Informasi, Anggota Luar Biasa
                    </p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none flex items-center justify-center">
                    <Image
                      src="/gamabaunpad.png"
                      alt="Keluarga Mahasiswa Bandung Logo"
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/gamabanunpad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      Keluarga Mahasiswa Bandung Unpad (2021–2022)
                    </a>
                    <p className="text-white">Anggota</p>
                  </div>
                </li>
              </ul>

              <p className="mb-3 text-base lg:text-xl font-bold">
                Riwayat Organisasi Umum
              </p>
              <ul className="list-none space-y-4 mb-4">
                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none bg-white p-2 rounded-full flex items-center justify-center">
                    <Image
                      src="/astm.png"
                      alt="ASTM Logo"
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://www.astm.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                      >
                        American Standard Testing and Material International (ASTM) (2024–Sekarang)
                      </a>
                      <p className="text-white">Student Member</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none flex items-center justify-center">
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
                      className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      Institute of Physics (2022–Sekarang)
                    </a>
                    <p className="text-white">Associate Member (AMInstP)</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none bg-white p-2 rounded-full flex items-center justify-center">
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
                      className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      American Physical Society (2021–Sekarang)
                    </a>
                    <p className="text-white">Undergraduate Student Member</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none flex items-center justify-center">
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
                      className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      Pemimpin Indonesia (2022–2023)
                    </a>
                    <p className="text-white">Associate</p>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-none  flex items-center justify-center">
                    <Image
                      src="/gdsc.jpeg"
                      alt="Google Developer Student Club ITB Logo"
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <a
                      href="https://linktr.ee/dscitb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      Google Developer Student Club ITB (2022–2023)
                    </a>
                    <p className="text-white">Member</p>
                  </div>
                </li>
              </ul>



              <p className="mb-3 text-base lg:text-xl font-bold">
                Riwayat Kepanitiaan
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1 lg:space-y-2">
                <li className="font-bold">Pekan Olahraga Fisika (PORSKA) X Putra Putri Fisika (PPF) Himpunan Mahasiswa Fisika FMIPA Unpad (2022)</li>
                Kepala Divisi Catur Bidang Olahraga, Komentator E-Sport
                <li className="font-bold">Graduating Achievement (Gradient) Part 1 Himpunan Mahasiswa Fisika FMIPA Unpad 2022 Kabinet Saturasi (2022)</li>
                Staf Divisi Acara dan Master of Ceremonies
                <li className="font-bold">Launching Badan Pengurus dan Dewan Himpunan Mahasiswa Fisika FMIPA Unpad 2022 Kabinet Saturasi (2022)</li>
                Staf Divisi Acara dan Master of Ceremonies
                <li className="font-bold">Musyawarah Anggota (Musang) 2021 Himpunan Mahasiswa Fisika FMIPA Unpad (2021–2022)</li>
                Kepala Divisi Acara
                <li className="font-bold">Gamasport 2021 Keluarga Mahasiswa Bandung Universitas Padjadjaran (GAMABAN Unpad) (2021–2022)</li>
                Staf Divisi Dokumentasi dan Desain
                <li className="font-bold">Aksi Angkatan Epiphaneia Care Himpunan Mahasiswa Fisika FMIPA Unpad (2021)</li>
                Staf Divisi Dokumentasi dan Desain
                <li className="font-bold">Gathering Maba 2021 Keluarga Mahasiswa Bandung Universitas Padjadjaran (GAMABAN Unpad) (2021)</li>
                Staf Divisi Dokumentasi dan Desain
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="intersect:animate-fade-down flex-1 mx-auto px-4 pt-1 max-w-7xl">
        <div className=" text-gray-100 text-justify text-sm lg:text-lg bg-gradient-to-tr from-[#3b2eafd0] to-[#3c3abb] rounded-3xl p-6 mb-4">
          <h2 className="text-xl lg:text-2xl font-bold text-center">
            Rekam Jejak Akademik dan Profesional
          </h2>
          <p className="mb-3 text-base lg:text-xl font-bold">
            Riwayat Akademik dan Penelitian
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1 lg:space-y-2">
            <li>Asisten Laboratorium dan Penelitian – Laboratorium Elektronika dan Instrumentasi UGV & UAV (2024–Sekarang)</li>
            <li>Asisten Laboratorium dan Penelitian – Asisten Pemrograman Penelitian, Pengabdian Masyarakat, dan Inovasi ITB (Fakultas Teknik Pertambangan dan Perminyakan ITB) (2024–Sekarang)</li>
            <li>Asisten Laboratorium Praktikum Elektronika Analog dan Digital (2024–2025)</li>
            <li>Staf Asisten Pengenalan Komputasi – Stream Programming (2024–2025)</li>
            <li>Staf Asisten Pengenalan Komputasi – Stream Nonprogramming/Data Analysis (2023–2024))</li>
          </ul>
          <p className="mb-3 text-base lg:text-xl font-bold">
            Riwayat Pekerjaan/Magang
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1 lg:space-y-2">
            <li>Meja Belajar (2023) -  Curriculum Team (Physics Specialization)</li>
            <li>Xeratic (2022) - Data Engineer</li>
            <li>Pemimpin.id (2022) - Graphic Designer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
