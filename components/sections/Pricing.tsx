import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { Check, Waves, Heart, Brain } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap = {
  'deep-tissue': Waves,
  'circulation': Heart,
  'craneal': Brain
}

export function Pricing() {
  return (
    <section id="precios" className="py-24 bg-warm-white grain">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Inversión</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6 text-stone-900">
              Nuestras <span className="italic font-normal">Tarifas</span>
            </h2>
            <div className="w-16 h-px bg-primary-400 mx-auto mb-6" />
            <p className="text-lg text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
              Precios transparentes sin sorpresas. Invierte en tu bienestar.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id as keyof typeof iconMap]

            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Card className="h-full border-stone-200/60 bg-white hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-stone-900 mb-2">{service.title}</h3>
                    <p className="text-stone-500 text-sm mb-6">{service.description}</p>

                    {/* Price Options */}
                    <div className="space-y-3 mb-6">
                      {service.durations.map((duration, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 rounded-xl border border-stone-200 hover:border-primary-300 transition-colors"
                        >
                          <span className="text-stone-600 text-sm font-medium">
                            {duration.minutes} min
                          </span>
                          <span className="text-2xl font-heading font-semibold text-primary-600">
                            {duration.price}€
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-8">
                      {service.benefits.slice(0, 4).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-stone-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full" asChild>
                      <Link href="#reservar">Reservar Ahora</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
