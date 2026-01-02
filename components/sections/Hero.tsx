'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ChevronDown, Shield, Award, Target, Heart } from 'lucide-react'

function TrustBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Icon className="w-8 h-8 text-primary-400" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="images/hero-massage.jpg"
          alt="Sala de masajes profesional"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masaje Terapéutico Profesional en Narón
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Libérate del dolor muscular y recupera tu bienestar. Terapias
            personalizadas para tu salud física y mental.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" asChild>
              <Link href="#reservar">Reservar Mi Sesión</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <TrustBadge icon={Shield} text="+5 años experiencia" />
            <TrustBadge icon={Award} text="Certificado" />
            <TrustBadge icon={Target} text="Técnicas especializadas" />
            <TrustBadge icon={Heart} text="Atención personalizada" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link href="#servicios" aria-label="Scroll to services">
          <ChevronDown className="text-white w-10 h-10" />
        </Link>
      </motion.div>
    </section>
  )
}
