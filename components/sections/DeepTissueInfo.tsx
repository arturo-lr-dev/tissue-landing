import { FadeIn } from '@/components/animations/FadeIn'

export function DeepTissueInfo() {
  return (
    <section id="que-es" className="py-24 bg-warm-white grain overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Editorial-style layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left column - large quote/title */}
            <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="text-sm uppercase tracking-[0.3em] text-primary-500 font-medium">Conoce la técnica</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mt-4 mb-8 text-stone-900 leading-[1.05]">
                ¿Qué es el masaje de{' '}
                <span className="italic font-normal text-primary-600">tejido profundo</span>?
              </h2>
              <div className="w-16 h-px bg-primary-400 mb-8" />
              <p className="text-lg text-stone-500 font-light italic leading-relaxed">
                &ldquo;No hay máquinas, aparatos modernos o técnicas vanguardistas, únicamente deducción y lógica.&rdquo;
              </p>
            </FadeIn>

            {/* Right column - flowing text */}
            <FadeIn delay={0.2} className="lg:col-span-7">
              <div className="space-y-6 text-stone-600 leading-[1.85] text-base">
                <p>
                  Indicado para tratar dolencias comunes y problemas o patologías crónicas,
                  el masaje de tejido profundo, o <em className="text-stone-800 not-italic font-medium">&ldquo;Deep tissue&rdquo;</em>, actúa sobre la capa muscular
                  interna.
                </p>

                <p>
                  Al ser la musculatura más próxima a nuestro sistema óseo, conseguimos
                  actuar directamente en el foco del problema, solucionando patologías como
                  contracturas crónicas o en estado avanzado, restricciones de movilidad o
                  problemas posturales.
                </p>

                <p>
                  Es un masaje lento, intenso y profundo, por lo que fácilmente resulta doloroso.
                  A cambio, el trabajo en la musculatura interna provocará la liberación de
                  adherencias en nuestro sistema músculo esquelético, además de la relajación
                  del sistema nervioso central, por lo que es muy probable que se solucionen
                  problemas secundarios por los que ni siquiera habíamos acudido.
                </p>

                <div className="bg-primary-50/60 border-l-2 border-primary-400 pl-6 py-4 my-8 rounded-r-lg">
                  <p className="text-stone-800 font-medium leading-relaxed">
                    El objetivo principal se centra en devolver al músculo su elasticidad, que trabaje
                    simétricamente, en harmonía y en su correcto rango de movimiento.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
