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
    console.log('Updating Was ist IAM page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-iam' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-iam" not found')
    }
    
    // Create new FAQs for IAM implementation and strategy
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche strategischen Überlegungen sind bei der Planung und Implementierung einer IAM-Lösung entscheidend?',
        answer: "Die strategische Planung einer IAM-Implementierung erfordert eine ganzheitliche Betrachtung von Geschäftszielen, technischen Anforderungen und organisatorischen Veränderungen. Eine durchdachte Strategie transformiert IAM von einem IT-Projekt zu einem strategischen Business-Enabler, der langfristig Wert schafft und Wettbewerbsvorteile generiert.\n\n🎯 Business-orientierte Strategieentwicklung:\n• Alignment mit Unternehmensstrategie und digitalen Transformationszielen für maximale Geschäftswirkung\n• Stakeholder-Analyse und Executive Sponsorship für organisationsweite Unterstützung\n• Business Case Development mit klaren ROI-Metriken und Wertversprechen\n• Risk-Benefit-Analyse für fundierte Investitionsentscheidungen\n• Competitive Advantage Identification durch IAM-basierte Differenzierung\n\n📊 Comprehensive Current State Assessment:\n• Identity Landscape Mapping für vollständige Erfassung aller Identitätsquellen und -systeme\n• Access Pattern Analysis für Verständnis aktueller Berechtigungsstrukturen\n• Security Gap Assessment für Identifikation kritischer Schwachstellen\n• Compliance Readiness Evaluation für regulatorische Anforderungen\n• Technology Debt Analysis für Modernisierungsbedarfe\n\n🏗️ Future State Vision und Architektur:\n• Target Architecture Design mit Cloud-first und Zero-Trust-Prinzipien\n• Scalability Planning für zukünftiges Wachstum und Expansion\n• Integration Strategy für nahtlose Anbindung bestehender und neuer Systeme\n• Technology Roadmap mit evolutionärer Entwicklung und Innovation\n• Vendor Strategy für optimale Technologie-Auswahl und -Integration\n\n⚡ Phasenweise Implementierungsstrategie:\n• Quick Wins Identification für frühe Erfolge und Momentum-Aufbau\n• Risk-based Prioritization für kritische Sicherheits- und Compliance-Anforderungen\n• Pilot Program Design für kontrollierte Validierung und Lernen\n• Rollout Strategy mit minimaler Disruption und maximaler Adoption\n• Continuous Improvement Framework für iterative Optimierung\n\n🔄 Change Management und Adoption:\n• Organizational Change Strategy für kulturelle Transformation\n• Training und Enablement Programs für alle Benutzergruppen\n• Communication Strategy für transparente Information und Engagement\n• Resistance Management für proaktive Behandlung von Widerständen\n• Success Metrics Definition für messbare Adoption und Wirkung\n\n🛡️ Risk Management und Governance:\n• Implementation Risk Assessment für proaktive Risikominimierung\n• Security-by-Design Integration für inhärente Sicherheit\n• Compliance Strategy für regulatorische Anforderungen\n• Disaster Recovery Planning für Business Continuity\n• Vendor Risk Management für Lieferanten-Abhängigkeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie wählt man die richtige IAM-Technologie aus und welche Faktoren sind bei der Vendor-Auswahl entscheidend?',
        answer: "Die Auswahl der richtigen IAM-Technologie ist eine strategische Entscheidung, die langfristige Auswirkungen auf Sicherheit, Effizienz und Geschäftserfolg hat. Ein systematischer Evaluierungsprozess berücksichtigt technische Capabilities, Geschäftsanforderungen, Total Cost of Ownership und strategische Ausrichtung für optimale Entscheidungsfindung.\n\n🔍 Requirements Engineering und Priorisierung:\n• Functional Requirements Mapping für alle IAM-Capabilities und Use Cases\n• Non-functional Requirements Definition für Performance, Skalierbarkeit und Verfügbarkeit\n• Integration Requirements Analysis für bestehende und geplante Systemlandschaft\n• Compliance Requirements Assessment für regulatorische und branchenspezifische Anforderungen\n• Future Requirements Anticipation für strategische Roadmap-Alignment\n\n📊 Comprehensive Vendor Evaluation:\n• Market Research und Analyst Reports für Marktüberblick und Trends\n• Vendor Capability Assessment gegen definierte Anforderungen\n• Reference Customer Interviews für praktische Erfahrungen und Lessons Learned\n• Proof of Concept Design für hands-on Validierung kritischer Funktionen\n• Financial Stability Analysis für langfristige Vendor-Viabilität\n\n💰 Total Cost of Ownership Analyse:\n• Licensing Cost Modeling für verschiedene Deployment-Szenarien\n• Implementation Cost Estimation für Professional Services und interne Ressourcen\n• Operational Cost Projection für laufenden Betrieb und Wartung\n• Hidden Cost Identification für oft übersehene Kostenfaktoren\n• ROI Calculation für quantifizierte Investitionsrendite\n\n🏗️ Technical Architecture Evaluation:\n• Scalability Assessment für Performance unter verschiedenen Lastszenarien\n• Security Architecture Review für inhärente Sicherheitsmechanismen\n• Integration Capabilities Analysis für API-Qualität und Connector-Verfügbarkeit\n• Cloud Readiness Evaluation für moderne Deployment-Optionen\n• Customization und Extensibility Assessment für spezifische Anforderungen\n\n🤝 Vendor Partnership Evaluation:\n• Support Quality Assessment für technischen Support und Service-Level\n• Training und Enablement Programs für Skill-Entwicklung\n• Roadmap Alignment für strategische Produktentwicklung\n• Community und Ecosystem Strength für Knowledge Sharing\n• Innovation Track Record für kontinuierliche Weiterentwicklung\n\n⚖️ Risk Assessment und Mitigation:\n• Vendor Lock-in Risk Evaluation für Flexibilität und Exit-Strategien\n• Technology Risk Assessment für Obsoleszenz und Zukunftssicherheit\n• Implementation Risk Analysis für Projekt-Erfolgswahrscheinlichkeit\n• Operational Risk Evaluation für Betriebsstabilität und -sicherheit\n• Compliance Risk Assessment für regulatorische Konformität\n\n🎯 Decision Framework und Governance:\n• Weighted Scoring Model für objektive Vendor-Bewertung\n• Stakeholder Consensus Building für organisationsweite Akzeptanz\n• Executive Decision Support für C-Level Entscheidungsfindung\n• Contract Negotiation Strategy für optimale Vertragsgestaltung\n• Implementation Planning für erfolgreiche Umsetzung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Cloud-Strategien und Hybrid-Ansätze sind für moderne IAM-Implementierungen optimal?',
        answer: "Moderne IAM-Implementierungen erfordern durchdachte Cloud-Strategien, die Flexibilität, Skalierbarkeit und Sicherheit optimal balancieren. Hybrid-Ansätze ermöglichen es Unternehmen, die Vorteile verschiedener Deployment-Modelle zu nutzen und gleichzeitig spezifische Geschäfts- und Compliance-Anforderungen zu erfüllen.\n\n☁️ Cloud-native IAM Strategien:\n• Identity-as-a-Service für schnelle Bereitstellung und elastische Skalierung\n• Multi-tenant Architecture für Kosteneffizienz und Ressourcen-Optimierung\n• API-first Design für nahtlose Integration und moderne Anwendungsarchitekturen\n• Microservices Architecture für modulare Entwicklung und unabhängige Skalierung\n• Serverless Components für ereignisgesteuerte Verarbeitung und Kostenoptimierung\n\n🔗 Hybrid Identity Architecture:\n• On-premises Identity Stores mit Cloud-basierter Authentifizierung für optimale Balance\n• Federated Identity Management für nahtlose Cross-Domain-Authentifizierung\n• Identity Synchronization Strategies für konsistente Identitätsdaten\n• Hybrid Connectivity Solutions für sichere und performante Verbindungen\n• Gradual Migration Paths für schrittweise Cloud-Adoption\n\n🌐 Multi-Cloud Identity Strategies:\n• Cloud-agnostic Identity Platforms für Vendor-Lock-in-Vermeidung\n• Cross-Cloud Federation für einheitliche Identitätsverwaltung\n• Workload-specific Deployment für optimale Performance und Compliance\n• Disaster Recovery über mehrere Cloud-Provider für maximale Ausfallsicherheit\n• Cost Optimization durch intelligente Workload-Platzierung\n\n🛡️ Security und Compliance in Cloud-IAM:\n• Zero Trust Architecture für perimeter-lose Sicherheit\n• Data Residency Management für regulatorische Compliance\n• Encryption Key Management für umfassenden Datenschutz\n• Compliance Automation für kontinuierliche Konformität\n• Shared Responsibility Model für klare Sicherheitsverantwortlichkeiten\n\n⚡ Performance und Skalierbarkeit:\n• Global Distribution für optimale Latenz und User Experience\n• Auto-scaling Capabilities für dynamische Lastanpassung\n• Content Delivery Networks für beschleunigte Authentifizierung\n• Edge Computing Integration für lokale Verarbeitung\n• Performance Monitoring für kontinuierliche Optimierung\n\n💼 Business Continuity und Disaster Recovery:\n• Multi-Region Deployment für geografische Redundanz\n• Automated Failover Mechanisms für minimale Ausfallzeiten\n• Backup und Recovery Strategies für Datenschutz und -wiederherstellung\n• Business Continuity Planning für kritische Geschäftsprozesse\n• Testing und Validation für Disaster Recovery Procedures\n\n📊 Governance und Management:\n• Cloud Governance Framework für konsistente Richtlinien und Kontrollen\n• Cost Management und Optimization für wirtschaftliche Effizienz\n• Service Level Management für Performance und Verfügbarkeit\n• Change Management für kontrollierte Entwicklung und Deployment\n• Vendor Management für Multi-Cloud-Umgebungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie misst und optimiert man den Erfolg einer IAM-Implementierung kontinuierlich?',
        answer: "Der Erfolg einer IAM-Implementierung erfordert kontinuierliche Messung, Analyse und Optimierung durch ein umfassendes Performance-Management-System. Erfolgreiche IAM-Programme etablieren datengetriebene Feedback-Loops, die sowohl technische Performance als auch Geschäftswert messen und kontinuierliche Verbesserung ermöglichen.\n\n📊 Key Performance Indicators und Metriken:\n• Security Metrics für Risikoreduktion und Incident-Prävention\n• Operational Efficiency Metrics für Prozessoptimierung und Kosteneinsparungen\n• User Experience Metrics für Adoption und Zufriedenheit\n• Compliance Metrics für regulatorische Konformität und Audit-Bereitschaft\n• Business Value Metrics für ROI und strategische Zielerreichung\n\n🎯 Security und Risk Metrics:\n• Identity-related Security Incidents für Trend-Analyse und Präventionsmaßnahmen\n• Privileged Access Violations für kritische Sicherheitsüberwachung\n• Authentication Failure Rates für Anomaly Detection und Threat Intelligence\n• Access Certification Completion Rates für Governance-Effektivität\n• Mean Time to Detect und Respond für Incident Response Performance\n\n⚡ Operational Excellence Metrics:\n• Provisioning und Deprovisioning Time für Effizienz-Messung\n• Help Desk Ticket Reduction für Self-Service-Erfolg\n• System Availability und Performance für Service-Level-Compliance\n• Automation Rate für Prozessoptimierung\n• Cost per Identity für wirtschaftliche Effizienz\n\n👥 User Experience und Adoption Metrics:\n• Single Sign-On Adoption Rate für Benutzerakzeptanz\n• Password Reset Frequency für Self-Service-Effektivität\n• User Satisfaction Scores für qualitative Bewertung\n• Training Completion Rates für Enablement-Erfolg\n• Feature Utilization Rates für Funktions-Adoption\n\n📈 Business Value und ROI Metrics:\n• Time to Productivity für neue Mitarbeiter\n• Compliance Audit Results für regulatorische Effizienz\n• Business Process Acceleration für digitale Transformation\n• Innovation Enablement für neue Geschäftsmodelle\n• Competitive Advantage Indicators für strategischen Wert\n\n🔄 Continuous Improvement Framework:\n• Regular Performance Reviews für systematische Bewertung\n• Benchmarking gegen Industry Standards für relative Performance\n• Root Cause Analysis für systematische Problemlösung\n• Optimization Opportunity Identification für kontinuierliche Verbesserung\n• Stakeholder Feedback Integration für benutzerorientierte Entwicklung\n\n🛠️ Analytics und Intelligence:\n• Advanced Analytics für tiefere Einblicke und Trend-Erkennung\n• Machine Learning für predictive Insights und Anomaly Detection\n• Real-time Dashboards für operative Transparenz\n• Executive Reporting für strategische Entscheidungsunterstützung\n• Automated Alerting für proaktive Intervention\n\n🎯 Strategic Alignment und Governance:\n• Business Objective Alignment für strategische Relevanz\n• Governance Committee Reviews für organisatorische Oversight\n• Investment Planning für zukünftige Entwicklung\n• Risk Assessment Updates für kontinuierliche Risikobewertung\n• Strategic Roadmap Refinement für evolutionäre Entwicklung"
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
