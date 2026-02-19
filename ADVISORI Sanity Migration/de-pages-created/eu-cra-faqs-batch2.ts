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
    console.log('Updating EU CRA page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-cra' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-cra" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie implementieren wir harmonisierte EU-Standards für Security-by-Design in unsere Produktentwicklungsprozesse?',
        answer: "Die Implementierung harmonisierter EU-Standards für Security-by-Design erfordert eine systematische Integration europäischer Normen und Best Practices in alle Phasen der Produktentwicklung. Diese Integration geht über reine Compliance hinaus und schafft eine Kultur der proaktiven Cybersicherheit, die sowohl regulatorische Anforderungen erfüllt als auch nachhaltigen Geschäftswert generiert.\n\n🏗️ Strukturierte Standards-Integration:\n• Umfassende Analyse und Mapping relevanter harmonisierter Standards (EN, ISO, ETSI) auf Ihre spezifischen Produktkategorien und Entwicklungsprozesse.\n• Entwicklung einer Standards-Bibliothek mit praktischen Implementierungsleitfäden, Checklisten und Templates für verschiedene Entwicklungsphasen.\n• Integration von Standards-Anforderungen in bestehende Entwicklungstools, Workflows und Qualitätssicherungsprozesse.\n• Aufbau von Expertise-Zentren für verschiedene Standards-Domänen mit spezialisierten Teams und Verantwortlichkeiten.\n• Etablierung von Standards-Monitoring-Prozessen für kontinuierliche Überwachung von Updates und Änderungen.\n\n⚙️ Praktische Entwicklungsprozess-Integration:\n• Implementierung von Security-by-Design Checkpoints in allen Entwicklungsphasen von der Konzeption bis zur Markteinführung.\n• Aufbau automatisierter Compliance-Checks und Testing-Frameworks, die Standards-Konformität kontinuierlich validieren.\n• Integration von Threat Modeling und Risk Assessment Prozessen basierend auf harmonisierten Methodologien.\n• Entwicklung von Secure Coding Guidelines und Architectural Patterns, die EU-Standards-Anforderungen erfüllen.\n• Etablierung von Code Review und Security Testing Prozessen mit Standards-spezifischen Kriterien.\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Aufbau von Feedback-Schleifen zwischen Entwicklungsteams, Compliance-Experten und Standards-Organisationen.\n• Implementation von Lessons Learned Prozessen für kontinuierliche Optimierung der Standards-Integration.\n• Etablierung von Cross-funktionalen Teams für Standards-Evolution und Best Practice Sharing.\n• Entwicklung von Metriken und KPIs zur Messung der Effektivität der Standards-Implementierung.\n• Proaktive Vorbereitung auf zukünftige Standards-Entwicklungen und regulatorische Änderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche technischen Infrastrukturen und Monitoring-Systeme sind für kontinuierliche EU CRA Compliance erforderlich?',
        answer: "Kontinuierliche EU CRA Compliance erfordert robuste technische Infrastrukturen und intelligente Monitoring-Systeme, die sowohl proaktive Überwachung als auch reaktive Incident Response ermöglichen. Diese Systeme müssen skalierbar, interoperabel und an die spezifischen Anforderungen des europäischen Regulatorik-Umfelds angepasst sein.\n\n🖥️ Zentrale Compliance-Infrastruktur:\n• Implementierung einer zentralisierten Compliance-Management-Plattform, die alle EU CRA-relevanten Aktivitäten, Dokumentationen und Reporting-Prozesse integriert.\n• Aufbau skalierbarer Cloud-Infrastrukturen mit Multi-Region-Deployment für optimale Performance und Compliance in verschiedenen EU-Märkten.\n• Integration von Identity and Access Management Systemen mit rollenbasierten Zugriffskontrollen für verschiedene Compliance-Funktionen.\n• Implementierung von Data Loss Prevention und Encryption-Lösungen für Schutz sensibler Compliance-Daten.\n• Aufbau redundanter Backup- und Disaster Recovery Systeme für Business Continuity und Compliance-Sicherstellung.\n\n📊 Intelligente Monitoring und Analytics:\n• Entwicklung von Real-Time Dashboards für kontinuierliche Überwachung aller Compliance-relevanten Metriken und KPIs.\n• Implementation von AI-gestützten Anomalie-Detection-Systemen für frühzeitige Erkennung potenzieller Compliance-Verstöße.\n• Aufbau von Predictive Analytics Capabilities für proaktive Identifikation von Compliance-Risiken und Optimierungsmöglichkeiten.\n• Integration von Automated Reporting Tools für effiziente Generierung regulatorischer Reports und Dokumentationen.\n• Etablierung von Cross-Border Monitoring für koordinierte Überwachung aller EU-Märkte und Jurisdiktionen.\n\n🔧 Operative Infrastruktur-Komponenten:\n• Implementierung von Vulnerability Management Systemen mit automatisierten Scanning- und Patch-Management-Prozessen.\n• Aufbau von Security Information and Event Management Plattformen für zentrale Log-Aggregation und Incident Detection.\n• Integration von DevSecOps-Tools für kontinuierliche Security-Integration in Entwicklungs- und Deployment-Pipelines.\n• Etablierung von Network Security Monitoring mit Deep Packet Inspection und Behavioral Analysis.\n• Implementation von Endpoint Detection and Response Systeme für umfassenden Schutz aller Systemkomponenten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gestalten wir effektive Schwachstellenmanagement-Prozesse für EU CRA Compliance in komplexen Produktlandschaften?',
        answer: "Effektives Schwachstellenmanagement für EU CRA Compliance in komplexen Produktlandschaften erfordert systematische Prozesse, die sowohl technische Exzellenz als auch regulatorische Anforderungen erfüllen. Diese Prozesse müssen skalierbar, automatisiert und an die spezifischen Herausforderungen verschiedener Produktkategorien und EU-Märkte angepasst sein.\n\n🔍 Strukturiertes Vulnerability Assessment:\n• Implementierung umfassender Asset Discovery und Inventory Management Systeme für vollständige Transparenz über alle Produktkomponenten und Abhängigkeiten.\n• Aufbau automatisierter Vulnerability Scanning Prozesse mit verschiedenen Tools und Methodologien für unterschiedliche Produkttypen und Technologien.\n• Entwicklung von Risk-based Prioritization Frameworks, die sowohl technische Schwere als auch Business Impact und regulatorische Konsequenzen berücksichtigen.\n• Integration von Threat Intelligence Feeds für kontextuelle Bewertung von Schwachstellen basierend auf aktuellen Bedrohungslandschaften.\n• Etablierung von Continuous Assessment Prozessen für dynamische Überwachung sich ändernder Risikoprofile.\n\n⚡ Agile Response und Remediation:\n• Entwicklung von SLA-basierten Response Prozessen mit klaren Zeitvorgaben für verschiedene Schwachstellen-Kategorien und Risikostufen.\n• Aufbau automatisierter Patch Management Systeme mit Testing- und Rollback-Capabilities für sichere und effiziente Updates.\n• Implementation von Emergency Response Procedures für kritische Zero-Day Vulnerabilities mit beschleunigten Entscheidungs- und Deployment-Prozessen.\n• Etablierung von Compensating Controls für Situationen, in denen sofortige Patches nicht möglich oder praktikabel sind.\n• Integration von Change Management Prozessen für koordinierte und kontrollierte Remediation-Aktivitäten.\n\n📋 Compliance und Dokumentation:\n• Aufbau umfassender Vulnerability Tracking und Documentation Systeme für vollständige Nachverfolgbarkeit aller Aktivitäten.\n• Entwicklung automatisierter Reporting Mechanismen für regulatorische Meldepflichten und Stakeholder-Kommunikation.\n• Implementation von Metrics und KPIs für kontinuierliche Messung und Verbesserung der Schwachstellenmanagement-Effektivität.\n• Etablierung von Audit Trails und Evidence Collection für Compliance-Nachweise und externe Prüfungen.\n• Integration mit Incident Response Prozessen für koordinierte Behandlung von Schwachstellen-bezogenen Sicherheitsvorfällen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Automatisierungsstrategien optimieren EU CRA Compliance-Prozesse und reduzieren operative Belastungen?',
        answer: "Strategische Automatisierung von EU CRA Compliance-Prozessen kann operative Belastungen erheblich reduzieren und gleichzeitig Compliance-Qualität und Konsistenz verbessern. Eine durchdachte Automatisierungsstrategie berücksichtigt sowohl technische Möglichkeiten als auch regulatorische Anforderungen und schafft nachhaltige Effizienzgewinne.\n\n🤖 Intelligente Prozessautomatisierung:\n• Implementation von Robotic Process Automation für repetitive Compliance-Aufgaben wie Dokumentenerstellung, Datensammlung und Reporting-Prozesse.\n• Entwicklung von AI-gestützten Compliance-Assistenten für automatisierte Analyse regulatorischer Änderungen und deren Auswirkungen auf bestehende Prozesse.\n• Aufbau von Workflow-Automation-Systemen für standardisierte Compliance-Prozesse mit automatischen Eskalations- und Approval-Mechanismen.\n• Integration von Natural Language Processing für automatisierte Analyse und Kategorisierung von Compliance-Dokumenten und Kommunikation.\n• Etablierung von Predictive Automation für proaktive Identifikation und Behandlung potenzieller Compliance-Issues.\n\n📊 Datengetriebene Automatisierung:\n• Implementation von Data Pipeline Automation für kontinuierliche Sammlung, Verarbeitung und Analyse compliance-relevanter Daten.\n• Aufbau automatisierter Dashboard- und Reporting-Systeme mit Real-Time Updates und customizable Views für verschiedene Stakeholder.\n• Entwicklung von Automated Compliance Scoring Systemen für kontinuierliche Bewertung und Benchmarking der Compliance-Performance.\n• Integration von Machine Learning Algorithmen für Pattern Recognition und Anomalie-Detection in Compliance-Daten.\n• Etablierung von Automated Alert Systems für proaktive Benachrichtigung bei kritischen Compliance-Events oder Threshold-Überschreitungen.\n\n🔧 Technische Integration und Orchestrierung:\n• Aufbau von API-first Architekturen für nahtlose Integration verschiedener Compliance-Tools und Systeme.\n• Implementation von Infrastructure as Code für konsistente und reproduzierbare Deployment von Compliance-Infrastrukturen.\n• Entwicklung von Automated Testing Frameworks für kontinuierliche Validierung von Compliance-Kontrollen und Prozessen.\n• Integration von DevSecOps-Pipelines für automatisierte Security- und Compliance-Checks in Entwicklungs- und Deployment-Prozessen.\n• Etablierung von Automated Backup und Recovery Prozesse für kritische Compliance-Daten und Systeme."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
