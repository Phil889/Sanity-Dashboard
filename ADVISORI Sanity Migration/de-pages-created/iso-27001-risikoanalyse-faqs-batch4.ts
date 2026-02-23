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
    console.log('Updating ISO 27001 Risikoanalyse page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikoanalyse' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikoanalyse" not found')
    }
    
    // Create new FAQs for advanced topics and industry-specific considerations
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie unterscheidet sich die ISO 27001 Risikoanalyse in verschiedenen Branchen und Organisationstypen?',
        answer: "Die ISO 27001 Risikoanalyse muss an die spezifischen Anforderungen, Bedrohungslandschaften und regulatorischen Rahmenbedingungen verschiedener Branchen angepasst werden. Während die grundlegenden Prinzipien universell anwendbar sind, erfordern unterschiedliche Sektoren maßgeschneiderte Ansätze für eine effektive Risikobewertung.\n\n🏦 Finanzdienstleistungssektor:\n• Berücksichtigung spezifischer Regulierungen wie Basel III, PCI DSS, DORA und MiFID II\n• Fokus auf Transaktionssicherheit, Marktrisiken und systemische Risiken\n• Besondere Beachtung von Geldwäsche-Prävention und Fraud Detection\n• Integration mit operationellen Risikomanagement-Frameworks\n• Berücksichtigung von High-Frequency Trading und algorithmischen Handelsrisiken\n\n🏥 Gesundheitswesen:\n• Compliance mit HIPAA, GDPR und medizingerätespezifischen Regulierungen\n• Schutz von Patientendaten und medizinischen Aufzeichnungen\n• Berücksichtigung von IoT-Medizingeräten und deren Sicherheitsrisiken\n• Integration mit klinischen Workflow-Systemen und Notfallprozeduren\n• Besondere Beachtung von Ransomware-Risiken in kritischen Behandlungsumgebungen\n\n🏭 Industrielle Fertigung und Kritische Infrastrukturen:\n• Integration von OT-Sicherheit und Industrial Control Systems\n• Berücksichtigung von NIS2-Richtlinien und kritischen Infrastruktur-Regulierungen\n• Fokus auf Supply Chain Security und Lieferantenrisiken\n• Bewertung von Cyber-Physical Systems und deren Ausfallrisiken\n• Berücksichtigung von Safety-Security-Interdependenzen\n\n☁️ Cloud-Service-Provider und SaaS-Unternehmen:\n• Multi-Tenant-Architektur-spezifische Risikobewertung\n• Compliance mit Cloud-Security-Standards wie SOC 2, ISO 27017 und CSA CCM\n• Berücksichtigung von Shared Responsibility Models\n• Bewertung von Data Residency und Cross-Border Data Transfer Risiken\n• Integration mit DevSecOps und Continuous Deployment Prozessen\n\n🎓 Bildungseinrichtungen und Forschungsorganisationen:\n• Schutz von Forschungsdaten und geistigem Eigentum\n• Berücksichtigung von FERPA und anderen bildungsspezifischen Datenschutzgesetzen\n• Bewertung von BYOD-Risiken in akademischen Umgebungen\n• Integration mit Collaboration-Tools und Remote Learning Plattformen\n• Besondere Beachtung von Nation-State Threats gegen Forschungseinrichtungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielen neue Technologien wie KI, IoT und Cloud Computing in der ISO 27001 Risikoanalyse?',
        answer: "Neue Technologien bringen sowohl innovative Möglichkeiten als auch neuartige Risiken mit sich, die eine Anpassung traditioneller Risikoanalyse-Methoden erfordern. Die ISO 27001 Risikoanalyse muss diese technologischen Entwicklungen proaktiv berücksichtigen und entsprechende Bewertungsansätze entwickeln.\n\n🤖 Künstliche Intelligenz und Machine Learning:\n• Bewertung von Algorithmic Bias und Fairness-Risiken in KI-Systemen\n• Berücksichtigung von Adversarial Attacks und Model Poisoning\n• Schutz von Trainingsdaten und Machine Learning Models\n• Bewertung von Explainability und Transparency-Anforderungen\n• Integration von KI-spezifischen Governance-Frameworks und Ethics Guidelines\n\n🌐 Internet of Things und Edge Computing:\n• Bewertung der erweiterten Attack Surface durch IoT-Geräte\n• Berücksichtigung von Device Lifecycle Management und Firmware-Updates\n• Analyse von Edge-to-Cloud-Kommunikationsrisiken\n• Bewertung von Physical Security Risiken bei IoT-Deployments\n• Integration von IoT-spezifischen Security Standards und Frameworks\n\n☁️ Cloud Computing und Hybrid-Infrastrukturen:\n• Bewertung von Multi-Cloud und Hybrid-Cloud-Architekturen\n• Berücksichtigung von Container-Security und Kubernetes-spezifischen Risiken\n• Analyse von Serverless Computing und Function-as-a-Service Risiken\n• Bewertung von Cloud-Native Security Tools und deren Integration\n• Berücksichtigung von Cloud Provider Lock-in und Vendor-spezifischen Risiken\n\n🔗 Blockchain und Distributed Ledger Technologies:\n• Bewertung von Smart Contract Security und Code-Audit-Anforderungen\n• Berücksichtigung von Consensus Mechanism Risiken und 51-Prozent-Attacken\n• Analyse von Private Key Management und Wallet Security\n• Bewertung von Regulatory Compliance in Blockchain-Umgebungen\n• Integration von Blockchain-spezifischen Incident Response Prozessen\n\n🚀 Emerging Technologies Integration:\n• Proaktive Bewertung von Quantum Computing Threats auf bestehende Kryptographie\n• Berücksichtigung von 5G-spezifischen Sicherheitsrisiken und Network Slicing\n• Bewertung von Augmented und Virtual Reality Security Implications\n• Integration von Zero Trust Architecture Prinzipien in die Risikoanalyse\n• Berücksichtigung von Robotic Process Automation und deren Sicherheitsimplikationen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie wird die ISO 27001 Risikoanalyse an regulatorische Änderungen und neue Compliance-Anforderungen angepasst?',
        answer: "Die dynamische Natur regulatorischer Landschaften erfordert eine adaptive und vorausschauende Herangehensweise an die ISO 27001 Risikoanalyse. Organisationen müssen systematische Prozesse etablieren, um regulatorische Änderungen zu überwachen, zu bewerten und in ihre Risikomanagement-Strategien zu integrieren.\n\n📋 Regulatory Intelligence und Monitoring:\n• Etablierung systematischer Überwachung regulatorischer Entwicklungen durch spezialisierte Teams oder externe Services\n• Integration von Regulatory Technology Tools für automatisierte Compliance-Überwachung\n• Aufbau von Netzwerken mit Branchenverbänden und Regulatory Bodies\n• Implementierung von Early Warning Systems für bevorstehende regulatorische Änderungen\n• Regelmäßige Teilnahme an Branchenkonferenzen und Regulatory Consultations\n\n🔄 Adaptive Risikobewertungsprozesse:\n• Entwicklung flexibler Risikoanalyse-Frameworks, die schnelle Anpassungen ermöglichen\n• Implementation von Trigger-basierten Neubewertungen bei regulatorischen Änderungen\n• Etablierung von Cross-funktionalen Teams für Regulatory Impact Assessments\n• Integration von Regulatory Change Management in bestehende ISMS-Prozesse\n• Entwicklung von Scenario Planning für verschiedene regulatorische Entwicklungen\n\n🌍 Multi-Jurisdictional Compliance:\n• Berücksichtigung unterschiedlicher regulatorischer Anforderungen in verschiedenen Jurisdiktionen\n• Entwicklung harmonisierter Compliance-Ansätze für globale Organisationen\n• Bewertung von Conflicts of Laws und regulatorischen Überschneidungen\n• Implementation von Data Localization und Cross-Border Transfer Requirements\n• Berücksichtigung von Extraterritorial Jurisdiction und Long-Arm Statutes\n\n📊 Regulatory Risk Quantification:\n• Entwicklung von Methoden zur Quantifizierung regulatorischer Compliance-Kosten\n• Bewertung von Penalty-Risiken und Reputationsschäden bei Non-Compliance\n• Integration von Regulatory Capital Requirements in die Risikobewertung\n• Berücksichtigung von Business Continuity Impacts bei regulatorischen Änderungen\n• Entwicklung von ROI-Modellen für Compliance-Investitionen\n\n🎯 Proaktive Compliance-Strategien:\n• Entwicklung von Forward-Looking Compliance Roadmaps\n• Integration von Regulatory Sandboxes und Pilot Programs\n• Aufbau von Relationships mit Regulatoren und Aufsichtsbehörden\n• Implementation von Privacy by Design und Security by Design Prinzipien\n• Entwicklung von Thought Leadership und Industry Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Metriken und KPIs sind für die Bewertung der Effektivität einer ISO 27001 Risikoanalyse entscheidend?',
        answer: "Die Messung der Effektivität einer ISO 27001 Risikoanalyse erfordert ein ausgewogenes Set von quantitativen und qualitativen Metriken, die sowohl die Qualität des Risikomanagement-Prozesses als auch dessen Geschäftsauswirkungen bewerten. Diese KPIs ermöglichen kontinuierliche Verbesserung und demonstrieren den Wert des Risikomanagements.\n\n📊 Prozess-Qualitäts-Metriken:\n• Risk Assessment Coverage Ratio zur Messung der Vollständigkeit der Asset-Abdeckung\n• Risk Register Accuracy Score basierend auf Audit-Findings und Validierungen\n• Stakeholder Engagement Level gemessen durch Teilnahme an Risikobewertungen\n• Risk Assessment Cycle Time für die Effizienz des Bewertungsprozesses\n• Risk Documentation Quality Index basierend auf Vollständigkeit und Nachvollziehbarkeit\n\n🎯 Risikomanagement-Effektivität:\n• Risk Reduction Rate durch implementierte Kontrollmaßnahmen\n• Control Effectiveness Score basierend auf regelmäßigen Assessments\n• Residual Risk Level im Verhältnis zu definierten Toleranzgrenzen\n• Risk Treatment Success Rate für implementierte Maßnahmen\n• Mean Time to Risk Mitigation für identifizierte High-Risk Scenarios\n\n🚨 Incident-basierte Metriken:\n• Predicted vs. Actual Incident Correlation zur Validierung der Risikobewertung\n• Security Incident Frequency und Severity Trends\n• Mean Time to Detection und Response für Sicherheitsvorfälle\n• Cost of Security Incidents im Verhältnis zu Risikobewertungen\n• Lessons Learned Integration Rate in die Risikoanalyse\n\n💰 Business Value und ROI-Metriken:\n• Return on Security Investment für Risikomanagement-Aktivitäten\n• Cost Avoidance durch proaktive Risikomanagement-Maßnahmen\n• Business Continuity Improvement durch Risikomanagement\n• Compliance Cost Optimization durch integrierte Risikoansätze\n• Stakeholder Confidence Index basierend auf Surveys und Feedback\n\n📈 Kontinuierliche Verbesserungs-Metriken:\n• Risk Management Maturity Level basierend auf etablierten Frameworks\n• Process Automation Rate für Risikomanagement-Aktivitäten\n• Risk Awareness Level in der Organisation durch Schulungen und Tests\n• Regulatory Compliance Score für risikorelevante Anforderungen\n• Innovation in Risk Management durch neue Methoden und Tools"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
