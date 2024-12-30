"use client";

export default function Kontak() {
    return (
        <div className="leading-tight py-8">
            <section className="scroll-mt-24" id="kontak">

                <div className="mx-auto px-4 pt-1 max-w-7xl">
                    <div className="text-gray-100 text-left text-sm lg:text-lg bg-[#0053CF] rounded  p-2">
                        <h2 className="text-lg font-bold text-left m-3" >Ingin Dekat dengan Kamal dan Visi Misinya? </h2>
                        <p className="text-lg font-light text-left m-3">Anda dapat menhubungi Kontak berikut</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 mb-4">
                    <div className="flex flex-col md:flex-row ">
                        {/* Left side box */}
                        <div className="flex flex-grow text-gray-100 text-justify text-sm lg:text-lg bg-[#0053CF] rounded ">
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
                        <div className="flex flex-grow text-gray-100 text-justify text-sm lg:text-lg bg-[#0053CF] rounded">
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
            </section>


        </div>
    );
}

