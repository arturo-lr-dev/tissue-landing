import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { GraduationCap, Award, BookOpen, RefreshCw } from 'lucide-react'

function CertificationBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary-600" />
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  )
}

export function About() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <FadeIn>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="images/therapist-portrait.jpg"
                alt="Terapeuta profesional"
                fill
                className="object-cover"
                unoptimized
              />

              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-white text-center">
                  <div className="text-primary-400">
                    <div className="text-3xl md:text-4xl font-bold  mb-1">5+</div>
                    <div className="text-xs md:text-sm">Años</div>
                  </div>
                  <div className="text-primary-400">
                    <div className="text-3xl md:text-4xl font-bold mb-1">1000+</div>
                    <div className="text-xs md:text-sm">Clientes</div>
                  </div>
                  <div className="text-primary-400">
                    <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
                    <div className="text-xs md:text-sm">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contenido */}
          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre Tissue Therapy
              </h2>

              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Tu Salud en Buenas Manos
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Soy un terapeuta profesional especializado en masaje terapéutico
                y kinesioterapia. Con más de 5 años de experiencia, mi objetivo
                es ayudarte a recuperar tu bienestar físico y mental.
              </p>

              <h4 className="font-semibold text-xl mb-3">Mi Filosofía</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Creo que cada persona es única y merece un tratamiento
                personalizado. No existen dos cuerpos iguales, por lo que cada
                sesión se diseña específicamente para tus necesidades.
              </p>

              {/* Certificaciones */}
              <div className="space-y-3 mb-8">
                <CertificationBadge
                  icon={GraduationCap}
                  text="Diplomado en Fisioterapia"
                />
                <CertificationBadge
                  icon={Award}
                  text="Certificación en Masaje de Tejido Profundo"
                />
                <CertificationBadge
                  icon={BookOpen}
                  text="Curso avanzado de Kinesioterapia"
                />
                <CertificationBadge
                  icon={RefreshCw}
                  text="Formación continua en técnicas terapéuticas"
                />
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
