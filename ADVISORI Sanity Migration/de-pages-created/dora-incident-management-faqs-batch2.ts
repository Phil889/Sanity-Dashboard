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
    console.log('Updating DORA Incident Management page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-incident-management' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-incident-management" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt man ein DORA-konformes Regulatory Reporting System für ICT-Incidents, das sowohl Compliance-Anforderungen erfüllt als auch operative Effizienz gewährleistet?',
        answer: "Ein DORA-konformes Regulatory Reporting System für ICT-Incidents erfordert eine strategische Balance zwischen regulatorischer Compliance und operativer Praktikabilität. Das System muss automatisierte Datensammlung, präzise Klassifizierung und zeitnahe Berichterstattung ermöglichen, während es gleichzeitig die Belastung für operative Teams minimiert und konsistente, qualitativ hochwertige Berichte gewährleistet.\n\n🔍 Strategische Reporting Architecture:\n• Automated Data Collection Framework: Entwicklung eines umfassenden Data Collection Frameworks, das automatisch relevante Incident Daten aus verschiedenen Quellen sammelt, einschließlich Monitoring Tools, ITSM Systemen, Security Information und Event Management Plattformen.\n• DORA-konforme Reporting Templates: Erstellung standardisierter Reporting Templates, die alle DORA-spezifischen Datenfelder und Anforderungen abdecken, einschließlich Incident Classification, Impact Assessment, Timeline Documentation und Remediation Actions.\n• Real-time Compliance Monitoring: Implementation von Real-time Monitoring Systemen, die kontinuierlich die Compliance mit DORA Reporting Anforderungen überwachen und automatische Alerts bei potenziellen Compliance Gaps generieren.\n• Multi-stakeholder Integration: Nahtlose Integration verschiedener Stakeholder und Datenquellen, um eine ganzheitliche und akkurate Incident Dokumentation zu gewährleisten.\n\n📊 Intelligente Reporting Automation:\n• Smart Classification Engines: Entwicklung intelligenter Classification Engines, die Machine Learning und Natural Language Processing nutzen, um Incidents automatisch zu kategorisieren und relevante Reporting Kriterien zu identifizieren.\n• Dynamic Report Generation: Implementation von Dynamic Report Generation Systemen, die basierend auf Incident Characteristics und Regulatory Requirements automatisch angepasste Berichte erstellen.\n• Quality Assurance Automation: Automatisierte Quality Assurance Prozesse, die Reporting Accuracy, Completeness und Consistency überprüfen, bevor Berichte an Regulatoren übermittelt werden.\n• Timeline Management Automation: Automatisierte Timeline Management Systeme, die Reporting Deadlines überwachen und proaktive Alerts und Reminders für anstehende Submissions bereitstellen.\n\n🔄 Operative Integration und Continuous Improvement:\n• Workflow Integration: Nahtlose Integration des Reporting Systems in bestehende Incident Response Workflows, um sicherzustellen, dass Reporting Activities den operativen Response nicht behindern.\n• Stakeholder Communication: Automatisierte Stakeholder Communication Systeme, die relevante interne und externe Stakeholder über Incident Status und Reporting Activities informieren.\n• Performance Analytics: Umfassende Performance Analytics, die Reporting Efficiency, Accuracy und Timeliness messen und Verbesserungsmöglichkeiten identifizieren.\n• Regulatory Change Management: Proaktive Monitoring und Integration von regulatorischen Änderungen und Updates in das Reporting System, um kontinuierliche Compliance zu gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Best Practices sollten bei der Integration von Business Continuity Planning in das DORA Incident Management Framework beachtet werden?',
        answer: "Die Integration von Business Continuity Planning in das DORA Incident Management Framework erfordert einen ganzheitlichen Ansatz, der operative Resilienz, regulatorische Compliance und Geschäftskontinuität nahtlos verbindet. Erfolgreiche Integration gewährleistet, dass Incident Response nicht nur technische Probleme löst, sondern auch die Kontinuität kritischer Geschäftsprozesse aufrechterhält.\n\n🎯 Strategische Integration Architecture:\n• Business Impact Assessment Integration: Systematische Integration von Business Impact Assessments in Incident Classification Prozesse, um sicherzustellen, dass Business Continuity Considerations von Anfang an in Incident Response Entscheidungen einbezogen werden.\n• Critical Service Identification: Klare Identifikation und Priorisierung kritischer Geschäftsservices und deren Abhängigkeiten von ICT-Systemen, um gezielten Schutz und prioritäre Recovery zu ermöglichen.\n• Recovery Time Objective Alignment: Alignment von Incident Response Zielen mit Business Continuity Recovery Time Objectives und Recovery Point Objectives, um konsistente und geschäftsgerechte Response Strategien zu gewährleisten.\n• Cross-functional Team Integration: Integration von Business Continuity Teams in Incident Response Strukturen, um sicherzustellen, dass geschäftliche Perspektiven und Anforderungen in technische Response Entscheidungen einfließen.\n\n📋 Operative Integration Mechanismen:\n• Automated BCP Activation: Entwicklung automatisierter Business Continuity Plan Activation Mechanismen, die basierend auf Incident Severity und Business Impact automatisch relevante Continuity Maßnahmen initiieren.\n• Alternative Service Arrangements: Proaktive Planung und Integration von Alternative Service Arrangements und Backup Systemen in Incident Response Playbooks, um schnelle Aktivierung bei kritischen Incidents zu ermöglichen.\n• Stakeholder Communication Integration: Nahtlose Integration von Business Continuity Communication Plänen in Incident Communication Strategien, um konsistente und koordinierte Stakeholder Information zu gewährleisten.\n• Resource Coordination: Effektive Koordination zwischen Incident Response Resources und Business Continuity Resources, um Ressourcenkonflikte zu vermeiden und optimale Nutzung zu gewährleisten.\n\n🔄 Continuous Testing und Improvement:\n• Integrated Testing Scenarios: Entwicklung integrierter Testing Scenarios, die sowohl Incident Response als auch Business Continuity Capabilities unter realistischen Bedingungen testen und validieren.\n• Cross-functional Exercises: Regelmäßige Durchführung cross-funktionaler Exercises, die Incident Response Teams und Business Continuity Teams gemeinsam herausfordern und Koordination verbessern.\n• Performance Metrics Integration: Integration von Business Continuity Metrics in Incident Response Performance Measurement, um ganzheitliche Bewertung der Response Effectiveness zu ermöglichen.\n• Lessons Learned Integration: Systematische Integration von Lessons Learned aus Business Continuity Aktivationen in Incident Response Improvement Prozesse und umgekehrt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie kann man Post-Incident Analysis und Lessons Learned Prozesse optimieren, um kontinuierliche Verbesserung der DORA Incident Management Capabilities zu gewährleisten?',
        answer: "Optimierte Post-Incident Analysis und Lessons Learned Prozesse sind entscheidend für die kontinuierliche Verbesserung der DORA Incident Management Capabilities. Sie transformieren jede Incident Response Erfahrung in wertvolle Lernmöglichkeiten und treiben systematische Verbesserungen in Prozessen, Technologien und organisatorischen Fähigkeiten voran.\n\n🔍 Systematische Analysis Framework:\n• Structured Root Cause Analysis: Implementation strukturierter Root Cause Analysis Methodologien, die systematisch technische, prozessuale und organisatorische Faktoren untersuchen, die zu Incidents beigetragen haben.\n• Multi-perspective Analysis: Durchführung multi-perspektivischer Analysen, die technische, geschäftliche, regulatorische und Stakeholder Perspektiven integrieren, um ganzheitliche Insights zu gewinnen.\n• Timeline Reconstruction: Detaillierte Timeline Reconstruction von Incident Detection, Response und Recovery Aktivitäten, um Verbesserungsmöglichkeiten in jedem Phase zu identifizieren.\n• Impact Assessment Deep Dive: Umfassende Bewertung der tatsächlichen vs. potenziellen Impacts von Incidents, einschließlich finanzieller, operativer, regulatorischer und reputationeller Auswirkungen.\n\n📊 Intelligente Lessons Learned Capture:\n• Automated Data Collection: Automatisierte Sammlung relevanter Daten und Metriken während der Incident Response, um objektive Basis für Post-Incident Analysis zu schaffen.\n• Stakeholder Interview Frameworks: Strukturierte Interview Frameworks für alle beteiligten Stakeholder, um subjektive Erfahrungen, Herausforderungen und Verbesserungsvorschläge systematisch zu erfassen.\n• Pattern Recognition Analytics: Nutzung von Analytics und Pattern Recognition, um wiederkehrende Themes, Trends und systemic Issues über mehrere Incidents hinweg zu identifizieren.\n• Best Practice Identification: Systematische Identifikation und Dokumentation von Best Practices und erfolgreichen Approaches, die während der Incident Response angewendet wurden.\n\n🔄 Continuous Improvement Implementation:\n• Action Item Tracking: Robuste Action Item Tracking Systeme, die sicherstellen, dass identifizierte Verbesserungsmaßnahmen systematisch implementiert und deren Effectiveness überwacht wird.\n• Process Optimization Integration: Nahtlose Integration von Lessons Learned in kontinuierliche Process Optimization Initiativen, um sicherzustellen, dass Learnings in operative Verbesserungen umgesetzt werden.\n• Knowledge Management Systems: Umfassende Knowledge Management Systeme, die Lessons Learned organisieren, kategorisieren und für zukünftige Incident Response Teams zugänglich machen.\n• Training Integration: Integration von Lessons Learned in Training und Development Programme, um organisatorisches Learning zu institutionalisieren und Capability Building zu unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Technologie-Lösungen und Tools sind essentiell für ein effektives DORA Incident Management Framework und wie sollten sie integriert werden?',
        answer: "Effektive Technologie-Lösungen sind das Rückgrat eines erfolgreichen DORA Incident Management Frameworks. Sie ermöglichen automatisierte Detection, koordinierte Response und umfassende Dokumentation, während sie gleichzeitig die Komplexität für operative Teams reduzieren und konsistente, skalierbare Incident Management Capabilities bereitstellen.\n\n🔍 Core Technology Stack Architecture:\n• Security Information und Event Management: Implementation umfassender SIEM Lösungen, die Real-time Event Correlation, Threat Detection und Automated Alerting bereitstellen, integriert mit Machine Learning Capabilities für Advanced Threat Detection.\n• IT Service Management Platforms: Robuste ITSM Plattformen, die Incident Lifecycle Management, Workflow Automation, Stakeholder Communication und Integration mit anderen IT Operations Tools ermöglichen.\n• Orchestration und Automation Platforms: Security Orchestration, Automation und Response Plattformen, die Incident Response Workflows automatisieren, Playbook Execution ermöglichen und Cross-tool Integration bereitstellen.\n• Communication und Collaboration Tools: Moderne Communication Plattformen, die Real-time Collaboration, Crisis Communication, Stakeholder Updates und Integration mit Incident Management Workflows unterstützen.\n\n📊 Advanced Analytics und Intelligence:\n• Threat Intelligence Platforms: Integration von Threat Intelligence Feeds und Platforms, die Contextual Information über emerging Threats, Attack Patterns und Indicators of Compromise bereitstellen.\n• Behavioral Analytics Engines: Advanced Behavioral Analytics Systeme, die User und Entity Behavior Analysis durchführen, um Anomalien und potenzielle Incidents zu identifizieren.\n• Predictive Analytics Tools: Predictive Analytics Capabilities, die Historical Data und Machine Learning nutzen, um potenzielle Incidents vorherzusagen und proaktive Maßnahmen zu ermöglichen.\n• Performance Monitoring und Dashboards: Comprehensive Performance Monitoring Tools mit Real-time Dashboards, die Incident Metrics, Response Performance und Compliance Status visualisieren.\n\n🔄 Integration und Interoperability:\n• API-first Architecture: Entwicklung einer API-first Architecture, die nahtlose Integration zwischen verschiedenen Tools und Systemen ermöglicht und Vendor Lock-in vermeidet.\n• Data Lake Integration: Implementation von Data Lake Lösungen, die alle Incident-relevanten Daten zentralisieren und Advanced Analytics sowie Reporting ermöglichen.\n• Cloud-native Solutions: Nutzung Cloud-native Lösungen, die Skalierbarkeit, Flexibilität und Integration mit modernen DevOps und SecOps Practices bieten.\n• Compliance Automation Tools: Spezialisierte Compliance Automation Tools, die DORA-spezifische Reporting Anforderungen automatisieren und Regulatory Change Management unterstützen."
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
