// Información de contacto
export const CONTACT_INFO = {
  phone: '+34 625 615 290',
  whatsapp: '+34625615290',
  email: 'tissuetherapympl@gmail.com',
  address: {
    street: 'Rúa Mestre Don Manuel, N° 1, Bajo',
    city: 'Narón',
    province: 'A Coruña',
    postalCode: '15570',
    full: 'Rúa Mestre Don Manuel, N° 1, Bajo, 15570 Narón, A Coruña'
  }
}

// Horarios
export const SCHEDULE = {
  weekdays: 'Lunes a Viernes: 9:00 - 20:00',
  saturday: 'Sábados: 10:00 - 14:00',
  sunday: 'Domingos: Cerrado'
}

// Servicios
export const SERVICES = [
  {
    id: 'deep-tissue',
    title: 'Masaje de Tejido Profundo',
    slug: 'masaje-tejido-profundo',
    description: 'Técnica especializada para aliviar tensiones musculares profundas y contracturas crónicas.',
    benefits: [
      'Alivia dolor crónico de espalda, cuello y hombros',
      'Mejora la movilidad articular',
      'Reduce el estrés y la tensión acumulada',
      'Aumenta la circulación sanguínea',
      'Favorece la recuperación post-lesión'
    ],
    idealFor: [
      'Personas con trabajo sedentario',
      'Deportistas y personas activas',
      'Dolor muscular crónico',
      'Posturas incorrectas prolongadas'
    ],
    durations: [
      { minutes: 60, price: 30 },
      { minutes: 90, price: 55 }
    ],
    image: 'https://placehold.co/800x600/7000a0/white?text=Deep+Tissue+Massage'
  },
  {
    id: 'therapeutic',
    title: 'Masaje Terapéutico',
    slug: 'masaje-terapeutico',
    description: 'Tratamiento integral que combina diferentes técnicas para tratar dolencias específicas y mejorar tu salud general.',
    benefits: [
      'Tratamiento personalizado según tus necesidades',
      'Mejora la calidad del sueño',
      'Reduce la ansiedad y el estrés',
      'Alivia migrañas y cefaleas tensionales',
      'Fortalece el sistema inmunológico'
    ],
    idealFor: [
      'Recuperación de lesiones',
      'Tratamiento de dolencias específicas',
      'Mantenimiento de salud preventiva',
      'Gestión del estrés'
    ],
    durations: [
      { minutes: 60, price: 30 },
      { minutes: 90, price: 55 }
    ],
    image: 'https://placehold.co/800x600/7000a0/white?text=Therapeutic+Massage'
  },
  {
    id: 'kinesitherapy',
    title: 'Kinesioterapia',
    slug: 'kinesioterapia',
    description: 'Terapia mediante movimiento para recuperar y mejorar la función musculoesquelética.',
    benefits: [
      'Recuperación funcional post-lesión',
      'Mejora de la movilidad articular',
      'Fortalecimiento muscular específico',
      'Corrección postural',
      'Prevención de lesiones'
    ],
    idealFor: [
      'Rehabilitación post-quirúrgica',
      'Lesiones deportivas',
      'Problemas de movilidad',
      'Prevención de lesiones recurrentes'
    ],
    durations: [
      { minutes: 45, price: 30 },
      { minutes: 60, price: 55 }
    ],
    image: 'https://placehold.co/800x600/7000a0/white?text=Kinesitherapy'
  }
]

