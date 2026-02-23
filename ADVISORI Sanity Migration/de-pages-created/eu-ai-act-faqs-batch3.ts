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
    console.log('Updating EU AI Act page with Risk Management FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act" not found')
    }
    
    // Create new Risk Management FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI umfassende Risikomanagement-Strategien für EU AI Act Compliance und welche Methoden werden zur kontinuierlichen Risikoüberwachung eingesetzt?",
        answer: "ADVISORI implementiert ganzheitliche Risikomanagement-Frameworks, die alle EU AI Act Risikokategorien systematisch adressieren und kontinuierliche Überwachung gewährleisten. Unser proaktiver Ansatz identifiziert Risiken frühzeitig und entwickelt effektive Mitigation-Strategien für nachhaltige Compliance.\n\n🎯 Comprehensive Risk Assessment Framework:\n• Multi-dimensional Risk Analysis: Bewertung von KI-Risiken aus technischer, rechtlicher, ethischer und geschäftlicher Perspektive für vollständige Risikoabdeckung.\n• Stakeholder Impact Mapping: Systematische Analyse der Auswirkungen von KI-Entscheidungen auf verschiedene Stakeholder-Gruppen und deren Risikotoleranz.\n• Scenario-based Risk Modeling: Entwicklung verschiedener Risikoszenarien und deren potenzielle Auswirkungen auf Geschäftsprozesse und Compliance-Status.\n• Dynamic Risk Profiling: Kontinuierliche Anpassung von Risikoprofilen basierend auf sich ändernden Geschäftsanforderungen und regulatorischen Entwicklungen.\n\n🔍 Advanced Risk Monitoring Systems:\n• Real-time Risk Dashboards: Implementierung automatisierter Monitoring-Systeme, die kontinuierlich Risikoindikatoren überwachen und Alerts generieren.\n• Predictive Risk Analytics: Nutzung fortschrittlicher Analytics zur Vorhersage potenzieller Risikosituationen und proaktiven Intervention.\n• Cross-system Risk Correlation: Integration verschiedener Datenquellen zur Identifikation komplexer Risikomuster und Abhängigkeiten.\n• Automated Compliance Checking: Kontinuierliche Überprüfung der Compliance-Konformität mit automatisierten Alerts bei Abweichungen.\n\n🛡️ ADVISORI's Risk Mitigation Excellence:\n• Layered Defense Strategy: Implementierung mehrschichtiger Risikominimierung mit redundanten Sicherheitsmaßnahmen und Fallback-Mechanismen.\n• Adaptive Risk Response: Entwicklung flexibler Reaktionsstrategien, die sich automatisch an veränderte Risikosituationen anpassen.\n• Stakeholder Risk Communication: Etablierung klarer Kommunikationsprozesse für Risikoinformationen an verschiedene interne und externe Stakeholder.\n• Continuous Risk Learning: Integration von Lessons Learned aus Risikosituationen in die kontinuierliche Verbesserung der Risikomanagement-Prozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen Maßnahmen implementiert ADVISORI zur Gewährleistung von Fairness und Bias-Vermeidung in KI-Systemen gemäß EU AI Act Anforderungen?",
        answer: "ADVISORI entwickelt comprehensive Fairness-Frameworks, die systematische Bias-Detection und -Mitigation in allen KI-Systemen gewährleisten. Unser multidimensionaler Ansatz adressiert verschiedene Bias-Arten und schafft nachweisbar faire KI-Entscheidungen für alle Stakeholder-Gruppen.\n\n⚖️ Multi-dimensional Fairness Assessment:\n• Statistical Fairness Metrics: Implementierung verschiedener statistischer Fairness-Metriken wie Demographic Parity, Equal Opportunity und Calibration für comprehensive Bias-Bewertung.\n• Intersectional Bias Analysis: Untersuchung von Bias-Effekten an der Schnittstelle verschiedener demografischer Gruppen für ganzheitliche Fairness-Bewertung.\n• Contextual Fairness Evaluation: Bewertung von Fairness im spezifischen Anwendungskontext unter Berücksichtigung kultureller und gesellschaftlicher Faktoren.\n• Temporal Fairness Monitoring: Kontinuierliche Überwachung von Fairness-Metriken über Zeit zur Identifikation sich entwickelnder Bias-Muster.\n\n🔧 Advanced Bias Mitigation Techniques:\n• Pre-processing Bias Correction: Implementierung von Datenbereinigungsverfahren zur Reduzierung von Bias in Trainingsdaten vor Modellentwicklung.\n• In-processing Fairness Constraints: Integration von Fairness-Constraints direkt in den Modelltraining-Prozess für inhärent faire Algorithmen.\n• Post-processing Calibration: Anpassung von Modelloutputs zur Gewährleistung fairer Ergebnisse für verschiedene demografische Gruppen.\n• Adversarial Debiasing: Nutzung adversarialer Techniken zur Reduzierung von Bias durch gegensätzliche Netzwerkarchitekturen.\n\n📊 ADVISORI's Fairness Governance:\n• Fairness Impact Assessments: Systematische Bewertung der Fairness-Auswirkungen neuer KI-Systeme vor Deployment mit detaillierter Dokumentation.\n• Diverse Stakeholder Involvement: Einbindung verschiedener Stakeholder-Gruppen in Fairness-Bewertungen für umfassende Perspektiven.\n• Continuous Fairness Auditing: Regelmäßige externe Fairness-Audits durch unabhängige Experten zur Validierung interner Bewertungen.\n• Fairness Training Programs: Entwicklung spezialisierter Trainingsprogramme für Mitarbeiter zur Sensibilisierung für Bias und Fairness-Themen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie stellt ADVISORI die Implementierung angemessener menschlicher Aufsicht bei hochriskanten KI-Systemen sicher und welche Human-in-the-Loop-Mechanismen werden etabliert?",
        answer: "ADVISORI entwickelt sophisticated Human-in-the-Loop-Systeme, die angemessene menschliche Aufsicht bei kritischen KI-Entscheidungen gewährleisten. Unser Ansatz balanciert Automatisierungseffizienz mit menschlicher Kontrolle und schafft nachweisbare Oversight-Mechanismen für EU AI Act Compliance.\n\n👥 Human Oversight Architecture Design:\n• Meaningful Human Control: Implementierung von Systemen, die echte menschliche Kontrolle über KI-Entscheidungen ermöglichen, nicht nur oberflächliche Überwachung.\n• Risk-proportionate Oversight: Anpassung der Intensität menschlicher Aufsicht an das Risikolevel der jeweiligen KI-Anwendung und deren potenzielle Auswirkungen.\n• Expert Human Reviewers: Etablierung spezialisierter Reviewer-Teams mit domain-spezifischer Expertise für qualifizierte Entscheidungsüberwachung.\n• Escalation Trigger Systems: Automatische Eskalation kritischer Entscheidungen an menschliche Experten basierend auf vordefinierten Risikoschwellen.\n\n🔄 Interactive Decision Support Systems:\n• Explainable Decision Interfaces: Entwicklung benutzerfreundlicher Interfaces, die KI-Entscheidungen verständlich visualisieren und Interventionsmöglichkeiten bieten.\n• Real-time Intervention Capabilities: Implementierung von Systemen, die sofortige menschliche Intervention bei kritischen Entscheidungen ermöglichen.\n• Decision Confidence Scoring: Bereitstellung von Confidence-Scores für KI-Entscheidungen zur Unterstützung menschlicher Oversight-Entscheidungen.\n• Alternative Recommendation Systems: Präsentation alternativer Entscheidungsoptionen für menschliche Reviewer zur informierten Auswahl.\n\n🎯 ADVISORI's Oversight Excellence:\n• Competency-based Oversight: Sicherstellung, dass menschliche Reviewer über angemessene Qualifikationen und Training für ihre Oversight-Rolle verfügen.\n• Oversight Performance Monitoring: Kontinuierliche Bewertung der Effektivität menschlicher Aufsicht mit Metriken und Verbesserungsmaßnahmen.\n• Cognitive Load Management: Design von Oversight-Systemen, die kognitive Belastung minimieren und Entscheidungsqualität maximieren.\n• Accountability Documentation: Comprehensive Dokumentation aller menschlichen Oversight-Entscheidungen für Audit-Zwecke und Verantwortlichkeitsnachweis."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Strategien entwickelt ADVISORI für das Management von KI-Supply-Chain-Risiken und wie wird Compliance bei Third-Party-KI-Systemen sichergestellt?",
        answer: "ADVISORI implementiert comprehensive Supply-Chain-Governance für KI-Systeme, die alle Third-Party-Risiken systematisch adressiert und End-to-End-Compliance gewährleistet. Unser ganzheitlicher Ansatz schafft Transparenz und Kontrolle über die gesamte KI-Wertschöpfungskette.\n\n🔗 KI-Supply-Chain-Mapping und Assessment:\n• Comprehensive Vendor Assessment: Detaillierte Bewertung aller KI-Anbieter hinsichtlich ihrer EU AI Act Compliance-Fähigkeiten und Risikoprofile.\n• Technology Stack Analysis: Vollständige Analyse der verwendeten KI-Technologien, Algorithmen und Datenquellen in Third-Party-Systemen.\n• Dependency Risk Mapping: Identifikation und Bewertung aller Abhängigkeiten in der KI-Supply-Chain mit Risikobewertung und Mitigation-Strategien.\n• Vendor Compliance Certification: Etablierung von Zertifizierungsprozessen für KI-Anbieter zur Sicherstellung ihrer EU AI Act Konformität.\n\n📋 Third-Party-Governance-Framework:\n• Contractual Compliance Requirements: Integration spezifischer EU AI Act Compliance-Anforderungen in alle Vendor-Verträge mit klaren SLAs und Penalties.\n• Regular Vendor Audits: Implementierung regelmäßiger Compliance-Audits bei kritischen KI-Anbietern mit standardisierten Bewertungskriterien.\n• Shared Responsibility Models: Entwicklung klarer Verantwortungsmatrizen zwischen Ihrem Unternehmen und KI-Anbietern für verschiedene Compliance-Aspekte.\n• Vendor Risk Monitoring: Kontinuierliche Überwachung der Compliance-Performance von KI-Anbietern mit automatisierten Alerts bei Abweichungen.\n\n🛡️ ADVISORI's Supply-Chain-Security:\n• Multi-tier Risk Assessment: Bewertung von Risiken nicht nur bei direkten Anbietern, sondern auch bei deren Sub-Contractors und der gesamten Supply-Chain.\n• Alternative Vendor Strategies: Entwicklung von Backup-Strategien und alternativen Anbietern zur Risikominimierung bei Supply-Chain-Disruptions.\n• Data Flow Governance: Comprehensive Kontrolle und Monitoring aller Datenflüsse zwischen Ihrem Unternehmen und Third-Party-KI-Systemen.\n• Incident Response Coordination: Etablierung koordinierter Incident-Response-Prozesse mit KI-Anbietern für schnelle Reaktion auf Compliance-Vorfälle."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Risk Management FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Risk Management FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
