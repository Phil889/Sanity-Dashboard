import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ISO 27001 Risikomanagement page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikomanagement' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikomanagement" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie wird Supply Chain Risk Management in das ISO 27001 Risikomanagement integriert?',
        answer: "Supply Chain Risk Management ist ein kritischer Bestandteil des modernen Risikomanagements, da Organisationen zunehmend von komplexen Lieferantennetzwerken abhängig sind. Die Integration erfordert einen systematischen Ansatz zur Bewertung, Überwachung und Steuerung von Drittanbieter-Risiken.\n\n🔗 Strategische Lieferanten-Risikobewertung:\n• Entwicklung umfassender Vendor Risk Assessment Frameworks für systematische Bewertung aller Lieferanten\n• Implementierung risikobasierter Kategorisierung von Lieferanten nach Kritikalität und Risikopotenzial\n• Aufbau kontinuierlicher Due Diligence Prozesse für neue und bestehende Geschäftspartner\n• Etablierung von Security Scorecards und Ratings für objektive Lieferantenbewertung\n• Integration von Cyber-Threat-Intelligence für proaktive Erkennung von Lieferantenrisiken\n\n📋 Vertragliche Risikominderung:\n• Entwicklung standardisierter Sicherheitsklauseln und SLA-Anforderungen für alle Lieferantenverträge\n• Implementierung von Right-to-Audit Klauseln für regelmäßige Sicherheitsüberprüfungen\n• Aufbau von Incident-Notification-Verpflichtungen für zeitnahe Risikokommunikation\n• Etablierung von Compliance-Monitoring und Reporting-Anforderungen\n• Integration von Cyber-Versicherungsanforderungen und Haftungsregelungen\n\n🔄 Kontinuierliches Monitoring:\n• Implementierung automatisierter Monitoring-Systeme für kontinuierliche Überwachung der Lieferantenperformance\n• Aufbau von Real-Time-Alerting bei kritischen Sicherheitsereignissen oder Compliance-Verstößen\n• Entwicklung von Trend-Analysen für frühzeitige Erkennung sich verschlechternder Risikoprofile\n• Etablierung regelmäßiger Security Assessments und Penetration Tests\n• Integration von Fourth-Party-Risk-Management für Sub-Lieferanten\n\n🚨 Incident Response Integration:\n• Entwicklung koordinierter Incident Response Pläne, die Lieferanten einbeziehen\n• Aufbau von Communication Protocols für effektive Krisenkommunikation\n• Etablierung von Containment-Strategien für Supply Chain Incidents\n• Implementation von Business Continuity Plänen für kritische Lieferantenausfälle\n• Entwicklung von Recovery-Strategien und Alternative-Sourcing-Optionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielt Cyber Threat Intelligence im strategischen Risikomanagement?',
        answer: "Cyber Threat Intelligence transformiert das reaktive Risikomanagement in einen proaktiven, intelligence-gesteuerten Ansatz, der Bedrohungen antizipiert und präventive Maßnahmen ermöglicht. Es bildet die Grundlage für risikobasierte Entscheidungen und strategische Sicherheitsplanung.\n\n🎯 Strategische Threat Intelligence Integration:\n• Aufbau einer Threat Intelligence Strategie, die sich an Geschäftszielen und Risikoprofilen orientiert\n• Entwicklung von Intelligence Requirements, die spezifische Informationsbedürfnisse der Organisation definieren\n• Etablierung von Threat Modeling Prozessen für systematische Bedrohungsanalyse\n• Integration von Geopolitical Intelligence für Bewertung staatlicher und geopolitischer Risiken\n• Aufbau von Industry-Specific Intelligence für branchenrelevante Bedrohungslandschaften\n\n📊 Intelligence-gestützte Risikobewertung:\n• Nutzung von Threat Intelligence für dynamische Anpassung von Risikobewertungen\n• Integration von Indicators of Compromise in kontinuierliche Monitoring-Systeme\n• Entwicklung von Threat-Actor-Profiling für zielgerichtete Risikoanalyse\n• Aufbau von Attack-Surface-Monitoring basierend auf Intelligence-Erkenntnissen\n• Implementation von Predictive Analytics für Vorhersage zukünftiger Bedrohungstrends\n\n🔄 Operative Intelligence-Nutzung:\n• Entwicklung von Threat Hunting Programmen für proaktive Bedrohungssuche\n• Integration von Intelligence in Security Operations Center Prozesse\n• Aufbau automatisierter Threat Feed Integration für Real-Time-Updates\n• Etablierung von Intelligence-gestützten Incident Response Prozessen\n• Implementation von Threat Intelligence Platforms für zentrale Intelligence-Verwaltung\n\n🤝 Collaborative Intelligence:\n• Aufbau von Information Sharing Partnerships mit Branchenverbänden und Behörden\n• Teilnahme an Threat Intelligence Communities und Sharing-Plattformen\n• Entwicklung von Public-Private-Partnerships für erweiterte Intelligence-Abdeckung\n• Etablierung von Peer-to-Peer Intelligence Sharing mit vertrauenswürdigen Partnern\n• Integration von Commercial Intelligence Services für umfassende Bedrohungsabdeckung\n\n📈 Intelligence-basierte Strategieentwicklung:\n• Nutzung von Threat Intelligence für strategische Sicherheitsinvestitionen\n• Entwicklung von Threat-informed Defense Strategien\n• Integration von Intelligence in Business Continuity und Disaster Recovery Planning\n• Aufbau von Intelligence-gestützten Awareness und Training Programmen\n• Etablierung von Threat Intelligence Metrics für Performance-Bewertung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie wird Cloud Security Risk Management in moderne Risikomanagement-Frameworks integriert?',
        answer: "Cloud Security Risk Management erfordert spezialisierte Ansätze, die den einzigartigen Herausforderungen und Chancen von Cloud-Umgebungen gerecht werden. Die Integration in bestehende Risikomanagement-Frameworks schafft eine ganzheitliche Sicht auf hybride IT-Landschaften.\n\n☁️ Cloud-spezifische Risikobewertung:\n• Entwicklung von Cloud Risk Assessment Frameworks, die Shared Responsibility Models berücksichtigen\n• Implementierung von Multi-Cloud Risk Management für komplexe Cloud-Architekturen\n• Aufbau von Container und Serverless Security Risk Assessments\n• Etablierung von Cloud Configuration Management und Compliance Monitoring\n• Integration von Cloud Security Posture Management Tools für kontinuierliche Überwachung\n\n🔐 Identity und Access Management Risiken:\n• Implementierung von Cloud IAM Risk Assessment und Privileged Access Management\n• Aufbau von Zero Trust Architecture Prinzipien für Cloud-Umgebungen\n• Entwicklung von API Security Risk Management für Cloud-Services\n• Etablierung von Federation und Single Sign-On Security Controls\n• Integration von Cloud Access Security Broker Lösungen für erweiterte Kontrolle\n\n📊 Data Protection und Privacy Risiken:\n• Entwicklung von Cloud Data Classification und Protection Strategien\n• Implementierung von Encryption Key Management für Cloud-Umgebungen\n• Aufbau von Data Loss Prevention Kontrollen für Cloud-Services\n• Etablierung von Cross-Border Data Transfer Risk Management\n• Integration von Privacy Impact Assessments für Cloud-Deployments\n\n🔄 DevSecOps Integration:\n• Aufbau von Security-by-Design Prinzipien in Cloud-Entwicklungsprozessen\n• Implementierung von Infrastructure as Code Security Scanning\n• Entwicklung von CI/CD Pipeline Security Controls\n• Etablierung von Container Image Security und Vulnerability Management\n• Integration von Cloud Security Testing in Entwicklungszyklen\n\n🎯 Vendor und Service Provider Management:\n• Entwicklung von Cloud Service Provider Risk Assessment Frameworks\n• Implementierung von SLA und Contract Management für Cloud-Services\n• Aufbau von Cloud Vendor Security Monitoring und Compliance Tracking\n• Etablierung von Exit-Strategien und Data Portability Planning\n• Integration von Cloud Insurance und Risk Transfer Strategien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Bedeutung hat Regulatory Change Management im kontinuierlichen Risikomanagement?',
        answer: "Regulatory Change Management ist essentiell für nachhaltiges Risikomanagement in einer sich schnell verändernden regulatorischen Landschaft. Es ermöglicht proaktive Anpassung an neue Anforderungen und minimiert Compliance-Risiken durch systematische Überwachung und Implementierung regulatorischer Änderungen.\n\n📡 Proaktives Regulatory Monitoring:\n• Aufbau von Regulatory Intelligence Systemen für frühzeitige Erkennung relevanter Gesetzesänderungen\n• Implementierung automatisierter Monitoring-Tools für kontinuierliche Überwachung regulatorischer Entwicklungen\n• Entwicklung von Stakeholder-Netzwerken mit Regulierungsbehörden und Branchenverbänden\n• Etablierung von Legal Technology Lösungen für effiziente Regulatory Tracking\n• Integration von AI-gestützten Regulatory Change Detection Systemen\n\n🔄 Impact Assessment und Gap-Analyse:\n• Entwicklung systematischer Impact Assessment Prozesse für neue regulatorische Anforderungen\n• Implementierung von Gap-Analysen zur Identifikation von Compliance-Lücken\n• Aufbau von Risk-based Prioritization für regulatorische Änderungen\n• Etablierung von Cross-functional Assessment Teams für umfassende Bewertung\n• Integration von Business Impact Analysis für regulatorische Änderungen\n\n📋 Strategische Implementierungsplanung:\n• Entwicklung von Regulatory Roadmaps für systematische Umsetzung neuer Anforderungen\n• Implementierung von Change Management Prozessen für regulatorische Anpassungen\n• Aufbau von Resource Planning und Budget Allocation für Compliance-Initiativen\n• Etablierung von Timeline Management und Milestone Tracking\n• Integration von Stakeholder Communication und Training Programme\n\n🎯 Kontinuierliche Compliance Überwachung:\n• Aufbau von Regulatory Compliance Dashboards für Real-Time-Monitoring\n• Implementierung von Automated Compliance Testing und Validation\n• Entwicklung von Regulatory Reporting Automation für effiziente Berichterstattung\n• Etablierung von Audit Trail Management für Compliance-Nachweise\n• Integration von Regulatory Performance Metrics und KPIs\n\n🚀 Innovation und Zukunftsorientierung:\n• Entwicklung von RegTech-Strategien für technologiegestützte Compliance\n• Implementierung von Predictive Regulatory Analytics für Trend-Vorhersagen\n• Aufbau von Regulatory Sandbox Participation für innovative Compliance-Ansätze\n• Etablierung von Industry Collaboration für Best-Practice-Sharing\n• Integration von Emerging Technology Assessment für regulatorische Auswirkungen"
      }
    ]
    
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
