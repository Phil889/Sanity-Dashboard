import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating MiFID Anpassung an neue ESMA/BaFin Vorgaben page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-anpassung-an-neue-esma-bafin-vorgaben' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-anpassung-an-neue-esma-bafin-vorgaben" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können Finanzinstitute eine nachhaltige MiFID-Compliance über die initiale Implementierung hinaus sicherstellen?",
        answer: "Nachhaltige MiFID-Compliance erfordert eine systematische Verankerung regulatorischer Anforderungen in der Organisationsstruktur und -kultur. ADVISORI unterstützt Finanzinstitute bei der Entwicklung eines ganzheitlichen Sustainable Compliance Frameworks, das über punktuelle Anpassungen hinausgeht.\n\n🔄 Strategische Verankerung nachhaltiger Compliance:\n• Continuous Compliance Operating Model: Etablierung eines integrierten Betriebsmodells, das regulatorische Überwachung, Anpassung und Prüfung als kontinuierlichen Prozess statt als Einzelprojekt verankert – dieser systemische Ansatz minimiert die Notwendigkeit von teuren Ad-hoc-Projekten und maximiert die Nachhaltigkeit regulatorischer Investitionen.\n• Regulatory Change Management System: Implementation eines spezialisierten Change-Management-Systems für regulatorische Änderungen mit definierten Verantwortlichkeiten, standardisierten Prozessen und automatisierten Workflows – dieser strukturierte Ansatz transformiert reaktive Compliance-Aktivitäten in proaktives Regulierungsmanagement.\n• Cultural Embedding Strategy: Entwicklung einer Compliance-Kultur, die regulatorische Konformität als integralen Bestandteil der Geschäftsstrategie und individuellen Verantwortung verankert – dieser kulturorientierte Ansatz überwindet die typische Trennung zwischen Business und Compliance und fördert ein unternehmensweites Ownership für regulatorische Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Metriken und KPIs sollten zur Messung des Erfolgs von MiFID-Implementierungsprojekten verwendet werden?",
        answer: "Die effektive Messung des Erfolgs von MiFID-Implementierungsprojekten erfordert ein differenziertes Kennzahlensystem, das über einfache Compliance-Checks hinausgeht. ADVISORI hat ein multidimensionales Regulatory Implementation Performance Framework entwickelt, das strategische, operative und finanzielle Perspektiven integriert.\n\n📊 Multidimensionales Kennzahlensystem für MiFID-Implementierungen:\n• Strategic Alignment Metrics: Kennzahlen zur Messung der Übereinstimmung regulatorischer Implementierungen mit strategischen Geschäftszielen – diese strategieorientierten Metriken bewerten den Wertbeitrag regulatorischer Investitionen und verhindern isolierte Compliance-Silos ohne Geschäftsrelevanz.\n• Operational Excellence KPIs: Leistungsindikatoren für die Effizienz und Effektivität regulatorischer Prozesse wie Durchlaufzeiten, Fehlerraten und Automatisierungsgrad – diese operativen Metriken identifizieren Optimierungspotenziale und sichern kontinuierliche Verbesserung regulatorischer Aktivitäten.\n• Business Impact Indicators: Kennzahlen zur Messung der Auswirkungen regulatorischer Implementierungen auf Geschäftsprozesse, Kundenerlebnis und Mitarbeiterzufriedenheit – diese impact-orientierten Indikatoren erfassen potenzielle Nebenwirkungen und ermöglichen gezielte Gegenmaßnahmen bei negativen Effekten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie kann die Führungsebene MiFID-Änderungen effektiv in der gesamten Organisation kommunizieren?",
        answer: "Effektive Kommunikation regulatorischer Änderungen ist ein kritischer Erfolgsfaktor für erfolgreiche MiFID-Implementierungen, wird jedoch oft auf technische Detailinformationen reduziert. ADVISORI hat ein strategisches Regulatory Change Communication Framework entwickelt, das Kommunikation als zentralen Bestandteil des Transformationsprozesses positioniert.\n\n📣 Strategische Kommunikationsansätze für regulatorische Änderungen:\n• Purpose-driven Communication Strategy: Entwicklung einer sinnorientierten Kommunikationsstrategie, die regulatorische Änderungen mit übergeordneten Unternehmenswerten und Kundennutzen verbindet – dieser purpose-fokussierte Ansatz überwindet typische Compliance-Widerstände und schafft intrinsische Motivation für regulatorische Anpassungen.\n• Stakeholder-specific Messaging: Gestaltung differenzierter Kommunikationsinhalte für verschiedene Stakeholdergruppen basierend auf deren spezifischen Interessen, Verantwortlichkeiten und Betroffenheit – dieser zielgruppenorientierte Ansatz maximiert Relevanz und Wirkung regulatorischer Kommunikation durch maßgeschneiderte Botschaften statt generischer Information.\n• Multi-channel Communication Mix: Implementation eines integrierten Kommunikationsmix, der verschiedene Kanäle, Formate und Zeitpunkte für maximale Erreichbarkeit und Wirkung kombiniert – dieser kanalübergreifende Ansatz berücksichtigt unterschiedliche Informationspräferenzen und sichert konsistente Botschaften über alle Berührungspunkte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Auf welche zukünftigen Entwicklungen im MiFID-Regulierungsumfeld sollten sich Finanzinstitute vorbereiten?",
        answer: "Die MiFID-Regulierung entwickelt sich kontinuierlich weiter, getrieben durch technologische Innovationen, Marktentwicklungen und veränderte Aufsichtsprioritäten. ADVISORI unterstützt Finanzinstitute dabei, nicht nur auf aktuelle Anforderungen zu reagieren, sondern sich proaktiv auf zukünftige regulatorische Entwicklungen vorzubereiten.\n\n🔮 Emerging Regulatory Trends im MiFID-Umfeld:\n• Enhanced ESG Integration: Verstärkte Integration von Nachhaltigkeitsfaktoren in MiFID-Anforderungen mit erweiterten Offenlegungs- und Governance-Pflichten – dieser ESG-fokussierte Trend erfordert umfassende Anpassungen in Produktgestaltung, Beratungsprozessen und Dokumentation mit signifikanten Auswirkungen auf IT-Systeme und Datenarchitekturen.\n• Digital Asset Regulation: Zunehmende regulatorische Konkretisierung für digitale Vermögenswerte und Kryptowährungen im MiFID-Kontext – dieser blockchain-orientierte Trend schafft neue Compliance-Anforderungen für Institute mit Digital-Asset-Aktivitäten und erfordert spezialisierte Expertise an der Schnittstelle von Technologie und Regulierung.\n• AI Governance Framework: Entwicklung spezifischer Governance-Anforderungen für den Einsatz künstlicher Intelligenz in MiFID-relevanten Prozessen – dieser KI-bezogene Trend fokussiert auf Transparenz, Erklärbarkeit und Verantwortlichkeit algorithmischer Entscheidungen und erfordert interdisziplinäre Compliance-Ansätze."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
