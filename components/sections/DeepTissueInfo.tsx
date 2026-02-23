import { FadeIn } from '@/components/animations/FadeIn'

export function DeepTissueInfo() {
  return (
    <section id="que-es" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            ¿Sabes qué es el masaje de tejido profundo?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Indicado para tratar dolencias comunes y problemas o patologías crónicas,
              el masaje de tejido profundo, o &quot;Deep tissue&quot;, actúa sobre la capa muscular
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

            <p className="font-medium text-gray-900">
              El objetivo principal se centra en devolver al músculo su elasticidad, que trabaje
              simétricamente, en harmonía y en su correcto rango de movimiento.
            </p>

            <p className="italic text-gray-800">
              No hay máquinas, aparatos modernos o técnicas vanguardistas, únicamente
              deducción y lógica.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
