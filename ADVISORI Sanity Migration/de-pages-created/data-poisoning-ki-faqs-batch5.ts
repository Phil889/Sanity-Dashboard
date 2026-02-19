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
    console.log('Updating Data Poisoning KI page with Industry-Specific FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'data-poisoning-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "data-poisoning-ki" not found')
    }
    
    // Create new Industry-Specific FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Welche spezifischen Data Poisoning Risiken bestehen für Finanzdienstleister und wie adressiert ADVISORI diese unter Berücksichtigung von MiFID II und anderen Finanzregulierungen?",
        answer: "Finanzdienstleister stehen vor einzigartigen Data Poisoning Herausforderungen, da kompromittierte KI-Systeme nicht nur finanzielle Verluste verursachen, sondern auch Marktintegrität und Kundenvertrauen gefährden können. ADVISORI hat spezialisierte Schutzmaßnahmen für den Finanzsektor entwickelt, die strenge regulatorische Anforderungen erfüllen und gleichzeitig operative Exzellenz gewährleisten.\n\n💰 Finanzspezifische Bedrohungsszenarien:\n• Algorithmic Trading Manipulation: Schutz vor Data Poisoning Angriffen auf Handelssysteme, die zu Marktmanipulation oder unbeabsichtigten Handelsverlusten führen könnten.\n• Kreditrisikobewertung Kompromittierung: Sicherung von Kreditentscheidungsmodellen gegen Manipulationen, die zu fehlerhaften Risikobewertungen und Kreditausfällen führen könnten.\n• Betrugserkennung Umgehung: Schutz von Anti-Fraud-Systemen vor Angriffen, die darauf abzielen, betrügerische Aktivitäten unentdeckt zu lassen.\n• Robo-Advisory Manipulation: Sicherung automatisierter Anlageberatung gegen Angriffe, die zu ungeeigneten Anlageempfehlungen führen könnten.\n\n⚖️ Regulatorische Compliance-Integration:\n• MiFID II Best Execution: Sicherstellung, dass Data Poisoning Schutzmaßnahmen die Best Execution Anforderungen nicht beeinträchtigen und transparente Handelsentscheidungen ermöglichen.\n• GDPR Financial Data Protection: Implementierung von Datenschutzmaßnahmen, die sowohl KI-Sicherheit als auch DSGVO-Compliance für Finanzdaten gewährleisten.\n• Basel III Risk Management: Integration von KI-Sicherheitsrisiken in Basel III Risikomanagement-Frameworks mit angemessener Kapitalunterlegung.\n• ESMA Guidelines Compliance: Sicherstellung der Einhaltung von ESMA-Richtlinien für algorithmischen Handel und Risikomanagement.\n\n🔒 Spezialisierte Finanz-Sicherheitsmaßnahmen:\n• Real-time Market Data Validation: Implementierung von Echtzeit-Validierung für Marktdaten zur Erkennung manipulierter Eingaben in Handelssysteme.\n• Multi-source Financial Data Verification: Kreuzvalidierung von Finanzdaten aus verschiedenen Quellen zur Identifikation inkonsistenter oder manipulierter Informationen.\n• Regulatory Reporting Integrity: Sicherstellung der Integrität von Daten für regulatorische Berichterstattung durch umfassende Validierungsverfahren.\n• Client Data Protection: Spezielle Schutzmaßnahmen für Kundendaten in KI-Systemen unter Berücksichtigung von Bankgeheimnis und Datenschutzanforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie schützt ADVISORI Gesundheitswesen-KI vor Data Poisoning Angriffen und welche besonderen Herausforderungen ergeben sich durch Patientensicherheit und medizinische Compliance?",
        answer: "Das Gesundheitswesen stellt besonders kritische Anforderungen an KI-Sicherheit, da Data Poisoning Angriffe direkte Auswirkungen auf Patientensicherheit und medizinische Entscheidungen haben können. ADVISORI hat spezialisierte Sicherheitsframeworks für Healthcare-KI entwickelt, die höchste Sicherheitsstandards mit regulatorischen Anforderungen wie HIPAA und MDR kombinieren.\n\n🏥 Healthcare-spezifische Risikoszenarien:\n• Diagnostische KI Manipulation: Schutz von bildgebenden und diagnostischen KI-Systemen vor Angriffen, die zu Fehldiagnosen oder übersehenen Krankheiten führen könnten.\n• Medikamentendosierung Kompromittierung: Sicherung von KI-gestützten Dosierungsempfehlungen gegen Manipulationen, die zu gefährlichen Über- oder Unterdosierungen führen könnten.\n• Patientenüberwachung Störung: Schutz von kontinuierlichen Überwachungssystemen vor Angriffen, die kritische Gesundheitszustände verschleiern könnten.\n• Klinische Entscheidungsunterstützung: Sicherung von Clinical Decision Support Systemen gegen Manipulationen, die zu ungeeigneten Behandlungsempfehlungen führen könnten.\n\n🛡️ Patientensicherheits-orientierte Schutzmaßnahmen:\n• Multi-Modal Validation: Implementierung von Validierungsverfahren, die verschiedene Datenmodalitäten kreuzvalidieren, um manipulierte medizinische Daten zu erkennen.\n• Clinical Expert Integration: Einbindung medizinischer Experten in Validierungsprozesse zur Identifikation klinisch unplausibler KI-Entscheidungen.\n• Patient Safety Monitoring: Kontinuierliche Überwachung von KI-Entscheidungen auf Patientensicherheitsrisiken mit automatischen Eskalationsverfahren.\n• Fail-Safe Mechanisms: Implementierung von Fail-Safe-Mechanismen, die bei erkannten Anomalien automatisch auf sichere Standardverfahren zurückgreifen.\n\n📋 Healthcare Compliance-Integration:\n• HIPAA Privacy Protection: Sicherstellung, dass alle Sicherheitsmaßnahmen HIPAA-Datenschutzanforderungen erfüllen und Patientendaten angemessen schützen.\n• FDA Medical Device Compliance: Integration von KI-Sicherheitsmaßnahmen in FDA-konforme Medizinprodukte-Entwicklungsprozesse.\n• Clinical Trial Data Integrity: Spezielle Schutzmaßnahmen für klinische Studiendaten zur Sicherstellung der Datenintegrität und regulatorischen Compliance.\n• Medical Ethics Alignment: Sicherstellung, dass KI-Sicherheitsmaßnahmen mit medizinethischen Prinzipien und Patientenrechten harmonieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Welche besonderen Herausforderungen entstehen bei Data Poisoning Schutz für autonome Fahrzeuge und kritische Infrastrukturen, und wie gewährleistet ADVISORI funktionale Sicherheit?",
        answer: "Autonome Fahrzeuge und kritische Infrastrukturen stellen extreme Anforderungen an KI-Sicherheit, da Data Poisoning Angriffe lebensbedrohliche Situationen oder gesellschaftsweite Störungen verursachen können. ADVISORI hat hochspezialisierte Sicherheitsframeworks entwickelt, die funktionale Sicherheit mit Cybersecurity kombinieren und höchste Verfügbarkeits- und Zuverlässigkeitsstandards erfüllen.\n\n🚗 Automotive und Mobility Sicherheit:\n• Sensor Fusion Protection: Schutz von Multi-Sensor-Systemen vor koordinierten Data Poisoning Angriffen, die verschiedene Sensoren gleichzeitig kompromittieren könnten.\n• Real-time Decision Validation: Implementierung von Echtzeit-Validierung für sicherheitskritische Fahrentscheidungen mit Mikrosekunden-Latenz-Anforderungen.\n• V2X Communication Security: Sicherung von Vehicle-to-Everything Kommunikation gegen Angriffe, die manipulierte Verkehrsinformationen einschleusen könnten.\n• Predictive Maintenance Integrity: Schutz von vorausschauenden Wartungssystemen vor Manipulationen, die zu Fahrzeugausfällen führen könnten.\n\n⚡ Kritische Infrastruktur Resilienz:\n• Power Grid Stability Protection: Sicherung von Smart Grid KI-Systemen gegen Angriffe, die zu Stromausfällen oder Netzinstabilität führen könnten.\n• Water Treatment Security: Schutz von Wasseraufbereitungs-KI vor Manipulationen, die zu Kontamination oder Versorgungsunterbrechungen führen könnten.\n• Transportation Network Integrity: Sicherung von Verkehrsmanagement-Systemen gegen Angriffe, die zu Verkehrschaos oder Unfällen führen könnten.\n• Industrial Control System Protection: Schutz von industriellen Steuerungssystemen vor Data Poisoning, das zu Produktionsausfällen oder Sicherheitsvorfällen führen könnte.\n\n🔧 Funktionale Sicherheits-Integration:\n• ISO 26262 Compliance: Integration von KI-Sicherheitsmaßnahmen in ISO 26262 funktionale Sicherheitsframeworks für Automotive-Anwendungen.\n• IEC 61508 Alignment: Anpassung von Sicherheitsmaßnahmen an IEC 61508 Standards für funktionale Sicherheit in kritischen Systemen.\n• Redundancy and Fail-Safe Design: Implementierung redundanter Systeme und Fail-Safe-Mechanismen, die auch bei kompromittierten KI-Komponenten sicheren Betrieb gewährleisten.\n• Real-time Monitoring and Response: Aufbau von Echtzeit-Überwachungssystemen mit automatischen Notfallreaktionen bei erkannten Sicherheitsbedrohungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie adressiert ADVISORI die einzigartigen Data Poisoning Herausforderungen in der Fertigungsindustrie und Supply Chain Management unter Berücksichtigung von Industrie 4.0 Anforderungen?",
        answer: "Die Fertigungsindustrie und Supply Chain Management stehen vor komplexen Data Poisoning Herausforderungen, da vernetzte Produktionssysteme und globale Lieferketten neue Angriffsvektoren schaffen. ADVISORI hat spezialisierte Sicherheitslösungen für Industrie 4.0 Umgebungen entwickelt, die operative Effizienz mit robusten Sicherheitsmaßnahmen kombinieren und gleichzeitig die Komplexität moderner Fertigungsökosysteme berücksichtigen.\n\n🏭 Manufacturing-spezifische Bedrohungslandschaft:\n• Predictive Maintenance Manipulation: Schutz von vorausschauenden Wartungssystemen vor Angriffen, die zu ungeplanten Ausfällen oder übermäßigen Wartungskosten führen könnten.\n• Quality Control Kompromittierung: Sicherung von KI-gestützten Qualitätskontrollsystemen gegen Manipulationen, die defekte Produkte unentdeckt lassen könnten.\n• Production Optimization Störung: Schutz von Produktionsoptimierungs-KI vor Angriffen, die zu Ineffizienzen oder Ressourcenverschwendung führen könnten.\n• Supply Chain Visibility Manipulation: Sicherung von Supply Chain Transparenz-Systemen gegen Angriffe, die falsche Lieferinformationen oder Bestandsdaten einschleusen könnten.\n\n🔗 Supply Chain Resilience Framework:\n• Multi-Tier Supplier Validation: Implementierung von Validierungsverfahren für Daten aus verschiedenen Lieferantenebenen zur Erkennung manipulierter Supply Chain Informationen.\n• Blockchain-based Provenance: Einsatz von Blockchain-Technologie für unveränderliche Herkunftsnachweise und Schutz vor Datenmanipulation in der Lieferkette.\n• Real-time Risk Assessment: Kontinuierliche Bewertung von Supply Chain Risiken mit KI-gestützter Anomalieerkennung für frühzeitige Warnung vor Störungen.\n• Collaborative Security Networks: Aufbau sicherer Informationsaustausch-Netzwerke zwischen Supply Chain Partnern für kollektive Bedrohungsabwehr.\n\n⚙️ Industrie 4.0 Security Integration:\n• IoT Device Security: Umfassender Schutz von Industrial IoT Geräten vor Data Poisoning Angriffen mit Edge-Computing-Sicherheitsmaßnahmen.\n• Digital Twin Integrity: Sicherung von Digital Twin Systemen gegen Manipulationen, die zu falschen Simulationsergebnissen oder Optimierungsempfehlungen führen könnten.\n• Cyber-Physical System Protection: Integration von Cybersecurity und physischer Sicherheit für umfassenden Schutz von Cyber-Physical Systems.\n• Smart Factory Orchestration: Koordination von Sicherheitsmaßnahmen über verschiedene Smart Factory Komponenten hinweg für ganzheitlichen Schutz."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Industry-Specific FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Industry-Specific FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
