import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { GraduationCap, Award, BookOpen, RefreshCw } from 'lucide-react'

const certifications = [
  { icon: GraduationCap, text: 'Diplomado en Fisioterapia' },
  { icon: Award, text: 'Certificación en Masaje de Tejido Profundo' },
  { icon: BookOpen, text: 'Curso avanzado de Kinesioterapia' },
  { icon: RefreshCw, text: 'Formación continua en técnicas terapéuticas' },
]

export function About() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-cream-dark grain">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="relative h-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="images/therapist-portrait.webp"
                  alt="Terapeuta profesional"
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

                {/* Stats at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {[
                      { value: '5+', label: 'Años' },
                      { value: '1000+', label: 'Clientes' },
                      { value: '98%', label: 'Satisfacción' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-heading font-semibold text-primary-300 mb-1">{stat.value}</div>
                        <div className="text-xs uppercase tracking-[0.15em] text-white/60">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-300/30 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Conócenos</span>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold mt-4 mb-6 text-stone-900">
                Sobre Tissue Therapy
              </h2>
              <div className="w-16 h-px bg-primary-400 mb-8" />

              <p className="text-lg text-stone-600 mb-6 leading-relaxed font-light">
                Soy un terapeuta profesional especializado en masaje terapéutico
                y técnicas manuales avanzadas. Con más de 5 años de experiencia, mi objetivo
                es ayudarte a recuperar tu bienestar físico y mental.
              </p>

              <p className="text-stone-500 mb-8 leading-relaxed">
                Creo que cada persona es única y merece un tratamiento
                personalizado. No existen dos cuerpos iguales, por lo que cada
                sesión se diseña específicamente para tus necesidades.
              </p>

              {/* Certifications */}
              <div className="space-y-3 mb-10">
                {certifications.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-warm-white rounded-xl border border-stone-200/50">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="text-stone-700 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link href="#contacto">Conoce Más Sobre Mí</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
