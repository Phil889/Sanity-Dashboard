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
    console.log('Updating KI-Datenvorbereitung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-datenvorbereitung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-datenvorbereitung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist professionelle Datenvorbereitung der kritische Erfolgsfaktor für KI-Projekte und wie positioniert ADVISORI Datenqualität als strategischen Wettbewerbsvorteil?',
        answer: "Für C-Level-Führungskräfte ist die Erkenntnis fundamental: Die Qualität Ihrer KI-Modelle wird nicht durch die Sophistication der Algorithmen bestimmt, sondern durch die Exzellenz Ihrer Datenvorbereitung. Unzureichende Datenqualität ist der häufigste Grund für das Scheitern von KI-Initiativen und kann Millionen-Investitionen zunichte machen. ADVISORI transformiert Datenvorbereitung von einem technischen Prozess zu einem strategischen Wertschöpfungshebel.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Risikominimierung und ROI-Maximierung: Professionelle Datenvorbereitung reduziert das Projektrisiko erheblich und gewährleistet, dass KI-Investitionen die erwarteten Geschäftsergebnisse liefern.\n• Wettbewerbsdifferenzierung: Unternehmen mit überlegener Datenqualität entwickeln präzisere Modelle, die zu besseren Geschäftsentscheidungen und Marktvorteilen führen.\n• Skalierbarkeit und Nachhaltigkeit: Systematische Datenvorbereitungsprozesse ermöglichen die effiziente Skalierung von KI-Initiativen über das gesamte Unternehmen.\n• Compliance und Vertrauen: DSGVO-konforme Datenvorbereitung schafft Vertrauen bei Stakeholdern und minimiert regulatorische Risiken.\n\n🛡️ Der ADVISORI-Ansatz für strategische Datenvorbereitung:\n• Datenqualität als Geschäftsstrategie: Wir entwickeln Datenvorbereitungsstrategien, die direkt auf Ihre Geschäftsziele ausgerichtet sind und messbaren Wert schaffen.\n• DSGVO-First-Methodik: Unsere Preprocessing-Pipelines sind von Grund auf datenschutzkonform konzipiert und gewährleisten rechtssichere KI-Implementierungen.\n• Automatisierung und Effizienz: Intelligente Automatisierung reduziert manuelle Aufwände und ermöglicht kontinuierliche Datenoptimierung.\n• Governance-Integration: Einbettung von Datenqualitätsmanagement in Ihre bestehenden Governance-Strukturen für nachhaltige Exzellenz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifizieren wir den ROI von Investitionen in professionelle Datenvorbereitung und welchen direkten Einfluss hat ADVISORI\'s Datenqualitätsmanagement auf die KI-Performance?',
        answer: "Investitionen in professionelle Datenvorbereitung von ADVISORI generieren messbare Renditen durch verbesserte Modell-Performance, reduzierte Entwicklungszeiten und minimierte Projektrisiken. Der Return on Investment manifestiert sich in höherer Vorhersagegenauigkeit, schnellerer Time-to-Market und reduzierten Compliance-Risiken, während gleichzeitig die Grundlage für skalierbare KI-Initiativen geschaffen wird.\n\n💰 Direkter Einfluss auf KI-Performance und Geschäftsergebnisse:\n• Modell-Genauigkeit und Zuverlässigkeit: Professionell aufbereitete Daten können die Modell-Performance um das Dreifache verbessern und reduzieren gleichzeitig False-Positive-Raten erheblich.\n• Entwicklungszeit-Optimierung: Systematische Datenvorbereitung verkürzt KI-Entwicklungszyklen und ermöglicht schnellere Markteinführung neuer AI-basierter Services.\n• Risikominimierung: Qualitativ hochwertige Daten reduzieren das Risiko von Modell-Bias, Compliance-Verstößen und kostspieligen Nachbesserungen.\n• Skalierungseffizienz: Einmal etablierte Datenvorbereitungspipelines ermöglichen die kostengünstige Replikation erfolgreicher KI-Modelle.\n\n📈 Strategische Werttreiber und Wettbewerbsvorteile:\n• Datenmonetarisierung: Hochwertige, gut strukturierte Daten werden zu strategischen Assets, die neue Geschäftsmöglichkeiten eröffnen.\n• Operational Excellence: Automatisierte Datenqualitätsprozesse reduzieren operative Kosten und verbessern die Effizienz von Datenteams.\n• Stakeholder-Vertrauen: Nachweisbare Datenqualität stärkt das Vertrauen von Investoren, Regulatoren und Geschäftspartnern in Ihre KI-Initiativen.\n• Innovation-Enablement: Zuverlässige Datenbasis ermöglicht experimentelle KI-Projekte und fördert Innovation im gesamten Unternehmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie stellt ADVISORI sicher, dass unsere Datenvorbereitung nicht nur technisch exzellent, sondern auch vollständig DSGVO-konform ist und gleichzeitig maximale KI-Performance ermöglicht?',
        answer: "ADVISORI verfolgt einen Privacy-by-Design-Ansatz, der DSGVO-Compliance nicht als nachträgliche Anforderung, sondern als fundamentales Designprinzip behandelt. Unser Ansatz gewährleistet, dass Datenschutz und KI-Performance sich gegenseitig verstärken, anstatt im Konflikt zu stehen, und schafft damit die Grundlage für vertrauensvolle und rechtssichere KI-Implementierungen.\n\n🔒 Privacy-by-Design in der Datenvorbereitung:\n• Datenschutz als Qualitätsmerkmal: Wir entwickeln Preprocessing-Strategien, die Datenschutzanforderungen als Qualitätskriterium integrieren und dabei die Modell-Performance optimieren.\n• Intelligente Anonymisierung: Fortschrittliche Techniken wie Differential Privacy und synthetische Datengenerierung ermöglichen DSGVO-konforme Datennutzung ohne Performance-Verluste.\n• Granulare Zugriffskontrolle: Implementierung feingranularer Berechtigungskonzepte, die nur notwendige Datenzugriffe ermöglichen und Audit-Trails für vollständige Nachverfolgbarkeit schaffen.\n• Datenminimierung mit Intelligenz: Strategische Reduktion von Datenvolumen auf das Wesentliche, wodurch sowohl Datenschutz als auch Modell-Effizienz verbessert werden.\n\n🛡️ ADVISORI's Compliance-Excellence-Framework:\n• Kontinuierliche Compliance-Überwachung: Automatisierte Systeme überwachen die Einhaltung von DSGVO-Anforderungen in Echtzeit und alarmieren bei Abweichungen.\n• Dokumentation und Audit-Bereitschaft: Umfassende Dokumentation aller Datenverarbeitungsschritte für Transparenz und Compliance-Nachweise.\n• Rechtssichere Datenlineage: Vollständige Nachverfolgbarkeit der Datenherkunft und -verarbeitung für Compliance-Audits und Betroffenenrechte.\n• Proaktive Regulierungs-Anpassung: Kontinuierliche Anpassung der Datenvorbereitung an sich entwickelnde Datenschutzbestimmungen und Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert ADVISORI die Datenvorbereitung von einem Kostenfaktor zu einem strategischen Wertschöpfungshebel und welche konkreten Geschäftsvorteile entstehen durch professionelle Datenaufbereitung?',
        answer: "ADVISORI positioniert Datenvorbereitung als strategischen Enabler für Geschäftsinnovation und Wettbewerbsvorteile. Unser Ansatz verwandelt Datenaufbereitung von einer notwendigen technischen Aktivität in einen Wertschöpfungsprozess, der neue Geschäftsmöglichkeiten erschließt, operative Effizienz steigert und die Grundlage für datengetriebene Geschäftsmodelle schafft.\n\n🚀 Von Datenvorbereitung zu Geschäftsinnovation:\n• Neue Erkenntnisse und Geschäftsmöglichkeiten: Systematische Datenaufbereitung deckt versteckte Muster und Zusammenhänge auf, die zu neuen Produkten, Services oder Marktchancen führen können.\n• Operational Intelligence: Optimierte Daten ermöglichen präzisere Geschäftsanalysen und bessere strategische Entscheidungen auf allen Unternehmensebenen.\n• Kundenerfahrung und Personalisierung: Hochwertige Daten bilden die Basis für hyperpersonalisierte Kundenerlebnisse und verbesserte Customer Journey Optimization.\n• Predictive Business Capabilities: Professionell aufbereitete Daten ermöglichen fortschrittliche Vorhersagemodelle für Nachfrageplanung, Risikomanagement und strategische Planung.\n\n💡 ADVISORI's Value Creation Framework:\n• Datenasset-Optimierung: Transformation vorhandener Datenbestände in strategische Assets, die kontinuierlich Wert generieren und neue Einnahmequellen erschließen.\n• Effizienz-Multiplikation: Automatisierte Datenvorbereitungspipelines reduzieren manuelle Aufwände und ermöglichen Skalierung ohne proportionale Kostensteigerung.\n• Qualitäts-Kompetitivität: Überlegene Datenqualität führt zu besseren KI-Modellen, die Wettbewerbsvorteile in Produktqualität, Kundenservice und operativer Exzellenz schaffen.\n• Innovation-Acceleration: Zuverlässige Datenbasis beschleunigt die Entwicklung neuer KI-Anwendungen und ermöglicht experimentelle Projekte mit geringerem Risiko."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
