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
    console.log('Updating ISO 27001 Controls page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-controls" not found')
    }
    
    // Create new FAQs for ISO 27001 Controls advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie werden ISO 27001 Controls in verschiedenen Branchen und regulatorischen Umgebungen angepasst?',
        answer: "Die Anpassung von ISO 27001 Controls an branchenspezifische Anforderungen und regulatorische Umgebungen erfordert ein tiefes Verständnis sowohl der Standard-Controls als auch der spezifischen Compliance-Landschaft. Verschiedene Branchen haben unterschiedliche Risikoprofile, Bedrohungslandschaften und regulatorische Verpflichtungen, die eine maßgeschneiderte Implementierung der Controls erforderlich machen.\n\n🏦 Finanzdienstleistungssektor:\n• Zusätzliche Controls für PCI DSS Compliance bei Kreditkartenverarbeitung\n• Verstärkte Überwachung und Logging für Anti-Geldwäsche-Anforderungen\n• Spezielle Datenschutzmaßnahmen für Kundendaten und Transaktionsinformationen\n• Erhöhte Anforderungen an Business Continuity und Disaster Recovery\n• Integration mit Basel III und anderen bankspezifischen Regulierungen\n\n🏥 Gesundheitswesen:\n• HIPAA-konforme Implementierung von Zugangskontrollen und Datenschutz\n• Spezielle Verschlüsselungsanforderungen für Patientendaten\n• Audit-Trails für alle Zugriffe auf medizinische Informationen\n• Sichere Kommunikation zwischen Gesundheitsdienstleistern\n• Integration mit medizinischen Geräten und IoT-Sicherheit\n\n🏭 Kritische Infrastrukturen:\n• NIS2-Compliance für Betreiber wesentlicher Dienste\n• SCADA und Industrial Control Systems Sicherheit\n• Physische Sicherheit für kritische Anlagen und Einrichtungen\n• Cyber-Physical Security für vernetzte Produktionsanlagen\n• Spezielle Incident Response Verfahren für kritische Infrastrukturen\n\n🌐 Cloud Service Provider:\n• SOC 2 Type II Compliance und kontinuierliche Überwachung\n• Multi-Tenant-Sicherheit und Datenisolation\n• Compliance mit verschiedenen nationalen Datenschutzgesetzen\n• Transparenz und Auditierbarkeit für Kunden\n• Automatisierte Compliance-Überwachung und Reporting\n\n📊 Anpassungsstrategien:\n• Gap-Analysen zwischen ISO 27001 und branchenspezifischen Standards\n• Entwicklung von Control-Mappings für multiple Compliance-Frameworks\n• Risikobasierte Priorisierung unter Berücksichtigung branchenspezifischer Bedrohungen\n• Integration von Branchenstandards in die Statement of Applicability\n• Regelmäßige Überprüfung und Anpassung an sich ändernde Regulierungen\n\n🔄 Kontinuierliche Compliance:\n• Monitoring von regulatorischen Änderungen und deren Auswirkungen\n• Automatisierte Compliance-Checks für branchenspezifische Anforderungen\n• Regelmäßige Schulungen zu branchenspezifischen Sicherheitsanforderungen\n• Integration von Compliance-Metriken in das Management Reporting\n• Aufbau von Expertise für spezifische regulatorische Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Herausforderungen entstehen bei der Skalierung von ISO 27001 Controls in großen, multinationalen Organisationen?',
        answer: "Die Skalierung von ISO 27001 Controls in großen, multinationalen Organisationen bringt komplexe Herausforderungen mit sich, die über die reine technische Implementierung hinausgehen. Kulturelle Unterschiede, verschiedene rechtliche Rahmenbedingungen und dezentrale Organisationsstrukturen erfordern einen durchdachten Ansatz für die globale Harmonisierung von Sicherheitskontrollen.\n\n🌍 Globale Governance und Standardisierung:\n• Entwicklung einer einheitlichen globalen Sicherheitsarchitektur bei Berücksichtigung lokaler Besonderheiten\n• Etablierung von regionalen Sicherheitsverantwortlichen mit klaren Eskalationswegen\n• Harmonisierung von Sicherheitsrichtlinien über verschiedene Rechtsräume hinweg\n• Zentrale Koordination bei dezentraler Umsetzung der Controls\n• Aufbau einer globalen Sicherheitskultur mit lokaler Anpassung\n\n📋 Compliance-Komplexität:\n• Navigation durch verschiedene nationale und regionale Datenschutzgesetze\n• Anpassung an lokale Arbeitsgesetze und Mitarbeiterrechte\n• Berücksichtigung unterschiedlicher Audit und Zertifizierungsanforderungen\n• Management von grenzüberschreitenden Datenübertragungen\n• Integration verschiedener branchenspezifischer Regulierungen\n\n🏢 Organisatorische Herausforderungen:\n• Koordination zwischen verschiedenen Geschäftseinheiten und Tochtergesellschaften\n• Standardisierung von Prozessen bei Berücksichtigung lokaler Geschäftspraktiken\n• Aufbau einheitlicher Reporting-Strukturen über alle Standorte\n• Management von verschiedenen IT-Landschaften und Legacy-Systemen\n• Harmonisierung von Incident Response Prozessen über Zeitzonen hinweg\n\n💻 Technische Skalierungsherausforderungen:\n• Zentrale Überwachung und Management von verteilten IT-Infrastrukturen\n• Einheitliche Identity und Access Management Systeme über alle Standorte\n• Konsistente Implementierung von Sicherheitstools und Technologien\n• Netzwerksegmentierung und sichere Verbindungen zwischen Standorten\n• Zentrale Logging und SIEM-Integration für globale Sichtbarkeit\n\n👥 Kulturelle und sprachliche Aspekte:\n• Anpassung von Schulungsmaterialien an lokale Sprachen und Kulturen\n• Berücksichtigung unterschiedlicher Kommunikationsstile und Hierarchien\n• Aufbau lokaler Sicherheitsbotschafter und Change Agents\n• Entwicklung kulturell angepasster Awareness-Programme\n• Management von verschiedenen Arbeitszeiten und Kommunikationsgewohnheiten\n\n🔧 Implementierungsstrategien:\n• Phasenweise Rollout-Strategien mit Pilotprojekten in ausgewählten Regionen\n• Entwicklung von regionalen Centers of Excellence für Sicherheit\n• Aufbau globaler Communities of Practice für Wissensaustausch\n• Standardisierte Toolkits und Vorlagen für lokale Implementierungen\n• Regelmäßige globale Sicherheitskonferenzen und Wissensaustausch"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie werden emerging Technologies wie KI, IoT und Blockchain in die ISO 27001 Control-Landschaft integriert?',
        answer: "Die Integration von emerging Technologies in die ISO 27001 Control-Landschaft erfordert eine proaktive Herangehensweise, da diese Technologien neue Risiken und Sicherheitsherausforderungen mit sich bringen, die in den traditionellen Controls nicht vollständig abgedeckt sind. Die Anpassung und Erweiterung bestehender Controls ist notwendig, um den Schutz in einer sich schnell entwickelnden technologischen Landschaft zu gewährleisten.\n\n🤖 Künstliche Intelligenz und Machine Learning:\n• Entwicklung spezifischer Controls für AI-Modell-Governance und Bias-Management\n• Sicherheit von Trainingsdaten und Schutz vor Data Poisoning Angriffen\n• Explainability und Transparency Controls für kritische AI-Entscheidungen\n• Monitoring von AI-Systemen auf anomales Verhalten und Drift\n• Privacy-preserving AI Techniken und Differential Privacy Implementierung\n\n🌐 Internet of Things Sicherheit:\n• Device Identity Management und sichere Provisionierung von IoT-Geräten\n• Network Segmentation und Mikrosegmentierung für IoT-Netzwerke\n• Over-the-Air Update Mechanismen mit kryptographischer Verifikation\n• Monitoring und Anomalieerkennung für IoT-Device-Verhalten\n• Lifecycle Management von IoT-Geräten einschließlich sicherer Dekommissionierung\n\n⛓️ Blockchain und Distributed Ledger Technologies:\n• Wallet Security und Private Key Management Controls\n• Smart Contract Security und Code-Audit-Verfahren\n• Consensus Mechanism Security und Node-Management\n• Privacy Controls für öffentliche Blockchains\n• Integration von Blockchain-basierten Identity-Lösungen\n\n☁️ Edge Computing und Distributed Architectures:\n• Security Controls für Edge-Nodes und Remote-Computing-Ressourcen\n• Sichere Kommunikation zwischen Edge und Cloud-Infrastrukturen\n• Lokale Datenverarbeitung und Privacy-by-Design Prinzipien\n• Resilience und Fault Tolerance für verteilte Systeme\n• Orchestrierung von Sicherheitsrichtlinien über Edge-Infrastrukturen\n\n🔮 Quantum Computing Readiness:\n• Post-Quantum Cryptography Migration Planning\n• Quantum-Safe Key Management und Zertifikatsinfrastrukturen\n• Risk Assessment für Quantum Computing Bedrohungen\n• Hybrid Classical-Quantum Security Architectures\n• Monitoring von Quantum Computing Entwicklungen und Bedrohungen\n\n📊 Integration und Governance:\n• Technology Risk Assessment Frameworks für emerging Technologies\n• Agile Security Controls Entwicklung für schnelle technologische Änderungen\n• Continuous Monitoring und Adaptive Security für neue Technologien\n• Cross-functional Teams für Technology Security Governance\n• Regular Technology Horizon Scanning und Threat Intelligence"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Best Practices gibt es für die Dokumentation und das Change Management von ISO 27001 Controls?',
        answer: "Effektive Dokumentation und Change Management sind kritische Erfolgsfaktoren für die nachhaltige Implementierung und Wartung von ISO 27001 Controls. Eine systematische Herangehensweise gewährleistet nicht nur Compliance, sondern auch die kontinuierliche Verbesserung und Anpassung der Kontrolllandschaft an sich ändernde Anforderungen und Bedrohungen.\n\n📋 Strukturierte Dokumentationsansätze:\n• Hierarchische Dokumentationsstruktur mit Richtlinien, Verfahren und Arbeitsanweisungen\n• Standardisierte Templates und Formate für konsistente Dokumentation\n• Versionskontrolle und Änderungshistorie für alle Sicherheitsdokumente\n• Cross-Referencing zwischen Controls und unterstützenden Dokumenten\n• Automatisierte Dokumentengenerierung aus Konfigurationsdaten wo möglich\n\n🔄 Change Management Prozesse:\n• Formale Change Advisory Boards für sicherheitsrelevante Änderungen\n• Risk Assessment und Impact Analysis für alle Control-Änderungen\n• Staging und Testing Umgebungen für Control-Implementierungen\n• Rollback-Pläne und Contingency-Verfahren für kritische Änderungen\n• Post-Implementation Reviews und Lessons Learned Dokumentation\n\n📊 Lifecycle Management:\n• Regelmäßige Review-Zyklen für alle dokumentierten Controls und Verfahren\n• Obsolescence Management für veraltete Controls und Technologien\n• Continuous Improvement Prozesse basierend auf Audit-Ergebnissen\n• Integration von Threat Intelligence in Control-Updates\n• Proaktive Anpassung an regulatorische Änderungen\n\n🎯 Qualitätssicherung:\n• Peer Review Prozesse für alle Dokumentationsänderungen\n• Konsistenzprüfungen zwischen verschiedenen Dokumenten\n• Regelmäßige Audits der Dokumentationsqualität und Vollständigkeit\n• Feedback-Mechanismen von Anwendern und Auditoren\n• Kontinuierliche Verbesserung der Dokumentationsstandards\n\n💻 Technologische Unterstützung:\n• GRC-Plattformen für integriertes Control und Dokumentenmanagement\n• Workflow-Systeme für automatisierte Approval-Prozesse\n• Collaboration-Tools für verteilte Dokumentationsteams\n• Automatisierte Compliance-Checks und Konsistenzprüfungen\n• Integration mit Configuration Management und ITSM-Systemen\n\n👥 Stakeholder Engagement:\n• Klare Rollen und Verantwortlichkeiten für Dokumentationspflege\n• Training und Awareness für Dokumentationsstandards\n• Regular Communication über Control-Änderungen an alle Beteiligten\n• Feedback-Kanäle für kontinuierliche Verbesserung\n• Change Champions und Subject Matter Experts in verschiedenen Bereichen"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
