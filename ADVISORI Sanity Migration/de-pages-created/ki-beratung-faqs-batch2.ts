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
    console.log('Updating KI-Beratung page with implementation and governance FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-beratung" not found')
    }
    
    // Create new implementation and governance FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie unterstützt ADVISORI Unternehmen bei der Entwicklung einer robusten AI Governance-Struktur, die sowohl Innovation fördert als auch Risiken minimiert?",
        answer: "Eine effektive AI Governance-Struktur ist das Fundament für nachhaltigen KI-Erfolg in Unternehmen. Sie muss Innovation ermöglichen, während sie gleichzeitig Risiken kontrolliert und regulatorische Compliance gewährleistet. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die perfekt auf Ihre Unternehmenskultur, Branchenanforderungen und strategischen Ziele abgestimmt sind.\n\n🏛️ Strategische Governance-Architektur:\n• Mehrstufige Governance-Struktur: Entwicklung einer hierarchischen Governance-Architektur mit klaren Verantwortlichkeiten auf Board-, Management- und operativer Ebene für effektive Entscheidungsfindung.\n• AI Ethics Committee-Etablierung: Einrichtung interdisziplinärer Gremien mit Vertretern aus Geschäftsführung, IT, Legal, Compliance und Fachbereichen für ausgewogene Entscheidungen.\n• Rollen- und Verantwortlichkeits-Matrix: Definition klarer Zuständigkeiten für AI Data Stewards, AI Product Owners, Compliance Officers und andere Schlüsselrollen.\n• Eskalations- und Entscheidungsprozesse: Etablierung strukturierter Prozesse für die Bewertung, Genehmigung und Überwachung von KI-Initiativen.\n\n📋 Compliance-Integration und Risikomanagement:\n• Regulatorische Mapping-Matrix: Systematische Zuordnung aller relevanten Regulierungsanforderungen zu spezifischen KI-Anwendungen und Geschäftsprozessen.\n• Risk Assessment-Frameworks: Entwicklung standardisierter Bewertungsmethoden für technische, rechtliche, ethische und geschäftliche Risiken von KI-Projekten.\n• Kontinuierliche Compliance-Überwachung: Implementierung automatisierter Monitoring-Systeme zur laufenden Überprüfung der Einhaltung von Governance-Richtlinien.\n• Audit-Trail-Management: Etablierung umfassender Dokumentations- und Nachverfolgungssysteme für alle KI-bezogenen Entscheidungen und Aktivitäten.\n\n🔄 Innovation-Balance und Agilität:\n• Innovation-Sandbox-Konzepte: Schaffung kontrollierter Umgebungen für die sichere Erprobung neuer KI-Technologien ohne Gefährdung der Produktivsysteme.\n• Agile Governance-Prozesse: Entwicklung flexibler Governance-Mechanismen, die schnelle Anpassungen an technologische Entwicklungen ermöglichen.\n• Stakeholder-Engagement-Strategien: Etablierung regelmäßiger Kommunikations- und Feedback-Mechanismen zwischen Governance-Gremien und operativen Teams."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Herausforderungen adressiert ADVISORI bei der Implementierung von KI-Lösungen in regulierten Branchen wie Finanzdienstleistungen oder Gesundheitswesen?",
        answer: "Regulierte Branchen stehen vor einzigartigen Herausforderungen bei der KI-Implementierung, da sie höchste Standards für Sicherheit, Compliance und Transparenz erfüllen müssen. ADVISORI verfügt über tiefgreifende Expertise in der Navigation komplexer regulatorischer Landschaften und entwickelt KI-Lösungen, die sowohl innovative Geschäftsmöglichkeiten erschließen als auch strenge Compliance-Anforderungen erfüllen.\n\n🏦 Branchenspezifische Compliance-Expertise:\n• Finanzdienstleistungen: Umfassende Kenntnis von Basel III, MiFID II, DORA, und anderen Finanzregulierungen mit spezieller Fokussierung auf algorithmische Transparenz und Bias-Vermeidung.\n• Gesundheitswesen: Expertise in GDPR-Compliance für Gesundheitsdaten, Medizinprodukte-Verordnung und FDA-Anforderungen für KI-basierte medizinische Geräte.\n• Versicherungswesen: Spezialisierung auf Solvency II-Anforderungen, Actuarial Standards und faire Preisgestaltungs-Algorithmen.\n• Automobilindustrie: Kenntnis von ISO 26262 für funktionale Sicherheit und UNECE-Regulierungen für autonome Fahrsysteme.\n\n🔒 Erweiterte Sicherheits- und Datenschutz-Maßnahmen:\n• Hochsichere Datenverarbeitung: Implementierung von End-to-End-Verschlüsselung, Secure Multi-Party Computation und anderen fortschrittlichen Sicherheitstechnologien.\n• Anonymisierung und Pseudonymisierung: Entwicklung ausgeklügelter Techniken zur Datenverarbeitung ohne Preisgabe sensibler Informationen.\n• Audit-Trail-Systeme: Implementierung lückenloser Dokumentations- und Nachverfolgungssysteme für alle KI-Entscheidungen und Datenverarbeitungsschritte.\n• Incident Response-Planung: Entwicklung spezifischer Notfallpläne für KI-bezogene Sicherheitsvorfälle oder Compliance-Verstöße.\n\n⚖️ Transparenz und Erklärbarkeit:\n• Explainable AI-Integration: Entwicklung von KI-Systemen, die ihre Entscheidungen in verständlicher Form erklären können, um regulatorische Transparenzanforderungen zu erfüllen.\n• Model Governance und Versionierung: Implementierung strenger Kontrollen für KI-Modell-Updates und -Änderungen mit vollständiger Nachverfolgbarkeit.\n• Bias-Detection und Fairness-Monitoring: Kontinuierliche Überwachung von KI-Systemen auf potenzielle Diskriminierung oder unfaire Behandlung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gestaltet ADVISORI den Change Management-Prozess für KI-Implementierungen, um Mitarbeiter-Akzeptanz und erfolgreiche Adoption sicherzustellen?",
        answer: "Erfolgreiche KI-Implementierung hängt entscheidend von der Akzeptanz und aktiven Unterstützung der Mitarbeiter ab. ADVISORI verfolgt einen menschenzentrierten Change Management-Ansatz, der technische Innovation mit organisatorischer Transformation verbindet. Wir verstehen, dass KI-Adoption nicht nur eine technische, sondern vor allem eine kulturelle Herausforderung darstellt.\n\n👥 Menschenzentrierte Transformationsstrategie:\n• Stakeholder-Mapping und Einflussanalyse: Systematische Identifikation aller betroffenen Personengruppen und deren spezifischen Bedürfnisse, Ängste und Motivationen.\n• Kommunikationsstrategie-Entwicklung: Erstellung zielgruppenspezifischer Kommunikationspläne, die Vorteile der KI-Implementierung klar vermitteln und Ängste adressieren.\n• Change Champion-Netzwerke: Identifikation und Ausbildung von Meinungsführern in verschiedenen Unternehmensbereichen als Multiplikatoren für positive Veränderung.\n• Feedback-Mechanismen: Etablierung regelmäßiger Kommunikationskanäle für Mitarbeiter-Feedback und kontinuierliche Anpassung der Change-Strategie.\n\n🎓 Kompetenzentwicklung und Weiterbildung:\n• Skill Gap-Analyse: Umfassende Bewertung vorhandener Kompetenzen und Identifikation von Weiterbildungsbedarfen für verschiedene Rollen und Hierarchieebenen.\n• Maßgeschneiderte Schulungsprogramme: Entwicklung rollenspezifischer Trainings von grundlegender KI-Literacy bis hin zu fortgeschrittenen technischen Fähigkeiten.\n• Hands-on Learning-Ansätze: Implementierung praktischer Lernformate wie Workshops, Pilotprojekte und Mentoring-Programme für erfahrungsbasiertes Lernen.\n• Kontinuierliche Lernpfade: Etablierung langfristiger Weiterbildungsstrategien, die mit der Evolution der KI-Technologien Schritt halten.\n\n🔄 Kulturwandel und Organisationsentwicklung:\n• Kulturanalyse und Transformation: Bewertung der aktuellen Unternehmenskultur und Entwicklung von Strategien zur Förderung einer datengetriebenen, innovationsfreundlichen Kultur.\n• Anreizsystem-Anpassung: Überarbeitung von Performance-Metriken und Belohnungssystemen zur Förderung KI-unterstützter Arbeitsweisen.\n• Kollaborations-Förderung: Schaffung neuer Arbeitsformen und Team-Strukturen, die die Zusammenarbeit zwischen Menschen und KI-Systemen optimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie unterstützt ADVISORI Unternehmen bei der Skalierung erfolgreicher KI-Pilotprojekte zu unternehmensweiten Lösungen?",
        answer: "Die Skalierung von KI-Pilotprojekten zu unternehmensweiten Lösungen ist eine der größten Herausforderungen in der KI-Transformation. ADVISORI verfügt über bewährte Methodologien und Frameworks, die den erfolgreichen Übergang von experimentellen Prototypen zu produktiven, skalierbaren KI-Systemen gewährleisten. Unser Ansatz berücksichtigt technische, organisatorische und strategische Aspekte der Skalierung.\n\n🚀 Strategische Skalierungs-Roadmap:\n• Skalierbarkeits-Assessment: Umfassende Bewertung der technischen Architektur, Datenqualität und organisatorischen Bereitschaft für die Skalierung erfolgreicher Pilotprojekte.\n• Prioritäts-Matrix-Entwicklung: Systematische Bewertung und Priorisierung verschiedener Skalierungsoptionen basierend auf Geschäftswert, technischer Machbarkeit und Ressourcenanforderungen.\n• Phasen-Rollout-Planung: Entwicklung strukturierter Implementierungspläne mit klaren Meilensteinen, Risikobewertungen und Erfolgskriterien für jede Skalierungsphase.\n• Cross-funktionale Integration: Koordination zwischen verschiedenen Geschäftsbereichen und IT-Teams für nahtlose Integration in bestehende Unternehmensprozesse.\n\n🏗️ Technische Skalierungs-Architektur:\n• Enterprise-Architecture-Design: Entwicklung robuster, skalierbarer IT-Architekturen, die hohe Verfügbarkeit, Performance und Sicherheit auch bei unternehmensweiter Nutzung gewährleisten.\n• Data Pipeline-Optimierung: Aufbau effizienter Datenverarbeitungs-Pipelines, die große Datenmengen aus verschiedenen Unternehmensquellen verarbeiten können.\n• MLOps-Implementation: Etablierung professioneller Machine Learning Operations-Prozesse für automatisierte Model-Deployment, Monitoring und Lifecycle-Management.\n• Integration-Strategien: Entwicklung nahtloser Integrationen mit bestehenden Enterprise-Systemen wie ERP, CRM und anderen Geschäftsanwendungen.\n\n📊 Performance-Monitoring und Optimierung:\n• KPI-Framework-Entwicklung: Definition umfassender Metriken zur Messung des Geschäftswerts und der technischen Performance skalierter KI-Lösungen.\n• Kontinuierliche Optimierung: Implementierung von Feedback-Loops und automatisierten Optimierungsprozessen für kontinuierliche Verbesserung der KI-Performance.\n• Risk Management-Skalierung: Anpassung und Erweiterung von Risikomanagement-Prozessen für die erhöhten Anforderungen unternehmensweiter KI-Systeme."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new implementation and governance FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Implementation and governance FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
