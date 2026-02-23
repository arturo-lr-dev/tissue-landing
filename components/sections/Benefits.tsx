import { FadeIn } from '@/components/animations/FadeIn'
import { Award, User, Heart, Sparkles, Clock, Star } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Experiencia Profesional',
    description: 'Más de 5 años dedicados al bienestar y salud terapéutica',
  },
  {
    icon: User,
    title: 'Tratamientos Personalizados',
    description: 'Cada sesión adaptada a tus necesidades específicas',
  },
  {
    icon: Heart,
    title: 'Enfoque Integral',
    description: 'Tratamos la causa, no solo los síntomas',
  },
  {
    icon: Sparkles,
    title: 'Ambiente Relajante',
    description: 'Espacio diseñado para tu máxima comodidad',
  },
  {
    icon: Clock,
    title: 'Flexibilidad Horaria',
    description: 'Adaptamos nuestros horarios a tu rutina',
  },
  {
    icon: Star,
    title: 'Resultados Comprobados',
    description: 'Clientes satisfechos con mejora en calidad de vida',
  }
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-stone-900 grain text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-400 font-medium">Diferencia</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6">
              Por Qué Elegir <span className="italic font-normal text-primary-300">Tissue Therapy</span>
            </h2>
            <div className="w-16 h-px bg-primary-400 mx-auto mb-6" />
            <p className="text-lg text-stone-400 max-w-xl mx-auto font-light leading-relaxed">
              Tu bienestar es nuestra prioridad
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group p-8 rounded-2xl border border-stone-800 hover:border-primary-700/50 hover:bg-stone-800/50 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center mb-5 group-hover:bg-primary-600/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
