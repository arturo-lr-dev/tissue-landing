import { CONTACT_INFO, SCHEDULE, SERVICES, FAQS, TESTIMONIALS } from '@/lib/constants'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tissuetherapy.es'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${baseUrl}/#business`,
  name: 'Tissue Therapy',
  description:
    'Masaje profesional en Narón. Tejido profundo, tratamiento craneal y técnicas manuales especializadas.',
  url: baseUrl,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  image: `${baseUrl}/og-image-min.png`,
  logo: `${baseUrl}/images/logo.png`,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.province,
    postalCode: CONTACT_INFO.address.postalCode,
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.4986946,
    longitude: -8.2045848,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '10:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '16:00',
      closes: '20:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    reviewCount: String(TESTIMONIALS.length),
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(t.rating),
      bestRating: '5',
    },
    reviewBody: t.text,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de masaje',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
      priceSpecification: service.durations.map((d) => ({
        '@type': 'UnitPriceSpecification',
        price: String(d.price),
        priceCurrency: 'EUR',
        unitText: `${d.minutes} minutos`,
      })),
    })),
  },
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
