import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="LIBR Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold text-xl">LIBR</span>
        </Link>

        <ul className="flex items-center gap-2">
          {["Home", "Exhibition", "About", "Services", "Gallery"].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className={`px-4 py-2 rounded-full text-sm ${
                  item === "Home"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

