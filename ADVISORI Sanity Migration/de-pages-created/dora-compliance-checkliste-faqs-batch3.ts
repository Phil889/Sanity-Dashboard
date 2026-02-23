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
    console.log('Updating DORA Compliance Checkliste page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-compliance-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-compliance-checkliste" not found')
    }
    
    // Create new FAQs for technical implementation and testing procedures
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche technischen Implementierungs-Checklisten sind für DORA-konforme IKT-Systeme erforderlich?',
        answer: "Die technische Implementierung DORA-konformer IKT-Systeme erfordert umfassende, detaillierte Checklisten, die sowohl Sicherheitsaspekte als auch operative Resilienz systematisch abdecken. Diese Checklisten müssen verschiedene Technologie-Ebenen und Systemkategorien berücksichtigen.\n\n🔧 Systemarchitektur und Design-Prinzipien:\n• Implementation von Resilienz-by-Design-Prinzipien in allen kritischen IKT-Systemen mit Fokus auf Redundanz und Ausfallsicherheit\n• Entwicklung modularer Systemarchitekturen zur Minimierung von Single Points of Failure\n• Sicherstellung angemessener Skalierbarkeit und Performance-Reserven für kritische Systeme\n• Integration von Security-by-Design-Konzepten in alle Entwicklungs- und Implementierungsprozesse\n• Etablierung klarer Architektur-Standards und Design-Patterns für konsistente Implementierung\n\n🛡️ Cybersecurity-Kontrollen und Schutzmaßnahmen:\n• Implementation umfassender Identity and Access Management-Systeme mit Multi-Faktor-Authentifizierung\n• Entwicklung robuster Verschlüsselungsstrategien für Daten in Transit und at Rest\n• Etablierung von Network Segmentation und Zero-Trust-Architekturen für kritische Systeme\n• Implementation von Endpoint Detection and Response-Lösungen für umfassende Bedrohungserkennung\n• Sicherstellung regelmäßiger Security Patching und Vulnerability Management-Prozesse\n\n📊 Monitoring und Observability-Frameworks:\n• Implementation umfassender Logging- und Monitoring-Systeme für alle kritischen IKT-Komponenten\n• Entwicklung von Real-Time-Dashboards und Alerting-Mechanismen für operative Teams\n• Etablierung von Performance-Monitoring und Capacity-Planning-Prozessen\n• Integration von Security Information and Event Management-Systemen für Threat Detection\n• Sicherstellung angemessener Data Retention und Compliance-Logging-Fähigkeiten\n\n🔄 Backup und Recovery-Systeme:\n• Implementation robuster Backup-Strategien mit regelmäßigen Recovery-Tests\n• Entwicklung von Disaster Recovery-Systemen mit definierten Recovery Time und Point Objectives\n• Etablierung von Cross-Site-Replication für kritische Daten und Systeme\n• Sicherstellung verschlüsselter und geografisch verteilter Backup-Speicherung\n• Integration von Automated Recovery-Prozessen für minimale Downtime"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie entwickle ich umfassende Testing-Checklisten für DORA-Compliance-Validierung?',
        answer: "DORA-konforme Testing-Programme erfordern strukturierte, mehrdimensionale Checklisten, die verschiedene Testarten und -methoden systematisch abdecken. Die Testing-Strategie muss sowohl präventive Validierung als auch reaktive Resilienz-Bewertung umfassen.\n\n🧪 Operational Resilience Testing-Framework:\n• Entwicklung umfassender Test-Szenarien basierend auf realistischen Bedrohungs- und Ausfallszenarien\n• Implementation verschiedener Testing-Methoden von Tabletop-Übungen bis zu Live-Fire-Tests\n• Etablierung regelmäßiger Testing-Zyklen mit eskalierenden Komplexitätsgraden\n• Sicherstellung angemessener Test-Dokumentation und Ergebnis-Analyse\n• Integration von Lessons-Learned in kontinuierliche Verbesserungsprozesse\n\n🔍 Penetration Testing und Vulnerability Assessments:\n• Implementation regelmäßiger Penetration Tests durch qualifizierte interne oder externe Teams\n• Entwicklung umfassender Vulnerability Scanning-Programme für alle kritischen Systeme\n• Etablierung von Red Team-Übungen zur Bewertung der Gesamtsicherheitsposture\n• Sicherstellung angemessener Remediation-Prozesse für identifizierte Schwachstellen\n• Integration von Threat Intelligence in Testing-Szenarien für realistische Bewertungen\n\n📋 Compliance und Audit-Testing:\n• Entwicklung spezifischer Test-Checklisten für alle DORA-Compliance-Anforderungen\n• Implementation regelmäßiger Internal Audits zur Validierung der Compliance-Posture\n• Etablierung von Mock-Audit-Programmen zur Vorbereitung auf regulatorische Prüfungen\n• Sicherstellung angemessener Dokumentation aller Testing-Aktivitäten für Audit-Zwecke\n• Integration von Compliance-Testing in reguläre Betriebsprozesse\n\n🔄 Kontinuierliche Testing-Verbesserung:\n• Etablierung von Testing-Metriken und KPIs zur Bewertung der Programm-Effektivität\n• Implementation von Post-Test-Reviews zur Identifikation von Verbesserungsmöglichkeiten\n• Entwicklung von Testing-Automation wo möglich zur Erhöhung der Effizienz\n• Sicherstellung regelmäßiger Updates der Testing-Methoden basierend auf sich ändernden Bedrohungen\n• Integration von Industry Best Practices und Standards in Testing-Programme"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche spezifischen Checklisten sind für die Bewertung und Implementierung von Information Sharing-Mechanismen unter DORA erforderlich?',
        answer: "Information Sharing unter DORA erfordert strukturierte Checklisten, die sowohl technische Implementierung als auch organisatorische Prozesse für effektiven Cyber-Threat-Intelligence-Austausch abdecken. Die Mechanismen müssen Sicherheit, Vertraulichkeit und operative Effizienz gewährleisten.\n\n🔗 Information Sharing-Infrastruktur:\n• Implementation sicherer Kommunikationskanäle für Threat-Intelligence-Austausch mit standardisierten Protokollen\n• Entwicklung automatisierter Feed-Integration für Real-Time-Threat-Intelligence von vertrauenswürdigen Quellen\n• Etablierung von Data Classification und Handling-Prozessen für verschiedene Intelligence-Kategorien\n• Sicherstellung angemessener Verschlüsselung und Access Controls für sensitive Intelligence-Daten\n• Integration von Threat Intelligence Platforms für effiziente Datenverarbeitung und -analyse\n\n📊 Datenqualität und -validierung:\n• Entwicklung von Qualitätskriterien und Validierungsprozessen für eingehende Threat Intelligence\n• Implementation von Source Reliability und Information Credibility-Bewertungssystemen\n• Etablierung von Deduplication und Correlation-Mechanismen für Intelligence-Feeds\n• Sicherstellung angemessener Contextualization und Enrichment von Threat-Daten\n• Integration von False Positive-Reduktion und Relevance-Filtering-Prozessen\n\n🤝 Stakeholder-Engagement und Kooperation:\n• Entwicklung von Partnerschaften mit relevanten Information Sharing-Organisationen und Behörden\n• Implementation von Reciprocal Sharing-Agreements mit anderen Finanzinstituten\n• Etablierung von Participation-Frameworks für Industry-Threat-Intelligence-Initiativen\n• Sicherstellung angemessener Legal und Compliance-Reviews für Sharing-Aktivitäten\n• Integration von Cross-Sector-Information-Sharing für umfassende Threat-Visibility\n\n🔄 Operative Integration und Nutzung:\n• Implementation von Threat Intelligence-Integration in Security Operations Center-Prozesse\n• Entwicklung von Automated Response-Mechanismen basierend auf Intelligence-Feeds\n• Etablierung von Intelligence-Driven-Hunting und Proactive-Defense-Strategien\n• Sicherstellung angemessener Training und Awareness für Intelligence-Nutzung\n• Integration von Feedback-Mechanismen zur kontinuierlichen Verbesserung der Intelligence-Qualität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie strukturiere ich Checklisten für die Bewertung der digitalen operationellen Resilienz in Cloud-Umgebungen?',
        answer: "Cloud-basierte digitale operationelle Resilienz unter DORA erfordert spezialisierte Checklisten, die die einzigartigen Herausforderungen und Möglichkeiten von Cloud-Infrastrukturen systematisch adressieren. Die Bewertung muss sowohl technische als auch governance-bezogene Aspekte umfassen.\n\n☁️ Cloud-Architektur und Resilienz-Design:\n• Bewertung von Multi-Cloud und Hybrid-Cloud-Strategien zur Vermeidung von Vendor Lock-in und Single Points of Failure\n• Implementation von Auto-Scaling und Load-Balancing-Mechanismen für dynamische Resilienz\n• Etablierung von Cross-Region-Redundancy für kritische Workloads und Daten\n• Sicherstellung angemessener Network-Resilienz und Connectivity-Backup-Optionen\n• Integration von Infrastructure-as-Code für konsistente und wiederholbare Deployments\n\n🔒 Cloud Security und Compliance-Kontrollen:\n• Implementation von Cloud Security Posture Management für kontinuierliche Compliance-Überwachung\n• Entwicklung von Identity and Access Management-Strategien für Cloud-Ressourcen\n• Etablierung von Data Loss Prevention und Encryption-Strategien für Cloud-Daten\n• Sicherstellung angemessener Network Security und Micro-Segmentation in Cloud-Umgebungen\n• Integration von Cloud-native Security-Tools und -Services für umfassenden Schutz\n\n📊 Cloud-Monitoring und Observability:\n• Implementation umfassender Cloud-Monitoring für Performance, Verfügbarkeit und Sicherheit\n• Entwicklung von Cloud-Cost-Monitoring und -Optimization-Strategien\n• Etablierung von Centralized Logging und SIEM-Integration für Cloud-Workloads\n• Sicherstellung angemessener Alerting und Incident-Response für Cloud-Incidents\n• Integration von Cloud-native Monitoring-Tools mit bestehenden Operations-Prozessen\n\n🔄 Cloud-Provider-Management und Governance:\n• Bewertung und Management von Cloud-Provider-Risiken und -Dependencies\n• Implementation von Service Level Agreement-Monitoring und -Enforcement\n• Etablierung von Cloud-Provider-Audit und -Assessment-Prozesse\n• Sicherstellung angemessener Exit-Strategien und Data Portability-Pläne\n• Integration von Cloud-Provider-Incident-Management in eigene Response-Prozesse"
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
