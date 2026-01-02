import { FadeIn } from '@/components/animations/FadeIn'
import { MapPin, Phone, Mail, Clock, Car, Bus, MapPinned } from 'lucide-react'
import { CONTACT_INFO, SCHEDULE } from '@/lib/constants'

export function Location() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Cómo Llegar
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Estamos ubicados en el corazón de Narón, fácil de encontrar
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <FadeIn>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-gray-200">
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

          {/* Information */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dirección</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address.full}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Horario</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>{SCHEDULE.weekdays}</p>
                    <p>{SCHEDULE.saturday}</p>
                    <p>{SCHEDULE.sunday}</p>
                  </div>
                </div>
              </div>

              {/* How to Get There */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <MapPinned className="w-6 h-6 text-green-600" />
                  Cómo Llegar
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">En Coche</p>
                      <p className="text-sm text-gray-600">
                        Fácil acceso desde la AC-862. Parking disponible en la
                        zona.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Transporte Público
                      </p>
                      <p className="text-sm text-gray-600">
                        Parada de autobús a 2 minutos caminando.
                      </p>
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
