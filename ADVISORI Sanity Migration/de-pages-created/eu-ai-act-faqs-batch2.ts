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
    console.log('Updating EU AI Act page with Implementation FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act" not found')
    }
    
    // Create new Implementation FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie führt ADVISORI eine systematische KI-System-Klassifizierung nach EU AI Act durch und welche praktischen Schritte sind für eine vollständige Risikobewertung erforderlich?",
        answer: "ADVISORI entwickelt strukturierte Klassifizierungsframeworks, die alle KI-Systeme systematisch nach EU AI Act Risikoklassen kategorisieren und praxisnahe Implementierungspfade definieren. Unser methodischer Ansatz gewährleistet vollständige Compliance-Abdeckung und effiziente Ressourcenallokation.\n\n🔍 Systematische KI-System-Inventarisierung:\n• Comprehensive Discovery: Vollständige Erfassung aller KI-Systeme, einschließlich eingebetteter AI-Komponenten, Third-Party-Lösungen und experimenteller Entwicklungen.\n• Technical Assessment: Detaillierte Analyse von Algorithmen, Datenquellen, Entscheidungslogik und Auswirkungen auf Endnutzer und Geschäftsprozesse.\n• Use Case Mapping: Zuordnung von KI-Anwendungen zu spezifischen Geschäftsfunktionen und Bewertung ihrer kritischen Bedeutung für Unternehmensziele.\n• Stakeholder Impact Analysis: Bewertung der Auswirkungen auf verschiedene Stakeholder-Gruppen, einschließlich Kunden, Mitarbeiter und Geschäftspartner.\n\n📊 EU AI Act Risikoklassifizierung:\n• Prohibited AI Systems: Identifikation und Bewertung von KI-Systemen, die unter die Verbotskategorien der EU AI Act fallen könnten.\n• High-Risk Classification: Systematische Bewertung von KI-Systemen in kritischen Bereichen wie Personalwesen, Kreditvergabe, Strafverfolgung und Gesundheitswesen.\n• Limited Risk Assessment: Kategorisierung von KI-Systemen mit begrenzten Risiken und Definition angemessener Transparenzmaßnahmen.\n• Minimal Risk Evaluation: Bewertung von KI-Systemen mit minimalen Risiken und Entwicklung effizienter Compliance-Ansätze.\n\n🛠️ ADVISORI's Implementation Methodology:\n• Risk Matrix Development: Erstellung maßgeschneiderter Risikobewertungsmatrizen, die branchenspezifische Faktoren und Unternehmenskontext berücksichtigen.\n• Compliance Roadmap Creation: Entwicklung detaillierter Implementierungspläne mit Prioritäten, Zeitplänen und Ressourcenanforderungen.\n• Cross-functional Integration: Einbindung aller relevanten Unternehmensbereiche in den Klassifizierungsprozess für ganzheitliche Bewertung.\n• Continuous Monitoring Setup: Etablierung von Prozessen zur regelmäßigen Neubewertung und Aktualisierung der KI-System-Klassifizierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche konkreten Dokumentations- und Audit-Trail-Anforderungen stellt die EU AI Act und wie implementiert ADVISORI nachweisbare Compliance-Systeme?",
        answer: "ADVISORI entwickelt comprehensive Dokumentationssysteme, die alle EU AI Act Anforderungen erfüllen und gleichzeitig als strategische Business Intelligence Tools fungieren. Unsere Audit-Trail-Systeme schaffen nicht nur Compliance, sondern auch operative Transparenz und Entscheidungsunterstützung.\n\n📋 EU AI Act Dokumentationsanforderungen:\n• Technical Documentation: Vollständige Dokumentation von KI-System-Architektur, Algorithmen, Trainingsdaten und Validierungsverfahren.\n• Risk Management Documentation: Detaillierte Aufzeichnung von Risikobewertungen, Mitigation-Maßnahmen und kontinuierlichen Monitoring-Aktivitäten.\n• Quality Management Records: Dokumentation von Qualitätssicherungsprozessen, Testing-Verfahren und Performance-Metriken.\n• Human Oversight Documentation: Nachweis angemessener menschlicher Aufsicht und Intervention-Möglichkeiten bei kritischen Entscheidungen.\n\n🔐 ADVISORI's Audit-Trail-Framework:\n• Automated Documentation: Implementierung automatisierter Dokumentationssysteme, die kontinuierlich Compliance-relevante Daten erfassen und strukturieren.\n• Version Control Systems: Etablierung robuster Versionskontrolle für alle KI-Modelle, Trainingsdaten und Konfigurationsänderungen.\n• Decision Logging: Comprehensive Protokollierung aller KI-basierten Entscheidungen mit nachvollziehbaren Begründungen und Einflussfaktoren.\n• Access Control Documentation: Detaillierte Aufzeichnung aller Zugriffe auf KI-Systeme und sensitive Daten mit Benutzer-Authentifizierung.\n\n📊 Strategic Documentation Benefits:\n• Business Intelligence Integration: Nutzung von Compliance-Dokumentation als Datenquelle für Business Analytics und Performance Optimization.\n• Stakeholder Reporting: Transformation von Audit-Trails in aussagekräftige Reports für verschiedene Stakeholder-Gruppen.\n• Continuous Improvement: Verwendung dokumentierter Daten für kontinuierliche Optimierung von KI-Systemen und Geschäftsprozessen.\n• Legal Protection: Schaffung rechtssicherer Dokumentation für potenzielle regulatorische Prüfungen und Haftungsschutz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gestaltet ADVISORI die praktische Implementierung von AI Governance Frameworks und welche organisatorischen Strukturen sind für nachhaltige EU AI Act Compliance erforderlich?",
        answer: "ADVISORI entwickelt maßgeschneiderte AI Governance Frameworks, die sich nahtlos in bestehende Unternehmensstrukturen integrieren und nachhaltige Compliance gewährleisten. Unser Ansatz schafft klare Verantwortlichkeiten, effiziente Prozesse und strategische Entscheidungsstrukturen für erfolgreiche KI-Governance.\n\n🏗️ Organizational Structure Design:\n• AI Governance Committee: Etablierung eines multidisziplinären Governance-Komitees mit Vertretern aus IT, Legal, Compliance, Business und Risikomanagement.\n• Chief AI Officer Role: Definition und Implementierung einer Chief AI Officer Position mit klaren Verantwortlichkeiten für strategische KI-Governance.\n• Cross-functional Teams: Aufbau spezialisierter Teams für verschiedene Governance-Aspekte wie Ethik, Risikomanagement und technische Compliance.\n• Escalation Hierarchies: Entwicklung klarer Eskalationswege für KI-bezogene Entscheidungen und Risikosituationen.\n\n📋 Process Framework Implementation:\n• AI Lifecycle Governance: Integration von Compliance-Checkpoints in alle Phasen des KI-Entwicklungslebenszyklus von Konzeption bis Deployment.\n• Decision-Making Protocols: Etablierung strukturierter Entscheidungsprozesse für KI-Investitionen, Risikobewertungen und Compliance-Maßnahmen.\n• Regular Review Cycles: Implementierung regelmäßiger Governance-Reviews mit definierten Metriken und Verbesserungsmaßnahmen.\n• Stakeholder Communication: Entwicklung systematischer Kommunikationsprozesse für verschiedene interne und externe Stakeholder-Gruppen.\n\n🎯 ADVISORI's Governance Excellence:\n• Cultural Integration: Einbettung von AI Governance Prinzipien in die Unternehmenskultur durch Training, Kommunikation und Incentive-Systeme.\n• Technology Integration: Implementierung von Governance-unterstützenden Technologien für automatisierte Compliance-Überwachung und Reporting.\n• Performance Measurement: Entwicklung von KPIs und Metriken zur Messung der Governance-Effektivität und kontinuierlichen Verbesserung.\n• External Alignment: Sicherstellung der Alignment mit externen Standards, Best Practices und regulatorischen Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche technischen Implementierungsschritte sind für EU AI Act konforme KI-Systeme erforderlich und wie unterstützt ADVISORI bei der praktischen Umsetzung?",
        answer: "ADVISORI bietet end-to-end technische Implementierungsunterstützung für EU AI Act konforme KI-Systeme. Unser systematischer Ansatz integriert Compliance-Anforderungen direkt in die technische Architektur und schafft nachhaltige, skalierbare Lösungen.\n\n⚙️ Technical Architecture Requirements:\n• Explainability Integration: Implementierung von Explainable AI Komponenten für nachvollziehbare Entscheidungsfindung und Transparenz-Anforderungen.\n• Bias Detection Systems: Integration automatisierter Bias-Detection und Fairness-Monitoring in KI-Pipelines für kontinuierliche Qualitätssicherung.\n• Human-in-the-Loop Systems: Entwicklung technischer Infrastrukturen für angemessene menschliche Aufsicht und Intervention-Möglichkeiten.\n• Data Governance Infrastructure: Implementierung robuster Datenmanagement-Systeme mit Lineage-Tracking und Qualitätskontrolle.\n\n🔧 ADVISORI's Technical Implementation:\n• Compliance-by-Design: Integration von EU AI Act Anforderungen in die Grundarchitektur von KI-Systemen von Beginn an.\n• Automated Compliance Monitoring: Entwicklung automatisierter Systeme zur kontinuierlichen Überwachung von Compliance-Metriken und Risikoindikatoren.\n• API-based Governance: Implementierung von Governance-APIs für nahtlose Integration in bestehende Entwicklungs- und Deployment-Prozesse.\n• Cloud-native Solutions: Entwicklung cloud-nativer Compliance-Lösungen für Skalierbarkeit und Flexibilität.\n\n🚀 Implementation Acceleration:\n• Rapid Prototyping: Schnelle Entwicklung von Compliance-Prototypen für Proof-of-Concept und Stakeholder-Buy-in.\n• Migration Strategies: Entwicklung effizienter Migrationsstrategien für bestehende KI-Systeme zur EU AI Act Konformität.\n• Testing Frameworks: Implementierung comprehensive Testing-Frameworks für Compliance-Validierung und kontinuierliche Qualitätssicherung.\n• DevOps Integration: Integration von Compliance-Checks in CI/CD-Pipelines für automatisierte Qualitätssicherung."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Implementation FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Implementation FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
