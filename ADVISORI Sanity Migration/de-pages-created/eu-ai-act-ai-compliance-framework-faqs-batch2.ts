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
    console.log('Updating EU AI Act AI Compliance Framework page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ai-compliance-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ai-compliance-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie orchestriert die C-Suite eine effektive AI Governance-Struktur, die verschiedene Stakeholder (Legal, IT, Business, Ethics) kohärent integriert, und welche Rolle spielt ADVISORI dabei?",
        answer: "Eine erfolgreiche AI Governance erfordert die nahtlose Integration verschiedener Fachbereiche in eine kohärente, entscheidungsfähige Struktur. Für die C-Suite ist es entscheidend, Silos aufzubrechen und interdisziplinäre Collaboration zu fördern, die sowohl technische Exzellenz als auch ethische Verantwortung sicherstellt. ADVISORI entwickelt maßgeschneiderte Governance-Architekturen, die diverse Stakeholder-Perspektiven in effiziente Entscheidungsprozesse integrieren.\n\n🎯 Strategische Governance-Orchestrierung:\n• Cross-functional AI Steering Committee: Etablierung eines hochrangigen Gremiums mit Vertretern aus allen relevanten Bereichen, das strategische AI-Entscheidungen trifft und Ressourcen allokiert.\n• Clear Decision Rights & Accountability: Definition klarer Entscheidungsautoritäten und Verantwortlichkeiten für verschiedene AI-bezogene Entscheidungen (Investment, Deployment, Risk Acceptance).\n• Escalation & Conflict Resolution Mechanisms: Strukturierte Prozesse für die Lösung von Konflikten zwischen verschiedenen Stakeholder-Perspektiven (z.B. Business Opportunity vs. Ethical Concerns).\n• Performance Metrics Alignment: Entwicklung von KPIs, die alle Stakeholder auf gemeinsame AI Governance-Ziele ausrichten und Incentives schaffen.\n\n🛡️ ADVISORI's Governance Integration Approach:\n• Stakeholder Mapping & Influence Analysis: Systematische Analyse aller relevanten Stakeholder, ihrer Interessen, Befugnisse und Interdependenzen.\n• Operating Model Design: Entwicklung effizienter Governance-Strukturen mit klaren Rollen, Verantwortlichkeiten und Interaktionsmustern zwischen den Bereichen.\n• Communication & Collaboration Frameworks: Etablierung von Kommunikationsprotokollen und Collaboration-Tools, die effektive Zusammenarbeit zwischen technischen und nicht-technischen Stakeholdern ermöglichen.\n• Cultural Change Management: Begleitung des kulturellen Wandels hin zu einer integrierten, ethisch bewussten AI-Organisation.\n• Training & Capability Building: Befähigung aller Stakeholder, ihre Rolle in der AI Governance effektiv wahrzunehmen und konstruktiv zu den Entscheidungsprozessen beizutragen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche konkreten Governance-Mechanismen implementiert ADVISORI, um High-Risk AI Systeme gemäß EU AI Act zu überwachen und zu kontrollieren, ohne Innovation zu behindern?",
        answer: "Die Überwachung und Kontrolle von High-Risk AI Systemen erfordert präzise Balance zwischen rigoroser Compliance und Innovationsfreiheit. ADVISORI entwickelt intelligente Governance-Mechanismen, die automatisierte Überwachung mit human-in-the-loop Kontrollen kombinieren und dabei die Entwicklungsgeschwindigkeit neuer AI-Systeme optimieren.\n\n🔍 Smart Monitoring & Control Frameworks:\n• Risk-based Monitoring Intensity: Adaptive Überwachungsstrategien, die Monitoring-Intensität proportional zum Risikoprofil des AI-Systems skalieren.\n• Automated Compliance Checking: KI-gestützte Tools, die kontinuierlich Compliance-Status überwachen und automatisch Anomalien oder Abweichungen identifizieren.\n• Real-time Performance Dashboards: Executive Dashboards, die C-Level Führungskräften Echtzeit-Einblicke in AI System Performance und Compliance-Status bieten.\n• Predictive Risk Analytics: Nutzung von Machine Learning zur frühzeitigen Identifikation potenzieller Compliance-Risiken und proaktiven Intervention.\n\n⚖️ Innovation-friendly Control Mechanisms:\n• Graduated Approval Processes: Etablierung verschiedener Approval-Pfade je nach Risikoprofil – von Express-Lanes für Low-Risk Innovationen bis zu umfassenden Reviews für High-Risk Systems.\n• Pre-approved AI Pattern Libraries: Entwicklung von vorgenehmigten AI-Architekturen und -Patterns, die Entwicklungsteams schnell und sicher nutzen können.\n• Sandbox Environments: Sichere Testumgebungen für innovative AI-Experimente mit reduzierten Compliance-Anforderungen.\n• Agile Compliance Frameworks: Integration von Compliance-Checks in agile Entwicklungsprozesse ohne Verlangsamung der Sprint-Zyklen.\n• Exception Management Processes: Strukturierte Verfahren für schnelle Entscheidungen bei innovativen AI-Anwendungen, die nicht in bestehende Frameworks passen.\n• Continuous Learning Integration: Mechanismen zur kontinuierlichen Verbesserung der Governance-Prozesse basierend auf Learnings aus neuen AI-Implementierungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Die EU AI Act fordert umfassende Dokumentation und Audit-Trails. Wie strukturiert ADVISORI effiziente Dokumentationsprozesse, die sowohl compliant als auch operativ praktikabel sind?",
        answer: "Umfassende Dokumentation ist eine Kernkomponente der EU AI Act Compliance, kann aber schnell zu bürokratischen Hindernissen werden. ADVISORI entwickelt intelligente Dokumentationsframeworks, die Compliance-Anforderungen erfüllen, dabei aber durch Automatisierung und intelligente Prozessgestaltung die operative Belastung minimieren und gleichzeitig strategischen Wert schaffen.\n\n📋 Intelligent Documentation Architecture:\n• Automated Documentation Generation: Entwicklung von Tools, die Dokumentation automatisch aus Entwicklungsprozessen, Code-Repositories und Monitoring-Systemen generieren.\n• Living Documentation Platforms: Dynamische Dokumentationssysteme, die sich automatisch mit Systemänderungen aktualisieren und stets aktuelle Compliance-Nachweise bieten.\n• Risk-proportionate Documentation: Skalierung des Dokumentationsaufwands proportional zum Risikoprofil des AI-Systems – minimale Dokumentation für Low-Risk, umfassende für High-Risk Systems.\n• Template-based Compliance Frameworks: Standardisierte Templates und Checklisten, die Teams durch den Dokumentationsprozess führen und Konsistenz sicherstellen.\n\n🔄 Operational Excellence in Documentation:\n• Integration in Development Workflows: Nahtlose Integration von Dokumentationsanforderungen in bestehende DevOps- und MLOps-Pipelines.\n• Version Control & Change Management: Robuste Versionskontrolle für alle AI-bezogenen Dokumente mit klaren Change-Management-Prozessen.\n• Audit-ready Documentation Architecture: Strukturierung der Dokumentation für effiziente externe Audits und Regulatory Inspections.\n• Cross-reference & Traceability Systems: Entwicklung von Systemen, die automatisch Verbindungen zwischen verschiedenen Dokumenten und Systemkomponenten tracken.\n• Stakeholder-specific Documentation Views: Aufbereitung der gleichen Informationen in verschiedenen Formaten für verschiedene Zielgruppen (Technical, Legal, Executive).\n• Documentation Quality Assurance: Etablierung von Qualitätssicherungsprozessen, die Vollständigkeit, Akkuratesse und Relevanz der Dokumentation sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie bereitet ADVISORI Unternehmen strategisch auf AI Audits und Regulatory Inspections vor und welche präventiven Maßnahmen minimieren Audit-Risiken effektiv?",
        answer: "Die Vorbereitung auf AI Audits und Regulatory Inspections erfordert eine proaktive, ganzheitliche Strategie, die weit über technische Compliance hinausgeht. ADVISORI entwickelt comprehensive Audit-Readiness-Programme, die nicht nur Compliance sicherstellen, sondern Audits zu Gelegenheiten für kontinuierliche Verbesserung und Stakeholder-Vertrauen transformieren.\n\n🎯 Strategic Audit Preparation:\n• Audit Simulation Exercises: Regelmäßige interne Audits und Mock-Inspections, die Teams auf echte Regulatory Reviews vorbereiten und Schwachstellen frühzeitig identifizieren.\n• Regulatory Relationship Management: Aufbau konstruktiver Beziehungen zu Regulatoren durch proaktive Kommunikation und Thought Leadership.\n• Evidence Management Systems: Strukturierte Sammlung und Organisation aller compliance-relevanten Evidenzen in audit-ready Formaten.\n• Cross-functional Audit Teams: Training interdisziplinärer Teams, die während Audits kohärent und professionell auftreten können.\n\n🛡️ Proactive Risk Mitigation Strategies:\n• Continuous Compliance Monitoring: Implementierung von Systemen zur kontinuierlichen Überwachung der Compliance-Status aller AI-Systeme.\n• Issue Identification & Remediation: Etablierung von Prozessen zur frühzeitigen Identifikation potenzieller Compliance-Issues und deren proaktiven Behebung.\n• Legal & Regulatory Intelligence: Kontinuierliche Überwachung regulatorischer Entwicklungen und proaktive Anpassung der Compliance-Strategie.\n• Third-party Validation: Regelmäßige externe Assessments durch unabhängige Experten zur objektiven Bewertung der Compliance-Posture.\n• Crisis Communication Preparedness: Vorbereitung von Kommunikationsstrategien für den Fall kritischer Audit-Findings oder öffentlicher Scrutiny.\n• Continuous Improvement Integration: Nutzung von Audit-Learnings für die kontinuierliche Verbesserung der AI Governance und Compliance-Prozesse."
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
