import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { CONTACT_INFO, SCHEDULE } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-xl">
                <span className="text-secondary-600">Tissue</span> <span className="text-primary-600">Therapy</span>
              </span>
            </div>
            <p className="text-gray-100 mb-4">
              Tu bienestar es nuestra prioridad. Masaje terapéutico profesional
              en Narón.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-100 hover:text-primary-600 transition-colors"
                >
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre-nosotros"
                  className="text-gray-100 hover:text-primary-600 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#precios"
                  className="text-gray-100 hover:text-primary-600 transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-100 hover:text-primary-600 transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="#reservar"
                  className="text-gray-100 hover:text-primary-600 transition-colors"
                >
                  Reservar Cita
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-100 hover:text-primary-600 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-100 hover:text-primary-600 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-100">
                  {CONTACT_INFO.address.full}
                </span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horario</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div className="text-gray-100">
                  <div>{SCHEDULE.weekdays}</div>
                  <div className="mt-2">{SCHEDULE.saturday}</div>
                  <div className="mt-2">{SCHEDULE.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-100 text-sm">
          <p>
            © {new Date().getFullYear()} Tissue Therapy. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
