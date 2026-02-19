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
    console.log('Updating IAM Was ist das page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-was-ist-das' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-was-ist-das" not found')
    }
    
    // Create new FAQs for IAM vendor selection and best practices
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Kriterien sollten bei der Auswahl eines IAM-Anbieters berücksichtigt werden und wie bewertet man verschiedene Lösungen objektiv?',
        answer: "Die Auswahl des richtigen IAM-Anbieters ist eine strategische Entscheidung mit langfristigen Auswirkungen auf Sicherheit, Kosten und operative Effizienz. Eine strukturierte Bewertung verschiedener Anbieter basierend auf objektiven Kriterien und umfassenden Evaluierungsmethoden ist entscheidend für den Projekterfolg.\n\n🎯 Funktionale Anforderungen und Capabilities:\n• Comprehensive Feature Set für alle erforderlichen IAM-Funktionalitäten wie Authentifizierung, Autorisierung und Governance\n• Scalability und Performance für aktuelle und zukünftige Benutzer- und Transaktionsvolumen\n• Integration Capabilities für nahtlose Anbindung bestehender Systeme und Anwendungen\n• Customization Options für spezifische Geschäftsanforderungen und Branchenerfordernisse\n• API Quality und Documentation für Entwicklerfreundlichkeit und Erweiterbarkeit\n\n🛡️ Sicherheit und Compliance Considerations:\n• Security Architecture und Best Practices für robuste Sicherheitskontrollen\n• Compliance Certifications wie SOC 2, ISO 27001, FedRAMP oder branchenspezifische Standards\n• Data Protection und Privacy Controls für GDPR und andere Datenschutzbestimmungen\n• Vulnerability Management und Security Response Prozesse\n• Penetration Testing und Security Audit Ergebnisse\n\n💰 Total Cost of Ownership und Pricing Models:\n• Transparent Pricing Structure ohne versteckte Kosten oder unerwartete Gebühren\n• Flexible Licensing Models für verschiedene Deployment-Szenarien\n• Implementation und Professional Services Kosten\n• Ongoing Maintenance und Support Expenses\n• ROI Projections und Business Case Validation\n\n🏢 Vendor Stability und Market Position:\n• Financial Stability und Unternehmensstärke für langfristige Partnerschaft\n• Market Leadership und Innovation Track Record\n• Customer Base und Reference Accounts in ähnlichen Branchen\n• Product Roadmap und Future Investment Commitments\n• Merger und Acquisition Risks\n\n🔧 Implementation und Support Quality:\n• Professional Services Expertise und Methodology\n• Training und Enablement Programs für interne Teams\n• Technical Support Quality und Response Times\n• Documentation Quality und Knowledge Base\n• Community Support und User Groups\n\n📊 Evaluation Methodology und Best Practices:\n• Structured RFP Process mit detaillierten Anforderungskatalogen\n• Proof of Concept Testing mit realistischen Use Cases\n• Reference Calls mit bestehenden Kunden\n• Total Cost of Ownership Analysis über mehrere Jahre\n• Risk Assessment für Vendor Lock-in und Migration Complexity"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie können Unternehmen eine erfolgreiche IAM-Strategie entwickeln und welche Best Practices sollten dabei beachtet werden?',
        answer: "Eine erfolgreiche IAM-Strategie erfordert einen ganzheitlichen Ansatz, der Geschäftsziele, technische Anforderungen, Sicherheitsrisiken und organisatorische Faktoren in Einklang bringt. Die Strategie sollte als lebendiges Dokument verstanden werden, das sich mit den sich ändernden Geschäftsanforderungen und Technologietrends weiterentwickelt.\n\n🎯 Strategische Grundlagen und Vision Development:\n• Business Alignment für enge Verknüpfung der IAM-Strategie mit Unternehmenszielen\n• Stakeholder Engagement für umfassende Einbindung aller relevanten Geschäftsbereiche\n• Current State Assessment für detaillierte Analyse bestehender Identitäts- und Zugriffslandschaft\n• Future State Vision für klare Definition der angestrebten IAM-Zielarchitektur\n• Gap Analysis für Identifizierung der erforderlichen Transformationsschritte\n\n📋 Governance Framework und Organizational Structure:\n• IAM Governance Board für strategische Entscheidungsfindung und Oversight\n• Roles und Responsibilities Definition für klare Verantwortlichkeiten\n• Policy Framework für konsistente Sicherheitsrichtlinien und Standards\n• Change Management Processes für kontrollierte Evolution der IAM-Landschaft\n• Performance Metrics und KPIs für kontinuierliche Erfolgsmessung\n\n🔐 Security und Risk Management Integration:\n• Risk-based Approach für Priorisierung von Sicherheitsmaßnahmen\n• Zero Trust Principles für moderne Sicherheitsarchitektur\n• Threat Modeling für proaktive Identifizierung von Sicherheitsrisiken\n• Incident Response Integration für koordinierte Reaktion auf Sicherheitsvorfälle\n• Continuous Security Assessment für adaptive Sicherheitskontrollen\n\n🚀 Technology Roadmap und Architecture Planning:\n• Technology Standards für konsistente Technologieauswahl\n• Integration Architecture für nahtlose Systemanbindung\n• Cloud Strategy Alignment für moderne Deployment-Modelle\n• Emerging Technology Evaluation für zukunftssichere Investitionen\n• Vendor Strategy für optimale Anbieterbeziehungen\n\n👥 User Experience und Adoption Strategy:\n• User-centric Design für optimale Benutzerfreundlichkeit\n• Change Management für erfolgreiche Benutzeradoption\n• Training und Communication Programs für Kompetenzaufbau\n• Feedback Mechanisms für kontinuierliche Verbesserung\n• Self-Service Capabilities für Benutzerautonomie\n\n📊 Implementation Roadmap und Execution:\n• Phased Implementation für schrittweise Transformation\n• Quick Wins Identification für frühe Erfolge und Momentum\n• Resource Planning für angemessene Kapazitäten\n• Risk Mitigation für proaktive Problemvermeidung\n• Success Criteria Definition für messbare Zielerreichung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Metriken und KPIs sind für die Bewertung der Effektivität von IAM-Systemen am wichtigsten?',
        answer: "Effektive IAM-Metriken und KPIs ermöglichen datengetriebene Entscheidungsfindung, kontinuierliche Verbesserung und Nachweis des Business Value. Ein ausgewogenes Metriken-Portfolio sollte operative Effizienz, Sicherheitseffektivität, Benutzerfreundlichkeit und Geschäftswert abbilden.\n\n📊 Operative Effizienz und Performance Metriken:\n• User Provisioning Time für Messung der Effizienz bei Benutzerkonten-Erstellung\n• Password Reset Resolution Time für Self-Service Effektivität\n• System Availability und Uptime für Zuverlässigkeit der IAM-Services\n• Authentication Response Time für Performance-Monitoring\n• Help Desk Ticket Volume für Reduzierung manueller Interventionen\n\n🛡️ Sicherheit und Risk Management KPIs:\n• Failed Authentication Attempts für Erkennung von Angriffsmustern\n• Privileged Access Usage für Überwachung kritischer Berechtigungen\n• Access Review Completion Rate für Governance-Effektivität\n• Policy Violation Detection für Compliance-Monitoring\n• Mean Time to Detect und Respond für Incident Response Effizienz\n\n👥 User Experience und Adoption Metriken:\n• Single Sign-On Adoption Rate für Benutzerakzeptanz\n• Self-Service Utilization für Autonomie-Förderung\n• User Satisfaction Scores für Qualitätsmessung\n• Training Completion Rates für Kompetenzaufbau\n• Mobile Access Usage für moderne Arbeitsweisen\n\n💰 Business Value und ROI Indikatoren:\n• Cost per Identity für Effizienz-Benchmarking\n• License Optimization Savings für Kosteneinsparungen\n• Audit Preparation Time für Compliance-Effizienz\n• Time to Onboard New Employees für Produktivitätssteigerung\n• Security Incident Cost Reduction für Risikominimierung\n\n📋 Compliance und Governance Metriken:\n• Access Certification Completion für regulatorische Anforderungen\n• Segregation of Duties Violations für Fraud Prevention\n• Audit Finding Resolution Time für Compliance-Exzellenz\n• Policy Exception Approval Time für Governance-Effizienz\n• Data Privacy Compliance Score für Datenschutz-Effektivität\n\n🎯 Strategic und Innovation KPIs:\n• Digital Transformation Enablement für strategischen Beitrag\n• Cloud Migration Support für Modernisierung\n• API Integration Success Rate für Ecosystem-Entwicklung\n• New Technology Adoption für Innovation-Förderung\n• Partner Integration Efficiency für Business-Expansion"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie können Unternehmen ihre bestehenden IAM-Systeme modernisieren und welche Migrationsstrategie ist am erfolgreichsten?',
        answer: "IAM-Modernisierung erfordert einen strategischen, phasenweisen Ansatz, der Geschäftskontinuität gewährleistet, während gleichzeitig moderne Capabilities eingeführt werden. Erfolgreiche Migrationen kombinieren technische Exzellenz mit strukturiertem Change Management und risikominimierenden Implementierungsstrategien.\n\n🔍 Assessment und Modernisierung Planning:\n• Current State Analysis für umfassende Bewertung bestehender IAM-Landschaft\n• Gap Analysis für Identifizierung von Modernisierungsanforderungen\n• Business Case Development für ROI-Rechtfertigung und Stakeholder-Buy-in\n• Risk Assessment für Identifizierung potenzieller Migrationshürden\n• Success Criteria Definition für messbare Modernisierungsziele\n\n🏗️ Architecture und Technology Strategy:\n• Target Architecture Design für zukunftssichere IAM-Infrastruktur\n• Cloud-first Approach für Skalierbarkeit und moderne Capabilities\n• API-driven Integration für flexible Systemanbindung\n• Microservices Architecture für modulare und wartbare Lösungen\n• Standards Compliance für Interoperabilität und Vendor-Unabhängigkeit\n\n🔄 Migration Methodology und Execution:\n• Phased Migration Approach für schrittweise Transformation ohne Disruption\n• Parallel Run Strategy für Risikominimierung während der Übergangsphase\n• Data Migration Planning für sichere und vollständige Datenübertragung\n• Integration Testing für Validierung aller Systemverbindungen\n• Rollback Procedures für Notfallszenarien und Risikomanagement\n\n👥 Change Management und User Adoption:\n• Stakeholder Communication für transparente Information über Modernisierungsvorteile\n• Training Programs für Kompetenzaufbau bei neuen Technologien\n• User Experience Optimization für verbesserte Benutzerfreundlichkeit\n• Feedback Integration für kontinuierliche Verbesserung\n• Support Structure für effektive Unterstützung während der Transition\n\n🛡️ Security und Compliance Continuity:\n• Security Controls Migration für nahtlose Übertragung von Sicherheitsrichtlinien\n• Compliance Validation für Einhaltung regulatorischer Anforderungen\n• Audit Trail Preservation für lückenlose Dokumentation\n• Access Rights Migration für präzise Übertragung von Berechtigungen\n• Incident Response Readiness für Sicherheitsvorfälle während der Migration\n\n🎯 Post-Migration Optimization:\n• Performance Monitoring für kontinuierliche Systemoptimierung\n• User Feedback Analysis für iterative Verbesserungen\n• ROI Measurement für Nachweis des Modernisierungserfolgs\n• Continuous Improvement für langfristige Wertschöpfung\n• Innovation Integration für Adoption neuer Technologien und Capabilities"
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
