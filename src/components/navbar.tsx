'use client'

import Logo from "./logo"
import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, X } from "lucide-react"
import { AnimatePresence } from 'motion/react'
import * as motion from "motion/react-m"
import { useState, useEffect } from "react"

const settings = {
  navLinks: [
    { name: 'Pricing', href: '#pricing' },
    { name: 'Services', href: '#services' },
    { name: 'Explore', href: '#explore' },
  ],
  cta: {
    content: 'Sign In',
    href: '/signin'
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
          y: 0,
          position: isScrolled ? 'fixed' : 'relative',
        }}
        transition={{ duration: 0.3 }}
        className={`w-full h-fit py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled
            ? 'px-4 md:px-8 md:mx-auto md:max-w-6xl md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-2xl md:mt-6 bg-white/40 backdrop-blur-lg border border-blue-100/30 shadow-lg shadow-blue-100/20'
            : 'px-4 md:px-0'
        }`}
      >
        {/* Logo */}
        <Link href='/' title="Home" id="Logo">
          <Logo />
        </Link>

        {/* desktop menu */}
        <div className="items-center justify-center gap-5 hidden md:flex">

        {/* Nav Links */}
        <ul className="flex items-center justify-center gap-5 text-black font-medium select-none text-link">
          {settings.navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} title={link.name} className="hover:opacity-80 transition-all capitalize">{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Call To Action */}
        <Link href={settings.cta.href} title={settings.cta.content}>
          <Button className="capitalize">{settings.cta.content}</Button>
        </Link>
      </div>

      {/* mobile only - burger menu icon */}
      <motion.div
        initial={{ scale: 1, y: 0 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-none flex md:hidden cursor-pointer text-black"
        onClick={toggleMenu}
      >
        {!isOpen && <AlignJustify size={20} />}
        {isOpen && <X size={20} />}
      </motion.div>

      {/* mobile only - menu container with AnimatePresence for exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1, y: -20 }}
            animate={{ height: '100vh', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 1, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed flex flex-col md:hidden top-16 left-0 w-full bg-white z-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <ul className="flex flex-col space-y-2 text-black font-medium select-none text-base">
                {settings.navLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} title={link.name} onClick={toggleMenu} className="block py-2 capitalize">{link.name}</Link>
                  </li>
                ))}
              </ul>

              <Link href={settings.cta.href} title={settings.cta.content} onClick={toggleMenu}>
                <Button className="w-full capitalize">{settings.cta.content}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
      {isScrolled && <div className="h-20 md:h-24" />}
    </>
  )
}
