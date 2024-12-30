"use client";
import Image from "next/image";

export default function Kontak() {
    return (
        <div className="leading-tight py-8">
            <section className="scroll-mt-24" id="kontak">

                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl lg:text-3xl font-bold text-center mb-6 text-white">
                        Hubungi kami lebih lanjut
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto px-4 mb-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Left side box */}
                        <div className="flex flex-grow text-gray-100 text-justify text-sm lg:text-lg bg-[#0053CF] rounded-3xl ">
                            {/* Description Box */}
                            <div className="m-6">
                                <p className="mb-4 text-lg font-bold">
                                    Muhammad Kamal
                                </p>
                                <p>Nomor kontak : 0821234567</p>
                                <p>ID Line : 0821234567</p>
                                <p>Instagram : 0821234567</p>
                            </div>
                            {/* Right side box*/}
                        </div>
                        <div className="flex flex-grow text-gray-100 text-justify text-sm lg:text-lg bg-[#0053CF] rounded-3xl ">
                            {/* Description Box */}
                            <div className="m-6">
                                <p className="mb-4 text-lg font-bold">
                                    Tim Sukses
                                </p>
                                <p>Nomor kontak : 0821234567</p>
                                <p>ID Line : 0821234567</p>
                                <p>Instagram : 0821234567</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="rounded-3xl flex justify-center">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="object-down object-cover rounded-3xl scale-100"
                        />
                    </div>
                    <p className="text-center">
                        Copyright &copy; Muhammad Kamal, All Right Reserved
                    </p>
                </div>
            </section>


        </div>
    );
}

