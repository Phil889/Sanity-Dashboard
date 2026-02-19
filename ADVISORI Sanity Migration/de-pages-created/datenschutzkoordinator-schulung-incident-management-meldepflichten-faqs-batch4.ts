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
    console.log('Updating Datenschutzkoordinator Schulung - Incident Management & Meldepflichten page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-incident-management-meldepflichten' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-incident-management-meldepflichten" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Welche spezifischen Kompetenzen vermittelt ADVISORI für die Bewertung und das Management von Insider-Bedrohungen bei Datenschutzvorfällen und wie unterscheidet sich dies von externen Cyber-Angriffen?",
        answer: "Insider-Bedrohungen stellen eine der komplexesten Herausforderungen im Datenschutz-Incident Management dar, da sie traditionelle Sicherheitsperimeter umgehen und oft schwer zu erkennen sind. ADVISORI's Schulungsansatz entwickelt spezielle Kompetenzen für die Identifikation, Untersuchung und das Management von Insider-bedingten Datenschutzvorfällen, die sich fundamental von der Behandlung externer Angriffe unterscheiden.\n\n🕵️ Insider Threat Detection und Charakteristika:\n• Behavioral Analytics und Anomalieerkennung: Systematische Überwachung und Analyse von Nutzerverhaltensmustern zur frühzeitigen Erkennung verdächtiger Aktivitäten von Insidern.\n• Privilege Escalation Monitoring: Erkennung ungewöhnlicher Berechtigungsnutzung oder -erweiterungen, die auf potenzielle Insider-Bedrohungen hinweisen könnten.\n• Data Access Pattern Analysis: Analyse ungewöhnlicher Datenzugriffsmuster, die nicht mit den normalen Arbeitsaufgaben einer Person übereinstimmen.\n• Psychological Risk Indicators: Verständnis für psychologische und situative Faktoren, die Mitarbeiter zu Insider-Bedrohungen werden lassen können.\n\n🔍 Spezielle Investigationsmethoden für Insider Cases:\n• Discrete Investigation Techniques: Methoden zur verdeckten Untersuchung von Insider-Verdachtsfällen ohne Alarmierung des verdächtigen Mitarbeiters.\n• HR Integration und Legal Compliance: Enge Zusammenarbeit mit Personalabteilung und Rechtsteam zur Einhaltung arbeitsrechtlicher Bestimmungen während der Untersuchung.\n• Evidence Preservation unter Arbeitsrecht: Spezielle Techniken zur rechtssicheren Beweissicherung unter Berücksichtigung des Mitarbeiterdatenschutzes und Betriebsvereinbarungen.\n• Interview und Befragungstechniken: Professionelle Methoden zur Befragung von Verdächtigen und Zeugen im Insider-Kontext.\n\n⚖️ Rechtliche und ethische Besonderheiten:\n• Mitarbeiterdatenschutz vs. Unternehmensschutz: Abwägung zwischen berechtigten Sicherheitsinteressen und Persönlichkeitsrechten der Mitarbeiter.\n• Arbeitsrechtliche Konsequenzen: Verständnis für die arbeitsrechtlichen Implikationen von Insider-Untersuchungen und mögliche disziplinarische Maßnahmen.\n• Whistleblower Protection: Schutz und Management von Hinweisgebern, die Insider-Bedrohungen melden.\n• Documentation Standards: Besondere Dokumentationsanforderungen für Insider-Cases, die potenzielle arbeitsgerichtliche Verfahren berücksichtigen.\n\n🛡️ Präventive Maßnahmen und kulturelle Aspekte:\n• Trust-but-Verify Frameworks: Entwicklung ausgewogener Sicherheitskulturen, die Vertrauen mit angemessener Kontrolle verbinden.\n• Segregation of Duties: Implementierung effektiver Funktionstrennung zur Minimierung von Insider-Risiken.\n• Cultural Change Management: Aufbau einer Sicherheitskultur, die Insider-Bedrohungen ohne Paranoia oder Misstrauen adressiert.\n• Exit Interview Integration: Systematische Integration von Datenschutz- und Sicherheitsaspekten in Austrittsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie bereitet ADVISORI's Schulung auf die komplexen Datenschutz-Incident Management Anforderungen in hochregulierten Branchen wie Finanzdienstleistungen, Gesundheitswesen oder kritischen Infrastrukturen vor?",
        answer: "Hochregulierte Branchen stellen besondere Anforderungen an Datenschutz-Incident Management, die weit über die Standard-DSGVO-Compliance hinausgehen und spezifische sektorale Regulierungen, Aufsichtsbehörden und Stakeholder-Erwartungen berücksichtigen müssen. ADVISORI's Schulungsansatz entwickelt branchen-spezifische Expertise und Multi-Regulatory-Compliance-Fähigkeiten für diese komplexen Umgebungen.\n\n🏦 Finanzdienstleistungen - Besondere Herausforderungen:\n• Multi-Regulatory Compliance: Gleichzeitige Erfüllung von DSGVO, PCI DSS, DORA, MiFID II und nationalen Finanzaufsichtsanforderungen bei Incident Response.\n• Financial Systemic Risk Management: Verständnis für die systemischen Risiken von Datenschutzvorfällen im Finanzsektor und entsprechende Eskalationsverfahren.\n• Real-time Transaction Impact Assessment: Bewertung der Auswirkungen von Datenschutzvorfällen auf laufende Finanzgeschäfte und Marktoperationen.\n• Central Bank Notification Requirements: Spezielle Meldepflichten an Zentralbanken und Finanzaufsichtsbehörden zusätzlich zu Datenschutzaufsicht.\n\n🏥 Gesundheitswesen - Life-Critical Incident Management:\n• Patient Safety Integration: Priorisierung und Integration von Patientensicherheitsaspekten in Datenschutz-Incident Response Prozesse.\n• Medical Device Security: Spezielle Herausforderungen bei Datenschutzvorfällen, die medizinische Geräte und IoMT (Internet of Medical Things) betreffen.\n• Clinical Operations Continuity: Sicherstellung der Kontinuität kritischer medizinischer Versorgung während Incident Response Aktivitäten.\n• Multi-Stakeholder Coordination: Koordination zwischen Datenschutzteams, medizinischem Personal, IT-Abteilungen und Patientenvertretern.\n\n⚡ Kritische Infrastrukturen - National Security Dimensions:\n• NIS2-Directive Compliance: Implementierung der verschärften Anforderungen der NIS2-Richtlinie für kritische und wichtige Einrichtungen.\n• National CERT Coordination: Professionelle Zusammenarbeit mit nationalen Computer Emergency Response Teams und Sicherheitsbehörden.\n• Supply Chain Security Integration: Berücksichtigung von Lieferkettenrisiken und deren Auswirkungen auf Datenschutz-Incidents.\n• Public Safety Impact Assessment: Bewertung der Auswirkungen von Datenschutzvorfällen auf die öffentliche Sicherheit und entsprechende Kommunikationsstrategien.\n\n🎯 Branchenübergreifende High-Regulation Kompetenzen:\n• Regulatory Landscape Mapping: Systematische Kartierung aller relevanten Regulierungsanforderungen und deren Interdependenzen.\n• Multi-Authority Communication: Professionelle Kommunikation mit verschiedenen Aufsichtsbehörden und deren koordinierte Ansprache.\n• Enhanced Documentation Standards: Erhöhte Dokumentationsanforderungen für hochregulierte Umgebungen und deren praktische Umsetzung.\n• Board-Level Reporting: Spezielle Anforderungen für C-Level und Board-Kommunikation in kritischen Branchen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche Rolle spielen Künstliche Intelligenz und automatisierte Systeme in ADVISORI's Incident Management Schulung und wie werden Koordinatoren auf KI-gestützte Datenschutzvorfälle vorbereitet?",
        answer: "Künstliche Intelligenz und automatisierte Systeme revolutionieren sowohl die Entstehung als auch die Bearbeitung von Datenschutzvorfällen. ADVISORI's Schulungsansatz bereitet Koordinatoren auf eine neue Generation von KI-bedingten und KI-unterstützten Incident Management Szenarien vor, die einzigartige technische, rechtliche und ethische Herausforderungen mit sich bringen.\n\n🤖 KI-bedingte Datenschutzvorfälle - Neue Bedrohungsklassen:\n• Algorithmic Bias Incidents: Untersuchung und Management von Datenschutzvorfällen, die durch diskriminierende oder fehlerhafte KI-Algorithmen verursacht werden.\n• AI Model Poisoning: Umgang mit Vorfällen, bei denen KI-Modelle durch manipulierte Trainingsdaten kompromittiert wurden und dadurch Datenschutzverletzungen verursachen.\n• Automated Decision-Making Failures: Management von Vorfällen bei automatisierten Entscheidungssystemen, die zu unrechtmäßiger Datenverarbeitung führen.\n• Large Language Model Data Leakage: Spezielle Herausforderungen bei Datenschutzvorfällen durch LLMs, die Trainingsdaten oder sensible Informationen preisgeben.\n\n🔍 KI-gestützte Incident Detection und Response:\n• Machine Learning für Anomalieerkennung: Einsatz von ML-Algorithmen zur frühzeitigen Erkennung ungewöhnlicher Datenzugriffsmuster und potenzieller Datenschutzvorfälle.\n• Natural Language Processing für Incident Analysis: Nutzung von NLP zur automatischen Analyse großer Datenmengen und Identifikation relevanter Incident-Informationen.\n• Predictive Analytics für Risk Assessment: Verwendung von KI zur Vorhersage der Wahrscheinlichkeit und des Schweregrades von Datenschutzvorfällen.\n• Automated Response Orchestration: Integration von KI-gestützten Workflows für die automatisierte Koordination von Incident Response Aktivitäten.\n\n⚖️ Rechtliche und ethische KI-Compliance:\n• AI Act Compliance Integration: Berücksichtigung der EU-AI-Verordnung bei KI-bedingten Datenschutzvorfällen und deren Meldepflichten.\n• Explainable AI für Incident Investigation: Methoden zur Erklärung und Dokumentation von KI-Entscheidungen während der Incident-Untersuchung.\n• Algorithmic Transparency Requirements: Umgang mit Transparenzanforderungen bei KI-Systemen im Kontext von Datenschutzvorfällen.\n• Human-in-the-Loop Governance: Sicherstellung menschlicher Überwachung und Kontrolle bei KI-gestützten Incident Response Prozessen.\n\n🚀 Future-Ready KI Integration:\n• AI-Human Collaboration Frameworks: Entwicklung effektiver Arbeitsmodelle zwischen KI-Systemen und menschlichen Incident Response Teams.\n• Continuous AI Model Monitoring: Etablierung kontinuierlicher Überwachung von KI-Modellen zur Prävention von Datenschutzvorfällen.\n• AI Ethics Integration: Einbindung ethischer KI-Prinzipien in Incident Management Prozesse und Entscheidungsfindung.\n• Cross-Domain AI Incident Patterns: Identifikation und Analyse von KI-Incident-Mustern über verschiedene Branchen und Anwendungsfelder hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie addressiert ADVISORI's Schulung die speziellen Herausforderungen bei Datenschutzvorfällen in internationalen Konzernen mit komplexen Organisationsstrukturen und welche Governance-Aspekte werden vermittelt?",
        answer: "Internationale Konzerne mit komplexen Organisationsstrukturen stellen besondere Herausforderungen für Datenschutz-Incident Management dar, die Multi-Jurisdictional-Compliance, komplexe Reporting-Linien und kulturelle Unterschiede umfassen. ADVISORI's Schulungsansatz entwickelt spezielle Governance-Kompetenzen für die Koordination globaler Incident Response in Matrixorganisationen und internationalen Unternehmensstrukturen.\n\n🌍 Global Incident Governance und Organisationsstrukturen:\n• Matrix Organization Navigation: Effektive Koordination in komplexen Matrixstrukturen mit funktionalen und regionalen Reporting-Linien während Datenschutzvorfällen.\n• Cross-Border Entity Coordination: Management von Incident Response über verschiedene Rechtsformen hinweg (Tochtergesellschaften, Zweigniederlassungen, Joint Ventures).\n• Regional vs. Global Authority Balance: Ausgewogene Verteilung von Entscheidungskompetenzen zwischen globalen und regionalen Datenschutzorganisationen.\n• Cultural Sensitivity in Crisis Communication: Anpassung von Incident Communication an verschiedene kulturelle Kontexte und Geschäftspraktiken.\n\n📊 Enterprise-Level Incident Management Integration:\n• Board-Level Escalation Frameworks: Strukturierte Eskalationsverfahren für schwerwiegende Datenschutzvorfälle bis auf Konzernvorstand- und Aufsichtsratsebene.\n• Group-wide Risk Assessment: Methodiken zur Bewertung konzernweiter Risiken und Auswirkungen von lokalen Datenschutzvorfällen.\n• Centralized vs. Decentralized Response Models: Optimale Balance zwischen zentraler Koordination und lokaler Expertise bei internationaler Incident Response.\n• Cross-Functional Integration: Einbindung verschiedener Konzernfunktionen (Legal, Compliance, IT, HR, Communications) in koordinierte Incident Response.\n\n🔄 Data Flow und Transfer Governance:\n• International Data Transfer Impact: Bewertung der Auswirkungen von Datenschutzvorfällen auf internationale Datentransfers und entsprechende Schutzmaßnahmen.\n• Shared Service Center Coordination: Management von Incident Response bei geteilten Service-Zentren und zentralisierten Verarbeitungsaktivitäten.\n• Cloud Provider Governance: Koordination mit globalen Cloud-Providern bei konzernweiten Cloud-Strategien und entsprechenden Datenschutzvorfällen.\n• Vendor Management Integration: Einbindung globaler Lieferanten und Service-Provider in koordinierte Incident Response Prozesse.\n\n⚡ Standardization und Best Practice Transfer:\n• Global Playbook Development: Entwicklung einheitlicher, aber lokal anpassbarer Incident Response Playbooks für internationale Organisationen.\n• Knowledge Transfer Mechanisms: Systematische Mechanismen für den Transfer von Incident-Learnings zwischen verschiedenen Konzerneinheiten.\n• Technology Standardization: Harmonisierung von Incident Management Technologien und Plattformen über Ländergrenzen hinweg.\n• Performance Measurement Harmonization: Entwicklung einheitlicher KPIs und Metriken für die Bewertung der Incident Response Performance in verschiedenen Regionen."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
