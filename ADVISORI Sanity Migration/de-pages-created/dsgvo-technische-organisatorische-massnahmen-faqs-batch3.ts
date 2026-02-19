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
    console.log('Updating DSGVO TOMs page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-technische-organisatorische-massnahmen' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-technische-organisatorische-massnahmen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI branchenspezifische TOMs-Frameworks für regulierte Industrien wie Finanzdienstleistungen, Gesundheitswesen und kritische Infrastrukturen?",
        answer: "Regulierte Branchen stehen vor besonderen Herausforderungen bei der TOMs-Implementierung, da sie multiple Compliance-Frameworks gleichzeitig erfüllen müssen. ADVISORI entwickelt sector-specific TOMs-Lösungen, die DSGVO-Anforderungen nahtlos mit branchenspezifischen Regulierungen wie Basel III, MiFID II, MDR oder KRITIS-Verordnung integrieren.\n\n🏦 Financial Services TOMs-Excellence:\n• Regulatory Convergence Management: Harmonisierte TOMs-Frameworks, die DSGVO, Basel III, DORA, EBA-Guidelines und nationale Bankenaufsichtsanforderungen simultan erfüllen.\n• Real-time Transaction Monitoring: Privacy-preserving Analytics für AML/KYC-Compliance mit anonymisierter Verdachtsmeldung und automated Suspicious Activity Reporting.\n• Segregated Data Architecture: Multi-tenant TOMs-Designs für komplexe Organisationsstrukturen mit strikter Datentrennung zwischen verschiedenen Geschäftsbereichen.\n• Operational Resilience Integration: TOMs-Implementation, die Business Continuity, Disaster Recovery und Cyber Resilience nach DORA-Standards gewährleistet.\n\n🏥 Healthcare & Life Sciences Specialization:\n• Medical Data Protection Excellence: Specialized TOMs für Gesundheitsdaten mit Enhanced Security-Standards entsprechend MDR, FDA-Guidance und nationalen Gesundheitsdatenschutzgesetzen.\n• Clinical Trial Data Integrity: End-to-End Data Protection für klinische Studien mit Pseudonymisierung, Subject-Privacy und Regulatory-Audit-Readiness.\n• Interoperability Security: Sichere Gesundheitsdatenaustausch-Protokolle für FHIR, HL7 und andere Healthcare-Standards mit granularer Zugriffskontrolle.\n• Research Ethics Integration: TOMs-Design mit eingebauten Ethical Review-Processes für medizinische Forschung und Innovation.\n\n⚡ Critical Infrastructure Protection:\n• OT/IT Security Convergence: Specialized TOMs für Industrial Control Systems, SCADA und IoT-Devices in kritischen Infrastrukturen.\n• Sector-Specific Threat Intelligence: Customized Security-Monitoring für branchenspezifische Cyber-Threats mit automated Response-Mechanisms.\n• Regulatory Reporting Automation: Streamlined Compliance-Reporting für verschiedene Sektoraufsichten mit real-time Data-Quality-Assurance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche innovativen TOMs-Ansätze entwickelt ADVISORI für IoT-Ecosysteme und Edge Computing-Umgebungen unter DSGVO-Compliance?",
        answer: "IoT und Edge Computing schaffen neue Dimensionen der Datenverarbeitung mit Millionen von Endgeräten und dezentraler Intelligence. ADVISORI entwickelt innovative TOMs-Architekturen, die der Heterogenität, Skalierung und den spezifischen Privacy-Herausforderungen von IoT-Ecosystemen gerecht werden und dabei DSGVO-Compliance in resource-constrained Umgebungen gewährleisten.\n\n🌐 IoT-Native TOMs-Innovation:\n• Lightweight Cryptography für Resource-Constrained Devices: Implementation post-quantum-sicherer Verschlüsselung für IoT-Geräte mit minimalen Ressourcenanforderungen.\n• Distributed Identity & Access Management: Scalable Identity-Frameworks für Milliarden von IoT-Devices mit Zero-Touch Provisioning und Lifecycle-Management.\n• Privacy-by-Design für Sensor Networks: Intelligent Data Minimization und Local Processing um unnötige Datensammlung und -übertragung zu vermeiden.\n• Secure Firmware-over-the-Air Updates: Tamper-resistant Update-Mechanisms mit cryptographic Verification und Rollback-Capabilities.\n\n🔄 Edge Computing Privacy Architecture:\n• Federated Privacy-Preserving Analytics: Local Data Processing mit Differential Privacy für aggregierte Insights ohne Raw-Data-Exposition.\n• Multi-Party Computation für Edge Networks: Collaborative Analytics zwischen Edge-Nodes ohne Preisgabe sensitive Information an zentrale Systeme.\n• Dynamic Consent Management für IoT: Granular, device-specific Consent-Mechanisms mit User-friendly Interfaces für Complex IoT-Deployments.\n• Intelligent Data Governance: AI-powered Classification und Retention-Management für automatische DSGVO-compliant Data Lifecycle-Kontrolle.\n\n⚙️ Operational Excellence für IoT-Scale:\n• Automated Security Orchestration: Self-healing Security-Infrastructure mit autonomous Threat-Detection und Response für massive IoT-Deployments.\n• Real-time Compliance Monitoring: Continuous Audit-Trails und Anomaly-Detection für DSGVO-Compliance across distributed IoT-Networks.\n• Cross-Platform Interoperability: Vendor-agnostic TOMs-Standards für seamless Security across heterogene IoT-Ecosysteme.\n• Scalable Incident Response: Automated Isolation und Remediation-Strategies für compromised IoT-Devices mit minimal Impact auf Connected-Systems."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie adressiert ADVISORI die besonderen TOMs-Herausforderungen beim Schutz biometrischer Daten und anderer besonders sensibler Datenkategorien?",
        answer: "Biometrische Daten und andere besonders sensible Datenkategorien nach Art. 9 DSGVO erfordern Enhanced Security-Measures und spezielle TOMs-Implementierungen. ADVISORI entwickelt Ultra-High-Security-Frameworks, die sowohl die Unveränderlichkeit biometrischer Daten als auch deren einzigartige Privacy-Risiken berücksichtigen.\n\n🔐 Biometric Data Protection Excellence:\n• Template Protection Technologies: Advanced Biometric-Template-Schutz durch Cancelable Biometrics, Homomorphic Encryption und Secure Multi-Party Computation.\n• Biometric Cryptosystems: Integration biometrischer Daten in Cryptographic-Key-Generation ohne Storage der Original-Biometrics.\n• Liveness Detection & Anti-Spoofing: Multi-modal Biometric-Verification mit advanced Anti-Presentation-Attack-Measures für maximale Authenticity.\n• Decentralized Biometric Architecture: Zero-Knowledge Biometric-Verification ohne centrale Biometric-Databases zur Minimierung von Breach-Impacts.\n\n🏥 Special Category Data Governance:\n• Purpose Limitation Enforcement: Technical Measures zur automatischen Durchsetzung von Zweckbindung für health data, genetic information und andere Art. 9-Daten.\n• Dynamic Anonymization für Sensitive Data: Advanced Anonymization-Techniques mit Utility-Preservation für Research und Analytics bei Special Categories.\n• Explicit Consent Management: Sophisticated Consent-Platforms mit granular Control für verschiedene Special Category-Uses und Withdrawal-Mechanisms.\n• Cross-Border Special Data Transfers: Enhanced TOMs für internationale Transfers von Special Category Data mit strengthened Safeguards.\n\n⚖️ Legal & Technical Convergence:\n• Automated Legal-Technical Compliance: AI-powered Systems zur kontinuierlichen Verification von Legal-Basis-Requirements für Special Category Processing.\n• Transparent Processing Documentation: Comprehensive Audit-Trails für alle Special Category Data Operations mit Real-time Legal-Compliance-Monitoring.\n• Risk-Adaptive Security Scaling: Dynamic TOMs-Adjustment basierend auf Sensitivity-Level und Processing-Risk-Assessment.\n• Subject Rights Enhancement: Advanced Data Subject-Tools für granular Control über Special Category Data mit enhanced Transparency und Portability."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche TOMs-Strategien entwickelt ADVISORI für die sichere Integration von Third-Party-Services und die Verwaltung komplexer Vendor-Ecosysteme?",
        answer: "Moderne Unternehmen operieren in komplexen Vendor-Ecosystemen mit hunderten von Third-Party-Services. ADVISORI entwickelt sophisticated TOMs-Frameworks für sichere Vendor-Integration und -Management, die umfassende Due Diligence, kontinuierliches Monitoring und automated Compliance-Enforcement kombinieren.\n\n🤝 Vendor Risk Management Excellence:\n• Continuous Vendor Assessment: Real-time Security-Rating und Compliance-Monitoring für alle Third-Party-Providers mit automated Risk-Scoring und Alert-Systems.\n• Supply Chain Transparency: End-to-End Visibility in Vendor-Subprocessor-Chains mit comprehensive Impact-Assessment für Data Protection-Implications.\n• Dynamic Vendor Onboarding: Streamlined Due Diligence-Prozesse mit standardisierten Security-Questionnaires und automated Compliance-Verification.\n• Vendor Lifecycle Management: Comprehensive Governance für Vendor-Relationships von Initial Assessment bis Contract-Termination und Data-Return.\n\n🔄 Secure Integration Architecture:\n• API Security Excellence: Advanced API-Gateway-Lösungen mit OAuth 2.0, JWT-Validation, Rate-Limiting und comprehensive Logging für Third-Party-Integrations.\n• Data Sharing Minimization: Technical Enforcement von Data Minimization-Principles mit granular Access-Controls und automatic Purpose-Limitation.\n• Secure Multi-Party Computation: Advanced Cryptographic-Protocols für Collaborative Analytics ohne Raw-Data-Sharing zwischen Vendors.\n• Zero-Trust Vendor Access: Implementation von Zero-Trust-Principles für Vendor-System-Access mit continuous Verification und minimal Privilege-Assignment.\n\n📊 Compliance & Governance Automation:\n• Automated Contract Compliance: AI-powered Monitoring von Vendor-Contract-Adherence mit real-time Violation-Detection und Escalation-Workflows.\n• Cross-Border Transfer Management: Sophisticated Transfer-Impact-Assessment und Adequacy-Decision-Tracking für international Vendor-Relationships.\n• Incident Response Coordination: Integrated Incident-Response-Frameworks für Vendor-related Security-Events mit automatic Notification und Joint-Investigation-Protocols.\n• Performance & Security Analytics: Comprehensive Dashboards für Vendor-Performance, Security-Metrics und Compliance-Status mit predictive Risk-Analytics."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
