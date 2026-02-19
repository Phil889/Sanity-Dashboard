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
    console.log('Updating Datensicherheit für KI page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datensicherheit-fuer-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datensicherheit-fuer-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie gewährleistet ADVISORI die Compliance mit internationalen Datenschutzstandards bei grenzüberschreitenden KI-Projekten?',
        answer: "Grenzüberschreitende KI-Projekte bringen komplexe regulatorische Herausforderungen mit sich, da verschiedene Jurisdiktionen unterschiedliche Datenschutzanforderungen haben. ADVISORI entwickelt umfassende Compliance-Strategien, die nicht nur aktuelle internationale Standards erfüllen, sondern auch flexibel genug sind, um sich an evolvierende regulatorische Landschaften anzupassen.\n\n🌍 International Compliance Framework:\n• Multi-Jurisdictional Analysis: Umfassende Analyse der Datenschutzanforderungen in allen relevanten Jurisdiktionen, einschließlich DSGVO, CCPA, PIPEDA und anderen regionalen Gesetzen mit Mapping von Überschneidungen und Konflikten.\n• Harmonized Privacy Standards: Entwicklung einheitlicher Datenschutzstandards, die die strengsten Anforderungen aller beteiligten Jurisdiktionen erfüllen, um konsistente Compliance zu gewährleisten.\n• Cross-Border Data Transfer Mechanisms: Implementierung angemessener Schutzmaßnahmen für internationale Datenübertragungen, einschließlich Standardvertragsklauseln, Binding Corporate Rules und Adequacy Decisions.\n• Regulatory Change Management: Etablierung von Systemen zur kontinuierlichen Überwachung regulatorischer Änderungen in verschiedenen Ländern mit automatischen Compliance-Updates.\n\n🔒 Technical Compliance Implementation:\n• Data Localization Strategies: Entwicklung flexibler Architekturen, die Datenlokalisation unterstützen, wo erforderlich, ohne die KI-Funktionalität zu beeinträchtigen.\n• Jurisdiction-Specific Encryption: Implementierung verschiedener Verschlüsselungsstandards basierend auf lokalen Anforderungen und Export-Kontrollen.\n• Consent Management Across Borders: Entwicklung einheitlicher Consent-Management-Systeme, die verschiedene rechtliche Definitionen von Einverständnis berücksichtigen.\n• Audit Trail Standardization: Schaffung standardisierter Audit-Trails, die den Dokumentationsanforderungen verschiedener Regulierungsbehörden entsprechen.\n\n⚖️ Legal and Operational Compliance:\n• Multi-Jurisdictional Legal Review: Koordination mit Rechtsexperten in verschiedenen Ländern für umfassende rechtliche Bewertung von KI-Projekten.\n• Regulatory Liaison Management: Aufbau von Beziehungen zu Datenschutzbehörden in verschiedenen Jurisdiktionen für proaktive Compliance-Kommunikation.\n• Cross-Border Incident Response: Entwicklung koordinierter Incident Response Pläne, die den Meldeanforderungen verschiedener Länder entsprechen.\n• International Certification Alignment: Anstreben relevanter internationaler Zertifizierungen wie ISO 27001, SOC 2 und regionaler Datenschutz-Zertifizierungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Risikobewertungsmethoden verwendet ADVISORI für KI-Datensicherheit und wie werden diese in die Projektplanung integriert?',
        answer: "Risikobewertung in KI-Datensicherheit erfordert spezialisierte Methoden, die die einzigartigen Risiken von Machine Learning berücksichtigen. ADVISORI entwickelt umfassende Risikobewertungsframeworks, die sowohl traditionelle Cybersecurity-Risiken als auch KI-spezifische Bedrohungen abdecken und diese systematisch in alle Phasen der Projektplanung und -durchführung integrieren.\n\n🎯 KI-spezifische Risikobewertungsframeworks:\n• AI Threat Modeling: Entwicklung spezialisierter Threat Models für KI-Systeme, die Angriffsvektoren wie Model Inversion, Membership Inference und Adversarial Attacks berücksichtigen.\n• Data Sensitivity Classification: Implementierung granularer Klassifikationssysteme für verschiedene Datentypen mit spezifischen Schutzanforderungen basierend auf Sensitivität und regulatorischen Anforderungen.\n• Model Risk Assessment: Bewertung von Risiken, die durch Modellverhalten entstehen, einschließlich Bias, Drift und unbeabsichtigte Informationspreisgabe.\n• Privacy Impact Assessment: Systematische Bewertung von Datenschutzauswirkungen mit quantitativen Metriken für Privatsphäre-Risiken.\n\n📊 Quantitative Risk Analysis:\n• Risk Scoring Matrices: Entwicklung multidimensionaler Risiko-Scoring-Systeme, die Wahrscheinlichkeit, Impact und Erkennbarkeit von KI-spezifischen Risiken bewerten.\n• Monte Carlo Risk Simulation: Verwendung statistischer Simulationen zur Modellierung komplexer Risikoszenarien und deren potentieller Auswirkungen auf KI-Systeme.\n• Bayesian Risk Networks: Implementierung probabilistischer Modelle zur Analyse von Risiko-Interdependenzen und Kaskadeneffekten in KI-Infrastrukturen.\n• Dynamic Risk Monitoring: Kontinuierliche Neubewertung von Risiken basierend auf sich ändernden Bedrohungslandschaften und Systemkonfigurationen.\n\n🔄 Integration in Projektplanung:\n• Risk-Driven Architecture Design: Integration von Risikobewertungsergebnissen in Architekturentscheidungen mit Priorisierung von Sicherheitsmaßnahmen basierend auf Risikobewertung.\n• Agile Risk Management: Einbettung von Risikobewertungen in agile Entwicklungsprozesse mit regelmäßigen Risk Reviews und Anpassungen.\n• Cost-Benefit Risk Analysis: Quantitative Bewertung von Sicherheitsmaßnahmen gegen Risikoreduktion für optimale Ressourcenallokation.\n• Stakeholder Risk Communication: Entwicklung klarer Kommunikationsstrategien für verschiedene Stakeholder-Gruppen mit risikoadäquaten Informationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie implementiert ADVISORI Backup- und Disaster Recovery Strategien für KI-Systeme unter Berücksichtigung von Datenschutzanforderungen?',
        answer: "Backup und Disaster Recovery für KI-Systeme bringen einzigartige Herausforderungen mit sich, da nicht nur Daten, sondern auch trainierte Modelle, Konfigurationen und komplexe Abhängigkeiten gesichert werden müssen. ADVISORI entwickelt umfassende DR-Strategien, die Business Continuity gewährleisten, während sie gleichzeitig höchste Datenschutzstandards aufrechterhalten.\n\n💾 KI-spezifische Backup-Strategien:\n• Model State Preservation: Umfassende Sicherung aller Modellzustände, einschließlich Gewichte, Hyperparameter, Trainingskonfigurationen und Versionsinformationen mit verschlüsselter Speicherung.\n• Data Pipeline Backup: Sicherung kompletter ML-Pipelines, einschließlich Datenverarbeitungsschritte, Feature Engineering und Transformationslogik für vollständige Wiederherstellbarkeit.\n• Incremental Model Backups: Implementierung effizienter inkrementeller Backup-Verfahren für große Modelle mit Deduplizierung und Kompression zur Speicheroptimierung.\n• Cross-Region Replication: Geografisch verteilte Backup-Strategien mit Berücksichtigung von Datenlokalisation und grenzüberschreitenden Datentransfer-Beschränkungen.\n\n🔐 Privacy-Preserving Backup Implementation:\n• Encrypted Backup Storage: End-to-End-Verschlüsselung aller Backup-Daten mit Hardware Security Modules für Schlüsselmanagement und regelmäßiger Schlüsselrotation.\n• Anonymized Backup Creation: Entwicklung von Backup-Verfahren, die sensible Daten anonymisieren oder pseudonymisieren, während sie die Funktionalität für Disaster Recovery bewahren.\n• Access-Controlled Recovery: Implementierung granularer Zugriffskontrolle für Backup-Systeme mit Multi-Factor Authentication und Principle of Least Privilege.\n• Audit Trail Preservation: Sicherung umfassender Audit-Trails für alle Backup- und Recovery-Aktivitäten zur Compliance-Dokumentation.\n\n⚡ Rapid Recovery Capabilities:\n• Hot Standby Systems: Implementierung von Hot-Standby KI-Systemen für kritische Anwendungen mit automatischem Failover und minimaler Downtime.\n• Containerized Recovery: Verwendung containerisierter KI-Workloads für schnelle Wiederherstellung und Portabilität zwischen verschiedenen Infrastrukturen.\n• Automated Recovery Testing: Regelmäßige automatisierte Tests von Recovery-Prozeduren mit Validierung der Datenintegrität und Modellperformance nach Wiederherstellung.\n• Business Continuity Planning: Integration von KI-spezifischen Recovery-Anforderungen in umfassende Business Continuity Pläne mit definierten Recovery Time und Recovery Point Objectives."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Schulungs- und Awareness-Programme entwickelt ADVISORI für Teams, die mit sicheren KI-Systemen arbeiten?',
        answer: "Menschliche Faktoren sind oft das schwächste Glied in der KI-Sicherheitskette. ADVISORI entwickelt umfassende Schulungs- und Awareness-Programme, die technische Teams, Geschäftsanwender und Führungskräfte gleichermaßen befähigen, sichere KI-Praktiken zu verstehen und umzusetzen, während sie gleichzeitig eine Kultur der Datensicherheit fördern.\n\n🎓 Zielgruppenspezifische Schulungsprogramme:\n• Technical Team Training: Spezialisierte Schulungen für Entwickler und Data Scientists zu sicherer KI-Entwicklung, Privacy-Preserving Techniken und Threat Modeling für ML-Systeme.\n• Business User Education: Praxisorientierte Schulungen für Geschäftsanwender zu sicherer KI-Nutzung, Datenschutz-Best-Practices und Erkennung von Sicherheitsrisiken.\n• Executive Awareness: Strategische Briefings für Führungskräfte zu KI-Sicherheitsrisiken, regulatorischen Anforderungen und Governance-Verantwortlichkeiten.\n• Compliance Team Training: Spezialisierte Schulungen für Compliance-Teams zu KI-spezifischen regulatorischen Anforderungen und Audit-Verfahren.\n\n🛡️ Hands-On Security Training:\n• Simulated Attack Scenarios: Praktische Übungen mit simulierten Adversarial Attacks, Data Poisoning und anderen KI-spezifischen Bedrohungen für realistische Lernerfahrungen.\n• Secure Coding Workshops: Intensive Workshops zu sicherer KI-Programmierung, einschließlich Input Validation, Secure Model Deployment und Privacy-by-Design Implementierung.\n• Incident Response Drills: Regelmäßige Übungen für KI-spezifische Incident Response mit realistischen Szenarien und Zeitdruck.\n• Red Team Exercises: Strukturierte Red Team Übungen, bei denen Teams lernen, KI-Systeme aus Angreiferperspektive zu betrachten.\n\n📚 Continuous Learning and Certification:\n• Certification Programs: Entwicklung interner Zertifizierungsprogramme für verschiedene Rollen in der sicheren KI-Entwicklung mit regelmäßigen Rezertifizierungsanforderungen.\n• Knowledge Management: Aufbau umfassender Wissensdatenbanken mit Best Practices, Lessons Learned und aktuellen Bedrohungsinformationen.\n• Peer Learning Networks: Etablierung von Communities of Practice für kontinuierlichen Wissensaustausch und Peer-to-Peer Learning.\n• External Training Integration: Koordination mit externen Schulungsanbietern und Konferenzen für Zugang zu neuesten Entwicklungen in der KI-Sicherheit."
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
