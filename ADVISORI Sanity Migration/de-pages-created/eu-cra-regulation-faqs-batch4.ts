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
    console.log('Updating EU CRA Regulation page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-cra-regulation' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-cra-regulation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche spezifischen Herausforderungen ergeben sich bei der CRA-Implementierung für verschiedene Branchen und Produktkategorien?',
        answer: "Die CRA-Implementierung bringt branchenspezifische Herausforderungen mit sich, da verschiedene Sektoren unterschiedliche Risikoprofile, regulatorische Umgebungen und technische Anforderungen haben. Eine maßgeschneiderte Herangehensweise ist erforderlich, um die spezifischen Bedürfnisse und Compliance-Anforderungen jeder Branche zu adressieren.\n\n🏭 Industrielle IoT und Fertigungstechnologie:\n• Integration von CRA-Anforderungen in bestehende Operational Technology (OT) Umgebungen, die traditionell isoliert von IT-Netzwerken betrieben wurden.\n• Herausforderungen bei der Implementierung von Security-Updates in kritischen Produktionsumgebungen ohne Betriebsunterbrechungen.\n• Komplexe Supply Chain Abhängigkeiten bei industriellen Komponenten und deren Cybersicherheitszertifizierung.\n• Notwendigkeit der Harmonisierung von CRA-Anforderungen mit bestehenden Industriestandards wie IEC 62443.\n• Besondere Anforderungen an die physische Sicherheit und Manipulationsschutz bei industriellen Geräten.\n\n🚗 Automotive und Connected Vehicles:\n• Integration von CRA-Compliance in bestehende Automotive-Sicherheitsstandards wie ISO 26262 und ISO/SAE 21434.\n• Herausforderungen bei Over-the-Air Updates und deren Sicherheitsvalidierung für sicherheitskritische Fahrzeugsysteme.\n• Komplexe Lieferketten mit Tier-1, Tier-2 und Tier-3 Zulieferern, die alle CRA-konform sein müssen.\n• Lange Produktlebenszyklen von Fahrzeugen erfordern langfristige Sicherheitsupdates und Support.\n• Interoperabilität zwischen verschiedenen Fahrzeugsystemen und externen Infrastrukturen unter Sicherheitsaspekten.\n\n🏥 Medizintechnik und Healthcare:\n• Harmonisierung von CRA-Anforderungen mit Medical Device Regulation (MDR) und FDA-Vorschriften für Cybersicherheit.\n• Besondere Herausforderungen bei der Balance zwischen Cybersicherheit und Patientensicherheit.\n• Komplexe Zertifizierungsprozesse für medizinische Geräte mit digitalen Elementen.\n• Anforderungen an die Interoperabilität in Krankenhaus-IT-Umgebungen und Health Information Exchanges.\n• Spezielle Datenschutzanforderungen für Gesundheitsdaten und deren sichere Übertragung.\n\n💡 Smart Home und Consumer Electronics:\n• Massenmarkt-Herausforderungen bei der kosteneffizienten Implementierung von Sicherheitsmaßnahmen.\n• Benutzerfreundlichkeit versus Sicherheit bei Consumer-Geräten mit begrenzten Benutzeroberflächen.\n• Herausforderungen bei der Sicherstellung von Updates über die gesamte Produktlebensdauer bei preissensitiven Produkten.\n• Interoperabilität zwischen verschiedenen Smart Home Ökosystemen und Plattformen.\n• Besondere Anforderungen an Privacy-by-Design bei Geräten, die persönliche Daten verarbeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie entwickeln wir eine robuste Dokumentationsstrategie für die CRA-Compliance und welche Aufbewahrungsfristen sind zu beachten?',
        answer: "Eine umfassende Dokumentationsstrategie ist das Rückgrat erfolgreicher CRA-Compliance und dient als Nachweis für die Erfüllung aller regulatorischen Anforderungen. Die Dokumentation muss nicht nur vollständig und aktuell sein, sondern auch über den gesamten Produktlebenszyklus hinweg verfügbar und auditierbar bleiben.\n\n📋 Kernelemente der CRA-Dokumentationsstrategie:\n• Technische Dokumentation, die alle Sicherheitsmaßnahmen, Risikobewertungen und Konformitätsnachweise detailliert beschreibt.\n• EU-Konformitätserklärung mit vollständiger Auflistung aller angewandten Standards und Bewertungsverfahren.\n• Risikomanagement-Dokumentation einschließlich Bedrohungsanalysen, Schwachstellenbewertungen und Mitigationsmaßnahmen.\n• Incident Response Dokumentation mit detaillierten Aufzeichnungen aller Sicherheitsvorfälle und deren Behandlung.\n• Supply Chain Dokumentation zur Nachverfolgung der Cybersicherheit aller Komponenten und Lieferanten.\n\n🗂️ Strukturierte Dokumentationsarchitektur:\n• Implementierung eines Document Management Systems (DMS), das speziell auf regulatorische Anforderungen ausgerichtet ist.\n• Versionskontrolle und Change Management für alle Compliance-relevanten Dokumente mit vollständiger Audit-Trail.\n• Automatisierte Dokumentenerstellung durch Integration in Entwicklungs- und Qualitätsprozesse.\n• Strukturierte Metadaten und Tagging-Systeme zur effizienten Suche und Kategorisierung von Dokumenten.\n• Regelmäßige Reviews und Updates der Dokumentation zur Sicherstellung der Aktualität und Vollständigkeit.\n\n⏰ Aufbewahrungsfristen und Compliance-Management:\n• Mindestaufbewahrungsfrist von zehn Jahren nach dem Inverkehrbringen des Produkts gemäß CRA-Anforderungen.\n• Erweiterte Aufbewahrungsfristen für kritische Produkte der Klassen I und II sowie bei laufenden regulatorischen Verfahren.\n• Sichere Archivierung mit Backup-Strategien und Disaster Recovery Plänen für kritische Compliance-Dokumentation.\n• Regelmäßige Überprüfung der Dokumentenintegrität und Lesbarkeit über die gesamte Aufbewahrungsdauer.\n• Berücksichtigung internationaler Aufbewahrungsanforderungen bei global vermarkteten Produkten.\n\n🔒 Sicherheit und Vertraulichkeit der Dokumentation:\n• Implementierung von Zugriffskontrollsystemen mit rollenbasierten Berechtigungen für sensible Compliance-Dokumente.\n• Verschlüsselung und digitale Signaturen zur Sicherstellung der Dokumentenintegrität und Authentizität.\n• Regelmäßige Sicherheitsaudits der Dokumentationssysteme und Zugriffsprotokolle.\n• Notfallpläne für den Zugriff auf kritische Dokumentation bei Systemausfällen oder Sicherheitsvorfällen.\n• Compliance mit Datenschutzbestimmungen bei der Verarbeitung und Speicherung personenbezogener Daten in der Dokumentation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Auswirkungen hat die CRA auf Mergers & Acquisitions und Due Diligence Prozesse in unserem Sektor?',
        answer: "Die CRA transformiert M&A-Aktivitäten grundlegend, da Cybersicherheits-Compliance zu einem kritischen Bewertungsfaktor für Unternehmenswerte und Transaktionsrisiken wird. Due Diligence Prozesse müssen erweitert werden, um CRA-spezifische Risiken und Compliance-Status zu bewerten, während Post-Merger-Integration neue Herausforderungen bei der Harmonisierung von Sicherheitsstandards mit sich bringt.\n\n💼 CRA-Impact auf Unternehmensbewertungen:\n• Cybersicherheits-Compliance wird zu einem wesentlichen Wertfaktor, der sich direkt auf Unternehmensbewertungen und Kaufpreise auswirkt.\n• Non-Compliance-Risiken können zu erheblichen Bewertungsabschlägen führen und Deal-Strukturen beeinflussen.\n• Zukünftige Compliance-Kosten müssen in Bewertungsmodellen berücksichtigt und als potenzielle Belastung quantifiziert werden.\n• CRA-konforme Unternehmen können Premium-Bewertungen erzielen, insbesondere in regulierten Branchen.\n• Intellectual Property im Bereich Cybersicherheit gewinnt an strategischem Wert und wird zu einem wichtigen Asset bei Transaktionen.\n\n🔍 Erweiterte Due Diligence Anforderungen:\n• Umfassende CRA-Compliance-Assessments als integraler Bestandteil der technischen Due Diligence.\n• Bewertung der Produktportfolios hinsichtlich CRA-Anwendbarkeit und Compliance-Status.\n• Analyse der Supply Chain Cybersicherheit und Lieferanten-Compliance-Status.\n• Überprüfung bestehender Incident Response Fähigkeiten und historischer Sicherheitsvorfälle.\n• Assessment der organisatorischen Cybersicherheits-Reife und Governance-Strukturen.\n\n⚖️ Rechtliche und vertragliche Überlegungen:\n• Integration spezifischer CRA-Compliance-Garantien und Zusicherungen in Kaufverträge.\n• Entwicklung von Indemnity-Klauseln für potenzielle CRA-bezogene Haftungsrisiken und Strafen.\n• Escrow-Arrangements zur Absicherung von Compliance-Risiken und zukünftigen Implementierungskosten.\n• Earn-out-Strukturen, die CRA-Compliance-Meilensteine als Leistungsindikatoren integrieren.\n• Berücksichtigung von Regulatory Change Klauseln für zukünftige CRA-Entwicklungen.\n\n🔄 Post-Merger Integration Herausforderungen:\n• Harmonisierung unterschiedlicher Cybersicherheitsstandards und Compliance-Ansätze zwischen den fusionierenden Unternehmen.\n• Integration von Incident Response Teams und Sicherheitsoperationen unter einheitlichen CRA-Standards.\n• Konsolidierung von Lieferantenbewertungen und Supply Chain Security Programmen.\n• Vereinheitlichung von Dokumentationsstandards und Compliance-Monitoring-Systemen.\n• Change Management für die Integration unterschiedlicher Sicherheitskulturen und Praktiken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie bereiten wir uns auf zukünftige Entwicklungen und Anpassungen der CRA vor und welche Trends sollten wir beobachten?',
        answer: "Die CRA ist ein lebendiges Regulierungswerk, das sich kontinuierlich an neue Technologien, Bedrohungslagen und Marktentwicklungen anpassen wird. Eine proaktive Strategie zur Antizipation und Vorbereitung auf zukünftige Änderungen ist entscheidend für langfristige Compliance und Wettbewerbsfähigkeit.\n\n🔮 Antizipation regulatorischer Entwicklungen:\n• Kontinuierliche Überwachung der Aktivitäten der Europäischen Kommission, ENISA und relevanter Standardisierungsorganisationen.\n• Teilnahme an Branchenverbänden und Stakeholder-Konsultationen zur frühzeitigen Einflussnahme auf regulatorische Entwicklungen.\n• Aufbau von Beziehungen zu benannten Stellen und Marktüberwachungsbehörden für Einblicke in Enforcement-Trends.\n• Monitoring internationaler Cybersicherheitsregulierungen zur Antizipation ähnlicher Entwicklungen in der EU.\n• Etablierung eines Regulatory Intelligence Systems zur systematischen Verfolgung und Analyse regulatorischer Trends.\n\n🚀 Technologische Trends und deren CRA-Implikationen:\n• Künstliche Intelligenz und Machine Learning Integration in digitale Produkte wird neue Sicherheitsanforderungen und Bewertungskriterien schaffen.\n• Quantum Computing Entwicklungen werden Anforderungen an Quantum-Safe Cryptography und neue Verschlüsselungsstandards mit sich bringen.\n• Edge Computing und 5G/6G Technologien werden erweiterte Anforderungen an dezentrale Sicherheitsarchitekturen stellen.\n• Blockchain und Distributed Ledger Technologien werden neue Governance- und Compliance-Modelle erfordern.\n• Augmented und Virtual Reality Anwendungen werden spezifische Privacy- und Security-by-Design Anforderungen entwickeln.\n\n📊 Strategische Vorbereitung auf zukünftige Änderungen:\n• Entwicklung flexibler Compliance-Architekturen, die sich schnell an neue Anforderungen anpassen lassen.\n• Investition in modulare Sicherheitslösungen, die einfach erweitert oder aktualisiert werden können.\n• Aufbau interner Forschungs- und Entwicklungskapazitäten für emerging Cybersecurity Technologies.\n• Etablierung von Innovation Labs zur Erkundung neuer Sicherheitstechnologien und deren Compliance-Implikationen.\n• Entwicklung von Scenario Planning Fähigkeiten zur Bewertung verschiedener regulatorischer Zukunftsszenarien.\n\n🌐 Internationale Harmonisierung und Konvergenz:\n• Beobachtung der Entwicklung ähnlicher Regulierungen in anderen Jurisdiktionen wie den USA, Singapur und Japan.\n• Vorbereitung auf potenzielle Mutual Recognition Agreements zwischen verschiedenen Cybersicherheitsregimen.\n• Antizipation globaler Standards und deren Integration in zukünftige CRA-Versionen.\n• Aufbau von Expertise in Cross-Border Compliance und internationaler Cybersicherheitskooperation.\n• Entwicklung globaler Compliance-Strategien, die regionale Unterschiede berücksichtigen und Synergien nutzen."
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
