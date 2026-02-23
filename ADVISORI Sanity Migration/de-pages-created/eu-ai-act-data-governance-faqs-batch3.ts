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
    console.log('Updating EU AI Act Data Governance page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-data-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-data-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir Bias-Risiken in unseren KI-Trainingsdaten systematisch identifizieren und eliminieren, um sowohl Compliance als auch Marktchancen zu optimieren?",
        answer: "Die systematische Identifikation und Eliminierung von Bias-Risiken in KI-Trainingsdaten ist entscheidend für EU AI Act-Compliance und kann gleichzeitig erhebliche Marktchancen erschließen. ADVISORI entwickelt umfassende Anti-Bias-Strategien, die nicht nur regulatorische Risiken minimieren, sondern auch Produktqualität, Marktreichweite und Kundenvertrauen maximieren.\n\n🎯 Strategische Dimensionen des Bias-Managements:\n• Compliance und Risikominimierung: Proaktive Bias-Erkennung verhindert diskriminierende KI-Entscheidungen und damit verbundene rechtliche, finanzielle und Reputationsrisiken.\n• Marktexpansion durch Inklusion: Bias-freie KI-Systeme ermöglichen Erschließung diverser Marktsegmente und Zielgruppen, die zuvor unterrepräsentiert waren.\n• Qualitätssteigerung und Performance: Ausgewogene, repräsentative Datensätze verbessern die Genauigkeit und Verlässlichkeit von KI-Modellen erheblich.\n• Vertrauensbildung und Differenzierung: Nachweislich faire KI-Systeme schaffen Wettbewerbsvorteile durch erhöhtes Stakeholder-Vertrauen.\n\n🛡️ ADVISORIs systematischer Anti-Bias-Ansatz:\n• Multi-dimensionale Bias-Detection: Einsatz fortschrittlicher Analysemethoden zur Identifikation von Bias in demografischen, geografischen, sozioökonomischen und kulturellen Dimensionen.\n• Proaktive Datenbalancierung: Entwicklung systematischer Strategien zur Optimierung von Trainingsdatensätzen für maximale Repräsentativität und Fairness.\n• Kontinuierliche Bias-Überwachung: Implementierung automatisierter Monitoring-Systeme für laufende Erkennung und Korrektur von Bias-Entwicklungen.\n• Stakeholder-Integration: Einbindung diverser Perspektiven in Bias-Bewertungsprozesse für umfassende und kulturell sensible Fairness-Ansätze."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche strategischen Investitionen in Dateninfrastruktur sind erforderlich, um unsere KI-Data Governance zukunftssicher und skalierbar zu gestalten?",
        answer: "Zukunftssichere KI-Data Governance erfordert strategische Infrastrukturinvestitionen, die technologische Evolution, regulatorische Entwicklungen und Geschäftswachstum antizipieren. ADVISORI entwickelt adaptive Infrastrukturstrategien, die aktuelle Compliance-Anforderungen erfüllen und gleichzeitig Flexibilität für zukünftige Herausforderungen und Chancen gewährleisten.\n\n🏗️ Strategische Infrastruktur-Investitionsbereiche:\n• Cloud-native Governance-Architekturen: Aufbau skalierbarer, elastischer Dateninfrastrukturen, die globales Wachstum ohne proportionale Kostensteigerung ermöglichen.\n• KI-gestützte Governance-Automatisierung: Investition in intelligente Systeme für automatisierte Datenqualitätskontrolle, Compliance-Monitoring und Anomalie-Erkennung.\n• Edge-Computing-Kapazitäten: Entwicklung dezentraler Datenverarbeitungsarchitekturen für reduzierte Latenz und verbesserte lokale Compliance.\n• Interoperabilitäts-Frameworks: Aufbau flexibler Schnittstellen und Standards für nahtlose Integration neuer Technologien und Partner.\n\n🎯 ADVISORIs zukunftsorientierte Infrastruktur-Strategie:\n• Technology Roadmapping: Entwicklung langfristiger Infrastruktur-Evolutionspläne, die technologische Trends und regulatorische Entwicklungen antizipieren.\n• Modulare Architektur-Design: Aufbau flexibler, komponenten-basierter Systeme, die kontinuierliche Innovation und Anpassung ohne komplette Neustrukturierung ermöglichen.\n• Investment-Optimierung: Strategische Priorisierung von Infrastrukturinvestitionen basierend auf ROI, Risikominimierung und strategischem Wert.\n• Vendor-Ecosystem-Management: Aufbau diversifizierter Technologie-Partnerschaften für reduzierte Abhängigkeiten und maximale Flexibilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir unsere Data Governance-Kompetenzen als strategischen Enabler für neue KI-basierte Geschäftsmodelle und Revenue Streams nutzen?",
        answer: "Exzellente Data Governance-Kompetenzen können als strategischer Enabler für innovative KI-basierte Geschäftsmodelle und neue Revenue Streams fungieren. ADVISORI unterstützt Sie dabei, Ihre Governance-Fähigkeiten in marktfähige Vorteile zu transformieren und datengetriebene Wertschöpfung zu maximieren.\n\n💡 Data Governance als Business Model Enabler:\n• Datenprodukte und -Services: Transformation hochwertiger, governance-konformer Datenassets in kommerzialisierbare Produkte und Dienstleistungen.\n• Vertrauens-basierte Plattformmodelle: Nutzung nachweislicher Governance-Excellence als Grundlage für Vertrauen-kritische Marktplätze und Ecosysteme.\n• Compliance-as-a-Service: Monetarisierung von Governance-Expertise durch Beratungs- und Technologie-Services für andere Organisationen.\n• Premium-Positionierung: Nutzung überlegener Data Governance als Differenzierungsmerkmal für höherwertige, vertrauensbasierte Angebote.\n\n🚀 ADVISORIs Business Model Innovation-Ansatz:\n• Market Opportunity Assessment: Systematische Analyse von Marktchancen für governance-basierte Geschäftsmodelle in Ihrer Branche und angrenzenden Sektoren.\n• Value Proposition Development: Entwicklung überzeugender Wertversprechen, die Governance-Kompetenzen in marktfähige Kundenvorteile übersetzen.\n• Go-to-Market-Strategien: Design und Umsetzung von Markteinführungsstrategien für neue, governance-basierte Revenue Streams.\n• Ecosystem-Orchestration: Aufbau strategischer Partnernetzwerke für erweiterte, governance-zentrierte Geschäftsmodelle und Marktchancen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche strategischen KPIs und Erfolgskennzahlen sollten wir etablieren, um den ROI unserer KI-Data Governance-Investitionen zu messen und zu optimieren?",
        answer: "Die Etablierung strategischer KPIs für KI-Data Governance ermöglicht datengetriebene Optimierung von Investitionen und demonstriert den Geschäftswert von Governance-Initiativen. ADVISORI entwickelt umfassende Measurement-Frameworks, die operative Effizienz, Compliance-Excellence und strategischen Impact quantifizieren und kontinuierliche Verbesserung ermöglichen.\n\n📊 Strategische KPI-Kategorien für Data Governance ROI:\n• Compliance und Risiko-Metriken: Quantifizierung von Compliance-Raten, Risikominimierung und vermiedenen Kosten durch proaktive Governance.\n• Operative Effizienz-Kennzahlen: Messung von Prozessoptimierung, Automatisierungsgraden und Kosteneinsparungen durch verbesserte Datenqualität.\n• Innovation und Wachstums-Indikatoren: Bewertung von beschleunigter Time-to-Market, neuen Geschäftsmöglichkeiten und Revenue-Impact durch bessere Datengrundlagen.\n• Stakeholder-Value-Metriken: Quantifizierung von Vertrauensaufbau, Kundenzufriedenheit und Partnerschaftsqualität durch Governance-Excellence.\n\n🎯 ADVISORIs KPI-Framework-Entwicklung:\n• Balanced Scorecard-Ansätze: Integration von Governance-KPIs in übergeordnete Unternehmenssteuerung für ganzheitliche Wertmessung.\n• Predictive Analytics: Einsatz fortschrittlicher Analysemethoden für Vorhersage von Governance-Impact und proaktive Optimierung.\n• Benchmarking und Best Practices: Vergleich mit Industry Standards und führenden Praktiken für kontinuierliche Leistungssteigerung.\n• Real-time Dashboards: Aufbau intelligenter Monitoring-Systeme für kontinuierliche Sichtbarkeit und agile Anpassungen von Governance-Strategien."
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
