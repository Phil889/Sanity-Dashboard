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
    console.log('Updating SIEM Lösungen page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-loesungen' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-loesungen" not found')
    }
    
    // Create new FAQs for SIEM implementation and integration
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie gestaltet man eine erfolgreiche SIEM Implementation und welche kritischen Erfolgsfaktoren sind zu beachten?',
        answer: "Eine erfolgreiche SIEM Implementation erfordert eine systematische Herangehensweise, die technische Exzellenz mit organisatorischem Change Management verbindet. Der Schlüssel liegt in der sorgfältigen Planung, schrittweisen Umsetzung und kontinuierlichen Optimierung, um sowohl technische als auch geschäftliche Ziele zu erreichen.\n\n📋 Strategische Implementierungs-Planung:\n• Umfassende Stakeholder-Analyse und Erwartungsmanagement für alle beteiligten Parteien\n• Definition klarer Projektziele und messbarer Success Criteria für jede Implementierungsphase\n• Entwicklung einer detaillierten Projektroadmap mit realistischen Zeitplänen und Meilensteinen\n• Risk Assessment und Mitigation-Strategien für potenzielle Implementierungs-Herausforderungen\n• Resource Planning und Budget-Allokation für alle Projektphasen und Aktivitäten\n\n🏗️ Technische Implementierungs-Strategie:\n• Phased Rollout Ansatz beginnend mit kritischen Use Cases und schrittweiser Erweiterung\n• Proof-of-Concept Validierung für komplexe Integrationen und Custom Entwicklungen\n• Data Source Priorisierung basierend auf Sicherheitsrelevanz und Business Impact\n• Performance Testing und Capacity Planning für erwartete Datenvolumen und User-Load\n• Backup und Recovery Strategien für Business Continuity während der Implementation\n\n👥 Organisatorisches Change Management:\n• Frühe Einbindung der End-User und kontinuierliche Kommunikation über Projektfortschritte\n• Entwicklung von Training-Programmen für verschiedene User-Gruppen und Skill-Level\n• Etablierung von Champions und Super-Users für organisatorische Unterstützung\n• Definition neuer Prozesse und Workflows für SIEM-basierte Security Operations\n• Cultural Change Initiativen für die Adoption einer datengetriebenen Sicherheitskultur\n\n🔧 Integration und Datenmanagement:\n• Systematische Integration bestehender Security Tools und IT-Management-Systeme\n• Data Quality Assurance und Normalization für konsistente Analytics und Reporting\n• Log Source Configuration und Optimization für optimale Datensammlung\n• Custom Parser Development für spezifische Datenquellen und Formate\n• API Integration für Real-time Data Feeds und External Intelligence Sources\n\n📊 Testing und Validierung:\n• Umfassende Functional Testing für alle implementierten Use Cases und Workflows\n• Performance Testing unter realistischen Produktions-Bedingungen\n• Security Testing für die SIEM-Infrastruktur selbst und deren Schutz\n• User Acceptance Testing mit echten End-Users und realistischen Szenarien\n• Disaster Recovery Testing für Business Continuity Validation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Herausforderungen entstehen bei der Integration von SIEM Lösungen in komplexe IT-Landschaften und wie löst man diese?',
        answer: "Die Integration von SIEM Lösungen in komplexe IT-Landschaften bringt vielfältige technische und organisatorische Herausforderungen mit sich, die eine durchdachte Strategie und systematische Herangehensweise erfordern. Erfolgreiche Integration erfordert sowohl technische Expertise als auch ein tiefes Verständnis der bestehenden IT-Architektur und Geschäftsprozesse.\n\n🔗 Technische Integrations-Herausforderungen:\n• Heterogene System-Landschaften mit verschiedenen Protokollen, Datenformaten und API-Standards\n• Legacy-Systeme ohne moderne Integration-Capabilities oder standardisierte Logging-Funktionen\n• Netzwerk-Segmentierung und Firewall-Policies, die Datenflüsse zwischen Systemen einschränken\n• Performance-Impact auf Produktions-Systeme durch zusätzliche Logging und Monitoring-Overhead\n• Skalierbarkeits-Herausforderungen bei großen Datenvolumen und hohen Event-Raten\n\n📊 Datenmanagement und Normalisierung:\n• Inkonsistente Datenformate und Zeitstempel-Standards zwischen verschiedenen Systemen\n• Unvollständige oder fehlerhafte Log-Daten, die manuelle Bereinigung und Enrichment erfordern\n• Data Privacy und Compliance-Anforderungen für sensitive Informationen in Log-Daten\n• Real-time Processing Anforderungen versus Batch-Processing Capabilities bestehender Systeme\n• Data Retention Policies und Storage-Optimization für große historische Datenmengen\n\n🏢 Organisatorische und Prozess-Integration:\n• Verschiedene IT-Teams mit unterschiedlichen Verantwortlichkeiten und Prioritäten\n• Bestehende ITSM-Prozesse und Ticketing-Systeme, die in SIEM-Workflows integriert werden müssen\n• Change Management Resistance und Adoption-Herausforderungen bei End-Users\n• Skill Gaps und Training-Bedarf für SIEM-spezifische Technologien und Prozesse\n• Budget und Resource Constraints für umfassende Integration-Projekte\n\n⚙️ Lösungsansätze und Best Practices:\n• Entwicklung einer umfassenden Integration-Architektur mit standardisierten Schnittstellen\n• Verwendung von Integration-Plattformen und Middleware für komplexe System-Verbindungen\n• Implementierung von Data Transformation und Enrichment Pipelines\n• Graduelle Integration mit Pilot-Projekten und schrittweiser Erweiterung\n• Etablierung von Cross-functional Teams für koordinierte Integration-Efforts\n\n🔧 Technische Lösungsstrategien:\n• API Gateway Implementation für standardisierte und sichere System-Integration\n• Message Queue Systeme für asynchrone Datenverarbeitung und Load-Balancing\n• Container-basierte Integration-Services für portable und skalierbare Lösungen\n• Monitoring und Alerting für Integration-Health und Performance-Überwachung\n• Automated Testing und Validation für kontinuierliche Integration-Quality Assurance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie entwickelt man effektive SOC-Betriebsmodelle für SIEM Lösungen und welche Organisationsstrukturen sind optimal?',
        answer: "Die Entwicklung effektiver SOC-Betriebsmodelle für SIEM Lösungen erfordert eine durchdachte Balance zwischen technischen Capabilities, organisatorischen Strukturen und operativen Prozessen. Ein erfolgreiches SOC-Modell maximiert die Wertschöpfung der SIEM-Investition durch optimale Ressourcenallokation und effiziente Workflow-Gestaltung.\n\n🏗️ SOC-Organisationsstrukturen und Rollen:\n• Tiered SOC-Modelle mit Level 1 Analysts für Initial Triage und Alert-Handling\n• Level 2 Analysts für detaillierte Investigation und Incident Response\n• Level 3 Experts für komplexe Threat Hunting und Advanced Analytics\n• SOC Manager für operative Führung und Performance-Management\n• Security Engineers für SIEM-Tuning und Use Case Development\n\n⏰ Betriebsmodell-Varianten und Service-Level:\n• Follow-the-Sun Modelle für globale Organisationen mit kontinuierlicher Coverage\n• Hybrid-Modelle mit internen Teams und externen Managed Services\n• Specialized SOCs für spezifische Technologien oder Compliance-Anforderungen\n• Virtual SOCs mit dezentralen Teams und zentraler Koordination\n• Outsourced SOC Services mit definierten SLAs und Performance-Metriken\n\n📊 Performance-Management und KPIs:\n• Mean Time to Detection und Mean Time to Response als primäre Effizienz-Metriken\n• Alert Volume und False Positive Rates für SIEM-Tuning und Optimization\n• Incident Escalation Rates und Resolution Times für Process-Effectiveness\n• Analyst Productivity und Skill Development Tracking\n• Customer Satisfaction und Business Impact Measurements\n\n🔄 Prozess-Design und Workflow-Optimization:\n• Standardisierte Incident Response Playbooks für verschiedene Threat-Kategorien\n• Escalation Procedures mit klaren Kriterien und Verantwortlichkeiten\n• Communication Protocols für interne und externe Stakeholder\n• Documentation Standards für Incident-Tracking und Lessons Learned\n• Continuous Improvement Prozesse für SOC-Evolution und Maturity-Steigerung\n\n🎓 Skill Development und Training-Programme:\n• Strukturierte Onboarding-Programme für neue SOC-Analysten\n• Continuous Education für evolvierende Threat Landscapes und Technologien\n• Cross-Training für Flexibilität und Redundancy in kritischen Rollen\n• Certification-Programme für Professional Development und Career Progression\n• Knowledge Management Systeme für Expertise-Sharing und Best Practice-Dokumentation\n\n🛠️ Technology und Tool-Integration:\n• SOAR-Integration für Workflow-Automation und Response-Orchestrierung\n• Threat Intelligence Platforms für Context und Attribution\n• Communication Tools für Team-Collaboration und Incident-Coordination\n• Reporting und Dashboard-Tools für Management-Visibility\n• Training-Simulatoren und Cyber-Ranges für Skill-Development"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielt Automation in modernen SIEM Lösungen und wie implementiert man intelligente Response-Capabilities?',
        answer: "Automation transformiert moderne SIEM Lösungen von reaktiven Monitoring-Tools zu proaktiven, intelligenten Cybersecurity-Plattformen. Durch die strategische Implementierung von Automation-Capabilities können Organisationen ihre Security Operations skalieren, Reaktionszeiten drastisch reduzieren und ihre Analysten für komplexere, wertschöpfende Aktivitäten freisetzen.\n\n🤖 Automation-Bereiche in SIEM-Umgebungen:\n• Automated Alert Triage und Initial Classification basierend auf Severity und Context\n• Intelligent Enrichment von Security Events mit Threat Intelligence und Asset-Informationen\n• Automated Incident Response für Standard-Szenarien und Low-Risk Events\n• Proactive Threat Hunting durch AI-gestützte Anomaly Detection und Pattern Recognition\n• Compliance Reporting und Audit-Trail Generation für regulatorische Anforderungen\n\n⚡ Response-Automation und Orchestrierung:\n• SOAR-Integration für komplexe Multi-Step Response-Workflows\n• Automated Containment Actions für Malware-Infektionen und Compromised Accounts\n• Dynamic Firewall Rule Updates und Network Segmentation für Threat Isolation\n• Automated User Account Suspension und Access Revocation bei verdächtigen Aktivitäten\n• Intelligent Escalation basierend auf Business Impact und Threat Severity\n\n🧠 AI-gestützte Automation-Capabilities:\n• Machine Learning für Behavioral Baseline-Etablierung und Anomaly Detection\n• Natural Language Processing für Automated Threat Intelligence Analysis\n• Predictive Analytics für Proactive Threat Identification und Risk Assessment\n• Automated Correlation Rule Generation basierend auf Historical Attack Patterns\n• Dynamic Threshold Adjustment für Reduced False Positives und Improved Accuracy\n\n🔧 Implementation-Strategien und Best Practices:\n• Graduelle Automation-Einführung beginnend mit Low-Risk, High-Volume Use Cases\n• Human-in-the-Loop Ansätze für kritische Entscheidungen und Complex Scenarios\n• Extensive Testing und Validation vor Produktions-Deployment von Automation-Rules\n• Continuous Monitoring und Tuning von Automated Processes für Optimal Performance\n• Fallback-Mechanismen und Manual Override-Capabilities für Exception-Handling\n\n📊 Automation-Governance und Oversight:\n• Clear Approval Processes für neue Automation-Rules und Response-Actions\n• Audit-Trails und Logging für alle Automated Actions und Decision-Points\n• Regular Review und Update-Zyklen für Automation-Logic und Business Rules\n• Performance-Metriken für Automation-Effectiveness und Business Impact\n• Risk Assessment und Impact-Analysis für Automated Response-Capabilities\n\n🎯 Business Value und ROI-Realisierung:\n• Significant Reduction in Mean Time to Response durch Automated Initial Actions\n• Improved Analyst Productivity durch Elimination von Routine-Tasks\n• Enhanced Consistency und Accuracy in Incident Response-Prozessen\n• Scalable Security Operations ohne proportionale Increase in Staffing-Costs\n• Better Compliance und Audit-Readiness durch Automated Documentation und Reporting"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
