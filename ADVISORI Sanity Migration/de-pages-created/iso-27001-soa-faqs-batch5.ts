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
    console.log('Updating ISO 27001 SOA page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-soa' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-soa" not found')
    }
    
    // Create new FAQs for SOA best practices and advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Best Practices haben sich für die SOA-Entwicklung in verschiedenen Branchen bewährt?',
        answer: "Die SOA-Entwicklung variiert je nach Branche erheblich, da unterschiedliche Regulierungen, Geschäftsmodelle und Risikoprofile spezifische Anforderungen stellen. Bewährte branchenspezifische Praktiken können als Orientierung dienen und die Effizienz der SOA-Entwicklung erheblich steigern.\n\n🏦 Finanzdienstleistungen und Banking:\n• Integration von DORA, MaRisk und BAIT-Anforderungen in die Control-Bewertung\n• Besondere Berücksichtigung von Operational Resilience und Business Continuity\n• Schwerpunkt auf Datenintegrität, Transaktionssicherheit und Fraud Prevention\n• Umfassende Bewertung von Third-Party-Risk-Management und Outsourcing-Controls\n• Integration von Stress-Testing und Szenario-Analysen in die Risikobewertung\n\n🏥 Gesundheitswesen und Medizintechnik:\n• Strikte Anwendung von HIPAA, MDR und anderen medizinischen Regulierungen\n• Besondere Betonung von Patient Data Protection und Medical Device Security\n• Integration von Clinical Trial Data Integrity und Research Data Management\n• Berücksichtigung von Telemedicine und Remote Patient Monitoring\n• Schwerpunkt auf Interoperabilität und Health Information Exchange\n\n🏭 Kritische Infrastrukturen und Energie:\n• Vollständige Integration von NIS2-Richtlinie und IT-Sicherheitsgesetz\n• Besondere Berücksichtigung von Industrial Control Systems und SCADA-Sicherheit\n• Schwerpunkt auf Physical Security und Supply Chain Protection\n• Integration von Cyber-Physical Systems und IoT-Security\n• Berücksichtigung von National Security und Critical Infrastructure Protection\n\n☁️ Cloud-Provider und Technologieunternehmen:\n• Integration von SOC 2, ISO 27017 und Cloud Security Alliance Standards\n• Besondere Betonung von Multi-Tenancy und Data Segregation\n• Schwerpunkt auf DevSecOps und Continuous Security Integration\n• Berücksichtigung von Global Data Protection und Cross-Border Compliance\n• Integration von API Security und Microservices Architecture\n\n🚗 Automotive und Manufacturing:\n• Integration von ISO 21434 und UN-ECE WP.29 für Automotive Cybersecurity\n• Besondere Berücksichtigung von Connected Vehicle Security und V2X Communication\n• Schwerpunkt auf Supply Chain Security und Component Authenticity\n• Integration von Industry 4.0 und Smart Manufacturing Security\n• Berücksichtigung von Product Lifecycle Security und Update Management\n\n✈️ Luft und Raumfahrt:\n• Integration von DO-326A und anderen Aviation Security Standards\n• Besondere Betonung von Safety-Critical Systems und Fail-Safe Mechanisms\n• Schwerpunkt auf Secure Communication und Navigation Systems\n• Berücksichtigung von International Aviation Regulations und Export Controls\n• Integration von Unmanned Systems und Autonomous Vehicle Security\n\n🛒 E-Commerce und Retail:\n• Strikte Anwendung von PCI DSS und Payment Security Standards\n• Besondere Berücksichtigung von Customer Data Protection und Privacy\n• Schwerpunkt auf Fraud Detection und Transaction Monitoring\n• Integration von Omnichannel Security und Mobile Commerce\n• Berücksichtigung von Supply Chain Transparency und Product Authenticity"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie entwickelt man eine SOA für komplexe, multi-nationale Organisationen?',
        answer: "Die SOA-Entwicklung für multi-nationale Organisationen erfordert eine sophisticated Herangehensweise, die verschiedene rechtliche Rahmen, kulturelle Unterschiede und operative Komplexitäten berücksichtigt. Eine erfolgreiche globale SOA balanciert Standardisierung mit lokaler Anpassungsfähigkeit.\n\n🌍 Globale Governance und Koordination:\n• Etablierung einer zentralen ISMS-Governance mit regionalen Koordinatoren\n• Definition einheitlicher Standards und Methoden bei Berücksichtigung lokaler Besonderheiten\n• Implementierung globaler Kommunikations und Abstimmungsprozesse\n• Aufbau interkultureller Kompetenz und Verständnis für regionale Unterschiede\n• Koordination zwischen verschiedenen Zeitzonen und Arbeitsweisen\n\n⚖️ Multi-jurisdiktionale Compliance-Harmonisierung:\n• Mapping aller relevanten nationalen und regionalen Regulierungen\n• Identifikation von Überschneidungen und Konflikten zwischen verschiedenen Rechtssystemen\n• Entwicklung eines harmonisierten Compliance-Frameworks mit lokalen Anpassungen\n• Integration von Data Residency und Sovereignty-Anforderungen\n• Berücksichtigung von Export Controls und International Trade Regulations\n\n🏢 Organisatorische Komplexität und Struktur:\n• Berücksichtigung verschiedener Geschäftsmodelle und operativer Strukturen\n• Integration von Joint Ventures, Partnerships und Akquisitionen\n• Harmonisierung verschiedener IT-Landschaften und Legacy-Systeme\n• Koordination zwischen zentralen und dezentralen Organisationseinheiten\n• Management von Matrix-Organisationen und komplexen Reporting-Strukturen\n\n🔄 Skalierbare Implementierungsstrategien:\n• Entwicklung eines phasenweisen Rollout-Plans mit Pilot-Regionen\n• Aufbau regionaler Kompetenzzentren und Expertise-Hubs\n• Implementierung standardisierter Tools und Plattformen mit lokalen Anpassungen\n• Entwicklung von Change Management-Strategien für verschiedene Kulturen\n• Etablierung von Feedback-Mechanismen und kontinuierlicher Verbesserung\n\n📊 Zentrale vs. dezentrale Risikobewertung:\n• Balance zwischen globalen Risiko-Standards und lokalen Risiko-Assessments\n• Integration regionaler Bedrohungslandschaften und Sicherheitsherausforderungen\n• Koordination zwischen globalen und lokalen Incident Response-Capabilities\n• Harmonisierung von Risiko-Appetit und Toleranz-Levels\n• Entwicklung globaler Risiko-Dashboards mit regionalen Deep-Dives\n\n🛠️ Technische Integration und Standardisierung:\n• Implementierung globaler ISMS-Plattformen mit regionalen Anpassungen\n• Standardisierung von Security Tools und Monitoring-Systemen\n• Integration verschiedener IT-Infrastrukturen und Cloud-Umgebungen\n• Harmonisierung von Identity Management und Access Control-Systemen\n• Koordination von Backup, Recovery und Business Continuity-Strategien\n\n👥 Kulturelle Sensibilität und lokale Anpassung:\n• Berücksichtigung kultureller Unterschiede in Sicherheitsbewusstsein und Compliance-Verhalten\n• Anpassung von Training und Awareness-Programmen an lokale Gegebenheiten\n• Integration lokaler Sprachen und Kommunikationsstile\n• Respekt für regionale Geschäftspraktiken und Arbeitsweisen\n• Aufbau lokaler Champions und Change Agents"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie integriert man emerging Technologies wie KI, IoT und Blockchain in die SOA?',
        answer: "Die Integration emerging Technologies in die SOA erfordert eine vorausschauende Herangehensweise, die sowohl aktuelle Implementierungen als auch zukünftige Entwicklungen berücksichtigt. Eine zukunftsorientierte SOA schafft den Rahmen für sichere Innovation und technologische Evolution.\n\n🤖 Künstliche Intelligenz und Machine Learning:\n• Bewertung von AI/ML-spezifischen Sicherheitsrisiken wie Adversarial Attacks und Model Poisoning\n• Integration von AI Ethics und Algorithmic Transparency-Anforderungen\n• Berücksichtigung von Data Quality, Bias Prevention und Fairness-Controls\n• Bewertung von Explainable AI und Model Interpretability-Anforderungen\n• Integration von AI Governance und Responsible AI-Frameworks\n\n📱 Internet of Things und Edge Computing:\n• Bewertung von Device Security und Hardware-based Security Controls\n• Integration von Network Segmentation und Micro-Segmentation für IoT\n• Berücksichtigung von Device Lifecycle Management und Secure Update-Mechanismen\n• Bewertung von Edge Computing Security und Distributed Processing\n• Integration von IoT-spezifischen Monitoring und Anomaly Detection\n\n🔗 Blockchain und Distributed Ledger Technologies:\n• Bewertung von Consensus Mechanism Security und Network Resilience\n• Integration von Smart Contract Security und Code Audit-Anforderungen\n• Berücksichtigung von Wallet Security und Key Management\n• Bewertung von Privacy Coins und Anonymity-Features\n• Integration von Regulatory Compliance für Cryptocurrency und DeFi\n\n🌐 Extended Reality und Metaverse:\n• Bewertung von VR/AR-spezifischen Sicherheitsrisiken und Privacy-Concerns\n• Integration von Avatar Security und Virtual Identity Management\n• Berücksichtigung von Immersive Environment Security und Spatial Computing\n• Bewertung von Haptic Feedback Security und Sensory Data Protection\n• Integration von Virtual Asset Protection und Digital Rights Management\n\n🔮 Quantum Computing und Post-Quantum Cryptography:\n• Vorbereitung auf Quantum-Threats für bestehende Kryptographie\n• Integration von Quantum-Safe Algorithms und Migration-Strategien\n• Bewertung von Quantum Key Distribution und Quantum-enhanced Security\n• Berücksichtigung von Quantum Supremacy Timeline und Impact Assessment\n• Integration von Hybrid Classical-Quantum Security Architectures\n\n🧬 Biotechnology und Biometric Systems:\n• Bewertung von Biometric Data Protection und Template Security\n• Integration von Genetic Data Privacy und Biobank Security\n• Berücksichtigung von Medical Device Security und Patient Safety\n• Bewertung von Synthetic Biology Security und Dual-Use Research\n• Integration von Biometric Spoofing Prevention und Liveness Detection\n\n🚀 Space Technology und Satellite Communications:\n• Bewertung von Satellite Security und Space-based Infrastructure Protection\n• Integration von Ground Station Security und Uplink/Downlink Protection\n• Berücksichtigung von Space Debris Mitigation und Collision Avoidance\n• Bewertung von Inter-satellite Communication Security\n• Integration von Space Weather Resilience und Radiation Hardening"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Erfolgsmessungen und ROI-Bewertungen sind für SOA-Investitionen relevant?',
        answer: "Die Bewertung des Return on Investment für SOA-Implementierungen erfordert eine ganzheitliche Betrachtung quantitativer und qualitativer Faktoren. Eine systematische ROI-Bewertung demonstriert den Business Value und unterstützt zukünftige Investitionsentscheidungen.\n\n💰 Direkte finanzielle Einsparungen:\n• Reduzierung von Cyber-Versicherungsprämien durch nachweisbare Risikominimierung\n• Vermeidung von Compliance-Strafen und regulatorischen Sanktionen\n• Kosteneinsparungen durch Automatisierung und Effizienzsteigerungen\n• Reduzierung von Audit-Kosten durch verbesserte Compliance-Readiness\n• Einsparungen bei Incident Response und Breach-Kosten\n\n📈 Geschäftswert und Revenue-Impact:\n• Zugang zu neuen Märkten durch ISO 27001-Zertifizierung\n• Erhöhte Kundenzufriedenheit und Customer Retention durch Vertrauen\n• Verbesserte Verhandlungsposition bei Vertragsabschlüssen\n• Premium-Pricing für sicherheitszertifizierte Services\n• Beschleunigte Sales-Zyklen durch Compliance-Nachweis\n\n⏱️ Operative Effizienz und Produktivität:\n• Reduzierung von Downtime durch verbesserte Incident Prevention\n• Beschleunigte Entscheidungsfindung durch strukturierte Risikobewertung\n• Verbesserte Ressourcenallokation durch risikobasierte Priorisierung\n• Reduzierung von Doppelarbeit durch standardisierte Prozesse\n• Erhöhte Mitarbeiterproduktivität durch klare Sicherheitsrichtlinien\n\n🛡️ Risikominimierung und Schadensvermeidung:\n• Quantifizierung vermiedener Sicherheitsvorfälle und deren Kosten\n• Reduzierung von Reputationsschäden und Brand-Value-Verlust\n• Minimierung von Business Disruption und Operational Impact\n• Vermeidung von Legal Liabilities und Litigation-Kosten\n• Schutz vor Intellectual Property Theft und Competitive Disadvantage\n\n📊 Compliance und Governance-Vorteile:\n• Reduzierung von Compliance-Aufwand durch systematische Dokumentation\n• Verbesserte Audit-Performance und reduzierte Finding-Remediation\n• Erhöhte Stakeholder-Confidence und Investor Relations\n• Verbesserte Board-Reporting und Executive Visibility\n• Stärkung der Corporate Governance und Risk Management\n\n🎯 Strategische und langfristige Vorteile:\n• Aufbau von Organizational Resilience und Adaptive Capacity\n• Entwicklung von Security-as-Competitive-Advantage\n• Verbesserung der Digital Transformation-Readiness\n• Stärkung der Innovation-Capability durch sichere Experimentation\n• Aufbau von Talent Attraction und Retention durch Security Excellence\n\n📋 Messbare KPIs und Metriken:\n• Mean Time to Detection und Mean Time to Response für Security Incidents\n• Compliance Score und Audit Finding-Trends\n• Security Awareness Training-Completion und Phishing-Simulation-Results\n• Vendor Risk Assessment-Scores und Third-Party-Compliance-Rates\n• Business Continuity Test-Results und Recovery Time Objectives\n\n🔄 Kontinuierliche Wertschöpfung:\n• Entwicklung einer Continuous Improvement-Kultur\n• Aufbau von Internal Security Expertise und Capability\n• Schaffung von Scalable Security Processes für Wachstum\n• Etablierung von Security-by-Design in allen Business Processes\n• Transformation zu einer Security-First Organization"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
