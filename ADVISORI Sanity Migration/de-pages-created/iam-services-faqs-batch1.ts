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
    console.log('Updating IAM Services page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-services' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-services" not found')
    }
    
    // Create new FAQs for IAM Services fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Vorteile bieten professionelle IAM Services für moderne Unternehmen und wie unterscheiden sie sich von internen Entwicklungsansätzen?',
        answer: "Professionelle IAM Services transformieren Identity & Access Management von einer technischen Herausforderung zu einem strategischen Wettbewerbsvorteil und ermöglichen es Unternehmen, von bewährten Methoden, spezialisierten Expertise und beschleunigten Implementierungszyklen zu profitieren. Anders als interne Entwicklungsansätze bieten externe IAM Services sofortigen Zugang zu Enterprise-Grade-Expertise, bewährten Architekturen und kontinuierlicher Innovation ohne die Notwendigkeit langwieriger Kompetenzaufbau-Phasen.\n\n🎯 Strategische Business-Transformation:\n• Accelerated Time-to-Value durch bewährte Implementation-Methoden und vorkonfigurierte Best-Practice-Frameworks\n• Risk Mitigation durch erprobte Sicherheitsarchitekturen und Compliance-Integration\n• Cost Optimization durch effiziente Ressourcennutzung und vermiedene Fehlentscheidungen\n• Innovation Access zu neuesten Technologien und Methoden ohne interne Forschungs- und Entwicklungskosten\n• Scalability Enablement für globale Expansion und elastische Geschäftsanforderungen\n\n🚀 Expertise und Methodologie-Vorteile:\n• Deep Technical Knowledge in allen IAM-Technologien und Vendor-Lösungen\n• Proven Delivery Methodologies mit agilen und DevOps-integrierten Ansätzen\n• Cross-Industry Experience für optimale Lösungsarchitekturen und Vermeidung typischer Fallstricke\n• Continuous Learning Integration für permanente Weiterentwicklung und Innovation-Adoption\n• Vendor-Neutral Perspective für objektive Technologie-Evaluation und optimale Investitionsentscheidungen\n\n⚡ Operational Excellence und Effizienz:\n• Rapid Deployment durch vorkonfigurierte Templates und automatisierte Deployment-Pipelines\n• Quality Assurance mit umfassenden Testing-Frameworks und Compliance-Validierung\n• Change Management Expertise für optimale User-Adoption und minimale Disruption\n• Knowledge Transfer Programme für nachhaltige interne Kompetenzentwicklung\n• Continuous Improvement Prozesse für permanente Optimierung und Performance-Steigerung\n\n🛡️ Risk Management und Compliance-Excellence:\n• Regulatory Expertise für automatisierte Compliance und Audit-Bereitschaft\n• Security-by-Design Prinzipien für robuste Sicherheitsarchitekturen\n• Incident Response Capabilities für schnelle Reaktion auf Sicherheitsvorfälle\n• Business Continuity Planning für unterbrechungsfreie Geschäftsprozesse\n• Threat Intelligence Integration für proaktive Sicherheitsmaßnahmen\n\n💡 Innovation und Future-Readiness:\n• Technology Roadmap Alignment für zukunftssichere Investitionen\n• Emerging Technology Integration für Wettbewerbsvorteile durch Innovation\n• Cloud-Native Transformation für moderne Arbeitsplätze und globale Skalierbarkeit\n• AI und Machine Learning Integration für intelligente Automatisierung\n• Ecosystem Integration für nahtlose Anbindung an Partner und Kunden"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie gestaltet sich ein typischer IAM Services Engagement und welche Phasen umfasst eine professionelle IAM-Transformation?',
        answer: "Ein professioneller IAM Services Engagement folgt einem strukturierten, business-orientierten Ansatz, der strategische Planung mit agiler Umsetzung kombiniert und dabei kontinuierliche Wertschöpfung und nachhaltige Transformation gewährleistet. Jede Phase baut systematisch auf der vorherigen auf und integriert Feedback-Schleifen für kontinuierliche Optimierung und Anpassung an sich ändernde Geschäftsanforderungen.\n\n🔍 Discovery und Strategic Assessment Phase:\n• Comprehensive Current-State-Analysis mit detaillierter Bewertung bestehender IAM-Landschaften\n• Business Requirements Gathering durch strukturierte Stakeholder-Interviews und Workshop-Sessions\n• Risk Assessment und Compliance-Gap-Analyse für regulatorische Anforderungen\n• Technology Evaluation und Vendor-Assessment für optimale Lösungsauswahl\n• ROI-Modelling und Business-Case-Entwicklung für Investitionsentscheidungen\n\n📋 Strategic Planning und Design Phase:\n• Target Architecture Design mit Zero-Trust-Prinzipien und Cloud-native Ansätzen\n• Implementation Roadmap mit Phasenplanung und Meilenstein-Definition\n• Change Management Strategy für optimale User-Adoption und organisatorische Transformation\n• Integration Planning für nahtlose Anbindung an bestehende Systeme\n• Success Metrics Definition für messbare Geschäftsergebnisse\n\n⚙️ Implementation und Integration Phase:\n• Agile Development mit Scrum-Methoden und kontinuierlicher Integration\n• Pilot Implementation für Proof-of-Concept und Early-Win-Generierung\n• System Integration mit Legacy-Modernisierung und API-Entwicklung\n• Security Implementation mit Penetration-Testing und Vulnerability-Assessment\n• User Training und Documentation für nachhaltige Adoption\n\n🧪 Testing und Validation Phase:\n• Comprehensive Testing mit funktionalen und Performance-Tests\n• Security Validation durch externe Audits und Compliance-Überprüfung\n• User Acceptance Testing mit repräsentativen Benutzergruppen\n• Load Testing für Skalierbarkeit und Performance-Optimierung\n• Disaster Recovery Testing für Business-Continuity-Sicherstellung\n\n🚀 Deployment und Go-Live Phase:\n• Phased Rollout mit kontrollierten Deployment-Zyklen\n• Production Monitoring mit Real-time-Überwachung und Alerting\n• Incident Response Readiness für schnelle Problemlösung\n• Performance Optimization basierend auf Live-System-Metriken\n• Stakeholder Communication für transparente Fortschrittskommunikation\n\n🔄 Optimization und Continuous Improvement Phase:\n• Performance Monitoring mit KPI-Tracking und Trend-Analyse\n• User Feedback Integration für kontinuierliche Verbesserung\n• Technology Updates und Innovation-Integration\n• Capacity Planning für zukünftige Wachstumsanforderungen\n• Strategic Reviews für langfristige Roadmap-Anpassungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Managed IAM Services sind verfügbar und wie unterstützen sie kontinuierliche Optimierung und operative Excellence?',
        answer: "Managed IAM Services bieten umfassende operative Unterstützung für Identity & Access Management Systeme und ermöglichen es Unternehmen, sich auf ihre Kerngeschäfte zu konzentrieren, während spezialisierte Teams die komplexe IAM-Infrastruktur proaktiv verwalten, optimieren und weiterentwickeln. Diese Services kombinieren technische Excellence mit strategischer Beratung für kontinuierliche Wertschöpfung und Innovation-Integration.\n\n🔧 Proactive System Management und Monitoring:\n• Real-time Infrastructure Monitoring mit intelligenten Alerting-Systemen und Anomaly Detection\n• Performance Optimization durch kontinuierliche Analyse und Tuning kritischer Systemkomponenten\n• Capacity Planning mit prädiktiven Analysen für proaktive Skalierung und Ressourcenoptimierung\n• Health Check Services mit regelmäßigen System-Assessments und Preventive Maintenance\n• Automated Backup und Recovery Management für Business-Continuity-Sicherstellung\n\n🛡️ Security Operations und Threat Management:\n• Security Monitoring mit SIEM-Integration und Advanced Threat Detection\n• Vulnerability Management durch regelmäßige Scans und Patch-Management\n• Incident Response Services mit definierten Eskalationspfaden und Forensic-Capabilities\n• Compliance Monitoring für kontinuierliche regulatorische Konformität\n• Threat Intelligence Integration für proaktive Abwehr neuer Bedrohungen\n\n⚡ Operational Excellence und Service Delivery:\n• Multi-Level Support mit definierten SLAs und garantierten Response-Zeiten\n• Change Management Services für kontrollierte System-Updates und Konfigurationsänderungen\n• Documentation Management mit aktueller Systemdokumentation und Prozessbeschreibungen\n• User Support Services für End-User-Assistance und Problem-Resolution\n• Training und Knowledge Transfer für interne Teams und Stakeholder\n\n📊 Analytics und Continuous Improvement:\n• Identity Analytics für Einblicke in Benutzerverhalten und Zugriffsmuster\n• Performance Analytics mit detailliertem Reporting und Trend-Analyse\n• Cost Optimization Analysis für effiziente Ressourcennutzung und Budget-Management\n• Risk Assessment Services für kontinuierliche Risikobewertung und Mitigation\n• Innovation Roadmap Planning für strategische Technologie-Evolution\n\n🔄 Lifecycle Management und Evolution:\n• Technology Refresh Planning für rechtzeitige System-Updates und Modernisierung\n• Integration Services für neue Anwendungen und System-Erweiterungen\n• Migration Services für Cloud-Transformation und Platform-Upgrades\n• Vendor Management für optimale Supplier-Relationships und Contract-Optimization\n• Strategic Consulting für langfristige IAM-Strategie-Entwicklung\n\n🌐 Cloud und Hybrid Management:\n• Multi-Cloud Management für konsistente Governance über alle Cloud-Umgebungen\n• Hybrid Integration Services für nahtlose On-Premises und Cloud-Verbindung\n• DevOps Integration für moderne CI/CD-Pipelines und Automation\n• API Management für sichere und skalierbare Service-Integration\n• Container Security für moderne Anwendungsarchitekturen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie werden IAM Services an spezifische Branchen und Compliance-Anforderungen angepasst und welche regulatorischen Frameworks werden unterstützt?',
        answer: "IAM Services werden durch spezialisierte Branchenexpertise und tiefgreifende Compliance-Kenntnisse an spezifische regulatorische Anforderungen angepasst, wodurch Unternehmen nicht nur technische Excellence, sondern auch vollständige regulatorische Konformität und Audit-Bereitschaft erhalten. Diese branchenspezifische Anpassung kombiniert bewährte IAM-Prinzipien mit spezialisierten Compliance-Frameworks für optimale Geschäftsergebnisse.\n\n🏦 Financial Services und Banking Compliance:\n• Basel III und CRD IV Compliance für Kapitaladäquanz und Risikomanagement\n• PCI DSS Implementation für sichere Zahlungskartenverarbeitung\n• SWIFT Customer Security Programme für sichere Finanzmarktkommunikation\n• Anti-Money Laundering Controls mit KYC-Integration und Transaction-Monitoring\n• Operational Risk Management nach regulatorischen Vorgaben\n\n🏥 Healthcare und Life Sciences Compliance:\n• HIPAA Compliance für Schutz von Gesundheitsdaten und Patient Privacy\n• FDA CFR Part 11 für elektronische Aufzeichnungen und Signaturen\n• GDPR Healthcare Provisions für europäische Datenschutzanforderungen\n• Clinical Trial Data Integrity für pharmazeutische Forschung\n• Medical Device Security für IoT und Connected Health Solutions\n\n🏭 Manufacturing und Critical Infrastructure:\n• IEC 62443 Industrial Security Standards für OT-Umgebungen\n• NIST Cybersecurity Framework für kritische Infrastrukturen\n• ISO 27001 Information Security Management für Enterprise-Governance\n• TISAX Automotive Security für Automobilindustrie-Anforderungen\n• Supply Chain Security für Partner-Integration und Vendor-Management\n\n🌍 European Regulatory Compliance:\n• GDPR Data Protection mit Privacy-by-Design und Data Subject Rights\n• NIS2 Directive für Cybersecurity kritischer Einrichtungen\n• DORA Financial Services Resilience für digitale operative Resilienz\n• AI Act Compliance für künstliche Intelligenz und automatisierte Entscheidungsfindung\n• eIDAS Electronic Identification für digitale Identitäten und Signaturen\n\n🛡️ Government und Public Sector:\n• FedRAMP Authorization für US-Government-Cloud-Services\n• FISMA Compliance für Federal Information Systems\n• Common Criteria Evaluation für Security-Product-Certification\n• FIPS 140-2 Cryptographic Standards für Government-Grade-Security\n• NIST Special Publications für Cybersecurity-Best-Practices\n\n⚖️ Legal und Professional Services:\n• Attorney-Client Privilege Protection für vertrauliche Kommunikation\n• Legal Hold Management für Litigation-Support und eDiscovery\n• Professional Ethics Compliance für regulierte Berufsgruppen\n• Confidentiality Management für sensitive Client-Informationen\n• Audit Trail Requirements für forensische Nachverfolgbarkeit"
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
