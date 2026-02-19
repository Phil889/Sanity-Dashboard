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
    console.log('Updating DSGVO-konforme KI-Lösungen page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-konforme-ki-loesungen' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-konforme-ki-loesungen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie etabliert ADVISORI umfassende KI-Governance-Strukturen und welche Rolle spielen diese bei der nachhaltigen DSGVO-Compliance?',
        answer: "KI-Governance repräsentiert das strategische Fundament für nachhaltige DSGVO-Compliance und verantwortungsvolle AI-Innovation. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch als strategischer Enabler für vertrauensvolle KI-Geschäftsmodelle fungieren und langfristige Wettbewerbsvorteile schaffen.\n\n🏛️ Strategische KI-Governance als Compliance-Fundament:\n• Executive-Level Integration: Etablierung von KI-Governance auf C-Level-Ebene mit klaren Verantwortlichkeiten, Entscheidungsstrukturen und strategischer Ausrichtung an Unternehmenszielen.\n• Cross-funktionale Governance-Teams: Aufbau interdisziplinärer Teams aus Datenschutz, Recht, IT, Geschäftsentwicklung und Ethik für ganzheitliche KI-Governance.\n• Policy-Framework-Entwicklung: Erstellung umfassender KI-Richtlinien, die DSGVO-Compliance, ethische Prinzipien und Geschäftsanforderungen harmonisch integrieren.\n• Kontinuierliche Governance-Evolution: Implementierung adaptiver Governance-Strukturen, die sich mit technologischen und regulatorischen Entwicklungen weiterentwickeln.\n\n📊 ADVISORI's Governance-Excellence-Framework:\n• Risk-Based Governance: Entwicklung risikobasierter Governance-Ansätze, die KI-Projekte nach Risikoprofil kategorisieren und entsprechende Governance-Maßnahmen implementieren.\n• Automated Compliance-Monitoring: Integration automatisierter Überwachungssysteme für kontinuierliche Compliance-Kontrolle und proaktive Risiko-Identifikation.\n• Stakeholder-Engagement-Prozesse: Etablierung strukturierter Prozesse für die Einbindung aller relevanten Stakeholder in KI-Governance-Entscheidungen.\n• Performance-Measurement: Implementierung von KPIs und Metriken für die kontinuierliche Bewertung und Optimierung der KI-Governance-Effektivität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Audit-Strategien und Compliance-Monitoring-Systeme implementiert ADVISORI für kontinuierliche DSGVO-Konformität in KI-Umgebungen?',
        answer: "Kontinuierliche Compliance-Überwachung in KI-Umgebungen erfordert spezialisierte Audit-Strategien und automatisierte Monitoring-Systeme, die die dynamische Natur von AI-Systemen berücksichtigen. ADVISORI entwickelt umfassende Audit-Frameworks, die proaktive Compliance-Sicherstellung ermöglichen und gleichzeitig als strategisches Instrument für kontinuierliche Optimierung fungieren.\n\n🔍 Proaktive Audit-Strategien für KI-Compliance:\n• Continuous Auditing: Implementierung automatisierter Audit-Prozesse, die KI-Systeme in Echtzeit überwachen und Compliance-Abweichungen sofort identifizieren.\n• Risk-Based Audit-Approaches: Entwicklung risikobasierter Audit-Strategien, die Ressourcen auf die kritischsten KI-Anwendungen und höchsten Risikobereiche fokussieren.\n• Multi-Layer Audit-Architecture: Etablierung mehrstufiger Audit-Strukturen von technischen System-Audits bis hin zu strategischen Governance-Reviews.\n• Predictive Compliance-Analytics: Einsatz von Analytics für die Vorhersage potenzieller Compliance-Risiken und proaktive Mitigation-Maßnahmen.\n\n⚙️ Automatisierte Monitoring-Excellence:\n• Real-Time Compliance-Dashboards: Entwicklung umfassender Dashboards für kontinuierliche Überwachung aller DSGVO-relevanten KI-Aktivitäten mit Echtzeit-Alerts.\n• Automated Documentation: Implementierung automatisierter Dokumentationssysteme, die alle KI-Entscheidungen und Datenverarbeitungsaktivitäten lückenlos protokollieren.\n• Anomaly Detection: Einsatz von Machine Learning für die Identifikation ungewöhnlicher Muster oder potenzieller Compliance-Verstöße in KI-Systemen.\n• Integrated Reporting: Entwicklung automatisierter Reporting-Systeme für regulatorische Meldungen und interne Compliance-Berichte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie gewährleistet ADVISORI die Implementierung von Betroffenenrechten in KI-Systemen und welche technischen Lösungen werden für DSGVO-konforme Auskunfts- und Löschungsanfragen entwickelt?',
        answer: "Die technische Implementierung von Betroffenenrechten in KI-Systemen stellt eine der komplexesten Herausforderungen der DSGVO-Compliance dar. ADVISORI entwickelt innovative technische Lösungen, die es ermöglichen, alle Betroffenenrechte vollständig und effizient in KI-Architekturen zu integrieren, ohne die Performance oder Funktionalität der AI-Systeme zu beeinträchtigen.\n\n⚖️ Umfassende Betroffenenrechte-Integration:\n• Artikel 15 Auskunftsrecht: Entwicklung automatisierter Systeme, die betroffenen Personen detaillierte Informationen über die Verarbeitung ihrer Daten in KI-Systemen bereitstellen können.\n• Artikel 16 Berichtigungsrecht: Implementierung von Mechanismen für die sichere und nachvollziehbare Korrektur von Daten in trainierten KI-Modellen.\n• Artikel 17 Löschungsrecht: Entwicklung von \"Machine Unlearning\" Technologien, die es ermöglichen, spezifische Daten aus trainierten KI-Modellen zu entfernen.\n• Artikel 20 Datenportabilität: Bereitstellung strukturierter Exportfunktionen für alle personenbezogenen Daten, die in KI-Systemen verarbeitet werden.\n\n🔧 Technische Excellence für Betroffenenrechte:\n• Automated Rights-Management: Entwicklung automatisierter Systeme für die Bearbeitung von Betroffenenanfragen mit minimaler manueller Intervention.\n• Cryptographic Data-Lineage: Implementierung kryptographischer Verfahren für die nachvollziehbare Verfolgung von Daten durch komplexe KI-Pipelines.\n• Privacy-Preserving Deletion: Entwicklung von Löschungsverfahren, die Daten sicher entfernen, ohne die Integrität oder Performance der KI-Modelle zu gefährden.\n• Real-Time Rights-Enforcement: Implementierung von Systemen, die Betroffenenrechte in Echtzeit durchsetzen und entsprechende Anpassungen in KI-Systemen vornehmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Incident-Response-Strategien entwickelt ADVISORI für KI-spezifische Datenschutzverletzungen und wie wird die DSGVO-konforme Meldung und Behebung gewährleistet?',
        answer: "KI-spezifische Datenschutzverletzungen erfordern spezialisierte Incident-Response-Strategien, die die einzigartigen Risiken und Komplexitäten von AI-Systemen berücksichtigen. ADVISORI entwickelt umfassende Incident-Response-Frameworks, die schnelle Reaktion, effektive Schadensbegrenzung und vollständige DSGVO-Compliance bei Datenschutzverletzungen gewährleisten.\n\n🚨 KI-spezifische Incident-Response-Excellence:\n• AI-Incident-Classification: Entwicklung spezialisierter Klassifikationssysteme für KI-spezifische Datenschutzverletzungen wie Model-Inversion-Attacks, Membership-Inference-Attacks oder Data-Poisoning.\n• Rapid-Response-Teams: Etablierung spezialisierter Teams mit KI-Expertise für die schnelle Bewertung und Eindämmung von AI-spezifischen Sicherheitsvorfällen.\n• Automated Incident-Detection: Implementierung automatisierter Systeme für die frühzeitige Erkennung potenzieller Datenschutzverletzungen in KI-Umgebungen.\n• Stakeholder-Communication: Entwicklung klarer Kommunikationsstrategien für die Information aller relevanten Stakeholder bei KI-spezifischen Incidents.\n\n⏱️ DSGVO-konforme Meldung und Behebung:\n• Artikel 33/34 Compliance: Implementierung automatisierter Systeme für die fristgerechte Meldung von Datenschutzverletzungen an Aufsichtsbehörden und betroffene Personen.\n• Forensic-Analysis-Capabilities: Entwicklung spezialisierter forensischer Fähigkeiten für die Analyse von KI-spezifischen Sicherheitsvorfällen und Datenschutzverletzungen.\n• Remediation-Strategies: Erstellung umfassender Strategien für die Behebung von Datenschutzverletzungen in KI-Systemen, einschließlich Model-Retraining und Data-Sanitization.\n• Lessons-Learned-Integration: Etablierung von Prozessen für die kontinuierliche Verbesserung der Incident-Response-Fähigkeiten basierend auf Erfahrungen aus vergangenen Vorfällen."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
