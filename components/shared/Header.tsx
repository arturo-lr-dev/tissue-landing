'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT_INFO } from '@/lib/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#precios', label: 'Precios' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' }
  ]

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    '¡Hola! Me gustaría reservar una sesión.'
  )}`

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-warm-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/50'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled || isMenuOpen ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}>
                <span className="text-white font-bold text-lg font-heading">T</span>
              </div>
              <span className={`text-xl tracking-wide transition-colors duration-300 ${
                isScrolled || isMenuOpen ? 'text-stone-900' : 'text-white'
              }`}>
                <span className="font-heading font-semibold">Tissue</span>{' '}
                <span className="font-heading font-light">Therapy</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary-500 ${
                    isScrolled ? 'text-stone-600' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  isScrolled ? 'text-stone-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{CONTACT_INFO.phone}</span>
              </a>
              <Button asChild>
                <Link href="#reservar">Reservar Cita</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                isScrolled || isMenuOpen ? 'text-stone-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-warm-white" />

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary-600/5 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col pt-22 pb-6 px-6 overflow-y-auto">
              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 + index * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-2xl font-heading font-semibold text-stone-800 hover:text-primary-600 transition-colors border-b border-stone-100 last:border-0"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom actions */}
              <motion.div
                className="pt-4 border-t border-stone-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.35 }}
              >
                {/* Phone + WhatsApp row */}
                <div className="flex gap-3 mb-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex-1 flex items-center gap-2 py-3 px-4 rounded-xl bg-stone-100 text-stone-600 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">Llamar</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-2 py-3 px-4 rounded-xl bg-stone-100 text-stone-600 hover:text-primary-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                </div>

                <Button asChild className="w-full">
                  <Link href="#reservar" onClick={() => setIsMenuOpen(false)}>
                    Reservar Cita
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
