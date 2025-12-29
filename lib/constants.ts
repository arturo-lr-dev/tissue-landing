// Información de contacto
export const CONTACT_INFO = {
  phone: '+34 625 615 290',
  whatsapp: '+34625615290',
  email: 'info@tissuetherapy.es',
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
      { minutes: 60, price: 45 },
      { minutes: 90, price: 65 }
    ],
    image: 'https://placehold.co/800x600/10b981/white?text=Deep+Tissue+Massage'
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
      { minutes: 60, price: 50 },
      { minutes: 90, price: 70 }
    ],
    image: 'https://placehold.co/800x600/10b981/white?text=Therapeutic+Massage'
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
      { minutes: 45, price: 40 },
      { minutes: 60, price: 50 }
    ],
    image: 'https://placehold.co/800x600/10b981/white?text=Kinesitherapy'
  }
]

// Testimonios
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'María González',
    role: 'Profesora, 42 años',
    avatar: 'https://ui-avatars.com/api/?name=Maria+Gonzalez&background=10b981&color=fff&size=128',
    rating: 5,
    text: 'Después de meses con dolor de espalda crónico, finalmente encontré alivio en Tissue Therapy. El trato es excelente y los resultados increíbles.',
    service: 'Masaje Terapéutico'
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    role: 'Corredor, 35 años',
    avatar: 'https://ui-avatars.com/api/?name=Carlos+Martinez&background=10b981&color=fff&size=128',
    rating: 5,
    text: 'Como deportista, necesitaba un profesional que entendiera mis necesidades. Las sesiones de kinesioterapia me han ayudado a recuperarme más rápido de mis entrenamientos y prevenir lesiones.',
    service: 'Kinesioterapia'
  },
  {
    id: 3,
    name: 'Laura Fernández',
    role: 'Administrativa, 38 años',
    avatar: 'https://ui-avatars.com/api/?name=Laura+Fernandez&background=10b981&color=fff&size=128',
    rating: 5,
    text: 'El masaje de tejido profundo cambió mi vida. Trabajo muchas horas en oficina y tenía contracturas constantes. Ahora me siento mucho mejor y con más energía.',
    service: 'Masaje de Tejido Profundo'
  },
  {
    id: 4,
    name: 'Javier López',
    role: 'Ingeniero, 45 años',
    avatar: 'https://ui-avatars.com/api/?name=Javier+Lopez&background=10b981&color=fff&size=128',
    rating: 5,
    text: 'Ambiente muy profesional y relajante. El terapeuta se toma el tiempo para entender tu problema y adaptar el tratamiento. Los resultados hablan por sí solos.',
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
