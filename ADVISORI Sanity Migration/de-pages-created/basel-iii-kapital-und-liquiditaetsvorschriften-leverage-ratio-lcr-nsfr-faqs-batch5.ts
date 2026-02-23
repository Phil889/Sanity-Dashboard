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
    console.log('Updating Basel III Capital and Liquidity Requirements page with FAQs batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-kapital-und-liquiditaetsvorschriften-leverage-ratio-lcr-nsfr' })
    
    if (!existingDoc) {
      throw new Error('Document not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche speziellen Herausforderungen stellen die Basel III Liquiditätsanforderungen (LCR und NSFR) für kleinere und mittlere Banken dar?",
        answer: "Kleinere und mittlere Banken stehen bei der Umsetzung der Basel III Liquiditätsanforderungen vor besonderen Herausforderungen. Diese umfassen begrenzte personelle und technische Ressourcen, eingeschränkten Zugang zu diversifizierten Finanzierungsquellen, Schwierigkeiten bei der Erfassung granularer Daten sowie Proportionalitätsfragen. Angepasste Implementierungsstrategien und regulatorische Verhältnismäßigkeit sind für diese Institute besonders wichtig."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Banken die Leverage Ratio effektiv in ihre strategische Geschäftsplanung integrieren?",
        answer: "Die Integration der Leverage Ratio in die strategische Geschäftsplanung erfordert einen ganzheitlichen Ansatz. Banken sollten die Leverage Ratio in ihre Risiko-Appetit-Rahmenwerke und Limitsysteme aufnehmen, Auswirkungsanalysen für neue Geschäftsinitiativen durchführen, die Bilanzstruktur aktiv steuern und regelmäßige Stresstests implementieren. Ein integrierter Planungsprozess, der sowohl die Leverage Ratio als auch risikobasierte Kapitalquoten berücksichtigt, ist essentiell."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Best Practices haben sich für die Überwachung und Steuerung der NSFR (Net Stable Funding Ratio) etabliert?",
        answer: "Erfolgreiche NSFR-Steuerung basiert auf mehreren Best Practices: Etablierung einer dedizierten NSFR-Governance mit klaren Verantwortlichkeiten, Entwicklung granularer Prognosemodelle, Integration der NSFR in das Funds Transfer Pricing und Produktdesign, proaktives Management von Fälligkeitsprofilen sowie regelmäßige Stresstests unter verschiedenen Marktszenarien. Eine enge Abstimmung zwischen Treasury, Risikomanagement und Geschäftsbereichen ist dabei entscheidend."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Inwiefern beeinflussen die Basel III Kapital- und Liquiditätsvorschriften die Entwicklung des Bankensektors insgesamt?",
        answer: "Die Basel III Kapital- und Liquiditätsvorschriften haben weitreichende Auswirkungen auf die Entwicklung des Bankensektors: Sie fördern Konsolidierungsprozesse, verändern Geschäftsmodelle hin zu kapitaleffizienteren Aktivitäten, erhöhen Eintrittsbarrieren für neue Marktteilnehmer und verstärken den Wettbewerb um stabile Finanzierungsquellen. Gleichzeitig stärken sie die Systemstabilität, reduzieren die Wahrscheinlichkeit von Bankenkrisen und fördern eine nachhaltigere Risikokultur in der gesamten Branche."
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
    console.log('FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
