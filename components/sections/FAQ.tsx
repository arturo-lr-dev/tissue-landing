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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Resolvemos tus dudas para que tomes la mejor decisión
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 hover:border-primary-600 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-lg pr-4 text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 text-lg">
              ¿Tienes más preguntas?
            </p>
            <Button variant="outline" size="lg" asChild>
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
