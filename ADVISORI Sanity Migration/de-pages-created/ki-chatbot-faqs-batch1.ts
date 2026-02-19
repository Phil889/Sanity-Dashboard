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
    console.log('Updating KI-Chatbot page with Strategic Implementation FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-chatbot' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-chatbot" not found')
    }
    
    // Create new Strategic Implementation FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist eine strategische KI-Chatbot-Implementierung mehr als nur eine technische Lösung und wie positioniert ADVISORI Chatbots als Geschäftstransformations-Katalysator?',
        answer: "Für C-Level-Führungskräfte repräsentiert ein KI-Chatbot weit mehr als eine automatisierte Antwortmaschine – er ist ein strategischer Touchpoint, der die gesamte Kundenerfahrung revolutioniert und neue Geschäftsmöglichkeiten erschließt. Eine durchdachte Chatbot-Strategie kann die Grundlage für nachhaltige Wettbewerbsvorteile schaffen, während sie gleichzeitig operative Effizienz steigert und Kundenbindung stärkt. ADVISORI versteht Chatbots als intelligente Geschäftspartner, die Unternehmen dabei unterstützen, ihre Kommunikationsstrategie zu transformieren.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Kundenerfahrungs-Revolution: Chatbots ermöglichen personalisierte, verfügbare Interaktionen, die Kundenzufriedenheit steigern und neue Standards für Service-Excellence setzen.\n• Operative Skalierung: Intelligente Automatisierung von Kundenanfragen reduziert Personalkosten und ermöglicht es Teams, sich auf wertschöpfende Tätigkeiten zu konzentrieren.\n• Datengetriebene Erkenntnisse: Jede Chatbot-Interaktion generiert wertvolle Kundeninsights, die strategische Entscheidungen informieren und Geschäftsentwicklung vorantreiben.\n• Omnichannel-Integration: Moderne Chatbots schaffen nahtlose Kundenerlebnisse über alle Kommunikationskanäle hinweg.\n\n🛡️ Der ADVISORI-Ansatz für strategische Chatbot-Adoption:\n• DSGVO-First-Strategie: Wir entwickeln Chatbots, die von Grund auf datenschutzkonform sind und gleichzeitig maximale Geschäftsvorteile bieten.\n• Conversational Design Excellence: Unsere Chatbots sprechen die Sprache Ihrer Kunden und reflektieren Ihre Markenidentität authentisch.\n• Intelligente Eskalations-Strategien: Nahtlose Übergänge zwischen automatisierten und menschlichen Interaktionen für optimale Kundenerfahrungen.\n• Kontinuierliche Lern-Architekturen: Chatbots, die sich kontinuierlich verbessern und an veränderte Kundenbedürfnisse anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifizieren wir den ROI einer KI-Chatbot-Investition und welchen direkten Einfluss hat ADVISORI\'s Chatbot-Implementierung auf Kundenzufriedenheit und operative Effizienz?',
        answer: "Die Investition in strategische KI-Chatbot-Lösungen von ADVISORI ist ein messbarer Wertschöpfungshebel, der sowohl quantifizierbare Kosteneinsparungen als auch qualitative Verbesserungen der Kundenerfahrung liefert. Der Return on Investment manifestiert sich in reduzierten Personalkosten, gesteigerter Kundenzufriedenheit und der Erschließung neuer Umsatzkanäle durch verbesserte Kundeninteraktionen.\n\n💰 Direkter Einfluss auf operative Effizienz und Kosten:\n• Personalkosten-Optimierung: Chatbots können einen erheblichen Anteil der Routine-Kundenanfragen automatisieren, wodurch Personalressourcen für komplexere, wertschöpfende Aufgaben freigesetzt werden.\n• Verfügbarkeits-Vorteil: Rund-um-die-Uhr-Service ohne zusätzliche Personalkosten steigert Kundenzufriedenheit und kann zu höheren Conversion-Raten führen.\n• Skalierbarkeit ohne proportionale Kostensteigerung: Chatbots können unbegrenzt viele simultane Gespräche führen, ohne dass zusätzliche Personalkosten entstehen.\n• Reduzierte Fehlerquoten: Konsistente, präzise Antworten minimieren kostspielige Missverständnisse und Nachbearbeitungen.\n\n📈 Strategische Werttreiber und Kundenerfahrungs-Verbesserung:\n• Kundenzufriedenheits-Steigerung: Sofortige, präzise Antworten und personalisierte Interaktionen führen zu höheren Customer Satisfaction Scores.\n• Lead-Generierung und Conversion-Optimierung: Intelligente Chatbots können potenzielle Kunden qualifizieren und durch den Sales Funnel führen.\n• Kundenbindung durch Personalisierung: Chatbots, die Kundenhistorie und Präferenzen berücksichtigen, schaffen stärkere emotionale Verbindungen zur Marke.\n• Datenmonetarisierung: Insights aus Chatbot-Interaktionen informieren Produktentwicklung, Marketing-Strategien und Geschäftsentscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie stellt ADVISORI sicher, dass unsere KI-Chatbot-Lösung nicht nur DSGVO-konform ist, sondern auch das Vertrauen unserer Kunden stärkt und gleichzeitig geschäftliche Ziele erreicht?',
        answer: "DSGVO-Compliance bei KI-Chatbots ist nicht nur eine rechtliche Notwendigkeit, sondern ein strategischer Vertrauensaufbau-Mechanismus, der Ihre Marke differenziert und Kundenloyalität stärkt. ADVISORI entwickelt Chatbot-Lösungen, die Datenschutz als Wettbewerbsvorteil positionieren und gleichzeitig maximale Geschäftseffektivität gewährleisten. Unser Privacy-by-Design-Ansatz schafft Chatbots, die Vertrauen schaffen und gleichzeitig Geschäftsziele übertreffen.\n\n🔒 Privacy-by-Design als Vertrauensaufbau-Strategie:\n• Transparente Datenverarbeitung: Unsere Chatbots kommunizieren klar, welche Daten gesammelt werden und wie sie verwendet werden, was Kundenvertrauen stärkt.\n• Minimale Datensammlung: Wir implementieren Prinzipien der Datensparsamkeit, sammeln nur notwendige Informationen und demonstrieren verantwortungsvolle Datennutzung.\n• Einwilligungsmanagement-Excellence: Intuitive, benutzerfreundliche Einwilligungsprozesse, die Compliance gewährleisten ohne die User Experience zu beeinträchtigen.\n• Sichere Datenarchitekturen: End-to-End-Verschlüsselung und sichere Speicherlösungen schützen Kundendaten und Ihr Unternehmensrisiko.\n\n🎯 ADVISORI's Compliance-Excellence-Framework:\n• Proaktive Regulierungs-Überwachung: Wir verfolgen kontinuierlich Entwicklungen in der Datenschutz-Gesetzgebung und passen Chatbot-Funktionalitäten proaktiv an.\n• Audit-Ready-Dokumentation: Umfassende Dokumentation aller Datenverarbeitungsprozesse und Entscheidungslogiken für Transparenz und Compliance-Nachweis.\n• Recht auf Vergessenwerden: Implementierung technischer Lösungen für Datenlöschung und Kundenrechte-Management.\n• Internationale Compliance-Koordination: Unterstützung bei der Navigation komplexer internationaler Datenschutzlandschaften für global agierende Unternehmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert ADVISORI KI-Chatbots von einfachen FAQ-Bots zu intelligenten Geschäftspartnern, die aktiv zur Umsatzgenerierung und Kundenbindung beitragen?',
        answer: "ADVISORI positioniert KI-Chatbots nicht als passive Antwortmaschinen, sondern als proaktive Geschäftsintelligenz-Tools, die aktiv zur Wertschöpfung beitragen. Unsere Conversational AI-Lösungen fungieren als intelligente Verkaufsassistenten, Kundenberater und Datensammler, die neue Umsatzströme erschließen und bestehende Kundenbeziehungen vertiefen. Der Fokus liegt auf der Transformation von Chatbots zu strategischen Geschäftspartnern.\n\n🚀 Von reaktiver zu proaktiver Kundeninteraktion:\n• Intelligente Lead-Qualifizierung: Chatbots identifizieren und qualifizieren potenzielle Kunden durch gezielte Fragen und Verhaltensanalyse, wodurch Sales-Teams hochwertige Leads erhalten.\n• Personalisierte Produktempfehlungen: Machine Learning-gestützte Empfehlungsalgorithmen analysieren Kundenverhalten und -präferenzen für maßgeschneiderte Angebote.\n• Proaktive Kundenbetreuung: Chatbots erkennen Kundenprobleme bevor sie eskalieren und bieten proaktive Lösungen an.\n• Cross-Selling und Upselling-Automatisierung: Intelligente Erkennung von Verkaufschancen und automatisierte Präsentation relevanter Zusatzprodukte.\n\n💡 ADVISORI's Business Intelligence Integration:\n• Echtzeit-Kundeninsights: Jede Chatbot-Interaktion generiert wertvolle Daten über Kundenbedürfnisse, Präferenzen und Kaufverhalten.\n• Predictive Analytics: Vorhersage von Kundenbedürfnissen und -verhalten basierend auf Chatbot-Interaktionsmustern.\n• Automatisierte Kundenreise-Optimierung: Kontinuierliche Verbesserung der Customer Journey basierend auf Chatbot-Analytics.\n• Integration in CRM und Marketing-Automation: Nahtlose Datenübertragung für ganzheitliche Kundenbetreuung und Marketing-Personalisierung."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Strategic Implementation FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic Implementation FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
