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
    console.log('Updating KRITIS Prozessanpassungen bei neuen Bedrohungen page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-prozessanpassungen-bei-neuen-bedrohungen' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-prozessanpassungen-bei-neuen-bedrohungen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann eine strategische Threat Intelligence Integration die Entscheidungsfindung der C-Suite verbessern und neue Geschäftschancen eröffnen?",
        answer: "Strategische Threat Intelligence Integration transformiert Sicherheitsdaten in wertvolle Geschäftsintelligenz, die weit über traditionelle Risikoabwehr hinausgeht. Für die C-Suite wird Threat Intelligence zu einem strategischen Entscheidungsinstrument, das nicht nur Bedrohungen antizipiert, sondern auch Marktchancen, Wettbewerbsvorteile und Innovationsmöglichkeiten aufzeigt.\n\n🎯 Strategische Intelligence-Dimensionen:\n• Market Intelligence Integration: Cyber-Threat-Daten offenbaren branchenspezifische Trends und Schwachstellen bei Wettbewerbern, die strategische Geschäftschancen und Marktpositionierungsmöglichkeiten aufzeigen.\n• Investment Risk Assessment: Detaillierte Bedrohungsanalysen ermöglichen präzisere Risikobewertungen für M&A-Aktivitäten, Partnerschaften und Technologieinvestitionen.\n• Innovation Pathway Identification: Bedrohungsanalysen zeigen technologische Schwachstellen auf, die neue Produktentwicklungsmöglichkeiten und Serviceangebote inspirieren können.\n• Regulatory Anticipation: Frühzeitige Erkennung von Bedrohungstrends ermöglicht proaktive Positionierung bei zukünftigen Regulierungsänderungen.\n\n🔍 ADVISORIs Intelligence-to-Business-Value Ansatz:\n• Executive Intelligence Dashboards: Entwicklung maßgeschneiderter Intelligence-Dashboards, die C-Level-relevante Bedrohungstrends in geschäftsstrategische Insights übersetzen.\n• Competitive Intelligence Integration: Verknüpfung von Cyber-Threat-Intelligence mit Competitive Intelligence für umfassende Marktanalysen.\n• Strategic Planning Integration: Einbindung von Threat Intelligence in strategische Planungsprozesse zur Risiko-adjustierten Geschäftsentwicklung.\n• Innovation Pipeline Feeding: Systematische Nutzung von Bedrohungsanalysen zur Identifikation neuer Geschäftsfelder und Produktentwicklungsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt organisatorische Agilität bei der erfolgreichen Implementierung adaptiver KRITIS-Sicherheitsprozesse?",
        answer: "Organisatorische Agilität ist der entscheidende Erfolgsfaktor für adaptive KRITIS-Sicherheitsprozesse. Während technische Lösungen die Grundlage bilden, bestimmt die organisatorische Fähigkeit zur schnellen Anpassung letztendlich die Wirksamkeit und den Geschäftswert von Sicherheitsinnovationen. Agile Organisationen können Bedrohungen nicht nur schneller erkennen und darauf reagieren, sondern diese auch als Katalysator für Geschäftsinnovationen nutzen.\n\n⚡ Dimensionen organisatorischer Agilität in der Sicherheit:\n• Decision Speed Optimization: Agile Entscheidungsstrukturen ermöglichen es, innerhalb von Stunden statt Tagen auf neue Bedrohungen zu reagieren und Wettbewerbsvorteile durch schnelle Reaktionszeiten zu erzielen.\n• Cross-functional Integration: Sicherheit wird nicht als isolierte IT-Funktion betrachtet, sondern als integraler Bestandteil aller Geschäftsprozesse, was ganzheitliche und effektivere Lösungen ermöglicht.\n• Learning Organization Development: Kontinuierliche Lernprozesse aus Sicherheitserfahrungen schaffen organisatorische Kompetenz für zukünftige Herausforderungen.\n• Resource Flexibility: Agile Ressourcenallokation ermöglicht schnelle Neupriorisierung und Fokussierung auf kritische Bedrohungen ohne Geschäftsunterbrechung.\n\n🔄 ADVISORIs Agility-enablement Strategie:\n• Agile Governance Implementation: Entwicklung schlanker, schneller Governance-Strukturen, die Sicherheitsentscheidungen beschleunigen ohne Kontrolle zu verlieren.\n• Cultural Transformation Programs: Aufbau einer sicherheitsbewussten, aber innovationsfreundlichen Kultur, die Risikobewusstsein mit Experimentierfreude verbindet.\n• Continuous Feedback Loops: Etablierung systematischer Lernzyklen, die aus jeder Bedrohungsreaktion wertvolle Erkenntnisse für organisatorische Verbesserungen gewinnen.\n• Skill Agility Development: Aufbau multipler Kompetenzstränge, die flexible Reaktionen auf verschiedene Bedrohungsszenarien ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Cloud-native Sicherheitsarchitekturen die Anpassungsfähigkeit an neue Bedrohungen beschleunigen und gleichzeitig Kosten optimieren?",
        answer: "Cloud-native Sicherheitsarchitekturen revolutionieren die Anpassungsfähigkeit an neue Bedrohungen durch inhärente Flexibilität, Skalierbarkeit und Kosteneffizienz. Sie ermöglichen es kritischen Infrastrukturen, von starren, kapitalintensiven Sicherheitslösungen zu agilen, service-orientierten Modellen zu wechseln, die sich dynamisch an verändernde Bedrohungslagen anpassen können.\n\n☁️ Cloud-native Agilität-Enabler:\n• Elastic Security Scaling: Automatische Skalierung von Sicherheitsressourcen basierend auf Bedrohungsintensität ermöglicht kostenoptimierte Reaktionen ohne Über- oder Unterkapazitäten.\n• Rapid Deployment Capabilities: Neue Sicherheitsmaßnahmen können innerhalb von Minuten statt Monaten implementiert werden, was kritisch für die Reaktion auf Zero-Day-Bedrohungen ist.\n• Continuous Security Integration: DevSecOps-Ansätze integrieren Sicherheit nahtlos in Entwicklungs- und Deployment-Zyklen, wodurch adaptive Sicherheit zur Standardpraxis wird.\n• Global Intelligence Integration: Cloud-basierte Threat Intelligence kann sofort globale Bedrohungsdaten aggregieren und organisationsspezifische Anpassungen ermöglichen.\n\n💰 Kostenoptimierung durch Cloud-native Sicherheit:\n• Pay-per-Use Modelle: Transformation von hohen Capex-Investitionen in flexible Opex-Modelle reduziert finanzielle Risiken und ermöglicht bessere Budgetplanung.\n• Shared Security Resources: Nutzung geteilter Cloud-Sicherheitsinfrastrukturen reduziert individuelle Kosten bei gleichzeitig höherer Sicherheitsqualität.\n• Automated Operations: Intelligente Automatisierung reduziert manuelle Sicherheitsoperationen um bis zu 70% und schafft Kapazitäten für strategische Aufgaben.\n• Innovation Acceleration: Cloud-native Architekturen ermöglichen schnellere Integration neuer Sicherheitstechnologien ohne Legacy-System-Constraints."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Metriken und KPIs sollten C-Level-Führungskräfte verwenden, um den Erfolg adaptiver KRITIS-Prozessanpassungen zu messen?",
        answer: "Die Messung des Erfolgs adaptiver KRITIS-Prozessanpassungen erfordert eine ausgewogene Kombination aus traditionellen Sicherheitsmetriken und innovativen Geschäftswert-Indikatoren. C-Level-Führungskräfte benötigen Kennzahlen, die sowohl operative Effektivität als auch strategischen Geschäftsbeitrag quantifizieren und eine datenbasierte Optimierung ermöglichen.\n\n📊 Strategische Performance-Dimensionen:\n• Threat Response Velocity: Messung der Zeit von Bedrohungserkennung bis zur wirksamen Gegenmaßnahme – Zielwert unter 4 Stunden für kritische Bedrohungen zeigt organisatorische Agilität.\n• Business Continuity Index: Prozentsatz kritischer Geschäftsprozesse, die während Sicherheitsupdates ohne Unterbrechung weiterlaufen – höhere Werte zeigen bessere Anpassungsfähigkeit.\n• Innovation Enablement Rate: Anzahl neuer Geschäftsinitiativen, die aufgrund verbesserter Sicherheitsagilität umgesetzt werden konnten – zeigt den Geschäftswert adaptiver Sicherheit.\n• Compliance Adaptability Score: Geschwindigkeit und Vollständigkeit der Anpassung an neue Regulierungsanforderungen gemessen in Tagen/Wochen statt Monaten.\n\n💼 Geschäftswert-orientierte KPIs:\n• Security ROI Evolution: Entwicklung des Returns on Security Investment über Zeit, inklusive vermiedener Kosten und ermöglichter Geschäftschancen.\n• Threat Intelligence Business Value: Anzahl geschäftsrelevanter Insights aus Threat Intelligence, die zu strategischen Entscheidungen oder neuen Opportunitäten führten.\n• Adaptive Capability Maturity: Bewertung der organisatorischen Fähigkeit zur kontinuierlichen Sicherheitsevolution anhand definierter Reifegradmodelle.\n• Stakeholder Confidence Index: Regelmäßige Bewertung des Vertrauens von Investoren, Kunden und Regulatoren in die Sicherheits- und Anpassungsfähigkeit des Unternehmens."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
