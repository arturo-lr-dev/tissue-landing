import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/animations/FadeIn'
import { Check, Clock, Waves, Heart, Brain } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap = {
  'deep-tissue': Waves,
  'circulation': Heart,
  'craneal': Brain
}

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-cream grain">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Tratamientos</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6 text-stone-900">
              Nuestros Servicios
            </h2>
            <div className="w-16 h-px bg-primary-400 mx-auto mb-6" />
            <p className="text-lg text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
              Terapias manuales profesionales adaptadas a tus necesidades específicas
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id as keyof typeof iconMap]
            const lowestPrice = Math.min(...service.durations.map(d => d.price))

            return (
              <FadeIn key={service.id} delay={index * 0.15}>
                <Link href="#reservar">
                  <Card className="group h-full cursor-pointer border-stone-200/60 bg-warm-white hover:bg-white hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-500">
                    <CardContent className="p-8">
                      {/* Icon & Price */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-primary-600" />
                        </div>
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          Desde {lowestPrice}€
                        </span>
                      </div>

                      <h3 className="text-2xl font-heading font-semibold text-stone-900 mb-3">{service.title}</h3>
                      <p className="text-stone-500 mb-6 leading-relaxed text-sm">{service.description}</p>

                      {/* Benefits */}
                      <div className="space-y-2.5 mb-8">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm">
                            <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-stone-600">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Durations */}
                      <div className="space-y-2 pt-6 border-t border-stone-100">
                        {service.durations.map((duration, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-stone-500 flex items-center gap-1.5 text-sm">
                              <Clock className="w-3.5 h-3.5" />
                              {duration.minutes} min
                            </span>
                            <Badge variant="secondary" className="bg-stone-100 text-stone-700">{duration.price}€</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="#reservar">Reservar Una Sesión</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
