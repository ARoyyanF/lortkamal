'use client'
import Image from 'next/image'

import { useEffect, useState } from 'react'

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('beranda')

  const navigation = [
    { name: "Beranda", href: "#landing-hero" },
    { name: "Siapa Kamal?", href: "#tentang-kamal" },
    { name: "Aspirasi", href: "#survey-form" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#22212A] px-4 py-4 z-50">
      <div className="max-w-7xl justify-center mx-auto flex items-center gap-3">
        <Image 
          src="/logo.png" 
          alt="Logo MK" 
          width={32} 
          height={32}
        />
        <div className="flex gap-3 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-xs lg:text-sm font-medium transition-colors hover:text-[#7fabec] ${
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
  )
}

