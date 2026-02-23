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
    console.log('Updating Intelligent Automation Consulting Services page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-consulting-services' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-consulting-services" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist strategische Intelligent Automation Beratung für Unternehmen mehr als nur Technologie-Implementierung und wie adressiert ADVISORI dies?',
        answer: "Intelligent Automation Consulting geht weit über die reine Technologie-Implementierung hinaus und erfordert eine ganzheitliche Transformation von Geschäftsprozessen, Organisationsstrukturen und Unternehmenskultur. Für moderne Unternehmen ist es entscheidend, Automatisierung nicht als isolierte IT-Initiative zu betrachten, sondern als strategischen Hebel für nachhaltige Wettbewerbsvorteile und operative Exzellenz. ADVISORI versteht diese Komplexität und bietet einen umfassenden Beratungsansatz, der Menschen, Prozesse und Technologie in Einklang bringt.\n\n🎯 Strategische Dimensionen der Intelligent Automation:\n• Geschäftsmodell-Transformation: Entwicklung neuer Wertschöpfungsmodelle durch intelligente Automatisierung, die über Kosteneinsparungen hinausgehen und neue Umsatzquellen erschließen.\n• Organisatorische Resilienz: Aufbau adaptiver Strukturen, die es Unternehmen ermöglichen, schnell auf Marktveränderungen zu reagieren und kontinuierlich zu innovieren.\n• Datengetriebene Entscheidungsfindung: Integration von Analytics und KI in Entscheidungsprozesse zur Schaffung einer evidenzbasierten Unternehmensführung.\n• Compliance und Governance: Sicherstellung regulatorischer Konformität, insbesondere im Kontext des EU AI Act und anderer aufkommender KI-Regulierungen.\n\n🛡️ Der ADVISORI-Ansatz für strategische Transformation:\n• Ganzheitliche Bewertung: Wir analysieren nicht nur technische Möglichkeiten, sondern auch organisatorische Bereitschaft, kulturelle Faktoren und strategische Ziele Ihres Unternehmens.\n• EU AI Act konforme Implementierung: Unsere Expertise in KI-Governance gewährleistet, dass alle Automatisierungslösungen den aktuellen und zukünftigen regulatorischen Anforderungen entsprechen.\n• Change Management Excellence: Systematische Begleitung der Transformation mit Fokus auf Mitarbeiterqualifizierung und Akzeptanzförderung.\n• Kontinuierliche Wertschöpfung: Etablierung von Mechanismen zur kontinuierlichen Optimierung und Skalierung Ihrer Automatisierungsinitiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifiziert ADVISORI den ROI von Intelligent Automation Projekten und welche messbaren Geschäftsergebnisse können Unternehmen erwarten?',
        answer: "Die Quantifizierung des Return on Investment (ROI) bei Intelligent Automation Projekten erfordert eine mehrdimensionale Betrachtung, die sowohl direkte als auch indirekte Wertschöpfung berücksichtigt. ADVISORI hat eine bewährte Methodik entwickelt, die es Unternehmen ermöglicht, den tatsächlichen Geschäftswert ihrer Automatisierungsinvestitionen präzise zu messen und kontinuierlich zu optimieren. Dabei gehen wir über traditionelle Kosteneinsparungsmetriken hinaus und fokussieren auf nachhaltige Wertschöpfung.\n\n📊 Direkte ROI-Komponenten und Messgrößen:\n• Prozesseffizienz-Steigerung: Reduktion von Durchlaufzeiten, Eliminierung manueller Fehler und Erhöhung der Verarbeitungsgeschwindigkeit mit messbaren KPIs.\n• Kosteneinsparungen: Optimierung von Personalressourcen, Reduktion von Betriebskosten und Minimierung von Compliance-Risiken durch automatisierte Überwachung.\n• Qualitätsverbesserung: Konsistente Prozessausführung, reduzierte Fehlerquoten und verbesserte Kundenzufriedenheit durch zuverlässige Automatisierung.\n• Skalierbarkeit: Fähigkeit zur Bewältigung von Volumenschwankungen ohne proportionale Kostensteigerung.\n\n💡 Indirekte Wertschöpfung und strategische Vorteile:\n• Innovation Enablement: Freistellung von Mitarbeitern für wertschöpfende Tätigkeiten und strategische Initiativen durch Automatisierung repetitiver Aufgaben.\n• Datenqualität und Analytics: Verbesserte Datenqualität durch automatisierte Erfassung und Verarbeitung, die bessere Geschäftsentscheidungen ermöglicht.\n• Compliance und Risikominimierung: Reduzierte regulatorische Risiken und verbesserte Audit-Fähigkeiten durch konsistente, nachvollziehbare Prozesse.\n• Mitarbeiterzufriedenheit: Erhöhte Motivation durch Fokus auf anspruchsvolle Aufgaben und Reduktion monotoner Tätigkeiten.\n\n🔍 ADVISORI's ROI-Bewertungsframework:\n• Baseline-Etablierung: Detaillierte Erfassung der aktuellen Prozesskosten, Durchlaufzeiten und Qualitätsmetriken als Ausgangspunkt für Verbesserungsmessungen.\n• Mehrstufige Bewertung: Kurzfristige, mittelfristige und langfristige ROI-Betrachtung mit unterschiedlichen Zeithorizonten und Erfolgskriterien.\n• Kontinuierliches Monitoring: Implementierung von Dashboards und KPI-Systemen zur laufenden Überwachung und Optimierung der Automatisierungsperformance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie stellt ADVISORI sicher, dass Intelligent Automation Lösungen den Anforderungen des EU AI Act entsprechen und gleichzeitig maximale Geschäftseffizienz bieten?',
        answer: "Die Compliance mit dem EU AI Act bei gleichzeitiger Maximierung der Geschäftseffizienz stellt eine der komplexesten Herausforderungen moderner Automatisierungsprojekte dar. ADVISORI hat eine spezialisierte Methodik entwickelt, die regulatorische Konformität nicht als Hindernis, sondern als Qualitätsmerkmal und Wettbewerbsvorteil positioniert. Unser Ansatz integriert Compliance-Anforderungen von Beginn an in den Entwicklungsprozess und schafft so Lösungen, die sowohl rechtssicher als auch hochperformant sind.\n\n⚖️ EU AI Act Compliance Framework:\n• Risikokategorisierung: Systematische Bewertung aller KI-Komponenten nach den Risikoklassen des EU AI Act mit entsprechender Dokumentation und Governance-Strukturen.\n• Transparenz und Erklärbarkeit: Implementierung von Mechanismen zur Nachvollziehbarkeit automatisierter Entscheidungen, die sowohl regulatorische Anforderungen erfüllen als auch Vertrauen schaffen.\n• Datengovernance: Etablierung robuster Datenschutz- und Datenqualitätsstandards, die DSGVO-Konformität mit AI Act-Anforderungen verbinden.\n• Kontinuierliche Überwachung: Aufbau von Monitoring-Systemen zur laufenden Compliance-Überprüfung und Risikobewertung.\n\n🚀 Effizienz-Optimierung bei Compliance-Konformität:\n• Compliance by Design: Integration regulatorischer Anforderungen bereits in der Architekturphase, um nachträgliche Anpassungen und damit verbundene Ineffizienzen zu vermeiden.\n• Automatisierte Compliance-Checks: Entwicklung intelligenter Überwachungssysteme, die Compliance-Verstöße proaktiv erkennen und korrigieren.\n• Standardisierte Governance-Prozesse: Etablierung effizienter Workflows für Genehmigungen, Dokumentation und Audit-Vorbereitung.\n• Risikoadaptive Implementierung: Fokussierung von Compliance-Maßnahmen auf tatsächliche Risikobereiche zur Vermeidung von Over-Engineering.\n\n🔒 ADVISORI's Compliance-Excellence-Ansatz:\n• Proaktive Regulierungs-Überwachung: Kontinuierliche Beobachtung regulatorischer Entwicklungen und proaktive Anpassung der Automatisierungslösungen.\n• Integrierte Audit-Vorbereitung: Aufbau von Dokumentations- und Nachweissystemen, die Audit-Prozesse vereinfachen und beschleunigen.\n• Stakeholder-Engagement: Einbindung von Compliance-, Legal- und Business-Teams in den Entwicklungsprozess für ganzheitliche Lösungen.\n• Zukunftssichere Architektur: Entwicklung flexibler Systeme, die sich an zukünftige regulatorische Änderungen anpassen lassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt Change Management in ADVISORI Intelligent Automation Consulting und wie wird die Akzeptanz bei Mitarbeitern sichergestellt?',
        answer: "Change Management ist ein kritischer Erfolgsfaktor für Intelligent Automation Projekte, da technologische Exzellenz allein nicht ausreicht, um nachhaltige Transformation zu erreichen. ADVISORI versteht, dass der Erfolg von Automatisierungsinitiativen maßgeblich von der Akzeptanz und aktiven Unterstützung der Mitarbeiter abhängt. Unser Change Management Ansatz geht über traditionelle Schulungsmaßnahmen hinaus und schafft eine Kultur der kontinuierlichen Innovation und Zusammenarbeit zwischen Menschen und intelligenten Systemen.\n\n👥 Menschenzentrierter Transformationsansatz:\n• Frühzeitige Stakeholder-Einbindung: Systematische Identifikation und Einbindung aller betroffenen Mitarbeitergruppen bereits in der Planungsphase zur Schaffung von Ownership und Commitment.\n• Transparente Kommunikation: Offene Kommunikation über Ziele, Auswirkungen und Vorteile der Automatisierung zur Reduktion von Ängsten und Widerständen.\n• Kompetenzentwicklung: Gezielte Qualifizierungsprogramme, die Mitarbeiter befähigen, mit intelligenten Systemen zu arbeiten und neue Rollen zu übernehmen.\n• Kulturwandel-Begleitung: Unterstützung bei der Entwicklung einer innovationsfreundlichen Unternehmenskultur, die Automatisierung als Chance begreift.\n\n🎯 Strukturiertes Change Management Framework:\n• Readiness Assessment: Bewertung der organisatorischen Bereitschaft für Veränderungen und Identifikation potenzieller Hindernisse.\n• Maßgeschneiderte Kommunikationsstrategien: Entwicklung zielgruppenspezifischer Botschaften und Kommunikationskanäle für verschiedene Mitarbeitergruppen.\n• Pilotprogramme und Quick Wins: Implementierung kleinerer Automatisierungsprojekte zur Demonstration von Vorteilen und Aufbau von Vertrauen.\n• Kontinuierliches Feedback und Anpassung: Etablierung von Feedback-Mechanismen zur laufenden Optimierung des Change-Prozesses.\n\n🌟 Nachhaltige Akzeptanz und Engagement:\n• Empowerment-Strategien: Befähigung von Mitarbeitern, selbst Automatisierungsmöglichkeiten zu identifizieren und zu entwickeln.\n• Anreizsysteme: Entwicklung von Belohnungs- und Anerkennungssystemen für aktive Unterstützung der Transformation.\n• Mentoring und Coaching: Bereitstellung individueller Unterstützung für Mitarbeiter während der Übergangsphase.\n• Erfolgsgeschichten und Best Practices: Dokumentation und Kommunikation von Erfolgen zur Motivation und Inspiration anderer Teams."
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
