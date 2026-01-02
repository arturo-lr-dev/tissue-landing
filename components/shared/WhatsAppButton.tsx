'use client'

import { MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'
import { motion } from 'framer-motion'

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    '¡Hola! Me gustaría obtener más información sobre los servicios de masaje terapéutico.'
  )}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Escríbenos por WhatsApp!
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75" />
    </motion.a>
  )
}
