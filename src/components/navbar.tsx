"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("beranda");

  const navigation = [
    { name: "Beranda", href: "#landing-hero" },
    { name: "Siapa Kamal?", href: "#tentang-kamal" },
    { name: "Visi dan Misi", href: "#visi-misi" },
    { name: "Draft", href: "#draft" },
    { name: "Aspirasi", href: "#survey-form" },
    { name: "Kontak", href: "#kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed rounded-full flex top-5 left-[5%] right-[5%] 2xl:left-[15%] 2xl:right-[15%] mx-10 justify-center bg-[#22212A] px-4 py-4 z-50">
      <div className="max-w-7xl justify-center mx-auto flex items-center gap-3 lg:gap-16">
        <Image src="/logo.png" alt="Logo MK" width={32} height={32} />
        <div className="flex gap-3 lg:gap-16 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-[7pt] lg:text-xl font-medium transition-colors hover:text-[#7fabec] ${
                activeSection === item.href.slice(1)
                  ? "text-white bg-[#0053CF] px-2 py-2 rounded-full"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
