'use client'

import { useEffect, useState } from 'react'

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('beranda')

  const navigation = [
    { name: "landing-hero", href: "#landing-hero" },
    { name: "survey-form", href: "#survey-form" },
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
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a] px-4 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full" aria-label="Logo" />
        <div className="flex gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                activeSection === item.href.slice(1)
                  ? "text-white bg-purple-600 px-4 py-2 rounded-md"
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