// Testimonios
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Manuel Fernandez',
    role: 'Local Guide',
    avatar: 'https://ui-avatars.com/api/?name=Manuel+Fernandez&background=7000a0&color=fff&size=128',
    rating: 5,
    text: 'Muy buen profesional y gran persona. Llegue con bastante dolor y en 2 sesiones la mejora es increible. Totalmente recomendable, y mucho trabajo de manos, el cual marca la diferencia con otros profesionales.',
    service: 'Kinesioterapia'
  },
  {
    id: 2,
    name: 'Jenn Riveira',
    role: 'Local Guide',
    avatar: 'https://ui-avatars.com/api/?name=Jenn+Riveira&background=7000a0&color=fff&size=128',
    rating: 5,
    text: 'Genial! Mil por ciento recomendable. Se preocupa por que salgas como nuev@ de la sesión, siempre me pregunta cómo me ha ido la semana para saber qué zona trabajar. Muy agradable y simpático, te hace sentir comoda en todo momento y es super respetuoso 😀',
    service: 'Masaje Terapéutico'
  },
  {
    id: 3,
    name: 'Noelia Pupi',
    role: '',
    avatar: 'https://ui-avatars.com/api/?name=Noelia+Pupi&background=7000a0&color=fff&size=128',
    rating: 5,
    text: 'Después de ir a muchos centros sin duda este es el mejor, trato estupendo, sitio muy acogedor e higiénico...se nota cuando a la gente le gusta lo que hace y ayudar a los demás. Hacía mucho tiempo que no me sentía tan bien y tan cómoda.',
    service: 'Masaje Terapéutico'
  },
  {
    id: 4,
    name: 'Maria Bardaos',
    role: '',
    avatar: 'https://ui-avatars.com/api/?name=Maria+Bardaos&background=7000a0&color=fff&size=128',
    rating: 5,
    text: 'Excelente experiencia con el fisioterapeuta. Su enfoque profesional y empático, combinado con un tratamiento personalizado, resultó en una notable mejora en mi movilidad y reducción del dolor. Altamente recomendado para aquellos que buscan atención experta y personalizada.',
    service: 'Masaje Terapéutico'
  }
]

// FAQs
export const FAQS = [
  {
    question: '¿Cuánto dura una sesión?',
    answer: 'Las sesiones varían entre 45 y 90 minutos dependiendo del tratamiento elegido. En tu primera visita te recomendaremos la duración ideal para tus necesidades.'
  },
  {
    question: '¿Es doloroso el masaje de tejido profundo?',
    answer: 'El masaje de tejido profundo puede generar cierta incomodidad, pero nunca debe ser doloroso. Trabajamos con presión firme pero controlada, y siempre adaptamos la intensidad a tu tolerancia.'
  },
  {
    question: '¿Cuántas sesiones necesito?',
    answer: 'Depende de tu situación específica. Para dolencias agudas, puedes notar mejora en 2-3 sesiones. Para problemas crónicos, se recomienda un tratamiento de 6-8 sesiones. En la primera consulta evaluaremos tu caso.'
  },
  {
    question: '¿Puedo acudir si tengo una lesión?',
    answer: 'Sí, el masaje terapéutico y la kinesioterapia son excelentes para recuperación de lesiones. Sin embargo, es importante que informes sobre cualquier lesión o condición médica antes del tratamiento.'
  },
  {
    question: '¿Qué debo llevar a mi primera sesión?',
    answer: 'Solo necesitas venir con ropa cómoda. Proporcionamos todo lo necesario para tu sesión: toallas, aceites profesionales y un ambiente preparado para tu comodidad.'
  },
  {
    question: '¿Puedo reservar el mismo día?',
    answer: 'Siempre que haya disponibilidad, sí. Te recomendamos reservar con antelación para asegurar el horario que prefieres, aunque también atendemos citas urgentes cuando es posible.'
  },
  {
    question: '¿Aceptan tarjeta de crédito?',
    answer: 'Sí, aceptamos efectivo, tarjeta de crédito/débito y Bizum para tu comodidad.'
  },
  {
    question: '¿Puedo cancelar o reprogramar mi cita?',
    answer: 'Sí, puedes cancelar o reprogramar con al menos 24 horas de antelación sin coste alguno. Entendemos que surgen imprevistos.'
  },
  {
    question: '¿Ofrecen bonos o paquetes?',
    answer: 'Sí, tenemos bonos de 5 y 10 sesiones con descuentos del 10% y 15% respectivamente. Además, tu primera sesión tiene un 20% de descuento.'
  },
  {
    question: '¿Qué diferencia hay entre masaje terapéutico y de tejido profundo?',
    answer: 'El masaje de tejido profundo se enfoca específicamente en capas musculares profundas con técnicas de presión intensa. El masaje terapéutico es más integral y combina diferentes técnicas según tus necesidades específicas.'
  }
]
