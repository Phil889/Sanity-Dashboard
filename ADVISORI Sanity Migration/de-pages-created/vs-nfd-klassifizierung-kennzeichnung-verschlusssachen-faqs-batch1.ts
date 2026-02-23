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
    console.log('Updating VS-NFD Klassifizierung Kennzeichnung Verschlusssachen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'vs-nfd-klassifizierung-kennzeichnung-verschlusssachen' })
    
    if (!existingDoc) {
      throw new Error('Document "vs-nfd-klassifizierung-kennzeichnung-verschlusssachen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Risiken entstehen für unsere Organisation, wenn die VS-NFD Klassifizierung nicht ordnungsgemäß implementiert wird, und wie kann ADVISORI diese Risiken systematisch adressieren?",
        answer: "Eine mangelhaft implementierte VS-NFD Klassifizierung stellt erhebliche strategische Risiken für Ihre Organisation dar, die weit über compliance-technische Aspekte hinausgehen und existenzielle Bedrohungen für Ihren Auftrag und Ihre organisatorische Integrität darstellen können. Diese Risiken erfordern eine systematische, auf Führungsebene koordinierte Herangehensweise.\n\n⚠️ Strategische Risiken unzureichender VS-NFD Klassifizierung:\n• Sicherheitskompromittierung: Falsch klassifizierte oder unzureichend geschützte Verschlusssachen können zu Informationslecks führen, die nationale Sicherheitsinteressen gefährden und das Vertrauen von Partnerbehörden nachhaltig beschädigen.\n• Compliance-Verstöße und rechtliche Konsequenzen: Nichteinhaltung der VS-NFD-Bestimmungen kann zu schwerwiegenden disziplinarischen Maßnahmen, Entzug von Sicherheitsermächtigungen und rechtlichen Sanktionen führen.\n• Operative Ineffizienzen: Inkonsistente Klassifizierungspraktiken führen zu Verzögerungen in kritischen Entscheidungsprozessen und behindern die effektive Zusammenarbeit zwischen Abteilungen und Partnern.\n• Reputationsschäden: Sicherheitsvorfälle durch mangelhafte Klassifizierung können das Ansehen Ihrer Organisation und ihre Fähigkeit zur Erfüllung des öffentlichen Auftrags erheblich beeinträchtigen.\n\n🛡️ ADVISORIs systematischer Risikominimierungsansatz:\n• Comprehensive Risk Assessment: Wir führen eine tiefgreifende Analyse Ihrer Informationslandschaft durch, identifizieren kritische Schwachstellen und bewerten potenzielle Auswirkungen auf strategische Ziele.\n• Governance-Integration: Implementierung von VS-NFD-Prozessen, die nahtlos in bestehende Führungsstrukturen und Entscheidungsprozesse integriert sind und kontinuierliche Oversight ermöglichen.\n• Technologische Risikominimierung: Entwicklung automatisierter Klassifizierungssysteme, die menschliche Fehler reduzieren und konsistente Anwendung von Sicherheitsstandards gewährleisten.\n• Kontinuierliches Monitoring: Etablierung proaktiver Überwachungssysteme, die Abweichungen frühzeitig erkennen und präventive Maßnahmen ermöglichen, bevor Risiken kritisch werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir eine organisationsweite Kultur der Informationssicherheit etablieren, die über die reine Befolgung von VS-NFD-Vorschriften hinausgeht und nachhaltigen Schutz gewährleistet?",
        answer: "Die Etablierung einer robusten Sicherheitskultur für Verschlusssachen erfordert mehr als technische Compliance – sie benötigt eine fundamentale Transformation der organisatorischen Denkweise und Verhaltensweisen. Eine nachhaltige Sicherheitskultur macht VS-NFD-Compliance zu einem intrinsischen Wert, der von allen Mitarbeitern verinnerlicht und gelebt wird.\n\n🏛️ Strategische Grundlagen einer VS-NFD-Sicherheitskultur:\n• Leadership Commitment: Die Führungsebene muss Informationssicherheit als strategische Priorität kommunizieren und durch eigenes Verhalten als Vorbild fungieren.\n• Wertorientierte Kommunikation: Vermittlung des Zwecks und der Bedeutung von VS-NFD-Maßnahmen für den Schutz nationaler Interessen und die Erfüllung des organisatorischen Auftrags.\n• Empowerment und Eigenverantwortung: Befähigung der Mitarbeiter, eigenständig sicherheitsbewusste Entscheidungen zu treffen und Verantwortung für den Schutz klassifizierter Informationen zu übernehmen.\n• Kontinuierliche Sensibilisierung: Regelmäßige Auffrischung und Vertiefung des Sicherheitsbewusstseins durch innovative Schulungsformate und praxisnahe Szenarien.\n\n🎯 ADVISORIs Ansatz zur Kulturentwicklung:\n• Behavioral Assessment: Umfassende Analyse bestehender Sicherheitsverhalten und Identifikation kultureller Veränderungsbedarfe durch wissenschaftlich fundierte Methoden.\n• Maßgeschneiderte Change-Programme: Entwicklung zielgruppenspezifischer Interventionen, die auf die spezifischen kulturellen Gegebenheiten und Herausforderungen Ihrer Organisation zugeschnitten sind.\n• Gamification und Engagement: Implementierung innovativer Schulungs- und Sensibilisierungsansätze, die Sicherheitslernen zu einer positiven und engaging Erfahrung machen.\n• Messbare Kulturindikatoren: Entwicklung von KPIs und Metriken, die den Fortschritt der kulturellen Transformation quantifizierbar machen und kontinuierliche Verbesserung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Rolle spielt die Digitalisierung bei der modernen VS-NFD Klassifizierung und wie können wir innovative Technologien nutzen, ohne die Sicherheit zu kompromittieren?",
        answer: "Die Digitalisierung von VS-NFD-Prozessen stellt eine strategische Chance dar, Effizienz und Sicherheit gleichzeitig zu erhöhen. Moderne Technologien können nicht nur manuelle Fehlerquellen eliminieren, sondern auch neue Sicherheitsebenen schaffen und die Transparenz von Klassifizierungsprozessen verbessern. Der Schlüssel liegt in einer durchdachten Integration, die Sicherheit als Design-Prinzip berücksichtigt.\n\n💻 Digitale Transformation der VS-NFD-Landschaft:\n• Automatisierte Klassifizierung: KI-gestützte Systeme können Inhalte analysieren und Klassifizierungsvorschläge generieren, die menschliche Entscheidungsträger unterstützen und Konsistenz gewährleisten.\n• Blockchain-basiertes Audit-Trail: Unveränderliche Dokumentation aller Klassifizierungs- und Zugriffsereignisse für lückenlose Nachverfolgbarkeit und Accountability.\n• Zero-Trust-Architekturen: Implementierung von Sicherheitsmodellen, die kontinuierliche Verifikation und granulare Zugriffskontrolle ermöglichen.\n• Intelligente Monitoring-Systeme: Real-time Überwachung von Dokumentenflüssen und automatische Erkennung von Anomalien oder Compliance-Verstößen.\n\n🔒 ADVISORIs Security-by-Design Ansatz:\n• Risikobasierte Technologiebewertung: Systematische Analyse neuer Technologien hinsichtlich ihrer Auswirkungen auf VS-NFD-Sicherheit und Entwicklung maßgeschneiderter Implementierungsstrategien.\n• Hybride Sicherheitsarchitekturen: Kombination modernster Verschlüsselungstechnologien mit bewährten physischen Sicherheitsmaßnahmen für mehrstufigen Schutz.\n• Kontinuierliche Vulnerability Assessments: Proaktive Identifikation und Behandlung von Sicherheitslücken in digitalen VS-NFD-Systemen durch regelmäßige Penetrationstests und Sicherheitsaudits.\n• Digital Forensics Capabilities: Aufbau interner Kapazitäten zur Untersuchung und Aufklärung von Sicherheitsvorfällen in digitalisierten VS-NFD-Umgebungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die Balance zwischen notwendiger Informationssicherheit und operativer Effizienz bei der VS-NFD Klassifizierung optimal gestalten?",
        answer: "Die Optimierung der Balance zwischen Sicherheit und Effizienz bei VS-NFD-Prozessen ist eine der kritischsten strategischen Herausforderungen für Führungskräfte. Eine erfolgreiche Implementierung erfordert einen nuancierten Ansatz, der rigorose Sicherheitsstandards mit operativer Agilität verbindet und dabei sowohl Compliance als auch Mission Effectiveness gewährleistet.\n\n⚖️ Strategische Dimensionen der Sicherheit-Effizienz-Balance:\n• Risikoproportionalität: Anpassung von Sicherheitsmaßnahmen an das tatsächliche Risikoprofil von Informationen, um sowohl Über- als auch Unterschutz zu vermeiden.\n• Prozessintegration: Einbettung von Klassifizierungsentscheidungen in natürliche Arbeitsabläufe, um Reibungsverluste zu minimieren und Akzeptanz zu fördern.\n• Technologiegestützte Effizienz: Nutzung moderner Tools zur Automatisierung routinemäßiger Klassifizierungsaufgaben bei gleichzeitiger Beibehaltung menschlicher Kontrolle bei kritischen Entscheidungen.\n• Adaptive Sicherheitsmodelle: Entwicklung flexibler Frameworks, die je nach Kontext und Dringlichkeit angepasste Sicherheitslevel ermöglichen.\n\n🚀 ADVISORIs Performance-Optimierungsansatz:\n• Workflow-Analyse und -Optimierung: Detaillierte Untersuchung bestehender Geschäftsprozesse zur Identifikation von Effizienzpotenzialen ohne Kompromittierung der Sicherheitsstandards.\n• Intelligent Classification Systems: Implementierung smarter Systeme, die Klassifizierungsentscheidungen basierend auf Kontext, Inhalt und Nutzungsmustern optimieren.\n• User Experience Design: Entwicklung intuitiver Benutzeroberflächen und Workflows, die Sicherheitskonformität fördern, anstatt sie als Hindernis zu empfinden.\n• Kontinuierliche Performance-Messung: Etablierung von Metriken, die sowohl Sicherheitseffektivität als auch operative Effizienz erfassen und datengestützte Optimierung ermöglichen."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
