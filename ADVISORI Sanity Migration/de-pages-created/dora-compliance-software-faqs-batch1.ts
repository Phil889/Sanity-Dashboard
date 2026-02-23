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
    console.log('Updating DORA Compliance Software page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-compliance-software' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-compliance-software" not found')
    }
    
    // Create new FAQs for DORA compliance software fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche Arten von Software-Lösungen sind für DORA-Compliance erforderlich und wie bewerte ich deren Eignung?',
        answer: "DORA-Compliance erfordert ein integriertes Ökosystem verschiedener Software-Kategorien, die zusammenwirken müssen, um eine umfassende digitale operationelle Resilienz zu gewährleisten. Die Auswahl der richtigen Kombination ist entscheidend für eine effektive und effiziente Compliance-Strategie.\n\n🛡️ IKT-Risikomanagement-Plattformen:\n• Zentrale Governance-Systeme für die Überwachung und Steuerung aller IKT-Risiken mit integrierten Dashboards und Reporting-Funktionen\n• Risk-Assessment-Tools mit automatisierten Bewertungsalgorithmen und Szenario-Modellierung für verschiedene Bedrohungslagen\n• Kontinuierliche Monitoring-Systeme mit Real-time-Alerting und proaktiver Risikoidentifikation\n• Integration mit bestehenden Enterprise-Risk-Management-Systemen für ganzheitliche Risikosicht\n• Compliance-Tracking-Module mit automatisierter Dokumentation und Audit-Trail-Funktionalität\n\n🚨 Incident-Response und Business-Continuity-Software:\n• Spezialisierte Incident-Management-Plattformen mit automatisierten Eskalationsprozessen und Kommunikationsworkflows\n• Business-Continuity-Planning-Tools mit Szenario-Simulation und Recovery-Time-Objective-Tracking\n• Crisis-Communication-Systeme für koordinierte interne und externe Kommunikation während Störungen\n• Disaster-Recovery-Orchestrierung mit automatisierten Failover-Mechanismen und Testing-Frameworks\n• Post-Incident-Analysis-Tools für systematische Lessons-Learned-Prozesse und Verbesserungsmaßnahmen\n\n🤝 Drittanbieter-Risikomanagement-Systeme:\n• Vendor-Risk-Assessment-Plattformen mit standardisierten Bewertungsframeworks und Due-Diligence-Workflows\n• Contract-Lifecycle-Management-Systeme mit DORA-spezifischen Klauseln und SLA-Monitoring\n• Supplier-Performance-Monitoring mit kontinuierlicher Bewertung kritischer IKT-Drittanbieter\n• Concentration-Risk-Analysis-Tools zur Identifikation und Überwachung von Abhängigkeitsrisiken\n• Exit-Strategy-Management-Software für strukturierte Ausstiegsplanung und Alternative-Sourcing\n\n📊 Bewertungskriterien für Software-Eignung:\n• DORA-spezifische Funktionalitätsabdeckung mit detaillierter Mapping-Matrix zu regulatorischen Anforderungen\n• Integrationsfähigkeit mit bestehenden Systemen und Datenarchitekturen für nahtlose Workflows\n• Skalierbarkeit und Performance-Charakteristika für wachsende Compliance-Anforderungen\n• Vendor-Stabilität und Support-Qualität mit Fokus auf langfristige Partnerschaft\n• Total-Cost-of-Ownership-Betrachtung einschließlich versteckter Kosten und Upgrade-Zyklen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie führe ich eine effektive Due-Diligence bei DORA-Compliance-Software-Anbietern durch?',
        answer: "Eine systematische Due-Diligence bei DORA-Compliance-Software-Anbietern ist kritisch, da diese Anbieter selbst zu kritischen IKT-Drittanbietern werden können. Der Prozess muss sowohl die technischen Fähigkeiten als auch die regulatorische Compliance des Anbieters umfassend bewerten.\n\n🔍 Technische und funktionale Bewertung:\n• Detaillierte Funktionalitätsanalyse mit Proof-of-Concept-Tests und Pilotimplementierungen zur Validierung der DORA-Anforderungsabdeckung\n• Architektur-Assessment der Software-Lösung einschließlich Sicherheitsdesign, Datenarchitektur und Integrationsfähigkeiten\n• Performance-Benchmarking unter realistischen Lastbedingungen mit Fokus auf Skalierbarkeit und Ausfallsicherheit\n• User-Experience-Evaluation mit Einbezug der tatsächlichen Endnutzer für Usability und Effizienz\n• Customization-Möglichkeiten und Flexibilität für organisationsspezifische Anforderungen und Workflows\n\n🏢 Anbieter-Organisationsbewertung:\n• Umfassende Bewertung der Unternehmensstruktur, Finanzstabilität und Geschäftsstrategie des Software-Anbieters\n• Management-Team-Assessment mit Fokus auf Expertise in Regulatorik und Finanzdienstleistungen\n• Analyse der Kundenbasis und Referenzen mit besonderem Augenmerk auf ähnliche Finanzinstitute\n• Bewertung der Forschungs- und Entwicklungskapazitäten für kontinuierliche Innovation und Regulatorik-Updates\n• Organisatorische Resilienz und Business-Continuity-Fähigkeiten des Anbieters selbst\n\n🛡️ Sicherheits- und Compliance-Assessment:\n• Detaillierte Sicherheitsarchitektur-Prüfung einschließlich Penetrationstests und Vulnerability-Assessments\n• Compliance-Status-Bewertung des Anbieters bezüglich relevanter Standards wie ISO 27001, SOC 2 und branchenspezifischer Regulierungen\n• Datenschutz- und GDPR-Compliance-Überprüfung mit Fokus auf Datenverarbeitung und grenzüberschreitende Transfers\n• Incident-Response-Fähigkeiten und historische Security-Performance des Anbieters\n• Supply-Chain-Security-Assessment der eigenen Drittanbieter des Software-Anbieters\n\n📋 Vertragliche und rechtliche Aspekte:\n• Detaillierte SLA-Definition mit messbaren Performance-Indikatoren und Penalty-Mechanismen\n• Liability- und Indemnification-Klauseln mit angemessener Risikoverteilung\n• Data-Ownership und Portability-Regelungen für Exit-Szenarien und Vendor-Wechsel\n• Audit-Rechte und Transparenz-Verpflichtungen des Anbieters\n• Regulatorische Change-Management-Prozesse für DORA-Updates und neue Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Integrationsstrategie sollte ich für DORA-Compliance-Software in meine bestehende IT-Landschaft verfolgen?',
        answer: "Eine durchdachte Integrationsstrategie ist entscheidend für den Erfolg von DORA-Compliance-Software, da diese nahtlos mit bestehenden Systemen zusammenarbeiten muss, um effektive Governance und Risikomanagement zu ermöglichen. Die Integration sollte sowohl technische als auch organisatorische Aspekte berücksichtigen.\n\n🏗️ Architektur-Design und Systemintegration:\n• Enterprise-Architecture-Assessment zur Identifikation aller relevanten Systeme und Datenflüsse mit Mapping der aktuellen IT-Landschaft\n• API-First-Ansatz mit standardisierten Schnittstellen für flexible und skalierbare Integrationen\n• Data-Governance-Framework mit klaren Definitionen für Datenqualität, Konsistenz und Aktualität\n• Microservices-orientierte Integration für modulare und wartbare Systemarchitektur\n• Cloud-native oder Hybrid-Cloud-Strategien für Flexibilität und Skalierbarkeit\n\n📊 Datenintegration und Management:\n• Master-Data-Management-Strategie für konsistente Stammdaten über alle integrierten Systeme hinweg\n• Real-time-Data-Synchronisation für zeitkritische Compliance-Prozesse und Monitoring\n• Data-Warehouse oder Data-Lake-Integration für umfassende Analytics und Reporting\n• ETL/ELT-Prozesse mit robusten Fehlerbehandlungs- und Monitoring-Mechanismen\n• Data-Lineage-Tracking für Transparenz und Nachvollziehbarkeit der Datenherkunft\n\n🔄 Workflow-Integration und Automatisierung:\n• Business-Process-Management-Integration für nahtlose Compliance-Workflows\n• Robotic-Process-Automation für repetitive Aufgaben und Datenübertragungen\n• Event-driven-Architecture für reaktive Systeme und automatisierte Responses\n• Workflow-Orchestrierung mit Exception-Handling und manuellen Eskalationspfaden\n• Integration mit bestehenden Ticketing- und Task-Management-Systemen\n\n🛡️ Sicherheits- und Governance-Integration:\n• Identity-and-Access-Management-Integration mit Single-Sign-On und Role-based-Access-Control\n• Security-Information-and-Event-Management-Integration für ganzheitliche Sicherheitsüberwachung\n• Audit-Log-Konsolidierung für zentrale Compliance-Dokumentation und Forensik\n• Change-Management-Integration für kontrollierte Updates und Konfigurationsänderungen\n• Backup-and-Recovery-Integration für konsistente Datensicherung über alle Systeme\n\n🚀 Implementierungs- und Rollout-Strategie:\n• Phased-Rollout-Ansatz mit Pilotphasen und schrittweiser Ausweitung\n• Parallel-Run-Strategien für kritische Systeme mit Fallback-Optionen\n• Comprehensive-Testing-Framework einschließlich Integration-, Performance- und User-Acceptance-Tests\n• Change-Management und Training-Programme für betroffene Stakeholder\n• Kontinuierliches Monitoring und Optimierung der Integrationspunkte"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie stelle ich sicher, dass meine DORA-Compliance-Software kontinuierlich aktuell und effektiv bleibt?',
        answer: "Die kontinuierliche Aktualität und Effektivität von DORA-Compliance-Software erfordert einen systematischen Ansatz für Lifecycle-Management, der sowohl technische Updates als auch sich ändernde regulatorische Anforderungen berücksichtigt. Ein proaktiver Ansatz ist entscheidend für nachhaltige Compliance.\n\n📈 Performance-Monitoring und KPI-Management:\n• Comprehensive-Dashboard-Entwicklung mit Real-time-Metriken für System-Performance und Compliance-Effektivität\n• Service-Level-Agreement-Monitoring mit automatisierten Alerts bei Unterschreitung definierter Schwellenwerte\n• User-Experience-Tracking mit regelmäßigen Satisfaction-Surveys und Usability-Assessments\n• Business-Impact-Messung durch Quantifizierung von Effizienzgewinnen und Risikoreduktion\n• Benchmark-Vergleiche mit Industry-Standards und Best-Practices für kontinuierliche Verbesserung\n\n🔄 Update- und Patch-Management:\n• Strukturiertes Release-Management mit Testing-Pipelines und Staging-Environments\n• Regulatorische Update-Tracking mit proaktiver Identifikation neuer DORA-Anforderungen\n• Vendor-Roadmap-Alignment für strategische Planung und Feature-Priorisierung\n• Risk-Assessment für alle Updates mit Impact-Analyse auf bestehende Prozesse\n• Rollback-Strategien und Contingency-Planning für kritische Updates\n\n🎯 Kontinuierliche Optimierung und Enhancement:\n• Regular-Review-Zyklen mit Cross-functional-Teams für ganzheitliche Bewertung\n• Process-Mining und Analytics für Identifikation von Optimierungspotenzialen\n• User-Feedback-Integration mit strukturierten Improvement-Request-Prozessen\n• Automation-Opportunities-Assessment für weitere Effizienzsteigerungen\n• Integration-Enhancement für bessere Systeminteroperabilität und Datenflüsse\n\n🏛️ Regulatorische Compliance-Überwachung:\n• Regulatory-Change-Management mit systematischem Tracking von DORA-Entwicklungen\n• Gap-Analysis-Prozesse für neue regulatorische Anforderungen\n• Compliance-Testing-Programme mit regelmäßigen Assessments und Audits\n• Documentation-Updates für sich ändernde Compliance-Anforderungen\n• Stakeholder-Communication für regulatorische Änderungen und deren Auswirkungen\n\n🤝 Vendor-Relationship-Management:\n• Strategic-Partnership-Development mit Software-Anbietern für langfristige Zusammenarbeit\n• Regular-Business-Reviews mit Performance-Assessment und Roadmap-Diskussionen\n• Escalation-Management für kritische Issues und Service-Probleme\n• Contract-Lifecycle-Management mit proaktiver Verhandlung von Renewals und Amendments\n• Alternative-Sourcing-Strategien als Backup für kritische Software-Komponenten"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
