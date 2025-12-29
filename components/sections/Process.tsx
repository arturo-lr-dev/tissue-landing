import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { Calendar, MessageCircle, Hand, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Reserva Tu Cita',
    description: 'Elige día y hora online en 2 minutos o por WhatsApp',
    image: 'https://placehold.co/800x600/10b981/white?text=Book+Appointment'
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Consulta Inicial',
    description: 'Conversamos sobre tus molestias y objetivos',
    image: 'https://placehold.co/800x600/10b981/white?text=Initial+Consultation'
  },
  {
    number: '03',
    icon: Hand,
    title: 'Tratamiento Personalizado',
    description: 'Aplicamos técnicas adaptadas a tu situación',
    image: 'https://placehold.co/800x600/10b981/white?text=Treatment'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Seguimiento Continuo',
    description: 'Evaluamos progreso y ajustamos según tu evolución',
    image: 'https://placehold.co/800x600/10b981/white?text=Follow+Up'
  }
]

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Un proceso simple y transparente para tu tranquilidad
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 1

            return (
              <div key={index}>
                <FadeIn delay={index * 0.1}>
                  <div
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="flex-1 w-full">
                      <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-green-600" />
                        </div>
                        <span className="text-6xl font-bold text-gray-100">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-6">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-green-600 via-green-400 to-green-200" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="#reservar">Reservar Mi Primera Sesión</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
