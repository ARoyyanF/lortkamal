'use client'
import Image from 'next/image'

export default function TentangKamal() {

  return (
    <div className="leading-tight py-8">

      <div className='max-w-7xl mx-auto px-4'> 
        <h1 className='text-3xl lg:text-6xl font-bold text-center mb-6 text-white'>Tak Kenal Maka Tak Melekat</h1>
        <p className='text-sm lg:text-lg text-center px-4 mb-6 text-white'>Kenali lebih dekat Muhammad Kamal, seorang anggota HIMAFI ITB yang ingin berkontribusi lebih untuk organisasi ini. Dengan langkah-langkah sederhana yang sudah saya lakukan, saya berkomitmen untuk terus mendengarkan, belajar, dan bergerak bersama demi HIMAFI ITB yang lebih baik.</p>
      </div>
      
      <div className="flex max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-grow">
          {/* Left side box */}
          <div className="bg-[#0053CF] rounded-3xl flex-1 w-auto h-auto">
            <Image
              src="/Profile pic.png"
              alt="Kamal Profile"
              width={500}
              height={500}
              className="object-top object-cover rounded-3xl scale-50"
            />
          </div>

          {/* Right side box*/}
          <div className="grid grid-cols-1 gap-3">
            {/* Description Box */}
            <div className="text-gray-100 text-justify text-sm lg:text-lg bg-[#0053CF] rounded-3xl p-6">
              <p className="mb-3 text-lg font-bold">
                Judulnya biografi sederhana
              </p>
              <p>
                Lorem ipsum smth smth mager copas templet
              </p>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

