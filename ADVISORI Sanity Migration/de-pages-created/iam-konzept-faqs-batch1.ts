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
    console.log('Updating IAM Konzept page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-konzept' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-konzept" not found')
    }
    
    // Create new FAQs for IAM Konzept fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was macht ein durchdachtes IAM Konzept zum strategischen Fundament erfolgreicher digitaler Transformationen und wie unterscheidet es sich von ad-hoc Implementierungen?',
        answer: "Ein strategisch entwickeltes IAM Konzept ist das architektonische Fundament, das komplexe Identitätslandschaften in kohärente, manageable Systeme transformiert und dabei Sicherheit, Compliance und Business-Enablement optimal vereint. Anders als reaktive ad-hoc Implementierungen schafft ein durchdachtes Konzept eine systematische Grundlage für nachhaltige digitale Transformation, die sowohl aktuelle Anforderungen erfüllt als auch zukünftige Herausforderungen antizipiert.\n\n🎯 Strategische Konzeptfundamente und Business-Alignment:\n• Comprehensive Business-Analysis mit tiefgreifender Stakeholder-Einbindung und Requirements-Engineering\n• Strategic Vision-Development für langfristige Geschäftsziele und digitale Transformation\n• Enterprise-Architecture-Integration mit bestehenden Systemen und zukünftigen Technologie-Roadmaps\n• ROI-optimierte Planung mit messbaren Business-Outcomes und Erfolgsmetriken\n• Risk-based Approach für proaktive Identifikation und Mitigation potenzieller Herausforderungen\n\n🏗️ Methodische Architektur-Entwicklung und Design-Prinzipien:\n• Modular Architecture Design mit skalierbaren Komponenten und flexiblen Integrationsschnittstellen\n• Zero-Trust-Prinzipien als konzeptionelle Grundlage für moderne Sicherheitsarchitekturen\n• Cloud-native Design-Patterns für optimale Skalierbarkeit und globale Verfügbarkeit\n• API-first Architecture für nahtlose Integration und Ecosystem-Connectivity\n• Microservices-Orientierung für agile Entwicklung und unabhängige Deployment-Zyklen\n\n📋 Governance-Framework und Compliance-Integration:\n• Identity Governance-Strukturen mit klaren Rollen, Verantwortlichkeiten und Entscheidungsprozessen\n• Compliance-by-Design für automatisierte Erfüllung regulatorischer Anforderungen\n• Policy-Management-Frameworks für konsistente Durchsetzung von Sicherheitsrichtlinien\n• Audit-Trail-Konzepte für umfassende Nachverfolgbarkeit und Forensic-Capabilities\n• Risk-Management-Integration für kontinuierliche Bewertung und Anpassung\n\n🚀 Innovation-Integration und Future-Readiness:\n• Emerging-Technology-Berücksichtigung für AI/ML, Blockchain und Quantum-Computing\n• Adaptive Architecture-Patterns für schnelle Integration neuer Technologien\n• Scalability-Planning für Wachstum und veränderte Geschäftsanforderungen\n• Interoperability-Standards für nahtlose Ecosystem-Integration\n• Continuous-Innovation-Frameworks für systematische Technologie-Evolution\n\n🔄 Change-Management und User-Adoption-Strategien:\n• Human-Centered Design für optimale Benutzerfreundlichkeit und Akzeptanz\n• Training-Konzepte für erfolgreiche Kompetenzentwicklung und Wissensvermittlung\n• Communication-Strategien für transparente Stakeholder-Information und Engagement\n• Success-Measurement-Frameworks für kontinuierliche Optimierung und Anpassung\n• Cultural-Transformation-Support für nachhaltige Veränderung von Arbeitsweisen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Komponenten und methodischen Ansätze bilden ein enterprise-grade IAM Konzept und wie gewährleisten sie nachhaltige Implementierungserfolge?',
        answer: "Ein enterprise-grade IAM Konzept basiert auf systematischen, methodischen Ansätzen, die technische Exzellenz mit strategischen Geschäftszielen verbinden und dabei höchste Qualitätsstandards für nachhaltige Implementierungserfolge gewährleisten. Diese konzeptionelle Tiefe unterscheidet professionelle IAM-Strategien von oberflächlichen Technologie-Deployments und schafft die Grundlage für langfristige digitale Exzellenz.\n\n🏛️ Enterprise-Architecture-Konzeption und Design-Frameworks:\n• Layered Architecture-Modelle mit klarer Trennung von Presentation, Business Logic und Data Layers\n• Service-Oriented Architecture mit lose gekoppelten Komponenten und standardisierten Schnittstellen\n• Event-Driven Architecture für Real-time Synchronisation und asynchrone Verarbeitung\n• Domain-Driven Design für fachliche Modellierung und Business-orientierte Strukturierung\n• Reference Architecture-Patterns für bewährte Lösungsansätze und Best-Practice-Integration\n\n🔐 Security-by-Design und Zero-Trust-Konzeptionierung:\n• Defense-in-Depth-Strategien mit mehrschichtigen Sicherheitskontrollen und Redundanzen\n• Principle of Least Privilege als Grundlage für minimale Berechtigungsvergabe\n• Continuous Verification-Konzepte für dynamische Risikobewertung und adaptive Sicherheit\n• Threat Modeling für systematische Identifikation und Bewertung von Sicherheitsrisiken\n• Security-Control-Frameworks für umfassende Abdeckung aller Sicherheitsaspekte\n\n📊 Data-Architecture und Information-Governance:\n• Master Data Management für konsistente Identitätsdaten über alle Systeme hinweg\n• Data Quality-Frameworks für Sicherstellung von Datenintegrität und Konsistenz\n• Privacy-by-Design für proaktiven Datenschutz und GDPR-Compliance\n• Data Lifecycle-Management für systematische Verwaltung von Identitätsinformationen\n• Analytics-Architecture für datengetriebene Entscheidungen und Insights\n\n⚙️ Integration-Architecture und Ecosystem-Connectivity:\n• API-Management-Strategien für sichere und skalierbare Systemintegration\n• Message-Oriented Middleware für asynchrone Kommunikation und Entkopplung\n• Federation-Konzepte für sichere Cross-Domain-Authentifizierung und Autorisierung\n• Protocol-Standardization für Interoperabilität und Vendor-Independence\n• Legacy-Integration-Patterns für nahtlose Anbindung bestehender Systeme\n\n🔄 Operational-Excellence und Service-Management:\n• ITIL-basierte Service-Management-Prozesse für professionellen Betrieb\n• Monitoring-Konzepte für proaktive Überwachung und Performance-Optimierung\n• Incident-Management-Frameworks für schnelle Problemlösung und Eskalation\n• Capacity-Planning für optimale Ressourcennutzung und Skalierbarkeit\n• Continuous-Improvement-Prozesse für systematische Optimierung und Innovation\n\n🎯 Success-Measurement und Value-Realization:\n• KPI-Frameworks für messbare Erfolgsbewertung und ROI-Tracking\n• Maturity-Models für systematische Bewertung und Entwicklung von IAM-Capabilities\n• Benchmarking-Konzepte für Vergleich mit Industry-Standards und Best-Practices\n• Value-Stream-Mapping für Identifikation von Optimierungspotenzialen\n• Business-Impact-Assessment für kontinuierliche Ausrichtung an Geschäftszielen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie entwickelt man eine zukunftsfähige IAM-Konzeptstrategie, die emerging Technologies integriert und gleichzeitig aktuelle Geschäftsanforderungen optimal erfüllt?',
        answer: "Die Entwicklung einer zukunftsfähigen IAM-Konzeptstrategie erfordert eine ausgewogene Balance zwischen der Erfüllung aktueller Geschäftsanforderungen und der strategischen Vorbereitung auf emerging Technologies. Diese konzeptionelle Weitsicht ermöglicht es Unternehmen, nicht nur heute erfolgreich zu sein, sondern auch für zukünftige Herausforderungen und Chancen optimal positioniert zu bleiben.\n\n🔮 Future-Technology-Integration und Innovation-Readiness:\n• Artificial Intelligence und Machine Learning für intelligente Identitätsverwaltung und Anomaly Detection\n• Blockchain-Technologien für dezentrale Identitätslösungen und Trust-Management\n• Quantum-Computing-Preparedness mit Quantum-resistant Cryptography und Post-Quantum-Sicherheit\n• Edge-Computing-Integration für IoT-Identitäten und verteilte Authentifizierung\n• Extended Reality für immersive Identitätserfahrungen und biometrische Authentifizierung\n\n🌐 Cloud-native und Hybrid-Architecture-Konzepte:\n• Multi-Cloud-Strategien für Vendor-Independence und optimale Service-Auswahl\n• Serverless-Architecture für kosteneffiziente und skalierbare Funktionalitäten\n• Container-Orchestration für agile Deployment-Strategien und Microservices-Management\n• Edge-to-Cloud-Kontinuum für nahtlose Identitätsverwaltung über alle Umgebungen\n• Hybrid-Integration-Patterns für optimale Verbindung von On-Premises und Cloud-Systemen\n\n🤖 Intelligent-Automation und Adaptive-Systems:\n• AI-powered Identity Analytics für prädiktive Sicherheitsentscheidungen\n• Automated Policy-Management mit Machine Learning für dynamische Regelanpassung\n• Behavioral-Analytics-Integration für kontinuierliche Benutzerverifikation\n• Self-Healing-Systems für automatische Problemerkennung und Remediation\n• Cognitive-Security-Frameworks für intelligente Bedrohungserkennung und Response\n\n📱 Digital-Experience und User-Centric-Design:\n• Passwordless-Authentication-Strategien für verbesserte Benutzerfreundlichkeit\n• Biometric-Integration für nahtlose und sichere Authentifizierung\n• Contextual-Authentication für intelligente Anpassung an Benutzerkontext\n• Progressive-Identity-Verification für stufenweise Vertrauensbildung\n• Omnichannel-Identity-Experience für konsistente Benutzererfahrung über alle Kanäle\n\n🔗 Ecosystem-Integration und Platform-Economy:\n• API-Economy-Participation für Monetarisierung von Identitätsdiensten\n• Partner-Ecosystem-Integration für erweiterte Service-Angebote\n• Identity-as-a-Service-Modelle für flexible und skalierbare Bereitstellung\n• Open-Standards-Adoption für maximale Interoperabilität\n• Digital-Identity-Wallet-Integration für Self-Sovereign-Identity-Konzepte\n\n⚡ Agile-Development und Continuous-Innovation:\n• DevSecOps-Integration für sichere und agile Entwicklungsprozesse\n• Continuous-Deployment-Pipelines für schnelle Feature-Bereitstellung\n• A/B-Testing-Frameworks für datengetriebene Optimierung\n• Innovation-Labs für Exploration neuer Technologien und Konzepte\n• Fail-Fast-Mentality für schnelle Iteration und Lernzyklen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielen Governance-Frameworks und Compliance-Konzepte in modernen IAM-Strategien und wie gewährleisten sie regulatorische Exzellenz bei gleichzeitiger Business-Agilität?',
        answer: "Governance-Frameworks und Compliance-Konzepte bilden das regulatorische Rückgrat moderner IAM-Strategien und ermöglichen es Unternehmen, höchste Compliance-Standards zu erfüllen, ohne dabei Business-Agilität und Innovationsfähigkeit zu beeinträchtigen. Diese strategische Balance zwischen Kontrolle und Flexibilität ist entscheidend für nachhaltigen Geschäftserfolg in regulierten Umgebungen.\n\n🏛️ Enterprise-Governance-Strukturen und Decision-Frameworks:\n• Identity Governance-Committees mit klaren Rollen und Entscheidungskompetenzen\n• Policy-Management-Hierarchien für konsistente Richtliniendurchsetzung\n• Risk-Governance-Integration für systematische Risikobewertung und Management\n• Stakeholder-Alignment-Prozesse für optimale Interessensvertretung\n• Governance-Automation für effiziente Entscheidungsprozesse und Compliance-Überwachung\n\n📋 Compliance-by-Design und Regulatory-Excellence:\n• GDPR-Integration für umfassenden Datenschutz und Privacy-Management\n• SOX-Compliance für finanzielle Kontrollen und Audit-Bereitschaft\n• ISO-Standards-Adoption für internationale Best-Practice-Compliance\n• Industry-Specific-Regulations für branchenspezifische Anforderungen\n• Continuous-Compliance-Monitoring für Real-time Regulatory-Adherence\n\n🔍 Risk-Management und Control-Frameworks:\n• Risk-based Access Controls für intelligente Autorisierungsentscheidungen\n• Segregation of Duties für Verhinderung von Interessenkonflikten\n• Privileged Access Governance für Kontrolle kritischer Systemzugriffe\n• Fraud-Detection-Integration für proaktive Betrugserkennung\n• Third-Party-Risk-Management für sichere Partner-Integration\n\n📊 Audit-Excellence und Transparency-Frameworks:\n• Comprehensive Audit-Trails für lückenlose Nachverfolgbarkeit aller Aktivitäten\n• Automated Compliance-Reporting für effiziente Regulatory-Kommunikation\n• Evidence-Collection-Automation für vereinfachte Audit-Vorbereitung\n• Real-time Compliance-Dashboards für kontinuierliche Überwachung\n• Forensic-Capabilities für detaillierte Incident-Investigation\n\n⚖️ Policy-Management und Rule-Engine-Integration:\n• Dynamic Policy-Frameworks für adaptive Regelanpassung\n• Business-Rule-Integration für fachliche Logik in Autorisierungsentscheidungen\n• Exception-Management für kontrollierte Abweichungen von Standard-Policies\n• Policy-Simulation für Vorab-Testing von Regeländerungen\n• Conflict-Resolution-Mechanisms für automatische Behandlung von Policy-Konflikten\n\n🚀 Agile-Compliance und Innovation-Enablement:\n• Compliance-as-Code für automatisierte Regelimplementierung\n• Regulatory-Sandboxes für sichere Innovation-Exploration\n• Fast-Track-Approval-Prozesse für zeitkritische Business-Anforderungen\n• Compliance-Automation für Reduzierung manueller Overhead\n• Innovation-Governance für Balance zwischen Compliance und Agilität"
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
