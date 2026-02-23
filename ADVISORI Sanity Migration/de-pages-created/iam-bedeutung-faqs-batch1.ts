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
    console.log('Updating IAM Bedeutung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-bedeutung' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-bedeutung" not found')
    }
    
    // Create new FAQs for IAM Bedeutung fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist die strategische Bedeutung von IAM für moderne Unternehmen weit mehr als nur ein Sicherheitstool und wie transformiert es Geschäftsprozesse?',
        answer: "Die strategische Bedeutung von IAM liegt in seiner fundamentalen Rolle als Business-Enabler, der weit über traditionelle Sicherheitsaspekte hinausgeht und zum Katalysator für digitale Transformation, operative Exzellenz und nachhaltiges Wachstum wird. Moderne Unternehmen erkennen zunehmend, dass IAM nicht nur Risiken minimiert, sondern aktiv Geschäftswert schafft, Innovationen beschleunigt und Wettbewerbsvorteile generiert.\n\n🎯 Strategische Geschäftstransformation:\n• Business Process Acceleration durch nahtlose Identitätsverwaltung und automatisierte Zugriffsprozesse\n• Digital Transformation Enablement mit sicheren, skalierbaren Identitätsinfrastrukturen für Cloud-Migration und Modernisierung\n• Innovation Catalyst durch sichere API-Ökosysteme und Partner-Integration für neue Geschäftsmodelle\n• Operational Excellence mit reduzierten manuellen Prozessen und optimierten Workflows\n• Customer Experience Enhancement durch Single Sign-On und nahtlose Benutzerreisen\n\n💼 Messbare Geschäftsvorteile:\n• Produktivitätssteigerung durch reduzierte Anmeldezeiten und vereinfachte Zugriffsprozesse\n• Kostenoptimierung durch automatisierte Identitätsverwaltung und reduzierte IT-Overhead\n• Revenue Protection durch minimierte Ausfallzeiten und verbesserte Systemverfügbarkeit\n• Market Agility mit schnellerer Bereitstellung neuer Services und Anwendungen\n• Compliance Efficiency durch automatisierte regulatorische Berichterstattung und Audit-Bereitschaft\n\n🚀 Competitive Advantage Creation:\n• Market Differentiation durch überlegene Sicherheitsstandards und Vertrauensbildung bei Kunden\n• Partnership Enablement mit sicheren B2B-Integrationen und Ecosystem-Collaboration\n• Talent Attraction durch moderne, benutzerfreundliche IT-Umgebungen und flexible Arbeitsmodelle\n• Investor Confidence durch demonstrierte Risikomanagement-Exzellenz und Governance-Standards\n• Future Readiness mit adaptiven Systemen für emerging Technologies und Geschäftsmodelle\n\n🔄 Organizational Transformation:\n• Cultural Change durch Sicherheitsbewusstsein und Verantwortungsübernahme auf allen Ebenen\n• Process Optimization mit datengetriebenen Insights und kontinuierlicher Verbesserung\n• Decision Making Enhancement durch Real-time Identity Analytics und Risikobewertung\n• Stakeholder Alignment mit klaren Governance-Strukturen und Accountability-Frameworks\n• Change Readiness durch flexible, anpassungsfähige Identitätssysteme für zukünftige Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifiziert man den Business Value und ROI von IAM-Investitionen und welche Metriken sind entscheidend für die Bewertung der strategischen Bedeutung?',
        answer: "Die Quantifizierung des Business Value von IAM erfordert einen ganzheitlichen Ansatz, der sowohl direkte finanzielle Auswirkungen als auch strategische Geschäftsvorteile erfasst. Die Bedeutung von IAM manifestiert sich in messbaren Verbesserungen der operativen Effizienz, Risikominimierung und Geschäftsbeschleunigung, die durch spezifische KPIs und Metriken nachverfolgbar sind.\n\n📊 Financial Impact Metrics:\n• Total Cost of Ownership Reduction durch automatisierte Prozesse und reduzierte manuelle Interventionen\n• Operational Efficiency Gains mit messbaren Zeitersparnissen bei Benutzer-Onboarding und Zugriffsverwaltung\n• Incident Cost Avoidance durch präventive Sicherheitsmaßnahmen und proaktive Bedrohungsabwehr\n• Compliance Cost Optimization mit automatisierten Audit-Prozessen und reduzierten Penalty-Risiken\n• Revenue Protection durch minimierte Ausfallzeiten und verbesserte Systemverfügbarkeit\n\n⚡ Productivity Enhancement Indicators:\n• User Experience Improvement mit reduzierten Anmeldezeiten und vereinfachten Zugriffsprozessen\n• IT Support Reduction durch Self-Service-Capabilities und automatisierte Problemlösung\n• Time-to-Market Acceleration für neue Services und Anwendungen durch sichere, skalierbare Infrastrukturen\n• Employee Satisfaction Metrics durch verbesserte Arbeitsplatz-Technologien und Benutzerfreundlichkeit\n• Process Automation Benefits mit messbaren Effizienzsteigerungen in Geschäftsprozessen\n\n🛡️ Risk Mitigation Value:\n• Security Incident Reduction mit quantifizierbaren Verbesserungen der Sicherheitslage\n• Data Breach Prevention Value durch robuste Zugriffskontrolle und Identitätsverifikation\n• Regulatory Compliance Assurance mit automatisierten Compliance-Monitoring und -Reporting\n• Business Continuity Enhancement durch resiliente Identitätssysteme und Disaster Recovery\n• Reputation Protection Value durch demonstrierte Sicherheitsexzellenz und Vertrauensbildung\n\n📈 Strategic Business Metrics:\n• Innovation Enablement durch sichere Plattformen für neue Geschäftsmodelle und Partnerschaften\n• Market Expansion Capabilities mit skalierbaren Identitätslösungen für globales Wachstum\n• Customer Trust Indicators durch transparente Sicherheitspraktiken und Datenschutz-Compliance\n• Competitive Positioning Metrics mit Benchmarking gegen Branchenstandards und Best Practices\n• Future Readiness Assessment durch Adaptabilität an emerging Technologies und Marktanforderungen\n\n🔍 Advanced Analytics und Insights:\n• Identity Analytics für datengetriebene Entscheidungsfindung und Prozessoptimierung\n• Behavioral Pattern Analysis für proaktive Sicherheitsmaßnahmen und Anomaly Detection\n• Performance Benchmarking gegen Branchenstandards und kontinuierliche Verbesserung\n• Predictive Modeling für zukünftige Anforderungen und Kapazitätsplanung\n• Value Realization Tracking mit kontinuierlicher ROI-Überwachung und Optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielt IAM bei der digitalen Transformation und wie ermöglicht es Unternehmen, innovative Geschäftsmodelle sicher zu implementieren?',
        answer: "IAM fungiert als strategisches Rückgrat der digitalen Transformation und ermöglicht es Unternehmen, innovative Geschäftsmodelle sicher und skalierbar zu implementieren. Die Bedeutung von IAM in der digitalen Transformation liegt in seiner Fähigkeit, Sicherheit und Innovation zu vereinen, wodurch Unternehmen neue Technologien und Geschäftsansätze ohne Kompromisse bei der Sicherheit verfolgen können.\n\n🌐 Digital Foundation Building:\n• Cloud-native Identity Infrastructure für nahtlose Migration und Hybrid-Cloud-Strategien\n• API-first Architecture für moderne Anwendungsentwicklung und Microservices-Integration\n• Zero-Trust Framework Implementation für sichere digitale Ökosysteme und Remote-Work-Enablement\n• Identity Federation für sichere Partner-Integration und Ecosystem-Collaboration\n• Scalable Authentication Systems für globale Expansion und variable Workloads\n\n🚀 Innovation Enablement:\n• Secure DevOps Integration für beschleunigte Softwareentwicklung und Continuous Deployment\n• IoT Device Management für sichere Integration von Smart Devices und Edge Computing\n• AI und Machine Learning Integration für intelligente Identitätsverwaltung und Anomaly Detection\n• Blockchain Identity Solutions für dezentrale Geschäftsmodelle und Trust Networks\n• Mobile-first Strategies für moderne Arbeitsplätze und Customer Engagement\n\n💡 New Business Model Support:\n• Platform Economy Enablement mit sicheren Multi-Tenant-Architekturen und Partner-Ökosystemen\n• Subscription-based Services mit flexiblen Identitäts- und Zugriffsverwaltungsmodellen\n• Data Monetization Strategies durch sichere Datenfreigabe und Privacy-by-Design\n• Digital Marketplace Integration für B2B und B2C E-Commerce-Plattformen\n• As-a-Service Delivery Models mit skalierbaren, mandantenfähigen Identitätslösungen\n\n🔄 Agile Business Operations:\n• Rapid Deployment Capabilities für schnelle Markteinführung neuer Services und Produkte\n• Dynamic Resource Allocation mit elastischen Identitätssystemen für variable Geschäftsanforderungen\n• Real-time Adaptation für sich ändernde Marktbedingungen und Kundenanforderungen\n• Continuous Innovation Support durch flexible, erweiterbare Identitätsarchitekturen\n• Global Scalability für internationale Expansion und lokale Compliance-Anforderungen\n\n🎯 Customer-Centric Transformation:\n• Omnichannel Experience Delivery mit einheitlichen Identitäten über alle Touchpoints\n• Personalization Engines für maßgeschneiderte Kundenerlebnisse und Service-Delivery\n• Self-Service Capabilities für verbesserte Customer Journey und reduzierte Support-Kosten\n• Privacy-First Approaches für Vertrauensbildung und Compliance mit Datenschutzregulierungen\n• Seamless Integration für Third-Party-Services und Partner-Angebote\n\n📊 Data-Driven Decision Making:\n• Identity Analytics für Einblicke in Kundenverhalten und Geschäftstrends\n• Predictive Insights für proaktive Geschäftsentscheidungen und Marktanpassungen\n• Performance Monitoring für kontinuierliche Optimierung und Value Realization\n• Compliance Automation für regulatorische Exzellenz und Risikomanagement\n• Innovation Metrics für Bewertung und Steuerung von Transformationsinitiativen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie beeinflusst die strategische Bedeutung von IAM die Unternehmenskultur und welche organisatorischen Veränderungen sind für maximalen Erfolg erforderlich?',
        answer: "Die strategische Bedeutung von IAM erstreckt sich weit über technische Implementierungen hinaus und katalysiert fundamentale organisatorische und kulturelle Transformationen. IAM fungiert als Enabler für eine sicherheitsbewusste, kollaborative und agile Unternehmenskultur, die Innovation fördert und gleichzeitig Risiken intelligent managt.\n\n🏢 Cultural Transformation Drivers:\n• Security-First Mindset Development mit proaktivem Risikobewusstsein auf allen Organisationsebenen\n• Collaboration Enhancement durch sichere, nahtlose Zusammenarbeit zwischen Teams und Abteilungen\n• Trust-Based Operations mit transparenten Zugriffsprozessen und klaren Verantwortlichkeiten\n• Innovation Culture Fostering durch sichere Experimentierräume und Fail-Fast-Ansätze\n• Continuous Learning Orientation für sich entwickelnde Sicherheitsanforderungen und Best Practices\n\n👥 Organizational Structure Evolution:\n• Cross-Functional IAM Teams mit Vertretern aus IT, Security, Business und Compliance\n• Center of Excellence Establishment für IAM-Expertise und Best-Practice-Sharing\n• Governance Committee Formation für strategische Entscheidungsfindung und Policy-Management\n• Role-Based Responsibility Matrix mit klaren Accountabilities und Escalation-Pfaden\n• Agile Operating Models für schnelle Anpassung an sich ändernde Geschäftsanforderungen\n\n🎯 Leadership und Change Management:\n• Executive Sponsorship für strategische IAM-Initiativen und kulturelle Transformation\n• Change Champion Networks für organisationsweite Adoption und Akzeptanz\n• Communication Strategies für Transparenz und Stakeholder-Engagement\n• Training und Development Programs für Skill-Building und Kompetenzentwicklung\n• Performance Metrics Integration für Incentivierung und Erfolgsmessung\n\n🔄 Process und Workflow Transformation:\n• Business Process Reengineering mit IAM-Integration für optimierte Workflows\n• Automation-First Approaches für Effizienzsteigerung und Fehlerreduktion\n• Self-Service Enablement für Benutzer-Empowerment und IT-Entlastung\n• Continuous Improvement Cycles für iterative Optimierung und Innovation\n• Risk-Aware Decision Making mit integrierten Sicherheitsüberlegungen in Geschäftsprozessen\n\n📚 Knowledge Management und Expertise Building:\n• IAM Competency Development für interne Expertise und Unabhängigkeit\n• Best Practice Documentation für Wissensbewahrung und Standardisierung\n• Community of Practice Formation für Erfahrungsaustausch und Peer Learning\n• External Partnership Strategies für Zugang zu Spezialwissen und Innovation\n• Certification und Skill Development Programs für kontinuierliche Weiterbildung\n\n🌟 Employee Experience Enhancement:\n• User-Centric Design Principles für intuitive, benutzerfreundliche IAM-Systeme\n• Mobile-First Approaches für moderne Arbeitsplätze und Flexibilität\n• Personalization Capabilities für maßgeschneiderte Benutzererfahrungen\n• Feedback Mechanisms für kontinuierliche Verbesserung und User Satisfaction\n• Work-Life Integration Support durch sichere Remote-Access und Collaboration-Tools"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
