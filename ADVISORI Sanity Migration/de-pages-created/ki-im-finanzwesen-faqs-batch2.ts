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
    console.log('Updating KI im Finanzwesen page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-im-finanzwesen' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-im-finanzwesen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt ADVISORI robuste KI-Risikomanagement-Frameworks für Finanzinstitute und welche spezifischen Risiken werden durch AI-Systeme adressiert?',
        answer: "Risikomanagement im Finanzwesen wird durch KI fundamental transformiert, erfordert aber gleichzeitig neue Ansätze zur Kontrolle AI-spezifischer Risiken. ADVISORI entwickelt mehrdimensionale Risikomanagement-Frameworks, die sowohl traditionelle Finanzrisiken durch KI optimieren als auch neue AI-Risiken proaktiv managen.\n\n🛡️ Comprehensive AI Risk Management Architecture:\n• Model Risk Management: Entwicklung robuster Frameworks zur Überwachung von KI-Modellperformance, Bias-Detection und Drift-Monitoring für konsistente Entscheidungsqualität.\n• Operational AI Risk: Management von Risiken durch KI-Systemausfälle, Datenqualitätsprobleme und Algorithmus-Fehlfunktionen mit automatisierten Backup-Systemen.\n• Cyber Security für AI: Schutz von KI-Systemen vor Adversarial Attacks, Data Poisoning und Model Extraction durch spezialisierte Security-Frameworks.\n• Regulatory Risk Mitigation: Proaktive Compliance-Überwachung und automatische Anpassung an sich ändernde regulatorische Anforderungen.\n\n💰 AI-Enhanced Traditional Risk Management:\n• Credit Risk Intelligence: KI-gestützte Kreditrisikomodelle analysieren komplexe Datenpattern und alternative Datenquellen für präzisere Ausfallwahrscheinlichkeiten.\n• Market Risk Analytics: Real-time Marktrisikobewertung durch AI-Algorithmen, die Marktvolatilität und Korrelationen kontinuierlich analysieren und anpassen.\n• Liquidity Risk Optimization: Intelligente Liquiditätssteuerung durch predictive Analytics und Szenario-Modellierung für optimale Kapitalallokation.\n• Operational Risk Prevention: Proaktive Identifikation operationeller Risiken durch Pattern Recognition und Anomaly Detection in Geschäftsprozessen.\n\n🔍 ADVISORI Risk Governance Integration:\n• Risk Appetite Framework: Integration von AI-Risikotoleranz in bestehende Risk Appetite Statements mit klaren Limits und Eskalationsprozessen.\n• Three Lines of Defense: Anpassung traditioneller Risikokontrollstrukturen an AI-spezifische Anforderungen mit spezialisierten Kompetenzen.\n• Stress Testing für AI: Entwicklung von AI-Stress-Tests, die Modellverhalten unter extremen Marktbedingungen und Datenstörungen simulieren.\n• Risk Reporting Evolution: Transformation von Risikoreporting durch AI-gestützte Dashboards und predictive Risk Indicators für proaktive Entscheidungsfindung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche spezifischen Compliance-Herausforderungen entstehen durch KI im Finanzwesen und wie löst ADVISORI diese durch intelligente Governance-Strukturen?',
        answer: "KI im Finanzwesen schafft neue Compliance-Komplexitäten, die traditionelle Governance-Ansätze überfordern. ADVISORI entwickelt intelligente Compliance-Frameworks, die regulatorische Anforderungen automatisieren, Transparenz schaffen und gleichzeitig Innovation ermöglichen.\n\n📋 AI-Specific Compliance Challenges:\n• Algorithmic Transparency: Erfüllung von Erklärbarkeitsanforderungen für KI-Entscheidungen gegenüber Kunden, Aufsichtsbehörden und internen Stakeholdern.\n• Data Governance Complexity: Management komplexer Datenflüsse in KI-Systemen unter GDPR, BCBS und anderen Datenschutzregulierungen.\n• Model Validation Requirements: Entwicklung von Validierungsprozessen für KI-Modelle, die regulatorische Standards erfüllen und gleichzeitig Innovation ermöglichen.\n• Cross-Border Compliance: Navigation unterschiedlicher AI-Regulierungen in verschiedenen Jurisdiktionen für international tätige Finanzinstitute.\n\n🤖 Intelligent Compliance Automation:\n• Automated Regulatory Monitoring: KI-gestützte Systeme überwachen kontinuierlich regulatorische Entwicklungen und identifizieren Compliance-Impacts automatisch.\n• Smart Documentation: Intelligente Dokumentationssysteme erfassen KI-Entscheidungsprozesse automatisch für Audit-Zwecke und regulatorische Nachweise.\n• Dynamic Policy Enforcement: Adaptive Compliance-Systeme passen Geschäftsregeln automatisch an regulatorische Änderungen an ohne manuelle Intervention.\n• Predictive Compliance Risk: AI-Systeme identifizieren potenzielle Compliance-Verstöße bevor sie auftreten und ermöglichen präventive Maßnahmen.\n\n🏛️ ADVISORI Governance Excellence:\n• AI Ethics Integration: Entwicklung ethischer AI-Frameworks, die über regulatorische Mindestanforderungen hinausgehen und gesellschaftliche Verantwortung demonstrieren.\n• Stakeholder Transparency: Schaffung transparenter Kommunikationsstrukturen für Kunden, Investoren und Regulatoren über AI-Nutzung und -Kontrolle.\n• Continuous Compliance Evolution: Aufbau lernender Compliance-Systeme, die sich kontinuierlich an neue regulatorische Anforderungen anpassen.\n• Global Compliance Harmonization: Entwicklung einheitlicher Compliance-Standards für international tätige Finanzinstitute mit lokaler Anpassungsfähigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gewährleistet ADVISORI Datensicherheit und Datenschutz bei KI-Implementierungen im hochregulierten Finanzsektor?',
        answer: "Datensicherheit und Datenschutz sind fundamentale Erfolgsfaktoren für KI im Finanzwesen. ADVISORI implementiert mehrstufige Security-Architekturen, die höchste Sicherheitsstandards mit KI-Innovation vereinen und gleichzeitig regulatorische Compliance sicherstellen.\n\n🔐 Advanced AI Data Security Architecture:\n• Zero Trust AI Security: Implementierung von Zero Trust Prinzipien für KI-Systeme mit kontinuierlicher Authentifizierung und Autorisierung aller Datenflüsse.\n• Federated Learning Implementation: Entwicklung von Federated Learning Systemen, die KI-Training ohne zentrale Datenspeicherung ermöglichen und Privacy-by-Design realisieren.\n• Homomorphic Encryption: Einsatz fortschrittlicher Verschlüsselungstechnologien, die KI-Berechnungen auf verschlüsselten Daten ermöglichen ohne Entschlüsselung.\n• Differential Privacy: Integration von Differential Privacy Techniken in KI-Modelle zum Schutz individueller Kundendaten bei statistischen Analysen.\n\n🛡️ Comprehensive Data Protection Framework:\n• Data Minimization für AI: Implementierung intelligenter Datenminimierungsstrategien, die nur notwendige Daten für KI-Training und -Inferenz verwenden.\n• Secure Multi-Party Computation: Ermöglichung kollaborativer KI-Entwicklung zwischen Finanzinstituten ohne Preisgabe sensibler Daten.\n• AI Model Watermarking: Schutz proprietärer KI-Modelle durch digitale Wasserzeichen und Intellectual Property Protection.\n• Continuous Security Monitoring: Real-time Überwachung von KI-Systemen auf Security-Anomalien und potenzielle Datenlecks.\n\n🏦 Financial-Grade AI Security:\n• Regulatory Data Residency: Sicherstellung, dass KI-Datenverarbeitung geografische und regulatorische Anforderungen für Finanzinstitute erfüllt.\n• Audit Trail Completeness: Vollständige Nachverfolgbarkeit aller KI-Datenverarbeitungsschritte für regulatorische Audits und Compliance-Nachweise.\n• Incident Response für AI: Spezialisierte Incident Response Prozesse für AI-spezifische Security-Vorfälle mit schneller Schadensbegrenzung.\n• Third-Party AI Risk Management: Umfassende Due Diligence und kontinuierliche Überwachung von AI-Drittanbietern und Cloud-Services."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie strukturiert ADVISORI effektive AI-Governance-Committees und Entscheidungsprozesse für Finanzinstitute zur optimalen KI-Steuerung?',
        answer: "Effektive AI-Governance erfordert spezialisierte Organisationsstrukturen und Entscheidungsprozesse, die technische Expertise mit Geschäftsstrategie und regulatorischen Anforderungen vereinen. ADVISORI entwickelt maßgeschneiderte Governance-Architekturen, die KI-Innovation ermöglichen und gleichzeitig Risiken kontrollieren.\n\n🏛️ Strategic AI Governance Architecture:\n• AI Steering Committee: Etablierung hochrangiger AI-Steuerungskomitees mit C-Level-Beteiligung für strategische KI-Entscheidungen und Ressourcenallokation.\n• Cross-Functional AI Teams: Aufbau interdisziplinärer Teams aus IT, Risk, Compliance, Business und Legal für ganzheitliche KI-Governance.\n• AI Center of Excellence: Schaffung zentraler Kompetenzzentren für KI-Standards, Best Practices und organisationsweite KI-Koordination.\n• Specialized AI Roles: Definition neuer Rollen wie Chief AI Officer, AI Risk Manager und AI Ethics Officer für spezialisierte KI-Verantwortlichkeiten.\n\n⚖️ Intelligent Decision-Making Processes:\n• AI Investment Prioritization: Entwicklung systematischer Bewertungsprozesse für KI-Investitionen basierend auf Business Value, Risk und Strategic Fit.\n• Model Approval Workflows: Strukturierte Genehmigungsprozesse für KI-Modelle mit klaren Kriterien für Performance, Risk und Compliance.\n• AI Incident Escalation: Definierte Eskalationspfade für AI-spezifische Vorfälle mit schneller Entscheidungsfindung und Schadensbegrenzung.\n• Continuous Governance Evolution: Adaptive Governance-Prozesse, die sich an technologische Entwicklungen und regulatorische Änderungen anpassen.\n\n📊 ADVISORI Governance Excellence:\n• AI Performance Dashboards: Entwicklung umfassender KPI-Dashboards für AI-Performance, Risk und Business Impact zur datengestützten Entscheidungsfindung.\n• Stakeholder Communication: Strukturierte Kommunikationsprozesse für verschiedene Stakeholder-Gruppen mit angepassten Reporting-Formaten.\n• AI Governance Maturity Assessment: Regelmäßige Bewertung der AI-Governance-Reife mit Benchmarking und kontinuierlicher Verbesserung.\n• Change Management für AI: Spezialisierte Change Management Prozesse für AI-Transformationen mit Fokus auf Kulturwandel und Kompetenzaufbau."
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
