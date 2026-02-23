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
    console.log('Updating Intelligent Automation Consultant page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-consultant' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-consultant" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist die Expertise eines Intelligent Automation Consultants entscheidend für den Erfolg von KI-Automatisierungsprojekten?',
        answer: "Die Implementierung intelligenter Automatisierung ist weit mehr als nur die Installation von Software oder die Konfiguration von Bots. Es handelt sich um eine komplexe Transformation, die technische Innovation, strategische Planung, regulatorische Compliance und organisatorischen Wandel miteinander verbindet. Ein erfahrener Intelligent Automation Consultant bringt das notwendige Fachwissen mit, um diese vielschichtigen Herausforderungen erfolgreich zu meistern und nachhaltige Geschäftsergebnisse zu erzielen.\n\n🎯 Strategische Expertise und Geschäftsverständnis:\n• Ganzheitliche Bewertung von Automatisierungspotenzialen unter Berücksichtigung von Geschäftszielen, Prozessreife und organisatorischen Rahmenbedingungen.\n• Entwicklung maßgeschneiderter Automatisierungsstrategien, die über reine Effizienzsteigerung hinausgehen und neue Wertschöpfungsmöglichkeiten erschließen.\n• Priorisierung von Automatisierungsinitiativen basierend auf ROI, strategischer Bedeutung und Umsetzbarkeit.\n• Integration von Automatisierungslösungen in die übergeordnete Digitalisierungsstrategie des Unternehmens.\n\n🛡️ Regulatorische Compliance und Risikomanagement:\n• Tiefgreifende Kenntnis des EU AI Act und anderer relevanter Regulierungen zur Sicherstellung compliance-konformer Implementierungen.\n• Entwicklung von Governance-Frameworks, die sowohl Innovation ermöglichen als auch regulatorische Anforderungen erfüllen.\n• Proaktive Risikobewertung und Implementierung von Kontrollmechanismen zur Minimierung von Compliance-Risiken.\n• Aufbau nachhaltiger Dokumentations- und Audit-Strukturen für langfristige Rechtssicherheit.\n\n🔧 Technische Exzellenz und Implementierungskompetenz:\n• Auswahl und Integration der optimalen Technologie-Stack für spezifische Automatisierungsanforderungen.\n• Architektur-Design für skalierbare, sichere und wartbare Automatisierungslösungen.\n• Expertise in der Integration verschiedener KI-Technologien wie Machine Learning, Natural Language Processing und Computer Vision.\n• Sicherstellung der nahtlosen Integration in bestehende IT-Landschaften und Geschäftsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie stellt ein ADVISORI Intelligent Automation Consultant sicher, dass Automatisierungslösungen EU AI Act konform sind?',
        answer: "Die Compliance mit dem EU AI Act stellt eine der komplexesten Herausforderungen bei der Implementierung intelligenter Automatisierung dar. ADVISORI Consultants verfügen über spezialisierte Expertise in KI-Governance und regulatorischer Compliance, um sicherzustellen, dass alle Automatisierungslösungen nicht nur technisch exzellent, sondern auch rechtssicher sind. Unser systematischer Ansatz integriert Compliance-Anforderungen von Beginn an in den Entwicklungsprozess.\n\n⚖️ Systematische AI Act Compliance-Bewertung:\n• Detaillierte Klassifizierung aller KI-Komponenten nach den Risikoklassen des EU AI Act mit entsprechender Dokumentation und Governance-Strukturen.\n• Entwicklung spezifischer Compliance-Roadmaps für jede Risikoklasse mit klaren Meilensteinen und Verantwortlichkeiten.\n• Implementierung von Transparenz- und Erklärbarkeits-Mechanismen, die sowohl regulatorische Anforderungen erfüllen als auch Nutzervertrauen schaffen.\n• Aufbau robuster Datengovernance-Strukturen, die DSGVO-Konformität mit AI Act-Anforderungen harmonisch verbinden.\n\n🔍 Kontinuierliche Compliance-Überwachung:\n• Etablierung automatisierter Monitoring-Systeme zur laufenden Überwachung von Compliance-Parametern und Risikoindikatoren.\n• Implementierung von Audit-Trails und Dokumentationssystemen, die jederzeit eine vollständige Nachvollziehbarkeit automatisierter Entscheidungen ermöglichen.\n• Regelmäßige Compliance-Reviews und Anpassungen an sich ändernde regulatorische Anforderungen.\n• Proaktive Identifikation und Behebung potenzieller Compliance-Lücken vor deren kritischer Ausprägung.\n\n📋 Governance-Framework-Entwicklung:\n• Aufbau maßgeschneiderter AI Governance-Strukturen, die sowohl regulatorische Anforderungen erfüllen als auch operative Effizienz gewährleisten.\n• Definition klarer Rollen und Verantwortlichkeiten für KI-Governance innerhalb der Organisation.\n• Entwicklung von Eskalationsprozessen und Entscheidungsstrukturen für kritische KI-bezogene Situationen.\n• Integration von Compliance-Checks in alle Phasen des Automatisierungs-Lebenszyklus."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielt Change Management in der Arbeit eines Intelligent Automation Consultants?',
        answer: "Change Management ist ein fundamentaler Baustein erfolgreicher Intelligent Automation Projekte, da selbst die technisch ausgefeilteste Lösung ohne Akzeptanz und aktive Unterstützung der Mitarbeiter scheitern wird. ADVISORI Consultants verstehen, dass nachhaltige Automatisierung eine tiefgreifende organisatorische Transformation erfordert, die Menschen, Prozesse und Technologie gleichermaßen umfasst. Unser Change Management Ansatz schafft die Voraussetzungen für langfristigen Erfolg.\n\n👥 Menschenzentrierte Transformationsstrategie:\n• Frühzeitige Einbindung aller Stakeholder-Gruppen zur Schaffung von Ownership und Commitment für die Automatisierungsinitiative.\n• Entwicklung zielgruppenspezifischer Kommunikationsstrategien, die Ängste abbauen und Vorteile der Automatisierung transparent vermitteln.\n• Systematische Analyse der organisatorischen Bereitschaft für Veränderungen und Identifikation potenzieller Widerstände.\n• Aufbau von Change Champions und Multiplikatoren innerhalb der Organisation zur nachhaltigen Verankerung der Transformation.\n\n🎓 Kompetenzentwicklung und Qualifizierung:\n• Entwicklung maßgeschneiderter Schulungsprogramme, die Mitarbeiter befähigen, effektiv mit intelligenten Automatisierungssystemen zu arbeiten.\n• Aufbau neuer Rollen und Karrierepfade, die durch die Automatisierung entstehen, wie Bot-Manager oder Process Analysts.\n• Kontinuierliche Weiterbildung und Upskilling-Programme zur Sicherstellung der langfristigen Employability.\n• Mentoring und Coaching-Programme zur individuellen Unterstützung während der Übergangsphase.\n\n🌟 Kulturwandel und nachhaltige Verankerung:\n• Entwicklung einer innovationsfreundlichen Unternehmenskultur, die Automatisierung als Chance für Wertschöpfung und persönliche Entwicklung begreift.\n• Implementierung von Anreizsystemen und Belohnungsstrukturen, die gewünschte Verhaltensweisen fördern und verstärken.\n• Aufbau von Feedback-Mechanismen und kontinuierlichen Verbesserungsprozessen zur Optimierung der Automatisierungslösungen.\n• Etablierung von Success Stories und Best Practices zur Motivation und Inspiration anderer Unternehmensbereiche."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gewährleistet ein ADVISORI Consultant den Schutz von Unternehmens-IP bei Intelligent Automation Projekten?',
        answer: "Der Schutz von Unternehmens-IP ist ein kritischer Erfolgsfaktor bei Intelligent Automation Projekten, da diese Technologien oft Zugang zu sensiblen Geschäftsdaten und proprietären Prozessen benötigen. ADVISORI Consultants implementieren umfassende Sicherheitskonzepte, die sowohl technische als auch organisatorische Maßnahmen umfassen, um höchste Sicherheitsstandards zu gewährleisten und gleichzeitig die Funktionalität der Automatisierungslösungen zu optimieren.\n\n🔒 Mehrstufige Sicherheitsarchitektur:\n• Implementierung von Zero-Trust-Architekturen, die jeden Zugriff auf Automatisierungssysteme und Daten kontinuierlich verifizieren und autorisieren.\n• Entwicklung granularer Zugriffskontrollen und Berechtigungsstrukturen, die das Prinzip der minimalen Berechtigung konsequent umsetzen.\n• Einsatz fortschrittlicher Verschlüsselungstechnologien für Daten in Ruhe und während der Übertragung.\n• Aufbau sicherer Entwicklungs- und Deployment-Pipelines mit integrierten Sicherheitschecks und Vulnerability-Assessments.\n\n🛡️ Datenschutz und Privacy-by-Design:\n• Implementierung von Privacy-by-Design-Prinzipien, die Datenschutz von Beginn an in die Automatisierungsarchitektur integrieren.\n• Entwicklung von Datenminimierungs- und Anonymisierungsstrategien zur Reduktion von Datenschutzrisiken.\n• Aufbau robuster Audit-Trails und Logging-Mechanismen zur Nachvollziehbarkeit aller Datenzugriffe und -verarbeitungen.\n• Implementierung von Data Loss Prevention Systemen zur Verhinderung unautorisierten Datenabflusses.\n\n🔍 Kontinuierliche Sicherheitsüberwachung:\n• Etablierung von Security Operations Centers mit spezialisiertem Monitoring für Automatisierungssysteme.\n• Implementierung von Anomalieerkennung und Behavioral Analytics zur frühzeitigen Identifikation von Sicherheitsbedrohungen.\n• Regelmäßige Penetrationstests und Sicherheitsaudits zur Validierung der Sicherheitsmaßnahmen.\n• Aufbau von Incident Response Prozessen für schnelle Reaktion auf Sicherheitsvorfälle."
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
