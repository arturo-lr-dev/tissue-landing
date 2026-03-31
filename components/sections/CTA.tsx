import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { Phone, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export function CTA() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    '¡Hola! Me gustaría reservar una sesión de masaje.'
  )}`

  return (
    <section id="reservar" className="relative py-24 bg-stone-900 text-white overflow-hidden grain">
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-secondary-900/20" />

      <div className="container relative z-10 mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-400 font-medium">Reserva</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6 leading-tight">
              ¿Listo para recuperar tu{' '}
              <span className="italic font-normal text-primary-300">bienestar</span>?
            </h2>
            <p className="text-lg text-stone-400 mb-12 leading-relaxed font-light max-w-xl mx-auto">
              Reserva tu sesión hoy y da el primer paso hacia una vida sin dolor.
              Tu salud merece la mejor atención.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Reservar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-stone-600 text-white hover:bg-stone-800 hover:border-stone-500">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  Llamar Ahora
                </a>
              </Button>
            </div>

            <div className="inline-block bg-primary-600/20 border border-primary-500/30 rounded-full px-8 py-3">
              <span className="text-primary-300 font-medium text-sm">
                Vuelve en tu próxima sesión y ahorra 5€
              </span>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
