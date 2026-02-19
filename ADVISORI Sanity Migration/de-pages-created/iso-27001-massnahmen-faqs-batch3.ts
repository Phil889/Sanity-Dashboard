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
    console.log('Updating ISO 27001 Maßnahmen page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-massnahmen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-massnahmen" not found')
    }
    
    // Create new FAQs for ISO 27001 Maßnahmen advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Herausforderungen entstehen bei der Integration von ISO 27001 Maßnahmen in Cloud-Umgebungen?',
        answer: "Die Integration von ISO 27001 Maßnahmen in Cloud-Umgebungen bringt spezifische Herausforderungen mit sich, die traditionelle Sicherheitsansätze erweitern und neue Kontrollmechanismen erfordern. Cloud-spezifische Implementierung muss geteilte Verantwortlichkeiten, dynamische Infrastrukturen und neue Bedrohungsmodelle berücksichtigen.\n\n☁️ Shared Responsibility Model:\n• Klare Abgrenzung der Sicherheitsverantwortlichkeiten zwischen Cloud-Provider und Organisation\n• Implementierung von Kontrollen für Infrastructure-as-a-Service, Platform-as-a-Service und Software-as-a-Service Modelle\n• Entwicklung spezifischer Governance-Strukturen für Multi-Cloud und Hybrid-Cloud Umgebungen\n• Etablierung von Service Level Agreements mit definierten Sicherheitsanforderungen\n• Kontinuierliche Überwachung der Provider-Compliance und Zertifizierungen\n\n🔐 Identity und Access Management in der Cloud:\n• Implementierung von Cloud-nativen IAM-Lösungen mit föderierter Authentifizierung\n• Aufbau von Zero Trust Architekturen für Cloud-Zugriffe\n• Integration von Cloud Access Security Broker Lösungen\n• Etablierung von Just-in-Time Access und Privileged Access Management\n• Implementierung von Multi-Faktor-Authentifizierung für alle Cloud-Services\n\n📊 Datenklassifizierung und Schutz:\n• Entwicklung Cloud-spezifischer Datenklassifizierungsrichtlinien\n• Implementierung von Data Loss Prevention für Cloud-Umgebungen\n• Aufbau von Encryption-at-Rest und Encryption-in-Transit Strategien\n• Etablierung von Key Management Services und Hardware Security Modules\n• Integration von Cloud Security Posture Management Tools\n\n🔍 Monitoring und Compliance:\n• Implementierung von Cloud-nativen SIEM und SOAR Lösungen\n• Aufbau von Container und Kubernetes Security Monitoring\n• Etablierung von Infrastructure-as-Code Security Scanning\n• Integration von Compliance-as-Code Ansätzen\n• Kontinuierliche Vulnerability Assessments für Cloud-Workloads"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie können ISO 27001 Maßnahmen an branchenspezifische Anforderungen angepasst werden?',
        answer: "Die Anpassung von ISO 27001 Maßnahmen an branchenspezifische Anforderungen erfordert eine tiefgreifende Analyse der jeweiligen regulatorischen Landschaft, Geschäftsmodelle und Risikoprofile. Erfolgreiche Branchenadaptierung kombiniert die Flexibilität des ISO 27001 Frameworks mit spezifischen Compliance-Anforderungen und Best Practices.\n\n🏦 Finanzdienstleistungen:\n• Integration von Basel III, MiFID II und PCI DSS Anforderungen in die Kontrolllandschaft\n• Implementierung spezieller Kontrollen für Hochfrequenzhandel und algorithmische Systeme\n• Aufbau von Anti-Geldwäsche und Know-Your-Customer Sicherheitskontrollen\n• Etablierung von Operational Resilience Frameworks entsprechend regulatorischer Vorgaben\n• Integration von Stress Testing und Scenario Planning in die Risikobewertung\n\n🏥 Gesundheitswesen:\n• Harmonisierung mit HIPAA, GDPR und medizingerätespezifischen Regulierungen\n• Implementierung spezieller Kontrollen für Patientendaten und medizinische Geräte\n• Aufbau von Interoperabilitäts-Sicherheit für Health Information Exchanges\n• Etablierung von Clinical Trial Data Integrity Kontrollen\n• Integration von Telemedizin und Remote Patient Monitoring Sicherheit\n\n🏭 Kritische Infrastrukturen:\n• Integration von KRITIS, NIS2 und sektorspezifischen Sicherheitsstandards\n• Implementierung von Industrial Control Systems und SCADA Sicherheit\n• Aufbau von Physical-Cyber Security Convergence Ansätzen\n• Etablierung von Supply Chain Security für kritische Komponenten\n• Integration von Business Continuity und Disaster Recovery für systemkritische Services\n\n🛡️ Verteidigung und Aerospace:\n• Harmonisierung mit Classified Information Handling und Export Control Regulations\n• Implementierung von Multi-Level Security und Compartmentalization\n• Aufbau spezieller Kontrollen für Dual-Use Technologien\n• Etablierung von Insider Threat Detection und Mitigation\n• Integration von Supply Chain Risk Management für sensitive Technologien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen emerging Technologies bei der Weiterentwicklung von ISO 27001 Maßnahmen?',
        answer: "Emerging Technologies transformieren die Landschaft der ISO 27001 Maßnahmen fundamental und erfordern kontinuierliche Anpassung und Innovation der Sicherheitskontrollen. Die Integration neuer Technologien muss proaktiv erfolgen, um sowohl neue Möglichkeiten als auch neue Risiken angemessen zu adressieren.\n\n🤖 Künstliche Intelligenz und Machine Learning:\n• Entwicklung von AI-spezifischen Governance und Ethical AI Frameworks\n• Implementierung von Model Security und Adversarial Attack Protection\n• Aufbau von Data Poisoning und Model Theft Detection\n• Etablierung von Explainable AI für sicherheitskritische Entscheidungen\n• Integration von AI-powered Security Analytics und Threat Detection\n\n🔗 Blockchain und Distributed Ledger:\n• Implementierung von Smart Contract Security und Audit Prozessen\n• Aufbau von Cryptocurrency und Digital Asset Security\n• Etablierung von Consensus Mechanism Security Monitoring\n• Integration von Decentralized Identity Management\n• Entwicklung von Cross-Chain Security Protokolle\n\n🌐 Internet of Things und Edge Computing:\n• Implementierung von Device Identity und Lifecycle Management\n• Aufbau von Edge Security und Distributed Computing Protection\n• Etablierung von IoT Network Segmentation und Micro-Segmentation\n• Integration von Over-the-Air Update Security\n• Entwicklung von Sensor Data Integrity und Privacy Controls\n\n🔮 Quantum Computing und Post-Quantum Cryptography:\n• Vorbereitung auf Quantum-Safe Cryptography Migration\n• Implementierung von Crypto-Agility und Algorithm Transition Planning\n• Aufbau von Quantum Key Distribution Infrastructure\n• Etablierung von Quantum-Resistant Digital Signatures\n• Integration von Quantum Random Number Generation\n\n🥽 Extended Reality und Metaverse:\n• Entwicklung von Virtual Environment Security Controls\n• Implementierung von Avatar Identity und Behavior Monitoring\n• Aufbau von Immersive Data Protection und Privacy\n• Etablierung von Cross-Reality Security Protocols\n• Integration von Biometric Data Protection in VR/AR Environments"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie können ISO 27001 Maßnahmen zur Unterstützung von Business Transformation und Digitalisierung eingesetzt werden?',
        answer: "ISO 27001 Maßnahmen können als strategischer Enabler für Business Transformation und Digitalisierung fungieren, indem sie Sicherheit als Wettbewerbsvorteil und Innovationstreiber positionieren. Erfolgreiche Integration erfordert eine Neuausrichtung von reaktiven Sicherheitsansätzen hin zu proaktiven, geschäftsorientierten Sicherheitsstrategien.\n\n🚀 Security-by-Design für Digitale Transformation:\n• Integration von Sicherheitsanforderungen in alle Transformationsprojekte von Beginn an\n• Entwicklung von Security Architecture Blueprints für neue Geschäftsmodelle\n• Implementierung von DevSecOps und Continuous Security Integration\n• Aufbau von Security Champions Netzwerken in Transformationsteams\n• Etablierung von Security Gates und Checkpoints in Projektmethodologien\n\n💼 Enablement neuer Geschäftsmodelle:\n• Entwicklung flexibler Sicherheitsframeworks für Platform Economy und Ecosystem Business\n• Implementierung von API Security und Microservices Protection\n• Aufbau von Partner Ecosystem Security und Third-Party Risk Management\n• Etablierung von Data Monetization Security und Privacy-by-Design\n• Integration von Customer Experience Security ohne Friction\n\n⚡ Agile Security und Rapid Response:\n• Implementierung von Agile Security Methodologien für schnelle Markteinführung\n• Aufbau von Automated Security Testing und Continuous Compliance\n• Etablierung von Risk-Based Security Decision Making\n• Integration von Threat Intelligence in Business Planning\n• Entwicklung von Security Metrics für Business Value Demonstration\n\n🌍 Global Scale und Compliance Automation:\n• Implementierung von Multi-Jurisdictional Compliance Frameworks\n• Aufbau von Automated Compliance Reporting und Audit Trails\n• Etablierung von Global Security Operations Centers\n• Integration von Regulatory Technology für Compliance Automation\n• Entwicklung von Cross-Border Data Transfer Security\n\n📈 Innovation und Competitive Advantage:\n• Nutzung von Security als Differentiator und Trust Builder\n• Implementierung von Privacy-Enhancing Technologies für Competitive Advantage\n• Aufbau von Security-as-a-Service Capabilities\n• Etablierung von Threat Intelligence Sharing für Industry Leadership\n• Integration von Security Innovation Labs und Research Partnerships"
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
