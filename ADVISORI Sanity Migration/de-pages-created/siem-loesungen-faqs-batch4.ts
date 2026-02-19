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
    console.log('Updating SIEM Lösungen page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-loesungen' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-loesungen" not found')
    }
    
    // Create new FAQs for SIEM managed services and outsourcing
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Vorteile bieten Managed SIEM Services und wann ist Outsourcing die richtige Entscheidung?',
        answer: "Managed SIEM Services bieten Organisationen die Möglichkeit, von professioneller Cybersecurity-Expertise zu profitieren, ohne umfangreiche interne Ressourcen aufbauen zu müssen. Die Entscheidung für Managed Services sollte strategisch getroffen werden und verschiedene organisatorische, technische und wirtschaftliche Faktoren berücksichtigen.\n\n🎯 Strategische Vorteile von Managed SIEM Services:\n• Zugang zu spezialisierter Cybersecurity-Expertise und Best Practices ohne interne Rekrutierung\n• Kontinuierliche Bedrohungsüberwachung durch dedizierte Security Operations Centers\n• Skalierbare Service-Level basierend auf aktuellen Anforderungen und Budget-Constraints\n• Reduzierte Time-to-Value durch vorkonfigurierte Use Cases und bewährte Implementierungsansätze\n• Entlastung interner IT-Teams für strategische Projekte und Core Business-Aktivitäten\n\n💰 Wirtschaftliche Überlegungen und TCO-Optimierung:\n• Vorhersagbare Betriebskosten durch Service-Level-Agreements und transparente Pricing-Modelle\n• Eliminierung von Rekrutierungs- und Training-Kosten für spezialisierte Cybersecurity-Rollen\n• Reduzierte Infrastruktur-Investitionen durch Shared Service-Modelle\n• Optimierte Tool-Lizenzierung durch Economies of Scale bei Managed Service Providern\n• Risikotransfer für Compliance und regulatorische Anforderungen an spezialisierte Anbieter\n\n🔧 Technische Service-Capabilities:\n• Advanced Threat Detection durch AI-gestützte Analytics und Machine Learning-Modelle\n• Proactive Threat Hunting durch erfahrene Security-Analysten\n• Incident Response Services mit definierten Eskalations- und Kommunikationsprozessen\n• Compliance Reporting und Audit-Unterstützung für verschiedene regulatorische Frameworks\n• Integration mit bestehenden IT-Infrastrukturen und Security-Tools\n\n🏢 Organisatorische Entscheidungskriterien:\n• Verfügbarkeit interner Cybersecurity-Expertise und Rekrutierungsmöglichkeiten\n• Kritikalität der Cybersecurity-Funktion für das Core Business der Organisation\n• Compliance-Anforderungen und regulatorische Verpflichtungen\n• Budget-Constraints und Präferenzen für CAPEX versus OPEX-Modelle\n• Strategische Fokussierung auf Kernkompetenzen versus Cybersecurity als Differenzierungsfaktor\n\n🔄 Hybrid-Modelle und Service-Integration:\n• Co-Managed Services mit geteilten Verantwortlichkeiten zwischen internen Teams und Providern\n• Selective Outsourcing spezifischer SIEM-Funktionen wie Threat Hunting oder Compliance Reporting\n• Managed Detection and Response Services als Ergänzung zu internen SOC-Capabilities\n• Consulting und Advisory Services für strategische SIEM-Entwicklung\n• Training und Knowledge Transfer für interne Capability-Entwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie gestaltet man effektive Vendor-Beziehungen für SIEM Lösungen und welche Governance-Strukturen sind erforderlich?',
        answer: "Effektive Vendor-Beziehungen sind entscheidend für den langfristigen Erfolg von SIEM Lösungen. Eine strategische Herangehensweise an Vendor Management schafft nicht nur operative Effizienz, sondern auch Innovation-Partnerships, die zur kontinuierlichen Verbesserung der Cybersecurity-Posture beitragen.\n\n🤝 Strategisches Vendor Relationship Management:\n• Entwicklung langfristiger Partnerships basierend auf gemeinsamen Zielen und Wertschöpfung\n• Regular Business Reviews für Alignment zwischen Vendor-Roadmaps und organisatorischen Anforderungen\n• Innovation Collaboration für Early Access zu neuen Features und Technologien\n• Executive Sponsorship und C-Level Engagement für strategische Vendor-Beziehungen\n• Performance-basierte Partnerships mit Incentives für Continuous Improvement\n\n📋 Governance-Strukturen und Oversight:\n• Vendor Governance Committees mit Cross-functional Representation\n• Defined Roles und Responsibilities für Vendor Management-Aktivitäten\n• Regular Vendor Performance Reviews basierend auf objektiven Metriken und KPIs\n• Risk Management Frameworks für Vendor-spezifische Risiken und Mitigation-Strategien\n• Escalation Procedures für Performance-Issues und Conflict Resolution\n\n📊 Performance Management und SLA-Überwachung:\n• Comprehensive Service Level Agreements mit messbaren Performance-Indikatoren\n• Real-time Performance-Dashboards für kontinuierliche Vendor-Überwachung\n• Regular SLA-Reviews und Anpassungen basierend auf evolvierende Anforderungen\n• Penalty und Incentive-Strukturen für Performance-Accountability\n• Third-party Audits und Independent Performance-Validierung\n\n🔐 Security und Compliance-Governance:\n• Vendor Security Assessments und Due Diligence-Prozesse\n• Data Protection und Privacy-Agreements für sensitive Informationen\n• Compliance-Monitoring für regulatorische Anforderungen\n• Incident Response-Koordination zwischen Organisation und Vendor\n• Regular Security-Reviews und Vulnerability-Assessments\n\n💼 Commercial Management und Contract-Optimization:\n• Strategic Sourcing und Competitive Benchmarking für Cost-Optimization\n• Contract Lifecycle Management für proaktive Renewal-Planung\n• Commercial Terms-Optimization basierend auf Usage-Patterns und Business-Growth\n• Multi-vendor Strategies für Risk-Mitigation und Negotiation-Leverage\n• Total Cost of Ownership-Tracking für informed Decision-Making\n\n🔄 Continuous Improvement und Innovation:\n• Regular Innovation-Sessions und Technology-Roadmap-Discussions\n• Feedback-Loops für Product Development und Feature-Requests\n• Beta-Testing und Early Adopter-Programme für neue Capabilities\n• Knowledge Sharing und Best Practice-Exchange\n• Joint Go-to-Market-Strategien für Mutual Value-Creation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Disaster Recovery und Business Continuity Strategien sind für SIEM Lösungen kritisch?',
        answer: "Disaster Recovery und Business Continuity für SIEM Lösungen sind von kritischer Bedeutung, da Cybersecurity-Capabilities auch während Notfällen und Störungen aufrechterhalten werden müssen. Eine umfassende DR/BC-Strategie gewährleistet kontinuierliche Sicherheitsüberwachung und schnelle Wiederherstellung nach Ausfällen.\n\n🏗️ SIEM-spezifische DR/BC-Architektur:\n• Geografisch verteilte SIEM-Infrastrukturen für Redundancy und Failover-Capabilities\n• Real-time Data Replication zwischen Primary und Secondary SIEM-Standorten\n• Hot-Standby Konfigurationen für minimale Recovery Time Objectives\n• Cloud-basierte Backup-Strategien für hybride DR-Szenarien\n• Network Segmentation und Isolation für Schutz kritischer SIEM-Komponenten\n\n⏱️ Recovery Time und Recovery Point Objectives:\n• RTO-Definition basierend auf Business-Criticality verschiedener SIEM-Funktionen\n• RPO-Planung für akzeptable Datenverluste bei verschiedenen Disaster-Szenarien\n• Tiered Recovery-Strategien für verschiedene Service-Level und Prioritäten\n• Automated Failover-Mechanismen für kritische SIEM-Services\n• Manual Recovery-Procedures für komplexe Disaster-Szenarien\n\n📊 Datenmanagement und Backup-Strategien:\n• Comprehensive Backup-Strategien für SIEM-Konfigurationen, Rules und Historical Data\n• Incremental und Differential Backup-Approaches für Storage-Optimization\n• Cross-site Data Replication für Geographic Disaster-Protection\n• Data Integrity-Validation und Corruption-Detection für Backup-Quality\n• Retention Policies für verschiedene Datentypen und Compliance-Anforderungen\n\n🔧 Operational Continuity und Workflow-Preservation:\n• SOC-Continuity-Pläne für Alternative Operating-Locations\n• Remote Access-Capabilities für Distributed Security-Operations\n• Communication-Continuity für Incident Response und Stakeholder-Coordination\n• Alternative Tool-Access und Backup-Procedures für Critical Security-Functions\n• Cross-training und Skill-Redundancy für Key Personnel-Dependencies\n\n🧪 Testing und Validation-Strategien:\n• Regular DR-Testing mit realistischen Disaster-Szenarien\n• Tabletop Exercises für Procedure-Validation und Team-Preparedness\n• Automated Testing-Frameworks für Continuous DR-Readiness-Validation\n• Performance-Testing unter DR-Conditions für Capacity-Validation\n• Lessons Learned-Integration für Continuous DR-Improvement\n\n📋 Governance und Compliance-Considerations:\n• Regulatory Compliance für DR-Requirements in verschiedenen Jurisdiktionen\n• Documentation und Audit-Trails für DR-Procedures und Testing-Results\n• Vendor-Coordination für Managed Service-Continuity\n• Insurance und Risk-Transfer-Strategies für Residual DR-Risks\n• Executive Reporting und Board-Oversight für DR-Readiness"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie entwickelt man eine nachhaltige SIEM-Transformation-Strategie für Enterprise-Organisationen?',
        answer: "Eine nachhaltige SIEM-Transformation-Strategie für Enterprise-Organisationen erfordert einen ganzheitlichen Ansatz, der technische Innovation mit organisatorischer Entwicklung und strategischer Vision verbindet. Erfolgreiche Transformation schafft nicht nur kurzfristige Verbesserungen, sondern etabliert auch die Grundlage für kontinuierliche Cybersecurity-Evolution.\n\n🎯 Strategische Vision und Roadmap-Entwicklung:\n• Definition einer langfristigen Cybersecurity-Vision, die SIEM als zentralen Enabler positioniert\n• Multi-Jahres-Roadmap mit klaren Meilensteinen und messbaren Erfolgs-Kriterien\n• Integration in übergeordnete Digital Transformation und Business-Strategien\n• Stakeholder-Alignment auf Executive-Level für nachhaltige Unterstützung und Investment\n• Competitive Intelligence und Market-Trend-Analysis für zukunftsorientierte Planung\n\n🏢 Organisatorische Transformation und Change Management:\n• Cultural Change-Initiativen für die Adoption einer datengetriebenen Sicherheitskultur\n• Skill Development-Programme für bestehende Teams und neue Cybersecurity-Rollen\n• Organizational Design-Optimierung für effektive SIEM-Operations und Governance\n• Leadership Development für Cybersecurity-Management und Strategic Decision-Making\n• Cross-functional Collaboration-Frameworks für integrierte Security-Operations\n\n🔧 Technologie-Evolution und Architecture-Modernisierung:\n• Cloud-first Strategies für skalierbare und flexible SIEM-Architekturen\n• API-driven Integration-Platforms für Ecosystem-Connectivity und Tool-Orchestration\n• AI/ML-Integration für Advanced Analytics und Autonomous Security-Operations\n• Zero Trust Architecture-Implementation für moderne Threat-Landscapes\n• DevSecOps-Integration für Security-by-Design in Development-Processes\n\n📊 Data Strategy und Analytics-Maturity:\n• Enterprise Data Strategy-Entwicklung für unified Security-Analytics\n• Data Governance-Frameworks für Quality, Privacy und Compliance\n• Advanced Analytics-Capabilities für Predictive und Prescriptive Security-Insights\n• Self-service Analytics-Platforms für democratized Security-Intelligence\n• Real-time Decision-Support-Systems für Operational Security-Excellence\n\n🔄 Continuous Improvement und Innovation-Culture:\n• Innovation Labs und Proof-of-Concept-Programmes für Emerging Technologies\n• Feedback-Loops und Lessons Learned-Integration für Continuous Learning\n• Performance-Management-Systems für Outcome-based Optimization\n• External Partnership-Strategies für Access zu Cutting-edge Capabilities\n• Research und Development-Investments für Competitive Advantage\n\n💼 Business Value und ROI-Realization:\n• Value-based Transformation-Metrics für Business-Impact-Demonstration\n• Cost-Benefit-Analysis und TCO-Optimization für Sustainable Investment\n• Risk-adjusted ROI-Calculations für Informed Decision-Making\n• Business Case-Development für Ongoing Transformation-Funding\n• Stakeholder Value-Communication für Continued Executive-Support"
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
