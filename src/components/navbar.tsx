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
          return rect.top <= 200 && rect.bottom >= 200;
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
    <nav className="rounded-b-[40px]  animate-delay-1000 animate-flip-down fixed md:rounded-full flex md:top-5 left-0 right-0 xl:left-[5%] xl:right-[5%] justify-center from-blue-950 to-gray-800 bg-gradient-to-r px-4 xl:px-12 h-20 md:h-16 z-50 text-center">
      <div className="max-w-7xl justify-center mx-auto flex flex-grow items-center gap-3 lg:gap-14">
        <div className="animate-jump animate-duration-[4000ms] flex-initial">
          <div className="max-h-8 justify-center items-center flex max-w-8 md:max-h-none md:max-w-none">
            <Image src="/logo.png" alt="Logo MK" width={128} height={128} />
          </div>
        </div>

        <div className="flex items-center flex-grow gap-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`animate-fade-right animate-duration-[3000ms] flex-grow text-[9pt] md:text-xl font-medium transition-colors hover:text-[#7fabec] ${
                activeSection === item.href.slice(1)
                  ? "text-white bg-[#0053CF] px-2 py-2 md:px-6 rounded-xl md:rounded-full"
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
