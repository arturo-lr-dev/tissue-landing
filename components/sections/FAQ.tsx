import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import { FadeIn } from '@/components/animations/FadeIn'
import { MessageCircle } from 'lucide-react'
import { FAQS } from '@/lib/constants'

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-cream grain">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Dudas</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-6 text-stone-900">
              Preguntas <span className="italic font-normal">Frecuentes</span>
            </h2>
            <div className="w-16 h-px bg-primary-400 mx-auto" />
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-stone-200/60 bg-warm-white rounded-xl px-6 hover:border-primary-400/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-heading font-semibold text-lg pr-4 text-stone-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-500 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-stone-500 mb-4">
              ¿Tienes más preguntas?
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="#contacto">
                Contáctanos
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
