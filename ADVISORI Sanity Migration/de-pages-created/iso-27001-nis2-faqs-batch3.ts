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
    console.log('Updating ISO 27001 NIS2 Integration page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-nis2' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-nis2" not found')
    }
    
    // Create new FAQs for ISO 27001 NIS2 Integration technical aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche technischen Sicherheitskontrollen müssen für die Integration harmonisiert werden?',
        answer: "Die Harmonisierung technischer Sicherheitskontrollen zwischen ISO 27001 und NIS2 erfordert eine systematische Analyse und Integration der verschiedenen Control-Frameworks. Dabei geht es nicht nur um die Erfüllung beider Standards, sondern um die Schaffung einer kohärenten, effizienten Sicherheitsarchitektur für kritische Infrastrukturen.\n\n🔐 Access Control und Identity Management:\n• Integration von ISO 27001 A.9 Access Control mit NIS2-Anforderungen für privilegierte Zugangskontrollen\n• Harmonisierte Multi-Factor Authentication Strategien für beide Compliance-Bereiche\n• Unified Identity and Access Management Systeme mit Role-based Access Control\n• Koordinierte Privileged Access Management Lösungen für kritische Systeme\n• Integrierte User Lifecycle Management Prozesse mit automatisierten Provisioning und Deprovisioning\n\n🛡️ Network Security und Segmentierung:\n• Mapping von ISO 27001 A.13 Communications Security zu NIS2-Netzwerksicherheitsanforderungen\n• Integrierte Netzwerksegmentierung für kritische Infrastrukturen mit Zero Trust Prinzipien\n• Unified Firewall Management und Intrusion Detection/Prevention Systeme\n• Koordinierte VPN und Remote Access Sicherheit für beide Frameworks\n• Harmonisierte Wireless Security Controls und Network Access Control\n\n🔍 Monitoring und Detection:\n• Integration von ISO 27001 A.12.4 Logging und Monitoring mit NIS2-Detection-Anforderungen\n• Unified SIEM-Implementierung für beide Compliance-Bereiche\n• Koordinierte Security Operations Center Funktionen\n• Integrierte Threat Intelligence und Indicator of Compromise Management\n• Harmonisierte Anomaly Detection und Behavioral Analytics\n\n🔒 Cryptographic Controls:\n• Mapping von ISO 27001 A.10 Cryptography zu NIS2-Verschlüsselungsanforderungen\n• Unified Key Management Systeme für beide Frameworks\n• Koordinierte Encryption-at-Rest und Encryption-in-Transit Strategien\n• Integrierte Digital Certificate Management und PKI-Infrastrukturen\n• Harmonisierte Cryptographic Standards und Algorithm Selection\n\n⚡ Vulnerability Management:\n• Integration von ISO 27001 A.12.6 Technical Vulnerability Management mit NIS2-Anforderungen\n• Unified Vulnerability Scanning und Assessment Prozesse\n• Koordinierte Patch Management für kritische Infrastrukturen\n• Integrierte Penetration Testing und Security Assessment Programme\n• Harmonisierte Risk-based Vulnerability Prioritization"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie werden Audit-Prozesse für beide Frameworks koordiniert?',
        answer: "Die Koordination von Audit-Prozessen für ISO 27001 und NIS2 ist entscheidend für eine effiziente Compliance-Überwachung und die Vermeidung von Audit-Fatigue. Eine strategische Harmonisierung der Prüfungsaktivitäten schafft Synergien und reduziert den administrativen Aufwand erheblich.\n\n📅 Integrierte Audit-Planung:\n• Koordinierte Audit-Zyklen, die sowohl ISO 27001 als auch NIS2-Anforderungen berücksichtigen\n• Unified Audit-Kalender mit optimierter Ressourcenallokation\n• Integrierte Risk-based Audit-Planung für beide Frameworks\n• Koordinierte Internal und External Audit-Strategien\n• Harmonisierte Audit-Scope Definition und Boundary Management\n\n🔍 Unified Audit-Methodik:\n• Integrierte Audit-Checklisten, die beide Frameworks gleichzeitig abdecken\n• Koordinierte Evidence Collection und Documentation Standards\n• Unified Audit-Tools und Technologien für effiziente Prüfungen\n• Harmonisierte Sampling-Methoden und Testing-Ansätze\n• Integrierte Audit-Trail und Chain of Custody Prozesse\n\n👥 Cross-Framework Audit-Teams:\n• Audit-Teams mit Expertise in beiden Compliance-Bereichen\n• Koordinierte Training und Certification Programme für Auditoren\n• Integrierte Audit-Rollen und Verantwortlichkeiten\n• Unified Audit-Communication und Stakeholder-Management\n• Harmonisierte Audit-Quality Assurance und Review-Prozesse\n\n📊 Integrierte Audit-Reporting:\n• Unified Audit-Reports, die beide Frameworks abdecken\n• Koordinierte Finding-Kategorisierung und Risk-Rating\n• Integrierte Corrective Action Planning und Tracking\n• Harmonisierte Management-Reporting und Dashboard-Systeme\n• Unified Audit-Metrics und Performance-Indicators\n\n🔄 Kontinuierliche Audit-Optimierung:\n• Integrierte Lessons Learned und Best Practice Sharing\n• Koordinierte Audit-Process Improvement Initiativen\n• Unified Audit-Technology Evolution und Tool-Enhancement\n• Harmonisierte Audit-Efficiency Metrics und Optimization\n• Integrierte Stakeholder-Feedback und Satisfaction-Monitoring"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen Drittanbieter und Supply Chain Security in der Integration?',
        answer: "Supply Chain Security ist ein kritischer Konvergenzpunkt zwischen ISO 27001 und NIS2, da beide Frameworks umfassende Anforderungen an die Sicherheit von Drittanbietern und Lieferketten stellen. Die Integration dieser Anforderungen schafft eine robuste, einheitliche Herangehensweise an Third-Party Risk Management.\n\n🔗 Unified Supplier Risk Assessment:\n• Integration von ISO 27001 A.15 Supplier Relationships mit NIS2-Supply Chain Security Anforderungen\n• Harmonisierte Vendor Due Diligence Prozesse für beide Frameworks\n• Integrierte Third-Party Security Assessment Methodologien\n• Koordinierte Supplier Security Questionnaires und Evaluation-Kriterien\n• Unified Supplier Risk Rating und Classification-Systeme\n\n📋 Integrierte Vertragliche Sicherheitsanforderungen:\n• Harmonisierte Security Clauses für beide Compliance-Bereiche\n• Koordinierte Service Level Agreements mit Security-Komponenten\n• Integrierte Data Protection und Privacy-Anforderungen\n• Unified Incident Notification und Response-Verpflichtungen\n• Harmonisierte Audit Rights und Compliance-Monitoring Klauseln\n\n🔍 Kontinuierliches Supply Chain Monitoring:\n• Integrierte Supplier Performance Monitoring für beide Frameworks\n• Koordinierte Third-Party Security Assessments und Reviews\n• Unified Threat Intelligence Sharing mit kritischen Lieferanten\n• Harmonisierte Supply Chain Incident Response und Communication\n• Integrierte Supplier Security Training und Awareness Programme\n\n🌐 Critical Infrastructure Dependencies:\n• Erweiterte Dependency Mapping für kritische Infrastruktur-Lieferanten\n• Koordinierte Business Continuity Planning mit Schlüssel-Lieferanten\n• Integrierte Geographic und Geopolitical Risk Assessment\n• Unified Supplier Diversification und Resilience-Strategien\n• Harmonisierte Crisis Management und Emergency Response-Koordination\n\n⚖️ Regulatory Compliance Alignment:\n• Koordinierte Compliance-Überwachung für beide Frameworks\n• Integrierte Regulatory Change Management und Impact Assessment\n• Unified Supplier Compliance Reporting und Documentation\n• Harmonisierte Cross-Border Data Transfer und Privacy-Compliance\n• Integrierte Regulatory Audit Support und Evidence-Provision"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie wird die Schulung und Awareness für beide Frameworks organisiert?',
        answer: "Eine integrierte Schulungs- und Awareness-Strategie für ISO 27001 und NIS2 ist entscheidend für den Erfolg der Integration und die nachhaltige Compliance-Kultur. Durch koordinierte Bildungsprogramme können Synergien genutzt und die Effizienz der Wissensvermittlung maximiert werden.\n\n🎓 Integrierte Curriculum-Entwicklung:\n• Unified Training-Programme, die beide Frameworks systematisch abdecken\n• Koordinierte Learning-Paths für verschiedene Rollen und Verantwortlichkeiten\n• Integrierte Competency-Frameworks mit Framework-übergreifenden Fähigkeiten\n• Harmonisierte Certification und Qualification-Programme\n• Unified Training-Materials und Educational-Resources\n\n👥 Zielgruppenspezifische Schulungsansätze:\n• Executive-Level Awareness für strategische Integration und Governance\n• Technical-Team Training für operative Implementation und Management\n• Audit und Compliance-Team Schulungen für koordinierte Prüfungsaktivitäten\n• End-User Awareness für alltägliche Security-Praktiken\n• Incident Response Team Training für integrierte Emergency-Response\n\n📱 Multi-Modal Learning-Strategien:\n• E-Learning Plattformen mit interaktiven Modulen für beide Frameworks\n• Hands-on Workshops und Simulation-Exercises\n• Webinar-Serien und Expert-Sessions\n• Peer-Learning und Knowledge-Sharing Communities\n• Gamification und Interactive-Learning Ansätze\n\n🔄 Kontinuierliche Kompetenzentwicklung:\n• Regular Refresher-Training und Update-Sessions\n• Integrierte Performance-Assessment und Skill-Gap Analysis\n• Koordinierte Professional Development und Career-Path Planning\n• Unified Mentoring und Coaching-Programme\n• Cross-Framework Knowledge-Exchange und Best-Practice Sharing\n\n📊 Training-Effectiveness und Measurement:\n• Integrierte Training-Metrics und Learning-Analytics\n• Koordinierte Assessment und Evaluation-Methoden\n• Unified Feedback-Collection und Improvement-Processes\n• Harmonisierte ROI-Measurement für Training-Investments\n• Integrierte Compliance-Culture Monitoring und Enhancement"
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
