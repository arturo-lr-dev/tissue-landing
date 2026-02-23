import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { CONTACT_INFO, SCHEDULE } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-heading font-semibold text-lg">T</span>
              </div>
              <span className="text-lg text-white">
                <span className="font-heading font-semibold">Tissue</span>{' '}
                <span className="font-heading font-light">Therapy</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Tu bienestar es nuestra prioridad. Masaje terapéutico profesional en Narón.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">Enlaces</h3>
            <ul className="space-y-3">
              {[
                { href: '#servicios', label: 'Nuestros Servicios' },
                { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
                { href: '#precios', label: 'Precios' },
                { href: '#faq', label: 'Preguntas Frecuentes' },
                { href: '#reservar', label: 'Reservar Cita' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm hover:text-primary-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-primary-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{CONTACT_INFO.address.full}</span>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">Horario</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm">
                <p>{SCHEDULE.weekdays}</p>
                <p>{SCHEDULE.saturday}</p>
                <p>{SCHEDULE.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Tissue Therapy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
