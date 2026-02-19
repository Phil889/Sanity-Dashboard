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
    console.log('Updating ESG Strategie & Governance page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir eine ESG-Kommunikationsstrategie entwickeln, die sowohl interne Mitarbeiter als auch externe Stakeholder überzeugt und dabei authentisch bleibt?",
        answer: "Eine wirksame ESG-Kommunikationsstrategie muss verschiedene Zielgruppen mit unterschiedlichen Botschaften und Kanälen ansprechen, während sie gleichzeitig Konsistenz und Authentizität gewährleistet. Die Herausforderung liegt darin, komplexe Nachhaltigkeitsthemen verständlich zu vermitteln und echte Fortschritte von symbolischen Gesten zu unterscheiden.\n\n🎯 Kernprinzipien authentischer ESG-Kommunikation:\n• Transparenz über Fortschritte und Herausforderungen: Ehrliche Darstellung sowohl der Erfolge als auch der Bereiche, in denen noch Verbesserungsbedarf besteht.\n• Evidenzbasierte Kommunikation: Verwendung konkreter Daten, Metriken und messbarer Ergebnisse statt vager Nachhaltigkeitsversprechen.\n• Stakeholder-spezifische Botschaften: Anpassung der Kommunikation an die spezifischen Interessen und Informationsbedürfnisse verschiedener Zielgruppen.\n• Konsistenz über alle Kanäle: Einheitliche Botschaften in allen Kommunikationskanälen, von internen Mitteilungen bis zu externen Berichten.\n\n📢 ADVISORIs Kommunikationsstrategie-Framework:\n• Stakeholder-Kommunikationsmatrix: Entwicklung spezifischer Kommunikationspläne für verschiedene Zielgruppen mit angepassten Botschaften, Kanälen und Frequenzen.\n• Storytelling-Ansatz: Transformation von ESG-Daten in überzeugende Narratives, die emotionale Verbindungen schaffen und Verständnis fördern.\n• Multi-Channel-Integration: Koordinierte Nutzung verschiedener Kommunikationskanäle von Social Media über Nachhaltigkeitsberichte bis zu Mitarbeiterveranstaltungen.\n• Feedback-Loop-Implementation: Etablierung systematischer Mechanismen zur Sammlung und Integration von Stakeholder-Feedback in die Kommunikationsstrategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Herausforderungen entstehen bei der internationalen ESG-Harmonisierung in multinationalen Unternehmen, und wie können wir lokale Anforderungen mit globalen Standards vereinbaren?",
        answer: "Die ESG-Harmonisierung in multinationalen Unternehmen erfordert ein ausgewogenes Management zwischen globaler Konsistenz und lokaler Relevanz. Verschiedene Rechtssysteme, kulturelle Kontexte und Markterwartungen schaffen komplexe Anforderungsmatrizes, die strategische Koordination und operative Flexibilität erfordern.\n\n🌍 Komplexitätsdimensionen globaler ESG-Harmonisierung:\n• Regulatorische Fragmentierung: Unterschiedliche ESG-Regelwerke in verschiedenen Jurisdiktionen, von EU-Taxonomie über SEC-Climate-Rules bis zu lokalen Nachhaltigkeitsstandards.\n• Kulturelle Kontextabhängigkeit: Verschiedene gesellschaftliche Prioritäten und Wertesysteme, die unterschiedliche ESG-Fokussierungen erfordern.\n• Entwicklungsgrad-Unterschiede: Varying levels of infrastructure and capabilities across different markets affecting ESG implementation feasibility.\n• Stakeholder-Erwartungsvariation: Unterschiedliche Anspruchsgruppen in verschiedenen Märkten mit diversen ESG-Prioritäten und Kommunikationspräferenzen.\n\n⚖️ ADVISORIs Global-Local-Balance-Strategie:\n• ESG-Governance-Matrix: Entwicklung einer Governance-Struktur, die globale Standards definiert, aber lokale Anpassungen innerhalb definierter Parameter ermöglicht.\n• Materiality-Mapping: Länder- und regionsspezifische Materialitätsanalysen zur Identifikation lokal relevanter ESG-Themen bei Beibehaltung globaler Kernthemen.\n• Flexible-Framework-Design: Aufbau von ESG-Frameworks mit globalen Mindeststandards und lokalen Enhancement-Möglichkeiten.\n• Cross-Cultural-Change-Management: Entwicklung kultursensitiver Implementierungsansätze, die lokale Besonderheiten respektieren und nutzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir ESG-Performance systematisch messen und bewerten, ohne in eine reine Kennzahlen-Optimierung zu verfallen, die das Wesentliche verfehlt?",
        answer: "Effektive ESG-Performance-Messung erfordert ein ausgewogenes System aus quantitativen Metriken und qualitativen Bewertungen, das sowohl Outcome- als auch Impact-Orientierung berücksichtigt. Die Herausforderung liegt darin, messbare Fortschritte zu dokumentieren, ohne dabei in oberflächliche KPI-Optimierung zu verfallen, die echte Nachhaltigkeitswirkung verfehlt.\n\n📊 Dimensionen holistischer ESG-Performance-Messung:\n• Outcome vs. Impact Differentiation: Unterscheidung zwischen direkten Unternehmensleistungen (z.B. CO2-Reduktion) und gesellschaftlichen Auswirkungen (z.B. Beitrag zu Klimazielen).\n• Leading vs. Lagging Indicators: Balance zwischen vorausschauenden Indikatoren (z.B. ESG-Investitionen) und rückblickenden Ergebnissen (z.B. Emissionsreduktion).\n• Quantitative und qualitative Integration: Kombination harter Daten mit narrativen Bewertungen von Fortschritt und Herausforderungen.\n• Stakeholder-Value-Perspektiven: Berücksichtigung unterschiedlicher Wertdefinitionen verschiedener Anspruchsgruppen.\n\n🎯 ADVISORIs Performance-Measurement-Framework:\n• Materiality-weighted KPI System: Gewichtung von ESG-Kennzahlen nach ihrer strategischen Relevanz und Stakeholder-Wichtigkeit statt gleichmäßiger Behandlung aller Metriken.\n• Dynamic-Baseline-Management: Regelmäßige Anpassung von Vergleichswerten und Zielen basierend auf sich ändernden externen Bedingungen und internen Entwicklungen.\n• Third-Party-Validation: Integration externer Verifizierung und Benchmarking zur Sicherstellung objektiver Performance-Bewertung.\n• Continuous-Improvement-Cycles: Implementierung systematischer Review- und Anpassungsprozesse für Kennzahlensysteme basierend auf Learnings und Feedback."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt künstliche Intelligenz und Datenanalyse in der Zukunft des ESG-Managements, und wie können wir diese Technologien strategisch nutzen?",
        answer: "Künstliche Intelligenz und fortgeschrittene Datenanalyse revolutionieren ESG-Management durch automatisierte Insights, prädiktive Analysen und skalierbare Überwachung komplexer Nachhaltigkeitssysteme. Diese Technologien ermöglichen es Unternehmen, von reaktivem zu proaktivem ESG-Management überzugehen und dabei Effizienz und Effektivität erheblich zu steigern.\n\n🤖 AI-Enhanced ESG-Management-Kapazitäten:\n• Predictive ESG Risk Analytics: Machine Learning Algorithmen zur Früherkennung von ESG-Risiken durch Analyse von Marktdaten, Klimamodellen und sozialen Trends.\n• Automated ESG Data Collection: KI-gestützte Systeme zur automatischen Sammlung und Validierung von ESG-Daten aus internen und externen Quellen.\n• Real-time Supply Chain Monitoring: AI-powered tracking von Nachhaltigkeitsperformance entlang komplexer Lieferketten mit Anomalie-Erkennung.\n• Stakeholder Sentiment Analysis: Natürliche Sprachverarbeitung zur Analyse von Stakeholder-Feedback und öffentlicher Wahrnehmung in sozialen Medien und Nachrichtenquellen.\n\n🚀 ADVISORIs AI-Strategy für ESG-Excellence:\n• AI-Readiness-Assessment: Bewertung der technischen und organisatorischen Voraussetzungen für erfolgreiche AI-Integration in ESG-Prozesse.\n• Use-Case-Priorisierung: Identifikation und Ranking von AI-Anwendungsfällen nach Wertpotenzial und Implementierungsaufwand.\n• Data-Quality-Enhancement: Aufbau robuster Dateninfrastrukturen als Grundlage für effektive AI-Anwendungen im ESG-Bereich.\n• Human-AI-Collaboration-Design: Entwicklung von Arbeitsmodellen, die menschliche Expertise mit AI-Kapazitäten optimal kombinieren und ethische AI-Nutzung gewährleisten."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
