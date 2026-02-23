import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { Calendar, MessageCircle, Hand, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Reserva Tu Cita',
    description: 'Elige día y hora por WhatsApp o teléfono. Proceso rápido y sin complicaciones.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Consulta Inicial',
    description: 'Conversamos sobre tus molestias, historial y objetivos para diseñar tu tratamiento.',
  },
  {
    number: '03',
    icon: Hand,
    title: 'Tratamiento Personalizado',
    description: 'Aplicamos técnicas manuales específicas adaptadas a tu situación única.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Seguimiento Continuo',
    description: 'Evaluamos tu progreso y ajustamos el tratamiento según tu evolución.',
  }
]

export function Process() {
  return (
    <section className="py-24 bg-warm-white grain">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Proceso</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6 text-stone-900">
              ¿Cómo <span className="italic font-normal">Funciona</span>?
            </h2>
            <div className="w-16 h-px bg-primary-400 mx-auto mb-6" />
            <p className="text-lg text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
              Un proceso simple y transparente para tu tranquilidad
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <FadeIn key={index} delay={index * 0.12}>
                <div className="relative flex gap-8 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary-300 to-primary-100" />
                  )}

                  {/* Number circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-heading text-lg font-semibold z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-primary-500" />
                      <h3 className="text-xl font-heading font-semibold text-stone-900">{step.title}</h3>
                    </div>
                    <p className="text-stone-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-16">
            <Button size="lg" asChild>
              <Link href="#reservar">Reservar Mi Primera Sesión</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
