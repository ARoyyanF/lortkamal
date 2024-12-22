import Image from "next/image";
import { Button } from "@/components/old/ui/button";
import Navigation from "@/components/old/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              Timeless <span className="text-[#f4a181]">heroes</span> with a
              modern <span className="text-[#f4a181]">twist</span>{" "}
              <span className="text-[#f4a181] inline-block ml-2">✧</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Step into a world of wonder and exploration as we invite you to
              embark on an unforgettable journey through time and culture.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="rounded-full px-8">
                More
              </Button>
              <Button className="rounded-full px-8 bg-black text-white hover:bg-black/90">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="absolute top-4 right-4 bg-[#f4a181] text-black px-4 py-2 rounded-lg z-10 flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="Laurel wreath"
                width={20}
                height={20}
                className="opacity-80"
              />
              <span className="text-sm font-medium">27 BC - 395 AD</span>
            </div>
            <div className="rounded-3xl overflow-hidden bg-black aspect-square relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Roman statue"
                width={600}
                height={600}
                className="object-cover"
              />
              {/* Decorative bands */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full rotate-[-20deg]">
                  <div className="bg-[#f4a181] text-black py-2 px-4 text-sm font-medium text-center transform -translate-y-8">
                    Veni Vini Vici ★ Veni Vini Vici ★ Veni Vini Vici
                  </div>
                  <div className="bg-[#f4a181] text-black py-2 px-4 text-sm font-medium text-center transform translate-y-8">
                    Veni Vini Vici ★ Veni Vini Vici ★ Veni Vini Vici
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="mt-12">
          <div className="bg-black text-white p-8 rounded-3xl flex items-center justify-between max-w-md">
            <div>
              <p className="text-sm text-gray-400 mb-2">
                Step into a world of wonder and exploration as we invite you to
                embark on
              </p>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                Our gallery
                <span className="text-[#f4a181]">→</span>
              </h2>
            </div>
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Gallery preview"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
