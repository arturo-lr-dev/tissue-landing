'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="images/hero-massage.webp"
          alt="Sala de masajes profesional"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Warm overlay tint */}
        <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Decorative tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block text-sm md:text-base uppercase tracking-[0.3em] text-primary-300 font-medium border-b border-primary-400/40 pb-2">
              Técnicas manuales en Narón
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-semibold mb-8 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            El arte de{' '}
            <span className="italic font-normal text-primary-300">sanar</span>
            <br />
            con las manos
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-12 text-white/70 leading-relaxed max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Masaje de tejido profundo, tratamiento craneal y técnicas circulatorias.
            Técnicas especializadas para devolver a tu cuerpo su equilibrio natural.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button size="lg" asChild>
              <Link href="#reservar">Reservar Mi Sesión</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              <Link href="#servicios">Descubrir Tratamientos</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { value: '+5', label: 'Años' },
              { value: '+1000', label: 'Clientes' },
              { value: '5.0', label: 'Google' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-semibold text-primary-300">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      >
        <Link href="#servicios" aria-label="Scroll to services">
          <ChevronDown className="text-white/40 w-8 h-8" />
        </Link>
      </motion.div>
    </section>
  )
}
