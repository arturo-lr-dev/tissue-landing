import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/animations/FadeIn'
import { Check, Clock, ArrowRight, Waves, Heart, Activity } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap = {
  'deep-tissue': Waves,
  'therapeutic': Heart,
  'kinesitherapy': Activity
}

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Tratamientos profesionales adaptados a tus necesidades específicas
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id as keyof typeof iconMap]
            const lowestPrice = Math.min(...service.durations.map(d => d.price))

            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Link href={`#reservar`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-primary-600">
                          Desde {lowestPrice}€
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-4">{service.description}</p>

                      <div className="space-y-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2 pt-4 border-t border-gray-200">
                        {service.durations.map((duration, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {duration.minutes} min
                            </span>
                            <Badge variant="secondary">{duration.price}€</Badge>
                          </div>
                        ))}
                      </div>

                      {false && <div className="mt-4 pt-4 border-t border-gray-200">
                        <span className="text-primary-600 font-semibold flex items-center gap-1 justify-center group-hover:gap-2 transition-all">
                          Más información
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>}
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
