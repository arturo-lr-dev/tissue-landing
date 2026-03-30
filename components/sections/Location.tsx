import { FadeIn } from '@/components/animations/FadeIn'
import { MapPin, Phone, Mail, Clock, Car, Bus, MapPinned } from 'lucide-react'
import { CONTACT_INFO, SCHEDULE } from '@/lib/constants'

const contactCards = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: CONTACT_INFO.address.full,
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
  },
  {
    icon: Mail,
    title: 'Email',
    content: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
]

export function Location() {
  return (
    <section id="contacto" className="py-24 bg-cream-dark grain">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Ubicación</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6 text-stone-900">
              Cómo <span className="italic font-normal">Llegar</span>
            </h2>
            <div className="w-16 h-px bg-primary-400 mx-auto mb-6" />
            <p className="text-lg text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
              Estamos ubicados en el corazón de Narón
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <FadeIn>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-stone-200/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.174526723441!2d-8.2045848!3d43.4986946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2ddf1c9cafb87b%3A0xbf40e07e7289cb19!2sTissue%20Therapy%20-Masaje%20profesional%20%26%20Relax-!5e0!3m2!1ses!2ses!4v1767351855383!5m2!1ses!2ses"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Tissue Therapy"
              />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {contactCards.map(({ icon: Icon, title, content, href }) => (
                <div key={title} className="flex items-start gap-4 p-5 bg-warm-white rounded-xl border border-stone-200/50">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-stone-900 mb-1">{title}</h3>
                    {href ? (
                      <a href={href} className="text-stone-500 hover:text-primary-600 transition-colors text-sm">
                        {content}
                      </a>
                    ) : (
                      <p className="text-stone-500 text-sm">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Schedule */}
              <div className="flex items-start gap-4 p-5 bg-warm-white rounded-xl border border-stone-200/50">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-stone-900 mb-2">Horario</h3>
                  <div className="space-y-1 text-stone-500 text-sm">
                    <p>{SCHEDULE.weekdays}</p>
                    <p>{SCHEDULE.friday}</p>
                    <p>{SCHEDULE.saturday}</p>
                    <p>{SCHEDULE.sunday}</p>
                  </div>
                </div>
              </div>

              {/* How to get there */}
              <div className="bg-primary-50/50 border border-primary-200/50 rounded-xl p-6 mt-2">
                <h3 className="font-heading font-semibold text-stone-900 mb-4 flex items-center gap-2">
                  <MapPinned className="w-5 h-5 text-primary-600" />
                  Cómo Llegar
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Car className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800 text-sm">En Coche</p>
                      <p className="text-xs text-stone-500">Fácil acceso desde la AC-862. Parking disponible.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800 text-sm">Transporte Público</p>
                      <p className="text-xs text-stone-500">Parada de autobús a 2 minutos caminando.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
