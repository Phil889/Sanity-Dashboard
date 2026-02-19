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
    console.log('Updating CIS Controls Top 20 Implementation page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-umsetzung-top-20-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-umsetzung-top-20-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie adressiert ADVISORI die besonderen Herausforderungen der CIS Controls Implementation in regulierten Branchen wie Finanzdienstleistungen und Gesundheitswesen?",
        answer: "Regulierte Branchen stehen vor einzigartigen Herausforderungen bei der Cybersecurity-Implementation aufgrund strenger Compliance-Anforderungen, kritischer Datenverarbeitung und hoher Verfügbarkeitsanforderungen. ADVISORI hat spezialisierte Methodiken entwickelt, die die Top 20 CIS Controls nahtlos in branchenspezifische Regulatory Frameworks integrieren und dabei sowohl Compliance als auch operative Exzellenz gewährleisten.\n\n🏦 Finanzdienstleistungs-spezifische Implementation:\n• DORA-Integration: Harmonisierung der CIS Controls mit den Digital Operational Resilience Act-Anforderungen für ICT-Risikomanagement, Incident Reporting und Third-Party Risk Management.\n• PCI DSS-Alignment: Strategische Mapping der Controls auf PCI DSS-Anforderungen für nahtlose Kartenverarbeitungs-Compliance ohne Doppelaufwände.\n• MaRisk/BAIT-Konformität: Integration deutscher Banking-Regulations in die Control-Implementation für vollständige BaFin-Compliance bei Kreditinstituten.\n• Real-Time Fraud Detection: Spezialisierte Implementation der Monitoring-Controls (6, 8, 12) für hochfrequente Transaktionsüberwachung und Fraud Prevention.\n\n🏥 Healthcare-spezifische Sicherheitsanforderungen:\n• HIPAA-Compliance Integration: Vollständige Ausrichtung der CIS Controls auf HIPAA Security Rule-Anforderungen für Protected Health Information (PHI) mit erweiterten Access Controls.\n• Medical Device Security: Spezialisierte Implementation für IoMT (Internet of Medical Things) und medizinische Geräte-Netzwerke mit besonderen Verfügbarkeitsanforderungen.\n• Patient Safety Focus: Priorisierung von Controls, die die Verfügbarkeit kritischer Systeme gewährleisten, ohne die Patientenversorgung zu beeinträchtigen.\n• Research Data Protection: Erweiterte Datenschutz-Controls für klinische Forschungsdaten und Intellectual Property im Pharmabereich.\n\n🎯 ADVISORI's Regulatory Excellence Framework:\n• Multi-Standard Mapping: Entwicklung von Control-Mappings, die gleichzeitig ISO 27001, SOC 2, NIS2 und branchenspezifische Standards erfüllen.\n• Audit-Ready Documentation: Strukturierte Evidenz-Sammlung und -Management für effiziente Regulatory Audits und Inspektionen.\n• Regulatory Change Management: Proaktive Überwachung regulatorischer Entwicklungen mit zeitnaher Anpassung der Control-Implementation.\n• Cross-Border Compliance: Unterstützung multinationaler Organisationen bei der Navigation komplexer, jurisdiktionsübergreifender Regulatory Landscapes."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielen die CIS Controls bei der Cybersecurity-Vorbereitung auf Quantencomputing und Post-Quantum-Kryptographie?",
        answer: "Die bevorstehende Ära des Quantencomputings stellt eine fundamentale Bedrohung für aktuelle Kryptographie-Standards dar und erfordert proaktive Vorbereitung. ADVISORI integriert Quantum-Readiness in die Top 20 CIS Controls Implementation, um sicherzustellen, dass Ihre Cybersecurity-Infrastruktur auch in der Post-Quantum-Ära resilient bleibt. Diese zukunftsorientierte Strategie schützt langfristige Investitionen und gewährleistet kryptographische Agilität.\n\n🔮 Quantum Threat Assessment & Preparation:\n• Cryptographic Inventory (Control 2): Systematische Identifikation und Katalogisierung aller kryptographischen Implementierungen in der IT-Infrastruktur für Quantum-Impact-Assessment.\n• Timeline-Based Risk Analysis: Bewertung der Quantum-Bedrohung verschiedener Kryptographie-Standards basierend auf aktuellen Quantum-Computing-Entwicklungsprognosen.\n• Data Classification for Quantum Risk (Control 3): Spezielle Klassifizierung von Daten basierend auf ihrer Sensitivität gegenüber zukünftigen Quantum-Angriffen ('Harvest Now, Decrypt Later').\n• Hybrid Security Models: Entwicklung von Sicherheitsarchitekturen, die sowohl klassische als auch Quantum-resistente Kryptographie unterstützen.\n\n🛡️ Post-Quantum Cryptography Integration:\n• Crypto-Agility Framework: Implementation flexibler kryptographischer Architekturen, die schnelle Algorithmus-Upgrades ohne Infrastruktur-Überholung ermöglichen.\n• NIST PQC Standards Adoption: Proaktive Integration der NIST Post-Quantum Cryptography Standards in Security-Controls sobald diese finalisiert sind.\n• Quantum-Safe Communication (Controls 11, 12): Upgrade von Netzwerk-Security-Controls für Quantum-resistente Kommunikationsprotokolle und VPN-Technologien.\n• Key Management Evolution (Control 14): Modernisierung der Schlüsselverwaltung für Post-Quantum-Schlüsselgrößen und -Lebenzyklen.\n\n🚀 Strategic Quantum Preparedness by ADVISORI:\n• Quantum Readiness Roadmap: Entwicklung von 5-10-Jahres-Roadmaps für stufenweise Migration zu Quantum-sicheren Technologien.\n• Research & Development Partnerships: Kooperationen mit führenden Quantum-Forschungseinrichtungen für Early Access zu neuen Sicherheitstechnologien.\n• Quantum Simulation Testing: Verwendung von Quantum-Simulatoren für Testing der Quantum-Resistenz implementierter Security-Controls.\n• Industry Collaboration: Teilnahme an Quantum-Readiness-Initiativen und Standardisierungskomitees für Best Practice-Entwicklung.\n\n🎯 Long-term Cryptographic Strategy:\n• Investment Protection: Sicherstellung, dass aktuelle Cybersecurity-Investitionen auch in der Post-Quantum-Ära werterhaltend sind.\n• Competitive Advantage: Positionierung als Quantum-Ready Organization für strategische Vorteile in sicherheitskritischen Märkten.\n• Regulatory Compliance: Vorbereitung auf kommende regulatorische Anforderungen für Quantum-sichere Kryptographie in kritischen Infrastrukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt die CIS Controls Implementation die Cybersecurity-Aspekte der digitalen Souveränität und Lieferkettensicherheit?",
        answer: "Digitale Souveränität und Lieferkettensicherheit sind zunehmend kritische Faktoren für strategische Unternehmenssicherheit und nationale Wirtschaftsinteressen. ADVISORI integriert diese geopolitischen Realitäten in die Top 20 CIS Controls Implementation, um Abhängigkeiten zu reduzieren, Supply Chain-Risiken zu minimieren und technologische Autonomie zu stärken. Diese Strategie schützt vor geopolitischen Cyber-Risiken und stärkt die strategische Unabhängigkeit.\n\n🌍 Digital Sovereignty durch strategische Control-Implementation:\n• Vendor Diversity Strategy (Control 2): Systematische Diversifizierung der Software- und Hardware-Lieferanten zur Reduktion von Single-Point-of-Failure und geopolitischen Abhängigkeiten.\n• Data Residency Controls (Control 3): Implementation strenger Datenresidenz-Kontrollen zur Gewährleistung, dass kritische Daten in gewünschten Jurisdiktionen verbleiben.\n• Critical Infrastructure Protection: Spezielle Härtung von Controls für Systeme, die als kritische nationale Infrastruktur klassifiziert sind.\n• Technology Stack Assessment: Bewertung der gesamten Technologie-Stack auf potenzielle Abhängigkeiten von kritischen Technologie-Lieferanten.\n\n🔗 Supply Chain Security Excellence:\n• Third-Party Risk Management (Control 15): Erweiterte Due Diligence und kontinuierliches Monitoring von Lieferanten mit Fokus auf Cybersecurity-Posture und geopolitische Risiken.\n• Software Bill of Materials (SBOM): Implementation umfassender SBOM-Tracking für alle Software-Komponenten zur Identifikation von Supply Chain-Schwachstellen.\n• Secure Development Lifecycle: Integration von Supply Chain Security in Entwicklungsprozesse zur Minimierung von Third-Party-Code-Risiken.\n• Vendor Security Assessment: Systematische Bewertung und Monitoring der Cybersecurity-Standards aller kritischen Lieferanten.\n\n🛡️ Geopolitical Risk Mitigation:\n• Technology Independence Roadmap: Entwicklung von Strategien zur schrittweisen Reduktion von Abhängigkeiten von kritischen Technologie-Anbietern.\n• Alternative Technology Evaluation: Kontinuierliche Bewertung alternativer Technologie-Optionen für kritische Systeme und Prozesse.\n• Crisis Response Planning: Spezielle Incident Response-Pläne für geopolitisch motivierte Cyberangriffe und Supply Chain-Disruptions.\n• Intelligence Integration: Integration von Geopolitical Threat Intelligence in Security Operations und Risk Assessment-Prozesse.\n\n🎯 ADVISORI's Sovereignty-Focused Approach:\n• Regulatory Compliance Strategy: Navigation komplexer internationaler Regulations bezüglich Datentransfer, Technologie-Export und kritischer Infrastrukturen.\n• Strategic Technology Planning: Langfristige Technologie-Roadmaps, die geopolitische Entwicklungen und Technologie-Souveränitäts-Ziele berücksichtigen.\n• Public-Private Partnership: Kooperation mit Regierungsinitiativen und Industrie-Konsortien für kollektive Cybersecurity und digitale Souveränität.\n• Innovation Ecosystem Development: Unterstützung beim Aufbau regionaler Technologie-Ökosysteme zur Reduktion strategischer Abhängigkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie gewährleistet ADVISORI, dass die CIS Controls Implementation die Cybersecurity-Herausforderungen von Remote Work und hybriden Arbeitsmodellen adressiert?",
        answer: "Die permanente Transformation zu hybriden Arbeitsmodellen hat die Cybersecurity-Landschaft fundamental verändert und traditionelle Perimeter-basierte Sicherheitsmodelle obsolet gemacht. ADVISORI entwickelt CIS Controls-Implementierungen, die speziell für diese neue Realität optimiert sind und Zero Trust-Prinzipien, Cloud-native Sicherheit und dezentrale Arbeitsmodelle unterstützen. Diese moderne Herangehensweise ermöglicht sichere Produktivität unabhängig vom Arbeitsort.\n\n🏠 Remote Work Security Framework:\n• Endpoint Security Excellence (Controls 4, 5): Umfassende Härtung und Management aller Remote-Endpoints mit automatisierten Patch-Management und Konfigurationsstandards für BYOD- und Corporate-Geräte.\n• Identity-Centric Security (Control 6): Implementation robuster Multi-Faktor-Authentifizierung und Identity Governance für alle Remote-Zugriffe mit Risk-based Authentication.\n• Secure Remote Access (Control 12): Deployment von Zero Trust Network Access (ZTNA) und SASE-Lösungen für sichere, performante Remote-Konnektivität.\n• Data Protection in Motion (Control 13): Verschlüsselung und DLP-Kontrollen für Daten, die zwischen Remote-Standorten und Unternehmensressourcen übertragen werden.\n\n🌐 Hybrid Work Environment Optimization:\n• Cloud-Native Security Controls: Adaptation der CIS Controls für Multi-Cloud und Hybrid-Cloud-Umgebungen, die Remote Work ermöglichen.\n• Collaboration Platform Security: Spezialisierte Sicherheitskontrollen für Videokonferenz-, Chat- und Collaboration-Tools mit Focus auf Data Leakage Prevention.\n• Network Segmentation Evolution (Control 11): Neugestaltung der Netzwerksegmentierung für Hub-and-Spoke-Modelle mit Remote-Offices und Home-Offices.\n• Mobile Device Management (MDM): Integration fortgeschrittener MDM/UEM-Lösungen für sichere Nutzung mobiler Geräte in geschäftskritischen Prozessen.\n\n🔒 Zero Trust Architecture Implementation:\n• Continuous Verification: Implementation kontinuierlicher Identitäts- und Geräteverifikation basierend auf Verhalten, Kontext und Risk Scoring.\n• Least Privilege Access: Dynamische Rechtevergabe basierend auf aktuellen Zugriffsanforderungen und Risikobewertungen.\n• Microsegmentation: Granulare Netzwerksegmentierung, die auch Remote-Endpoints und Cloud-Ressourcen umfasst.\n• Conditional Access Policies: Intelligente Access-Policies, die Location, Device Trust Level und User Behavior berücksichtigen.\n\n🎯 ADVISORI's Future-of-Work Security Strategy:\n• Employee Experience Optimization: Balance zwischen Sicherheitsanforderungen und User Experience für maximale Akzeptanz und Produktivität.\n• Cultural Change Management: Unterstützung bei der Transformation der Sicherheitskultur für dezentrale, vertrauensbasierte Arbeitsmodelle.\n• Continuous Monitoring Enhancement: Erweiterte Monitoring-Capabilities für Visibility in dezentrale IT-Landschaften und Remote-Aktivitäten.\n• Scalable Security Architecture: Design von Sicherheitsarchitekturen, die mit der geografischen und organisatorischen Expansion von Remote Work skalieren."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
