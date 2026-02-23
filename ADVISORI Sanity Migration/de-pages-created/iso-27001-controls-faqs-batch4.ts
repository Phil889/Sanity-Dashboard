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
    console.log('Updating ISO 27001 Controls page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-controls" not found')
    }
    
    // Create new FAQs for ISO 27001 Controls specialized topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie werden ISO 27001 Controls bei Mergers & Acquisitions und organisatorischen Veränderungen gehandhabt?',
        answer: "Mergers & Acquisitions sowie organisatorische Veränderungen stellen besondere Herausforderungen für die Kontinuität und Wirksamkeit von ISO 27001 Controls dar. Diese Situationen erfordern eine strategische Herangehensweise, um Sicherheitslücken zu vermeiden und gleichzeitig die Geschäftskontinuität zu gewährleisten.\n\n🔍 Due Diligence und Risikobewertung:\n• Umfassende Sicherheitsaudits der Zielorganisation zur Identifikation von Risiken und Compliance-Lücken\n• Bewertung der bestehenden Kontrolllandschaft und deren Kompatibilität mit eigenen Standards\n• Analyse von Datenflüssen und Informationsassets der zu integrierenden Organisation\n• Identifikation kritischer Sicherheitsabhängigkeiten und Single Points of Failure\n• Assessment von Cyber-Versicherungen und bestehenden Sicherheitsvorfällen\n\n🏗️ Integrationsstrategie und Harmonisierung:\n• Entwicklung einer phasenweisen Integrationsstrategie für Sicherheitskontrollen\n• Harmonisierung unterschiedlicher Sicherheitsstandards und Richtlinien\n• Konsolidierung von Identitäts und Zugriffsmanagementsystemen\n• Integration von Monitoring und Incident Response Capabilities\n• Standardisierung von Sicherheitsprozessen und Verfahren\n\n📊 Governance und Organisationsstruktur:\n• Etablierung temporärer Governance-Strukturen für die Übergangsphase\n• Definition klarer Verantwortlichkeiten und Eskalationswege\n• Integration von Sicherheitsteams und Aufbau gemeinsamer Arbeitsweisen\n• Harmonisierung von Reporting-Strukturen und KPIs\n• Entwicklung einer einheitlichen Sicherheitskultur\n\n🔐 Technische Integration:\n• Sichere Migration von Daten und Systemen zwischen Organisationen\n• Integration von Netzwerkinfrastrukturen unter Beibehaltung der Segmentierung\n• Konsolidierung von Sicherheitstools und Technologieplattformen\n• Harmonisierung von Backup und Disaster Recovery Systemen\n• Etablierung einheitlicher Verschlüsselungsstandards\n\n📋 Compliance und Dokumentation:\n• Aktualisierung der Statement of Applicability für die neue Organisationsstruktur\n• Harmonisierung von Sicherheitsdokumentation und Richtlinien\n• Integration von Audit und Compliance Prozessen\n• Anpassung von Zertifizierungen und externen Assessments\n• Kommunikation mit Regulatoren und Aufsichtsbehörden\n\n🎯 Change Management:\n• Umfassende Kommunikationsstrategie für alle Stakeholder\n• Schulungsprogramme für neue Sicherheitsstandards und Verfahren\n• Kulturelle Integration und Aufbau gemeinsamer Sicherheitswerte\n• Kontinuierliche Überwachung der Integrationserfolge\n• Anpassung der Strategie basierend auf Lessons Learned"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche spezifischen Herausforderungen entstehen bei der Implementierung von ISO 27001 Controls in agilen und DevOps-Umgebungen?',
        answer: "Die Implementierung von ISO 27001 Controls in agilen und DevOps-Umgebungen erfordert eine fundamentale Neuausrichtung traditioneller Sicherheitsansätze. Die Geschwindigkeit und Flexibilität dieser Arbeitsweisen stehen oft im Konflikt mit traditionellen, prozessorientierten Sicherheitskontrollen, was innovative Lösungsansätze erforderlich macht.\n\n⚡ Geschwindigkeit vs. Sicherheit:\n• Integration von Sicherheitskontrollen in automatisierte CI/CD-Pipelines ohne Verlangsamung der Entwicklungszyklen\n• Shift-Left Security Ansätze zur frühzeitigen Identifikation von Sicherheitsproblemen\n• Automatisierte Sicherheitstests und Vulnerability Scans in jeder Build-Phase\n• Real-time Security Feedback für Entwicklungsteams\n• Balance zwischen Entwicklungsgeschwindigkeit und angemessener Sicherheitsüberprüfung\n\n🔄 Kontinuierliche Compliance:\n• Automatisierte Compliance-Checks als Teil der Deployment-Pipeline\n• Infrastructure as Code Ansätze für konsistente Sicherheitskonfigurationen\n• Policy as Code Implementation für automatische Durchsetzung von Sicherheitsrichtlinien\n• Kontinuierliche Überwachung und Alerting für Compliance-Abweichungen\n• Automated Remediation für bekannte Sicherheitsprobleme\n\n👥 Kulturelle Transformation:\n• Aufbau einer DevSecOps-Kultur mit geteilter Verantwortung für Sicherheit\n• Security Champions Programme in Entwicklungsteams\n• Gamification von Sicherheitspraktiken zur Erhöhung der Akzeptanz\n• Kontinuierliche Schulungen zu sicheren Entwicklungspraktiken\n• Integration von Sicherheitszielen in Team-OKRs und Performance-Metriken\n\n🛠️ Tooling und Automatisierung:\n• Integration von Security Tools in bestehende Entwicklungsumgebungen\n• Automatisierte Dependency Scanning und License Compliance\n• Container Security und Kubernetes-spezifische Kontrollen\n• API Security Testing und Monitoring\n• Secrets Management und sichere Konfigurationsverwaltung\n\n📊 Monitoring und Observability:\n• Application Performance Monitoring mit integrierter Sicherheitsüberwachung\n• Distributed Tracing für Sicherheitsereignisse in Microservices-Architekturen\n• Real-time Threat Detection in produktiven Umgebungen\n• Behavioral Analytics für Anwendungen und Benutzer\n• Incident Response Automation für schnelle Reaktionszeiten\n\n🎯 Governance und Risikomanagement:\n• Agile Risk Assessment Methoden für schnelle Iterationen\n• Continuous Risk Monitoring und adaptive Kontrollmaßnahmen\n• Lightweight Documentation Ansätze für Compliance-Nachweise\n• Automated Audit Trails und Evidence Collection\n• Integration von Sicherheitsmetriken in Business Dashboards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie werden ISO 27001 Controls für Remote Work und hybride Arbeitsmodelle angepasst?',
        answer: "Die Anpassung von ISO 27001 Controls für Remote Work und hybride Arbeitsmodelle erfordert eine grundlegende Überarbeitung traditioneller Sicherheitskonzepte, die auf physische Büroumgebungen ausgerichtet waren. Die Erweiterung des Sicherheitsperimeters auf Heimarbeitsplätze und mobile Umgebungen bringt neue Risiken und Herausforderungen mit sich.\n\n🏠 Endpoint Security und Device Management:\n• Comprehensive Endpoint Detection and Response Lösungen für alle Remote-Geräte\n• Mobile Device Management und Bring Your Own Device Richtlinien\n• Automatisierte Patch-Management-Systeme für verteilte Endgeräte\n• Disk Encryption und Data Loss Prevention auf allen Arbeitsgeräten\n• Regular Security Health Checks und Compliance-Monitoring\n\n🌐 Netzwerk und Konnektivität:\n• Zero Trust Network Architecture für sichere Remote-Zugriffe\n• VPN-Alternativen wie Software-Defined Perimeter Lösungen\n• Secure Web Gateways und DNS-Filtering für Home-Office-Verbindungen\n• Network Access Control für verschiedene Verbindungstypen\n• Bandwidth Management und Quality of Service für kritische Anwendungen\n\n🔐 Identity und Access Management:\n• Multi-Faktor-Authentifizierung für alle Remote-Zugriffe\n• Privileged Access Management für administrative Tätigkeiten\n• Conditional Access Policies basierend auf Standort und Gerätestatus\n• Just-in-Time Access für temporäre Berechtigungen\n• Regular Access Reviews und automatisierte Deprovisioning\n\n📱 Collaboration und Communication Security:\n• Sichere Videokonferenz-Lösungen mit End-to-End-Verschlüsselung\n• Secure File Sharing und Cloud Storage Governance\n• Email Security und Anti-Phishing-Maßnahmen für Remote-Mitarbeiter\n• Instant Messaging Security und Data Retention Policies\n• Digital Signature und Document Security für Remote-Workflows\n\n🏢 Physical Security für Home Offices:\n• Guidelines für sichere Heimarbeitsplätze und Bildschirmschutz\n• Secure Storage Anforderungen für vertrauliche Dokumente\n• Visitor Management und Family Member Awareness\n• Clean Desk Policies für Heimarbeitsplätze\n• Incident Reporting Verfahren für physische Sicherheitsvorfälle\n\n📚 Training und Awareness:\n• Remote-spezifische Sicherheitsschulungen und Phishing-Simulationen\n• Home Office Security Checklists und Best Practice Guides\n• Regular Security Awareness Sessions über Videokonferenzen\n• Incident Response Training für Remote-Szenarien\n• Cultural Change Management für verteilte Teams"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Rolle spielen Drittanbieter und Supply Chain Security bei der Implementierung von ISO 27001 Controls?',
        answer: "Supply Chain Security und das Management von Drittanbietern sind kritische Aspekte der ISO 27001 Controls, da moderne Organisationen zunehmend auf externe Partner, Lieferanten und Service Provider angewiesen sind. Die Sicherheit der gesamten Wertschöpfungskette ist nur so stark wie ihr schwächstes Glied, was eine systematische Herangehensweise an Drittanbieter-Risiken erforderlich macht.\n\n🔍 Vendor Risk Assessment und Due Diligence:\n• Umfassende Sicherheitsbewertungen aller kritischen Lieferanten und Service Provider\n• Standardisierte Fragebögen und Assessment-Frameworks für Drittanbieter\n• On-site Audits und Penetrationstests bei kritischen Partnern\n• Continuous Monitoring von Drittanbieter-Sicherheitsstatus und Compliance\n• Integration von Cyber-Risiko-Ratings und Threat Intelligence\n\n📋 Vertragliche Sicherheitsanforderungen:\n• Standardisierte Sicherheitsklauseln und Service Level Agreements\n• Data Processing Agreements und Privacy Impact Assessments\n• Incident Notification und Response Verpflichtungen\n• Right-to-Audit Klauseln und regelmäßige Compliance-Reviews\n• Liability und Insurance Anforderungen für Cyber-Risiken\n\n🌐 Supply Chain Visibility und Mapping:\n• Vollständige Kartierung der Supply Chain einschließlich Sub-Contractors\n• Identifikation kritischer Abhängigkeiten und Single Points of Failure\n• Geopolitische Risikobewertung und Diversifikationsstrategien\n• Software Supply Chain Security und Software Bill of Materials\n• Hardware Supply Chain Integrity und Tamper-Evidence\n\n🔐 Data Sharing und Protection:\n• Data Classification und Handling Requirements für Drittanbieter\n• Encryption und Tokenization für sensible Datenübertragungen\n• Data Residency und Cross-Border Transfer Compliance\n• Secure APIs und Integration Security für Drittanbieter-Systeme\n• Data Retention und Secure Deletion Policies\n\n📊 Continuous Monitoring und Governance:\n• Real-time Monitoring von Drittanbieter-Netzwerken und Systemen\n• Automated Threat Intelligence Sharing mit kritischen Partnern\n• Regular Business Continuity und Disaster Recovery Testing\n• Vendor Performance Dashboards und Risk Scoring\n• Escalation Procedures für Sicherheitsvorfälle bei Drittanbietern\n\n🚨 Incident Response und Crisis Management:\n• Joint Incident Response Procedures mit kritischen Lieferanten\n• Communication Protocols und Stakeholder Notification\n• Forensic Investigation Capabilities für Supply Chain Incidents\n• Business Continuity Planning für Drittanbieter-Ausfälle\n• Lessons Learned Integration und Continuous Improvement"
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
