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
    console.log('Updating ISO 27001 Maßnahmen page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-massnahmen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-massnahmen" not found')
    }
    
    // Create new FAQs for ISO 27001 Maßnahmen fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was sind ISO 27001 Maßnahmen und wie unterscheiden sie sich von anderen Sicherheitsstandards?',
        answer: "ISO 27001 Maßnahmen sind systematische Sicherheitskontrollen, die in Annex A des Standards definiert sind und einen umfassenden Katalog von Sicherheitsmaßnahmen für alle Aspekte der Informationssicherheit bereitstellen. Diese Kontrollen bilden das operative Herzstück eines jeden ISMS und unterscheiden sich fundamental von anderen Sicherheitsansätzen durch ihre risikobasierte, ganzheitliche und kontinuierlich verbesserbare Struktur.\n\n🏗️ Systematische Kontrollarchitektur:\n• ISO 27001 Annex A umfasst 114 detaillierte Sicherheitskontrollen, die in vier Hauptkategorien organisiert sind\n• Organisatorische Kontrollen decken Governance, Richtlinien, Personalmanagement und Geschäftskontinuität ab\n• Personelle Kontrollen fokussieren auf Sicherheitsbewusstsein, Schulungen und menschliche Faktoren\n• Physische und umgebungsbezogene Kontrollen schützen Anlagen, Geräte und Arbeitsplätze\n• Technologische Kontrollen umfassen IT-Sicherheit, Zugangskontrollen und Systemschutz\n\n🎯 Risikobasierte Kontrollauswahl:\n• Anders als prescriptive Standards ermöglicht ISO 27001 eine flexible, risikobasierte Auswahl der Kontrollen\n• Das Statement of Applicability dokumentiert, welche Kontrollen implementiert werden und warum\n• Organisationen können Kontrollen an ihre spezifischen Risiken und Geschäftsanforderungen anpassen\n• Kontinuierliche Risikobewertung ermöglicht dynamische Anpassung der Kontrolllandschaft\n• Integration mit bestehenden Sicherheitsmaßnahmen und Compliance-Anforderungen\n\n🔄 Kontinuierliche Verbesserung:\n• Plan-Do-Check-Act-Zyklus gewährleistet kontinuierliche Optimierung der Kontrollwirksamkeit\n• Regelmäßige Überwachung und Messung der Kontrollperformance\n• Interne Audits und Management Reviews identifizieren Verbesserungspotenziale\n• Anpassung an veränderte Bedrohungslandschaften und Geschäftsanforderungen\n• Lernen aus Sicherheitsvorfällen und Best Practices\n\n🌐 Ganzheitlicher Sicherheitsansatz:\n• Integration von technischen, organisatorischen und personellen Sicherheitsaspekten\n• Berücksichtigung des gesamten Informationslebenszyklus von der Erstellung bis zur Vernichtung\n• Einbeziehung aller Stakeholder von der Geschäftsführung bis zu den Endnutzern\n• Abdeckung aller Informationsassets unabhängig von Format oder Speicherort\n• Harmonisierung mit anderen Managementsystemen und Compliance-Frameworks\n\n📊 Messbare Sicherheitsverbesserung:\n• Klare Kontrollziele und messbare Erfolgskriterien für jede Sicherheitsmaßnahme\n• KPI-basierte Überwachung der Kontrollwirksamkeit und Sicherheitsperformance\n• Evidenzbasierte Entscheidungsfindung durch systematische Datensammlung\n• Benchmarking und Vergleichbarkeit mit anderen Organisationen\n• Nachweis der Sicherheitsverbesserung gegenüber Stakeholdern und Aufsichtsbehörden"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie funktioniert die risikobasierte Auswahl von ISO 27001 Kontrollen in der Praxis?',
        answer: "Die risikobasierte Auswahl von ISO 27001 Kontrollen ist ein systematischer Prozess, der die individuellen Risiken einer Organisation mit den verfügbaren Sicherheitsmaßnahmen abgleicht und eine maßgeschneiderte Kontrolllandschaft entwickelt. Dieser Ansatz gewährleistet, dass Sicherheitsinvestitionen optimal auf die tatsächlichen Bedrohungen und Geschäftsanforderungen ausgerichtet sind.\n\n🔍 Umfassende Risikoidentifikation:\n• Systematische Inventarisierung aller Informationsassets und deren Klassifizierung nach Kritikalität\n• Identifikation relevanter Bedrohungen basierend auf Branche, Technologie und Geschäftsmodell\n• Bewertung von Schwachstellen in bestehenden Systemen, Prozessen und Organisationsstrukturen\n• Analyse externer Faktoren wie regulatorische Anforderungen und Marktbedingungen\n• Berücksichtigung von Abhängigkeiten zwischen verschiedenen Assets und Geschäftsprozessen\n\n📊 Strukturierte Risikobewertung:\n• Quantitative und qualitative Bewertung der Eintrittswahrscheinlichkeit identifizierter Bedrohungen\n• Einschätzung der potenziellen Auswirkungen auf Vertraulichkeit, Integrität und Verfügbarkeit\n• Berücksichtigung finanzieller, operationeller und reputationsbezogener Schäden\n• Bewertung der Wirksamkeit bestehender Kontrollen und Identifikation von Schutzlücken\n• Priorisierung der Risiken basierend auf ihrer Bedeutung für die Geschäftsziele\n\n🎯 Strategische Kontrollauswahl:\n• Mapping identifizierter Risiken auf relevante Annex A Kontrollen\n• Bewertung der Kosten-Nutzen-Relation verschiedener Kontrolloptionen\n• Berücksichtigung organisatorischer Fähigkeiten und verfügbarer Ressourcen\n• Integration mit bestehenden Sicherheitsmaßnahmen und Vermeidung von Redundanzen\n• Auswahl alternativer oder zusätzlicher Kontrollen bei besonderen Anforderungen\n\n📋 Statement of Applicability Entwicklung:\n• Dokumentation aller Annex A Kontrollen mit Begründung für Anwendbarkeit oder Ausschluss\n• Detaillierte Beschreibung der Implementierungsansätze für ausgewählte Kontrollen\n• Verknüpfung zwischen identifizierten Risiken und implementierten Kontrollmaßnahmen\n• Zeitplan und Verantwortlichkeiten für die Kontrollimplementierung\n• Regelmäßige Überprüfung und Aktualisierung basierend auf veränderten Risiken\n\n🔄 Kontinuierliche Optimierung:\n• Regelmäßige Neubewertung der Risikolandschaft und Anpassung der Kontrollauswahl\n• Monitoring der Kontrollwirksamkeit und Identifikation von Verbesserungspotenzialen\n• Integration neuer Bedrohungen und Schwachstellen in die Risikobewertung\n• Berücksichtigung von Lessons Learned aus Sicherheitsvorfällen und Audits\n• Anpassung an veränderte Geschäftsanforderungen und technologische Entwicklungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche organisatorischen Kontrollen sind besonders kritisch für den Erfolg eines ISMS?',
        answer: "Organisatorische Kontrollen bilden das Fundament eines erfolgreichen ISMS und sind oft entscheidender für den langfristigen Erfolg als technische Maßnahmen. Sie schaffen die strukturellen Voraussetzungen, Governance-Mechanismen und kulturellen Grundlagen, die für eine nachhaltige Informationssicherheit erforderlich sind.\n\n🏛️ Governance und Führungsstrukturen:\n• Etablierung einer klaren Informationssicherheits-Governance mit definierten Rollen und Verantwortlichkeiten\n• Aufbau eines Information Security Steering Committees mit Vertretern aller relevanten Geschäftsbereiche\n• Definition von Eskalationswegen und Entscheidungsprozessen für sicherheitsrelevante Themen\n• Integration der Informationssicherheit in strategische Geschäftsentscheidungen und Projektgenehmigungen\n• Regelmäßige Berichterstattung an die Geschäftsführung über Sicherheitsstatus und Risikosituation\n\n📜 Richtlinien und Verfahrensmanagement:\n• Entwicklung einer umfassenden Informationssicherheitsrichtlinie als strategisches Grundlagendokument\n• Erstellung spezifischer Verfahrensanweisungen für kritische Sicherheitsprozesse\n• Implementierung eines strukturierten Dokumentenmanagements mit Versionskontrolle und Genehmigungsworkflows\n• Regelmäßige Überprüfung und Aktualisierung aller Richtlinien basierend auf veränderten Anforderungen\n• Kommunikation und Schulung aller Mitarbeiter zu relevanten Richtlinien und Verfahren\n\n🤝 Lieferanten und Drittparteien-Management:\n• Implementierung eines strukturierten Supplier Risk Management Prozesses\n• Definition von Sicherheitsanforderungen in Verträgen mit externen Dienstleistern\n• Regelmäßige Bewertung und Überwachung der Sicherheitsperformance von Drittparteien\n• Etablierung von Incident Response Prozessen für lieferantenbezogene Sicherheitsvorfälle\n• Due Diligence Prozesse für neue Geschäftspartner und kritische Lieferanten\n\n🚨 Incident Management und Business Continuity:\n• Aufbau eines professionellen Incident Response Teams mit klaren Rollen und Verantwortlichkeiten\n• Entwicklung detaillierter Incident Response Playbooks für verschiedene Arten von Sicherheitsvorfällen\n• Implementierung von Business Continuity und Disaster Recovery Plänen\n• Regelmäßige Tests und Übungen zur Validierung der Notfallprozesse\n• Post-Incident Reviews und kontinuierliche Verbesserung der Response-Fähigkeiten\n\n📊 Compliance und Audit Management:\n• Etablierung eines systematischen Compliance Monitoring Prozesses\n• Implementierung eines internen Audit-Programms mit qualifizierten Auditoren\n• Aufbau eines Management Review Prozesses für regelmäßige ISMS-Bewertungen\n• Tracking und Management von Audit-Findings und Korrekturmaßnahmen\n• Vorbereitung und Koordination externer Audits und Zertifizierungsprozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie können technologische Kontrollen effektiv in bestehende IT-Landschaften integriert werden?',
        answer: "Die Integration technologischer Kontrollen in bestehende IT-Landschaften erfordert einen strategischen, phasenweisen Ansatz, der technische Exzellenz mit organisatorischen Anforderungen und Geschäftskontinuität in Einklang bringt. Erfolgreiche Integration berücksichtigt sowohl Legacy-Systeme als auch moderne Technologien und schafft eine kohärente Sicherheitsarchitektur.\n\n🏗️ Architekturbasierte Integration:\n• Entwicklung einer umfassenden Sicherheitsarchitektur, die alle Systemebenen und Technologien abdeckt\n• Mapping bestehender Sicherheitskontrollen auf ISO 27001 Anforderungen zur Identifikation von Lücken\n• Design einer zielorientierten Sicherheitsarchitektur unter Berücksichtigung von Zero Trust Prinzipien\n• Integration von Security by Design Prinzipien in alle neuen Systeme und Anwendungen\n• Entwicklung von Migrationspfaden für Legacy-Systeme mit begrenzten Sicherheitsfähigkeiten\n\n🔐 Zugangs und Identitätsmanagement:\n• Implementierung einer zentralisierten Identity and Access Management Lösung\n• Einführung von Multi-Faktor-Authentifizierung für alle kritischen Systeme und privilegierte Zugriffe\n• Etablierung von Role-Based Access Control mit regelmäßigen Zugangsreviews\n• Integration von Single Sign-On Lösungen zur Verbesserung von Benutzerfreundlichkeit und Sicherheit\n• Implementierung von Privileged Access Management für administrative und kritische Systemzugriffe\n\n🛡️ Netzwerk und Systemsicherheit:\n• Deployment von Next-Generation Firewalls mit Application Layer Inspection\n• Implementierung von Network Segmentation und Micro-Segmentation Strategien\n• Einführung von Endpoint Detection and Response Lösungen auf allen Endgeräten\n• Etablierung von Vulnerability Management Prozessen mit automatisierten Scanning-Tools\n• Integration von Security Information and Event Management für zentrale Überwachung\n\n🔒 Datenschutz und Kryptographie:\n• Implementierung von Data Loss Prevention Lösungen zum Schutz sensibler Informationen\n• Einführung von Encryption at Rest und in Transit für alle kritischen Datenbestände\n• Etablierung eines zentralisierten Key Management Systems\n• Integration von Data Classification Tools zur automatisierten Datenklassifizierung\n• Implementierung von Database Activity Monitoring für kritische Datenbanksysteme\n\n🔄 Kontinuierliche Überwachung und Verbesserung:\n• Aufbau eines Security Operations Centers für kontinuierliche Bedrohungsüberwachung\n• Implementierung von Automated Security Testing in CI/CD Pipelines\n• Etablierung von Threat Intelligence Feeds zur proaktiven Bedrohungserkennung\n• Integration von Security Metrics und KPIs in bestehende Monitoring-Dashboards\n• Regelmäßige Penetrationstests und Red Team Exercises zur Validierung der Kontrollwirksamkeit"
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
