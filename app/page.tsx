import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { DeepTissueInfo } from '@/components/sections/DeepTissueInfo'
import { Benefits } from '@/components/sections/Benefits'
import { About } from '@/components/sections/About'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { Location } from '@/components/sections/Location'
import { CTA } from '@/components/sections/CTA'
import { QuoteBanner } from '@/components/sections/QuoteBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteBanner quote="Aprende a escuchar tu cuerpo" variant="default" />
      <Services />
      <DeepTissueInfo />
      <QuoteBanner quote="Si sólo acudes cuando duele, nunca habrá una evolución" variant="accent" />
      <Benefits />
      <QuoteBanner quote="El masaje es prevención, no solución" variant="dark" />
      <About />
      <QuoteBanner quote="Un masaje al año es lo mismo que una ducha al mes" variant="default" />
      <Process />
      <QuoteBanner quote="Crea una rutina, no una guerra" variant="accent" />
      <Testimonials />
      <Pricing />
      <QuoteBanner quote="Si crees que no vas a mejorar, ya has perdido" variant="dark" />
      <FAQ />
      <Location />
      <QuoteBanner quote="Un músculo descuidado es igual que el hierro a la intemperie" variant="accent" />
      <CTA />
    </>
  )
}
