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
    console.log('Updating CIS Controls page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI eine kostenoptimierte CIS Controls Implementierungsstrategie, die maximalen Sicherheitsgewinn bei minimalen Investitionen generiert?",
        answer: "In Zeiten wirtschaftlicher Unsicherheit und begrenzter IT-Budgets ist eine kostenoptimierte CIS Controls Implementierung entscheidend für den Geschäftserfolg. ADVISORI entwickelt intelligente Priorisierungsstrategien, die durch datengestützte Risikobewertung und phased implementation maximale Sicherheitsverbesserungen mit minimalen Investitionen erzielen und schnelle ROI-Realisierung ermöglichen.\n\n💰 Strategic Investment Optimization:\n• Risk-Based Prioritization: Intelligente Priorisierung der CIS Controls basierend auf individueller Bedrohungslage, Geschäftskritikalität und Cost-Benefit-Analyse für optimale Ressourcenallokation.\n• Quick-Win-Identification: Systematische Identifikation von High-Impact-Low-Cost-Maßnahmen, die sofortige Sicherheitsverbesserungen bei minimalen Investitionen liefern.\n• Phased Implementation Strategy: Entwicklung von Implementierungsphasen, die schnelle Erfolge demonstrieren und kontinuierliche Budget-Freigaben für weitere Maßnahmen rechtfertigen.\n• Existing Infrastructure Leveraging: Maximale Nutzung vorhandener Security-Tools und -Infrastruktur zur Kostenreduzierung bei CIS Controls Umsetzung.\n\n📊 Data-Driven Cost-Benefit Analysis:\n• Quantified Risk Reduction Modeling: Präzise Quantifizierung der Risikoreduktion durch spezifische CIS Controls zur Rechtfertigung von Investitionsentscheidungen.\n• Total Cost of Ownership (TCO) Analysis: Ganzheitliche Betrachtung aller Kosten inklusive Personal, Training, Maintenance und Opportunity Costs für fundierte Budgetplanung.\n• Comparative Framework Analysis: Vergleichende Analyse verschiedener Security Frameworks zur Identifikation der kosteneffizientesten Compliance-Strategie.\n• ROI-Tracking und Performance Measurement: Kontinuierliche Messung des Return on Investment durch reduzierte Incidents, Ausfallzeiten und Compliance-Kosten.\n\n🔧 Efficiency-Driven Implementation Approach:\n• Automation-First Strategy: Priorisierung automatisierbarer CIS Controls zur Reduzierung langfristiger Operational Expenditures und Personal-Dependencies.\n• Cloud-Native Solutions: Nutzung von Cloud-basierten Security Services zur Vermeidung hoher Capital Expenditures für On-Premise-Hardware.\n• Shared Service Models: Entwicklung von Shared Security Services für mehrere Business Units zur Kostenverteilung und Effizienzsteigerung.\n• Vendor Consolidation: Strategische Konsolidierung von Security-Vendors zur Erzielung von Volume-Discounts und reduzierten Management-Overheads."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche branchenspezifischen Anpassungen der CIS Controls sind erforderlich und wie gewährleistet ADVISORI compliance-konforme Implementierung in regulierten Industrien?",
        answer: "Verschiedene Branchen unterliegen spezifischen regulatorischen Anforderungen und Bedrohungslandschaften, die eine maßgeschneiderte Anpassung der CIS Controls erfordern. ADVISORI entwickelt branchenspezifische CIS Controls Implementierungen, die nicht nur generische Cybersicherheit gewährleisten, sondern auch industry-specific compliance requirements erfüllen und sektor-typische Risiken adressieren.\n\n🏦 Financial Services & Banking:\n• PCI-DSS Integration: Nahtlose Integration der CIS Controls mit Payment Card Industry Standards für umfassenden Zahlungsverkehrsschutz.\n• SWIFT Customer Security Programme (CSP): Spezielle Anpassung für Banken mit SWIFT-Anbindung zur Erfüllung der CSP-Kontrollen.\n• Anti-Money Laundering (AML) Systems Protection: Besonderer Schutz von AML-Systemen und Transaction Monitoring Plattformen.\n• Regulatory Reporting Security: Sichere Implementierung von Meldewesen-Systemen für BaFin, EBA und andere Aufsichtsbehörden.\n\n🏥 Healthcare & Pharmaceuticals:\n• HIPAA Compliance Integration: Anpassung der CIS Controls zur Erfüllung der Health Insurance Portability and Accountability Act Anforderungen.\n• FDA 21 CFR Part 11: Integration der Electronic Records and Electronic Signatures Regulations in die CIS Controls Architektur.\n• Medical Device Security: Spezielle Controls für IoT Medical Devices und Connected Health Platforms.\n• Clinical Trial Data Protection: Erweiterte Data Governance Controls für Clinical Research und Patient Data Management.\n\n🏭 Critical Infrastructure & Manufacturing:\n• ICS/SCADA Security Integration: Anpassung der CIS Controls für Industrial Control Systems und Operational Technology Umgebungen.\n• NERC CIP Compliance: Integration der North American Electric Reliability Corporation Critical Infrastructure Protection Standards.\n• Supply Chain Security: Erweiterte Third-Party-Risk-Management Controls für komplexe Zulieferer-Netzwerke.\n• Safety System Protection: Spezielle Controls zum Schutz sicherheitskritischer Systeme und Notfall-Shutdown-Mechanismen.\n\n⚖️ Legal & Professional Services:\n• Attorney-Client Privilege Protection: Besondere Data Classification und Encryption Controls für privilegierte Kommunikation.\n• Court System Integration: Sichere Integration mit elektronischen Gerichtssystemen und E-Filing-Plattformen.\n• Evidence Chain of Custody: Spezielle Controls für digitale Beweissicherung und Forensic Readiness.\n• Multi-Jurisdiction Compliance: Anpassung an verschiedene Datenschutz- und Compliance-Anforderungen bei internationaler Tätigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie integriert ADVISORI die CIS Controls in bestehende Governance-Strukturen und schafft effektive Board-Level-Kommunikation über Cybersicherheitsrisiken?",
        answer: "Die erfolgreiche Integration der CIS Controls in Corporate Governance erfordert eine Transformation der traditionellen Board-Kommunikation über Cybersicherheit. ADVISORI entwickelt Governance-Frameworks, die technische CIS Controls in strategische Geschäftskennzahlen übersetzen und dem Board ermöglichen, fundierte Entscheidungen über Cybersicherheitsinvestitionen und -risiken zu treffen.\n\n📈 Executive Dashboard & KPI Development:\n• C-Suite Security Scorecards: Entwicklung von Executive Dashboards, die CIS Controls Status in Business-relevante Metriken übersetzen wie Risk Exposure, Business Impact und Investment ROI.\n• Board-Ready Reporting: Erstellung von Board-Präsentationen, die komplexe technische CIS Controls in verständliche Business Language transformieren.\n• Cyber Risk Quantification: Monetäre Quantifizierung von Cyber-Risiken und deren Reduktion durch CIS Controls für informed decision making.\n• Trend Analysis & Forecasting: Langzeit-Trend-Analyse der Cybersicherheits-Posture und Vorhersage zukünftiger Risiko-Entwicklungen.\n\n🏛️ Governance Integration & Oversight:\n• Cyber Governance Committee Establishment: Aufbau spezialisierter Board-Committees für Cybersecurity Oversight mit klaren Verantwortlichkeiten und Eskalationswegen.\n• Three Lines of Defense Integration: Integration der CIS Controls in das Three Lines of Defense Model für comprehensive risk management.\n• Regulatory Compliance Mapping: Mapping der CIS Controls gegen regulatorische Anforderungen für streamlined compliance reporting.\n• Crisis Communication Protocols: Entwicklung von Board-Level Crisis Communication Protocols für Cyber-Incidents.\n\n🎯 Strategic Risk Management Integration:\n• Enterprise Risk Management (ERM) Alignment: Integration der CIS Controls in bestehende ERM Frameworks für holistic risk consideration.\n• Business Continuity Planning: Enge Verzahnung von CIS Controls mit Business Continuity und Disaster Recovery Planning.\n• Strategic Planning Integration: Einbindung von Cybersecurity-Considerations in strategische Geschäftsplanung und M&A-Decisions.\n• Stakeholder Communication: Entwicklung von Stakeholder-spezifischer Kommunikation über Cybersecurity-Maßnahmen für Investoren, Kunden und Regulatoren.\n\n🔄 Continuous Governance Improvement:\n• Board Education Programs: Kontinuierliche Weiterbildung von Board-Mitgliedern über aktuelle Cyber-Bedrohungen und CIS Controls Effectiveness.\n• Governance Maturity Assessment: Regelmäßige Bewertung der Cyber-Governance-Reife und Identifikation von Verbesserungspotenzialen.\n• Industry Benchmarking: Vergleich der Cyber-Governance-Praktiken mit Industry Best Practices und Peer-Unternehmen.\n• Regulatory Update Integration: Systematische Integration neuer regulatorischer Anforderungen in bestehende CIS Controls Governance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie stellt ADVISORI sicher, dass CIS Controls Implementierungen auch bei Unternehmenstransformationen, Merger & Acquisitions sowie Spin-offs resilient und adaptiv bleiben?",
        answer: "Unternehmenstransformationen stellen eine besondere Herausforderung für Cybersicherheits-Frameworks dar, da sie oft bestehende Sicherheitsarchitekturen destabilisieren und neue Risiken schaffen. ADVISORI entwickelt adaptive CIS Controls Implementierungen, die nicht nur transformations-resilient sind, sondern auch als strategische Enabler für successful M&A-Integration und Corporate Restructuring fungieren.\n\n🔄 Transformation-Ready Architecture Design:\n• Modular Security Architecture: Design von CIS Controls mit modularen, loose-coupled Komponenten, die schnelle Rekonfiguration bei Organizational Changes ermöglichen.\n• Scalable Infrastructure: Implementation skalierbarer Security-Infrastrukturen, die sowohl Downsizing als auch rapid expansion ohne Security-Kompromisse unterstützen.\n• Technology-Agnostic Frameworks: Entwicklung technology-agnostischer CIS Controls, die unabhängig von spezifischen Vendor-Lösungen funktionieren.\n• Portable Security Policies: Erstellung übertragbarer Security Policies und Procedures, die schnell an neue Organizational Structures angepasst werden können.\n\n🤝 M&A Security Integration Excellence:\n• Due Diligence Security Assessment: Comprehensive Cyber-Security Due Diligence für M&A-Transaktionen zur Identifikation von Security-Risiken und Integration-Challenges.\n• Day-One Security Readiness: Vorbereitung von Day-One Integration Plans, die kritische Security Controls vom ersten Tag der Integration gewährleisten.\n• Cultural Integration Programs: Change Management Programme zur Integration verschiedener Security-Kulturen und -Praktiken in unified CIS Controls Frameworks.\n• Synergy Realization: Identifikation und Realisierung von Security-Synergien durch Consolidation redundanter Controls und Optimization von Security-Spend.\n\n💼 Spin-off & Divestiture Support:\n• Asset Separation Planning: Systematische Planung der Security-Asset-Separation bei Spin-offs zur Gewährleistung der Cybersicherheit für beide Entities.\n• Independent Security Establishment: Rapid Establishment unabhängiger CIS Controls für ausgegliederte Business Units.\n• Transition Service Agreements: Definition von Security-focused Transition Service Agreements für graduelle Trennung komplexer IT-Landschaften.\n• Intellectual Property Protection: Besondere Controls zum Schutz von Intellectual Property während Separation-Prozessen.\n\n🚀 Business Transformation Enablement:\n• Digital Transformation Security: Integration von CIS Controls in Digital Transformation Initiatives zur Sicherstellung security-by-design bei neuen digitalen Services.\n• Agile Security Operations: Anpassung der CIS Controls an agile Arbeitsweisen und DevOps-Praktiken für increased business agility.\n• Cloud Migration Security: Spezielle CIS Controls für Cloud-Migration-Projekte zur Gewährleistung seamless security during transformation.\n• Cultural Change Management: Begleitung organisatorischer Veränderungen durch Security-Culture-Transformation und Mitarbeiter-Enablement."
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
