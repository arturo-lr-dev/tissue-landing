import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar'
import { FadeIn } from '@/components/animations/FadeIn'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="h-full p-8 rounded-2xl bg-warm-white border border-stone-200/50 hover:shadow-lg hover:shadow-primary-900/5 transition-all duration-500">
      {/* Quote */}
      <Quote className="w-8 h-8 text-primary-300 mb-5" />

      {/* Rating */}
      <div className="flex gap-1 mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary-400 text-primary-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-stone-600 mb-8 leading-[1.8] text-[15px]">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
        <Avatar className="w-11 h-11">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-primary-100 text-primary-700 font-heading font-semibold">
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-stone-900 text-sm">{testimonial.name}</div>
          {testimonial.role && (
            <div className="text-xs text-stone-400">{testimonial.role}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 bg-cream grain">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Testimonios</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6 text-stone-900">
              Lo que dicen nuestros <span className="italic font-normal">clientes</span>
            </h2>
            <div className="w-16 h-px bg-primary-400 mx-auto mb-6" />
            <p className="text-lg text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
              La satisfacción de nuestros clientes es nuestro mejor aval
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>

        {/* Google rating */}
        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
              ))}
            </div>
            <span className="text-stone-600 text-sm">
              <span className="font-semibold">5.0</span> en Google Reviews
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
