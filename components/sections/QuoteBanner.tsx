'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { motion } from 'framer-motion'

interface QuoteBannerProps {
  quote: string
  variant?: 'default' | 'accent' | 'dark'
}

const variants = {
  default: {
    bg: 'from-secondary-700 via-secondary-600 to-secondary-500',
    text: 'text-white',
    line: 'bg-white/30',
    glow: 'bg-secondary-400/20',
  },
  accent: {
    bg: 'from-secondary-800 via-secondary-700 to-secondary-600',
    text: 'text-white',
    line: 'bg-primary-400/50',
    glow: 'bg-primary-400/10',
  },
  dark: {
    bg: 'from-secondary-900 via-secondary-800 to-secondary-700',
    text: 'text-white',
    line: 'bg-secondary-400/40',
    glow: 'bg-secondary-300/10',
  },
}

export function QuoteBanner({ quote, variant = 'default' }: QuoteBannerProps) {
  const v = variants[variant]

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${v.bg}`} />

      {/* Animated glow orbs */}
      <div className={`absolute -top-24 -left-24 w-96 h-96 ${v.glow} rounded-full blur-3xl`} />
      <div className={`absolute -bottom-24 -right-24 w-96 h-96 ${v.glow} rounded-full blur-3xl`} />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }} />

      <div className="container relative z-10 mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative top line */}
            <motion.div
              className={`w-12 h-px ${v.line} mx-auto mb-8`}
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Large decorative quote mark */}
            <span className="block text-6xl md:text-7xl font-heading text-white/10 leading-none mb-2 select-none">&ldquo;</span>

            <p className={`text-2xl md:text-4xl lg:text-5xl font-heading font-medium italic ${v.text} leading-snug tracking-tight px-4`}>
              {quote}
            </p>

            <span className="block text-6xl md:text-7xl font-heading text-white/10 leading-none mt-2 select-none">&rdquo;</span>

            {/* Decorative bottom line */}
            <motion.div
              className={`w-12 h-px ${v.line} mx-auto mt-8`}
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
