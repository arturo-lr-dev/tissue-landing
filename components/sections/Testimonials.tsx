import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar'
import { FadeIn } from '@/components/animations/FadeIn'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <Card className="h-full bg-white hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        {/* Quote Icon */}
        <Quote className="w-10 h-10 text-green-200 mb-4" />

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 border-t pt-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-green-100 text-green-600">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
          </div>
        </div>

        {/* Service Badge */}
        <div className="mt-4">
          <Badge variant="secondary" className="text-xs">
            {testimonial.service}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor aval
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>

        {/* Trust Badges */}
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-12 mt-12 p-8 bg-white rounded-xl shadow-sm">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium">
                Satisfacción
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">
                1000+
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Clientes Felices
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">5.0</div>
              <div className="text-sm text-gray-600 font-medium">
                Valoración Media
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
