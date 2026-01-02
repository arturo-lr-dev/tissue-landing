import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/animations/FadeIn'
import { Check, Sparkles, Waves, Heart, Activity } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap = {
  'deep-tissue': Waves,
  'therapeutic': Heart,
  'kinesitherapy': Activity
}

const bonos = [
  {
    sessions: 5,
    discount: '10%',
    savings: 'hasta 35€'
  },
  {
    sessions: 10,
    discount: '15%',
    savings: 'hasta 105€',
    popular: true
  }
]

const included = [
  'Consulta personalizada',
  'Productos profesionales',
  'Ambiente relajante',
  'Recomendaciones',
  'Flexibilidad horaria'
]

export function Pricing() {
  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Nuestras Tarifas
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Precios transparentes sin sorpresas. Invierte en tu bienestar.
          </p>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id as keyof typeof iconMap]

            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Price Options */}
                    <div className="space-y-3 mb-6">
                      {service.durations.map((duration, i) => {
                        const isPopular = i === 1 // 90 min is usually popular
                        return (
                          <div
                            key={i}
                            className={`flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                              isPopular
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-200'
                            }`}
                          >
                            <span className="font-medium">
                              {duration.minutes} min
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-primary-600">
                                {duration.price}€
                              </span>
                              {isPopular && (
                                <Badge variant="default" className="text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.benefits.slice(0, 4).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{benefit}</span>
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

        {/* Bonos Section */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
              💎 Bonos de Ahorro
            </h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {bonos.map((bono, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur rounded-xl p-8 relative ${
                    bono.popular ? 'ring-2 ring-white shadow-2xl' : ''
                  }`}
                >
                  {bono.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black border-0">
                      Más Popular
                    </Badge>
                  )}

                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">
                      {bono.sessions}
                    </div>
                    <div className="text-xl mb-4">Sesiones</div>
                    <div className="text-4xl font-bold text-yellow-300 mb-2">
                      {bono.discount} OFF
                    </div>
                    <div className="text-sm opacity-90">
                      Ahorra {bono.savings}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#reservar">Consultar Bonos</Link>
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* First Session Offer */}
        <FadeIn delay={0.4}>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h4 className="text-3xl font-bold mb-2">
              ¡Oferta Primera Sesión!
            </h4>
            <p className="text-lg text-gray-700 mb-4">
              20% de descuento en tu primera visita
            </p>
            <Button size="lg" asChild>
              <Link href="#reservar">Aprovechar Oferta</Link>
            </Button>
          </div>
        </FadeIn>

        {/* Included Section */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <h4 className="text-2xl font-bold mb-8">
              ✨ Incluido en Todas las Sesiones
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {included.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
