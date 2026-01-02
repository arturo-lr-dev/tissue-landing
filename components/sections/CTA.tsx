import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export function CTA() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    '¡Hola! Me gustaría reservar una sesión de masaje terapéutico.'
  )}`

  return (
    <section id="reservar" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ¿Listo para Recuperar tu Bienestar?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-50 leading-relaxed">
              Reserva tu sesión hoy y da el primer paso hacia una vida sin dolor
              y con más energía. Tu salud merece la mejor atención.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Reservar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  Llamar Ahora
                </a>
              </Button>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Calendar className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Reserva Fácil</h3>
                <p className="text-sm text-primary-50">
                  Por WhatsApp
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <MessageCircle className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Respuesta Rápida</h3>
                <p className="text-sm text-primary-50">
                  Te confirmamos en minutos
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Phone className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Atención Personal</h3>
                <p className="text-sm text-primary-50">
                  Resolvemos todas tus dudas
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Special Offer Reminder */}
        <FadeIn delay={0.2}>
          <div className="mt-12 max-w-2xl mx-auto bg-yellow-400 text-gray-900 rounded-xl p-6 text-center shadow-2xl">
            <p className="text-lg font-bold mb-2">
              🎉 ¡Oferta Especial Primera Sesión!
            </p>
            <p className="text-sm">
              20% de descuento en tu primera visita. No pierdas esta
              oportunidad.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
