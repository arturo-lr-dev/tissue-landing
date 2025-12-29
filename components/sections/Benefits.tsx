import { FadeIn } from '@/components/animations/FadeIn'
import { Award, User, Heart, Sparkles, Clock, Star } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Experiencia Profesional',
    description: 'Más de 5 años dedicados al bienestar y salud terapéutica',
    color: 'blue'
  },
  {
    icon: User,
    title: 'Tratamientos Personalizados',
    description: 'Cada sesión adaptada a tus necesidades específicas',
    color: 'green'
  },
  {
    icon: Heart,
    title: 'Enfoque Integral',
    description: 'Tratamos la causa, no solo los síntomas',
    color: 'red'
  },
  {
    icon: Sparkles,
    title: 'Ambiente Relajante',
    description: 'Espacio diseñado para tu máxima comodidad',
    color: 'purple'
  },
  {
    icon: Clock,
    title: 'Flexibilidad Horaria',
    description: 'Adaptamos nuestros horarios a tu rutina',
    color: 'orange'
  },
  {
    icon: Star,
    title: 'Resultados Comprobados',
    description: 'Clientes satisfechos con mejora en calidad de vida',
    color: 'yellow'
  }
]

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  red: 'bg-red-100 text-red-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  yellow: 'bg-yellow-100 text-yellow-600'
}

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Por Qué Elegir Tissue Therapy
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Tu bienestar es nuestra prioridad. Descubre qué nos hace diferentes.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const colorClass = colorClasses[benefit.color as keyof typeof colorClasses]

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${colorClass} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
