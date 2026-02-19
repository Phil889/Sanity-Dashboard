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
    console.log('Updating DSGVO Implementation page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-implementation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die Herausforderung der internationalen Datenübertragungen und Cross-Border-Compliance in einer globalisierten Geschäftswelt?",
        answer: "Internationale Datenübertragungen sind für global agierende Unternehmen unverzichtbar, aber regulatorisch hochkomplex. ADVISORI entwickelt robuste Strategien für Cross-Border-Compliance, die sowohl rechtliche Sicherheit als auch operative Flexibilität gewährleisten und Ihr Unternehmen für internationale Expansion rüsten.\n\n🌐 Globale Datentransfer-Strategien:\n• Adequacy Decision Mapping: Systematische Analyse aller Zielländer für Datentransfers und Identifikation rechtssicherer Übertragungsmechanismen basierend auf EU-Angemessenheitsbeschlüssen.\n• Standard Contractual Clauses (SCCs) Optimization: Implementierung und Anpassung der neuen EU-Standardvertragsklauseln mit zusätzlichen Schutzmaßnahmen (Additional Safeguards) für Hochrisiko-Transfers.\n• Transfer Impact Assessments (TIAs): Durchführung systematischer Bewertungen der Datenschutzrisiken bei internationalen Übertragungen, einschließlich der Analyse lokaler Gesetze und Überwachungspraktiken.\n• Binding Corporate Rules (BCRs) Development: Entwicklung konzernweiter Datenschutzrichtlinien für multinationale Unternehmen, die eine rechtssichere interne Datenübertragung ermöglichen.\n\n🔒 Technical and Legal Safeguards:\n• End-to-End Encryption Architectures: Implementation fortschrittlicher Verschlüsselungstechnologien, die Daten auch bei Transit und Verarbeitung in Drittländern schützen.\n• Data Residency Solutions: Entwicklung hybrider Cloud-Architekturen, die kritische Daten in der EU halten, während weniger sensible Daten global verarbeitet werden können.\n• Pseudonymization and Anonymization: Einsatz fortschrittlicher Techniken zur Reduzierung des Personenbezugs vor internationalen Transfers.\n• Continuous Compliance Monitoring: Aufbau von Systemen zur kontinuierlichen Überwachung sich ändernder rechtlicher Rahmenbedingungen in verschiedenen Jurisdiktionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt künstliche Intelligenz in ADVISORI's DSGVO-Implementierungsstrategie und wie wird Privacy by Design in KI-Systemen gewährleistet?",
        answer: "Künstliche Intelligenz revolutioniert sowohl die Möglichkeiten als auch die Herausforderungen der DSGVO-Compliance. ADVISORI integriert KI-Technologien strategisch in Datenschutz-Management-Systeme und gewährleistet gleichzeitig, dass KI-Anwendungen selbst DSGVO-konform entwickelt und betrieben werden.\n\n🤖 KI-gestütztes Datenschutz-Management:\n• Automated Privacy Impact Assessments: KI-basierte Systeme zur automatischen Identifikation und Bewertung von Datenschutzrisiken in neuen Projekten und Datenverarbeitungsprozessen.\n• Intelligent Data Discovery: Machine Learning-Algorithmen zur automatischen Klassifikation und Katalogisierung personenbezogener Daten in komplexen IT-Landschaften.\n• Predictive Compliance Analytics: Vorhersagemodelle zur frühzeitigen Erkennung potenzieller Compliance-Risiken und präventiven Maßnahmeneinleitung.\n• Dynamic Consent Management: KI-unterstützte Systeme zur intelligenten Verwaltung und Optimierung von Einverständniserklärungen basierend auf Nutzerverhalten und Präferenzen.\n\n🛡️ Privacy-by-Design für KI-Systeme:\n• Algorithmic Transparency Frameworks: Entwicklung nachvollziehbarer KI-Modelle, die Auskunftsanfragen gemäß Art. 15 DSGVO unterstützen und automatisierte Entscheidungsfindung transparent machen.\n• Federated Learning Implementation: Einsatz dezentraler Machine Learning-Techniken, die Modelltraining ohne zentrale Datensammlung ermöglichen.\n• Differential Privacy Integration: Implementation mathematisch fundierter Privatheitstechniken, die statistische Analysen ermöglichen, ohne individuelle Datenschutzrisiken zu schaffen.\n• AI Ethics and Bias Mitigation: Entwicklung von Governance-Frameworks zur Sicherstellung ethischer KI-Nutzung und Vermeidung diskriminierender Algorithmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie entwickelt ADVISORI eine Crisis-Ready DSGVO-Compliance-Strategie, die auch in Ausnahmesituationen wie Pandemien oder Cyberangriffen funktioniert?",
        answer: "Krisensituationen testen die Belastbarkeit von Datenschutz-Systemen und können zu schwerwiegenden Compliance-Verletzungen führen, wenn sie nicht antizipiert werden. ADVISORI entwickelt resiliente DSGVO-Compliance-Strategien, die auch unter extremen Bedingungen funktionieren und Ihr Unternehmen vor regulatorischen Risiken schützen.\n\n⚡ Crisis-Resilient Compliance Architecture:\n• Emergency Response Protocols: Entwicklung spezifischer Datenschutz-Notfallpläne für verschiedene Krisenszenarien (Cyberangriffe, Naturkatastrophen, Pandemien, geopolitische Krisen).\n• Remote Work Compliance Frameworks: Umfassende Richtlinien und technische Lösungen für datenschutzkonforme Heimarbeit und dezentrale Arbeitsmodelle.\n• Crisis Communication Templates: Vorgefertigte Kommunikationsvorlagen für verschiedene Stakeholder-Gruppen (Aufsichtsbehörden, Betroffene, Medien) zur schnellen und rechtskonformen Krisenkommunikation.\n• Rapid Decision-Making Structures: Etablierung klarer Entscheidungsketten und Verantwortlichkeiten für datenschutzrelevante Entscheidungen in Krisensituationen.\n\n🔧 Adaptive Compliance Mechanisms:\n• Flexible Policy Frameworks: Entwicklung von Datenschutz-Richtlinien, die sich schnell an veränderte Rahmenbedingungen anpassen lassen, ohne Grundprinzipien zu verletzen.\n• Emergency Data Processing Protocols: Rechtskonforme Verfahren für erweiterte Datenverarbeitungen in Notfällen (Gesundheitsdaten in Pandemien, Mitarbeiterverfolgung bei Sicherheitsvorfällen).\n• Crisis-Specific Risk Assessments: Spezielle Datenschutz-Folgenabschätzungen für Krisensituationen, die erhöhte Risiken und notwendige Schutzmaßnahmen berücksichtigen.\n• Business Continuity Integration: Vollständige Integration von Datenschutz-Anforderungen in Business Continuity Planning und Disaster Recovery Prozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie unterstützt ADVISORI Mergers & Acquisitions durch DSGVO-konforme Due Diligence und Post-Merger Integration von Datenschutz-Systemen?",
        answer: "M&A-Transaktionen bergen erhebliche Datenschutzrisiken, die Deal-Value und Integrationserfolg massiv beeinflussen können. ADVISORI bietet spezialisierte DSGVO-Services für alle Phasen von M&A-Prozessen, von der Due Diligence bis zur vollständigen Post-Merger Integration.\n\n🔍 DSGVO-fokussierte Due Diligence:\n• Comprehensive Privacy Assessment: Systematische Bewertung der Datenschutz-Compliance des Zielunternehmens, einschließlich versteckter Risiken und Compliance-Gaps.\n• Data Asset Mapping: Vollständige Kartierung aller Datenbestände, Verarbeitungsprozesse und rechtlichen Grundlagen zur Bewertung des Datenwerts und der Übertragbarkeit.\n• Regulatory Risk Quantification: Monetäre Bewertung identifizierter Datenschutzrisiken und deren Auswirkungen auf den Deal-Value.\n• Cross-Border Compliance Analysis: Spezielle Bewertung internationaler Datentransfers und deren Auswirkungen auf die geplante Unternehmensstruktur.\n\n🔄 Post-Merger Integration Excellence:\n• Harmonized Privacy Governance: Entwicklung einheitlicher Datenschutz-Standards und -Prozesse für das kombinierte Unternehmen.\n• Data Migration Strategies: DSGVO-konforme Strategien für die Konsolidierung und Migration von Datenbeständen beider Unternehmen.\n• Unified Consent Management: Integration verschiedener Einverständnisverwaltungssysteme und Harmonisierung unterschiedlicher Datenschutzerklärungen.\n• Cultural Integration: Change Management-Programme zur Etablierung einer einheitlichen Datenschutzkultur im fusionierten Unternehmen.\n\n📈 Value Creation through Privacy Excellence: Integration von Datenschutz-Excellence als strategischer Werttreiber, der über reine Compliance hinausgeht und Synergien in den Bereichen Kundenvertrauen, operative Effizienz und Risikomanagement schafft."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
