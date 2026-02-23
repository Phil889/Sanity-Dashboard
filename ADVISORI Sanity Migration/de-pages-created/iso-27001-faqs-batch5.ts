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
    console.log('Updating ISO 27001 page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001" not found')
    }
    
    // Create new FAQs for ISO 27001 advanced topics and best practices
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie kann ISO 27001 bei der digitalen Transformation und Cloud-Migration unterstützen?',
        answer: "ISO 27001 spielt eine entscheidende Rolle bei der sicheren digitalen Transformation und Cloud-Migration, indem es einen strukturierten Rahmen für das Management von Informationssicherheitsrisiken in dynamischen, technologiegetriebenen Umgebungen bietet. Der Standard hilft Organisationen dabei, Sicherheit als strategischen Enabler für Innovation zu etablieren.\n\n☁️ Cloud-Security-Framework:\n• Entwicklung cloud-spezifischer Risikobewertungen und Kontrollmaßnahmen für verschiedene Service-Modelle\n• Implementierung von Shared Responsibility Models mit klaren Verantwortlichkeiten zwischen Cloud-Provider und Organisation\n• Etablierung von Cloud Security Posture Management für kontinuierliche Überwachung\n• Integration von Cloud Access Security Broker Lösungen für erweiterte Kontrolle\n• Berücksichtigung von Multi-Cloud und Hybrid-Cloud Architekturen in der ISMS-Strategie\n\n🔄 Agile Sicherheitsarchitektur:\n• Implementierung von Security by Design Prinzipien in allen Transformationsprojekten\n• Entwicklung flexibler Sicherheitsrichtlinien, die sich an veränderte Technologielandschaften anpassen\n• Etablierung von API-Security-Standards für moderne, vernetzte Anwendungslandschaften\n• Integration von Container-Sicherheit und Kubernetes-Governance in das ISMS\n• Aufbau von Zero Trust Architekturen als neue Sicherheitsparadigma\n\n📊 Datengovernance in der Cloud:\n• Entwicklung umfassender Datenklassifizierungs- und Schutzstrategien für Cloud-Umgebungen\n• Implementierung von Data Loss Prevention Lösungen für Cloud-basierte Workflows\n• Etablierung von Encryption-at-Rest und Encryption-in-Transit Standards\n• Berücksichtigung von Datenresidenz und Compliance-Anforderungen bei der Cloud-Auswahl\n• Integration von Privacy by Design Prinzipien in Cloud-Architekturen\n\n🛠️ DevSecOps und Continuous Security:\n• Integration von Sicherheitskontrollen in CI/CD-Pipelines für automatisierte Compliance\n• Implementierung von Infrastructure as Code mit eingebauten Sicherheitsrichtlinien\n• Etablierung von Continuous Vulnerability Management und Penetration Testing\n• Entwicklung von Security Orchestration und Automated Response Capabilities\n• Aufbau von Security Champions Programmen für Entwicklungsteams\n\n🎯 Change Management und Governance:\n• Entwicklung agiler Governance-Modelle, die Innovation ermöglichen und Risiken kontrollieren\n• Etablierung von Technology Risk Committees für strategische Technologieentscheidungen\n• Integration von Sicherheitsbewertungen in alle Transformationsprojekte\n• Aufbau von Digital Risk Management Capabilities\n• Kontinuierliche Anpassung der ISMS-Prozesse an neue Technologien und Bedrohungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Best Practices gibt es für die Aufrechterhaltung und kontinuierliche Verbesserung eines ISO 27001 ISMS?',
        answer: "Die Aufrechterhaltung und kontinuierliche Verbesserung eines ISO 27001 ISMS erfordert einen systematischen, datengetriebenen Ansatz, der über die reine Compliance-Erfüllung hinausgeht. Erfolgreiche Organisationen etablieren eine Kultur der kontinuierlichen Verbesserung und nutzen moderne Technologien für effizientes ISMS-Management.\n\n🔄 Kontinuierliche Überwachung und Messung:\n• Implementierung automatisierter Monitoring-Systeme für Echtzeit-Überwachung der ISMS-Performance\n• Entwicklung aussagekräftiger KPIs und Dashboards für verschiedene Stakeholder-Gruppen\n• Regelmäßige Maturity Assessments zur Bewertung der ISMS-Entwicklung\n• Etablierung von Trend-Analysen für proaktive Risikomanagement\n• Integration von Threat Intelligence für dynamische Anpassung der Sicherheitsmaßnahmen\n\n📊 Datengetriebene Entscheidungsfindung:\n• Nutzung von Security Analytics für evidenzbasierte Verbesserungsmaßnahmen\n• Implementierung von Risk Quantification Methoden für bessere Investitionsentscheidungen\n• Entwicklung von Predictive Analytics für Früherkennung von Sicherheitsrisiken\n• Etablierung von Benchmarking-Programmen mit Industriestandards\n• Regelmäßige ROI-Analysen für Sicherheitsinvestitionen\n\n🎯 Agile Verbesserungsprozesse:\n• Implementierung kurzer Verbesserungszyklen mit schnellen Feedback-Schleifen\n• Etablierung von Cross-funktionalen Improvement Teams\n• Nutzung von Lean-Prinzipien für Prozessoptimierung\n• Entwicklung von Innovation Labs für Sicherheitstechnologien\n• Integration von Design Thinking Methoden für Problemlösung\n\n👥 Organisationale Exzellenz:\n• Aufbau einer lernenden Organisation mit kontinuierlicher Kompetenzentwicklung\n• Etablierung von Communities of Practice für Wissensaustausch\n• Implementierung von Mentoring-Programmen für Sicherheitsexperten\n• Entwicklung von Karrierepfaden im Bereich Informationssicherheit\n• Förderung einer Kultur der Offenheit und des kontinuierlichen Lernens\n\n🔧 Technologische Enabler:\n• Nutzung von GRC-Plattformen für integriertes Governance, Risk und Compliance Management\n• Implementierung von Workflow-Automation für effiziente ISMS-Prozesse\n• Entwicklung von Self-Service-Portalen für Mitarbeiter und Stakeholder\n• Integration von Artificial Intelligence für intelligente Bedrohungserkennung\n• Aufbau von API-basierten Integrationen zwischen verschiedenen Sicherheitstools\n\n🚀 Strategische Weiterentwicklung:\n• Regelmäßige Überprüfung und Anpassung der ISMS-Strategie an Geschäftsziele\n• Entwicklung von Roadmaps für zukünftige Sicherheitstechnologien\n• Etablierung strategischer Partnerschaften mit Technologie- und Beratungsunternehmen\n• Aufbau von Thought Leadership durch Teilnahme an Industrieinitiativen\n• Kontinuierliche Evaluation neuer Standards und Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie können kleine und mittelständische Unternehmen ISO 27001 kosteneffizient implementieren?',
        answer: "Kleine und mittelständische Unternehmen können ISO 27001 durch einen pragmatischen, phasenorientierten Ansatz kosteneffizient implementieren, der auf ihre spezifischen Ressourcen und Geschäftsanforderungen zugeschnitten ist. Der Schlüssel liegt in der intelligenten Priorisierung, Nutzung bestehender Ressourcen und schrittweisen Entwicklung der ISMS-Reife.\n\n💡 Pragmatischer Implementierungsansatz:\n• Fokussierung auf kritische Geschäftsprozesse und Informationsassets als Ausgangspunkt\n• Nutzung bestehender IT-Sicherheitsmaßnahmen als Grundlage für das ISMS\n• Implementierung eines risikobasierten Ansatzes zur Priorisierung von Kontrollmaßnahmen\n• Schrittweise Erweiterung des ISMS-Anwendungsbereichs entsprechend verfügbarer Ressourcen\n• Entwicklung schlanker Dokumentation, die den Standard erfüllt ohne Überregulierung\n\n🔧 Kosteneffiziente Ressourcennutzung:\n• Nutzung von Open Source und kostengünstigen Cloud-basierten Sicherheitslösungen\n• Implementierung von Multi-Purpose-Tools, die mehrere Kontrollmaßnahmen abdecken\n• Aufbau interner Kompetenzen durch gezielte Schulungen statt externe Beratung\n• Nutzung von Branchennetzwerken und Erfahrungsaustausch mit anderen KMU\n• Implementierung automatisierter Lösungen zur Reduzierung manueller Aufwände\n\n👥 Interne Kapazitätsentwicklung:\n• Aufbau von ISMS-Kompetenzen bei bestehenden Mitarbeitern durch gezielte Weiterbildung\n• Etablierung von Teilzeit-Sicherheitsrollen zusätzlich zu Hauptverantwortlichkeiten\n• Nutzung von E-Learning und Online-Zertifizierungsprogrammen\n• Entwicklung von Security Champions in verschiedenen Unternehmensbereichen\n• Aufbau von Partnerschaften mit lokalen Bildungseinrichtungen\n\n📋 Schlanke Dokumentation und Prozesse:\n• Entwicklung integrierter Dokumentation, die mehrere Anforderungen gleichzeitig erfüllt\n• Nutzung von Templates und Best-Practice-Vorlagen aus der Community\n• Implementierung digitaler Workflows zur Reduzierung von Papierarbeit\n• Fokussierung auf wesentliche Prozesse und Vermeidung von Überregulierung\n• Regelmäßige Überprüfung und Vereinfachung bestehender Prozesse\n\n🤝 Strategische Partnerschaften:\n• Zusammenarbeit mit anderen KMU für gemeinsame Sicherheitsinitiativen\n• Nutzung von Managed Security Services für spezialisierte Anforderungen\n• Aufbau von Beziehungen zu lokalen Beratungsunternehmen für punktuelle Unterstützung\n• Teilnahme an Brancheninitiativen und Sicherheitsnetzwerken\n• Nutzung von Förderprogrammen und staatlichen Unterstützungsmaßnahmen\n\n🎯 Phasenweise Implementierung:\n• Start mit einem minimalen ISMS für kritische Bereiche\n• Schrittweise Erweiterung basierend auf Erfahrungen und verfügbaren Ressourcen\n• Kontinuierliche Verbesserung durch Lessons Learned aus jeder Phase\n• Aufbau von Quick Wins zur Demonstration des ISMS-Werts\n• Langfristige Roadmap für vollständige ISO 27001 Compliance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Rolle spielt ISO 27001 bei der Vorbereitung auf Cyber-Versicherungen und Incident Response?',
        answer: "ISO 27001 spielt eine zentrale Rolle bei der Vorbereitung auf Cyber-Versicherungen und effektives Incident Response, da es die notwendigen Strukturen, Prozesse und Nachweise für beide Bereiche schafft. Ein gut implementiertes ISMS demonstriert Due Diligence und kann sowohl Versicherungsprämien reduzieren als auch die Reaktionsfähigkeit bei Sicherheitsvorfällen erheblich verbessern.\n\n🛡️ Cyber-Versicherung und Risk Management:\n• Systematische Risikobewertung und -dokumentation als Grundlage für Versicherungsanträge\n• Nachweis implementierter Kontrollmaßnahmen zur Reduzierung von Versicherungsprämien\n• Etablierung von Incident Response Plänen als Voraussetzung für viele Cyber-Versicherungen\n• Dokumentation von Business Continuity Maßnahmen für Schadensbegrenzung\n• Regelmäßige Sicherheitsaudits als Nachweis für kontinuierliche Risikominimierung\n\n📊 Due Diligence und Compliance-Nachweis:\n• Umfassende Dokumentation aller Sicherheitsmaßnahmen für Versicherungsanträge\n• Nachweis von Mitarbeiterschulungen und Security Awareness Programmen\n• Etablierung von Vendor Risk Management für Supply Chain Security\n• Implementierung von Data Protection Maßnahmen entsprechend regulatorischer Anforderungen\n• Regelmäßige Penetration Tests und Vulnerability Assessments als Risikominimierung\n\n🚨 Strukturiertes Incident Response Management:\n• Entwicklung detaillierter Incident Response Pläne mit klaren Rollen und Verantwortlichkeiten\n• Etablierung von Incident Classification und Escalation Prozessen\n• Implementierung von Forensic Readiness für effektive Schadensbewertung\n• Aufbau von Communication Plans für interne und externe Stakeholder\n• Regelmäßige Incident Response Übungen zur Validierung der Prozesse\n\n🔍 Forensic Capabilities und Evidence Management:\n• Implementierung von Logging und Monitoring Systemen für Incident Investigation\n• Etablierung von Chain of Custody Prozessen für digitale Beweise\n• Aufbau von Forensic Analysis Capabilities oder Partnerschaften\n• Entwicklung von Legal Hold Prozesse für Beweissicherung\n• Integration mit externen Forensic Experten und Strafverfolgungsbehörden\n\n💼 Business Continuity und Recovery:\n• Entwicklung von Business Impact Analysen für verschiedene Incident-Szenarien\n• Implementierung von Backup und Recovery Strategien für kritische Systeme\n• Etablierung alternativer Arbeitsplätze und Kommunikationswege\n• Aufbau von Crisis Management Teams mit definierten Entscheidungsbefugnissen\n• Regelmäßige Tests der Business Continuity Pläne\n\n📈 Kontinuierliche Verbesserung und Lessons Learned:\n• Systematische Post-Incident Reviews zur Identifikation von Verbesserungspotenzialen\n• Integration von Threat Intelligence für proaktive Bedrohungsabwehr\n• Aufbau von Metrics und KPIs für Incident Response Performance\n• Entwicklung von Playbooks für häufige Incident-Typen\n• Regelmäßige Aktualisierung der Incident Response Prozesse basierend auf neuen Bedrohungen"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
