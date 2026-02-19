import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix, index) {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating Basel III Capital and Liquidity Requirements page with FAQs batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-kapital-und-liquiditaetsvorschriften-leverage-ratio-lcr-nsfr' })
    
    if (!existingDoc) {
      throw new Error('Document not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Banken ihre IT-Systeme optimal für die Anforderungen der Basel III Kapital- und Liquiditätsvorschriften ausrichten?",
        answer: "Die effektive Umsetzung der Basel III Kapital- und Liquiditätsvorschriften stellt besondere Anforderungen an die IT-Landschaft von Banken. Eine integrierte Datenarchitektur, modulare Systemaufbauten, getrennte Berechnungs- und Reporting-Schichten sowie standardisierte Schnittstellen sind entscheidend für den Erfolg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute die Kosten der Basel III Compliance effektiv managen und optimieren?",
        answer: "Die Einhaltung der Basel III Kapital- und Liquiditätsvorschriften verursacht erhebliche Kosten. Ein strategisches Kostenmanagement muss direkte Implementierungskosten, laufende operative Kosten, Opportunitätskosten und indirekte Kosten berücksichtigen und optimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie werden sich die Basel III Kapital- und Liquiditätsvorschriften in Zukunft weiterentwickeln?",
        answer: "Die Bankenregulierung entwickelt sich kontinuierlich weiter. Zukunftstrends umfassen die Finalisierung von Basel III, Nachhaltigkeitsintegration, Digitalisierungsregulierung und makroprudenzielle Ansätze mit Fokus auf systemische Risiken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Wechselwirkungen bestehen zwischen den Basel III Kapital- und Liquiditätsvorschriften und dem Risikomanagement von Banken?",
        answer: "Basel III und Risikomanagement stehen in einer bidirektionalen Beziehung. Sie teilen konzeptionelle Grundlagen, Datenanforderungen und Governance-Strukturen. Eine effektive Integration beider Dimensionen schafft erhebliche Synergien und Mehrwerte für Finanzinstitute."
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
