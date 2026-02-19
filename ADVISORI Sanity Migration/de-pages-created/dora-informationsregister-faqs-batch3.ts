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
    console.log('Updating DORA Informationsregister page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-informationsregister' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-informationsregister" not found')
    }
    
    // Create new FAQs for DORA information register security and compliance
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie gewährleiste ich die Sicherheit und den Datenschutz meines DORA-Informationsregisters?',
        answer: "Die Sicherheit und der Datenschutz von DORA-Informationsregistern sind von kritischer Bedeutung, da diese sensible Informationen über die gesamte IKT-Infrastruktur enthalten. Ein Kompromiss des Registers könnte Angreifern detaillierte Einblicke in Systemarchitekturen und Schwachstellen gewähren. Daher erfordern diese Systeme mehrschichtige Sicherheitsmaßnahmen und strikte Datenschutzkontrollen.\n\n🔐 Zugriffskontrolle und Identitätsmanagement:\n• Implementierung von Zero-Trust-Prinzipien mit kontinuierlicher Authentifizierung und Autorisierung\n• Role-based Access Control mit granularen Berechtigungen basierend auf Job-Funktionen und Need-to-Know-Prinzipien\n• Multi-Factor-Authentication für alle Benutzer mit privilegierten Zugriff auf das Register\n• Privileged Access Management für administrative Funktionen mit Session-Recording und Approval-Workflows\n• Regular Access Reviews und automatische Deprovisioning bei Rollenänderungen oder Mitarbeiterabgängen\n\n🛡️ Datenverschlüsselung und Schutz sensibler Informationen:\n• End-to-End-Verschlüsselung für alle Datenübertragungen mit modernen Verschlüsselungsstandards\n• Encryption-at-Rest für alle gespeicherten Register-Daten mit Hardware Security Modules für Schlüsselverwaltung\n• Data Classification und Labeling für unterschiedliche Schutzlevel verschiedener Informationskategorien\n• Tokenization oder Pseudonymisierung für besonders sensible Daten wie Konfigurationsdetails\n• Secure Key Management mit regelmäßiger Schlüsselrotation und Escrow-Verfahren\n\n🔍 Monitoring und Anomalie-Erkennung:\n• Security Information and Event Management für kontinuierliche Überwachung aller Register-Aktivitäten\n• User and Entity Behavior Analytics für Erkennung ungewöhnlicher Zugriffsmuster\n• Data Loss Prevention für Schutz vor unautorisierten Datenexporten oder -übertragungen\n• Real-Time-Alerting bei verdächtigen Aktivitäten oder Sicherheitsverletzungen\n• Forensic-Capabilities für detaillierte Untersuchung von Sicherheitsvorfällen\n\n📋 Compliance und regulatorische Anforderungen:\n• GDPR-Compliance für Verarbeitung personenbezogener Daten in Register-Kontexten\n• Data Retention Policies mit automatischer Archivierung und Löschung nach definierten Zeiträumen\n• Privacy-by-Design-Prinzipien bei der Entwicklung und Erweiterung des Registers\n• Regular Privacy Impact Assessments für neue Features oder Datenquellen\n• Audit-Trail-Completeness für Nachweisführung bei regulatorischen Prüfungen\n\n🏗️ Infrastruktursicherheit und Resilienz:\n• Secure-by-Design-Architektur mit Defense-in-Depth-Strategien\n• Network Segmentation und Micro-Segmentation für Isolation kritischer Register-Komponenten\n• Regular Vulnerability Assessments und Penetration Testing\n• Backup und Disaster Recovery mit verschlüsselten Off-Site-Backups\n• Business Continuity Planning für Aufrechterhaltung der Register-Verfügbarkeit bei Sicherheitsvorfällen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Best Practices gibt es für die Schulung und das Change Management bei der Einführung von DORA-Informationsregistern?',
        answer: "Die erfolgreiche Einführung von DORA-Informationsregistern hängt maßgeblich von effektivem Change Management und umfassender Mitarbeiterschulung ab. Widerstand gegen Veränderungen und mangelnde Akzeptanz können selbst die beste technische Lösung zum Scheitern bringen. Ein strukturierter Ansatz zur Organisationsentwicklung ist daher entscheidend für nachhaltigen Erfolg.\n\n👥 Stakeholder-Engagement und Kommunikationsstrategie:\n• Frühe Einbindung aller relevanten Stakeholder in die Planungs- und Designphase des Registers\n• Entwicklung einer umfassenden Kommunikationsstrategie mit klaren Botschaften über Nutzen und Notwendigkeit\n• Regular Town Halls und Update-Sessions für kontinuierliche Transparenz über Projektfortschritt\n• Champion-Netzwerk mit einflussreichen Mitarbeitern als Multiplikatoren und Change Agents\n• Feedback-Mechanismen für kontinuierliche Verbesserung basierend auf Nutzererfahrungen\n\n📚 Strukturierte Schulungsprogramme und Kompetenzentwicklung:\n• Role-based Training Programs mit spezifischen Inhalten für verschiedene Nutzergruppen\n• Hands-on Workshops und Simulation-Exercises für praktische Erfahrung mit dem Register\n• E-Learning-Plattformen für flexible und skalierbare Schulungsdelivery\n• Mentoring-Programme mit erfahrenen Nutzern als Unterstützung für neue Anwender\n• Continuous Learning Paths für fortlaufende Kompetenzentwicklung und System-Updates\n\n🔄 Phasenweise Einführung und Pilotprogramme:\n• Pilot-Implementierung mit ausgewählten Bereichen für Lessons Learned und Optimierung\n• Phased Rollout mit schrittweiser Erweiterung auf weitere Organisationsbereiche\n• Quick Wins und Early Success Stories für Momentum-Building und Akzeptanzsteigerung\n• Iterative Verbesserung basierend auf Pilot-Feedback und Performance-Metriken\n• Risk Mitigation durch kontrollierte Einführung und Fallback-Strategien\n\n📊 Performance-Monitoring und Adoption-Tracking:\n• User Adoption Metrics für Überwachung der Nutzungsraten und Engagement-Level\n• Quality Metrics für Bewertung der Datenqualität und Vollständigkeit\n• Satisfaction Surveys für kontinuierliches Feedback zur Nutzererfahrung\n• Performance Dashboards für Transparenz über Erfolg und Verbesserungsbereiche\n• Regular Reviews und Anpassungen der Change-Management-Strategie\n\n🎯 Kulturwandel und nachhaltige Verankerung:\n• Integration der Register-Nutzung in bestehende Arbeitsprozesse und Performance-Bewertungen\n• Recognition und Incentive Programs für aktive Nutzer und Datenqualitäts-Champions\n• Governance-Integration mit klaren Rollen und Verantwortlichkeiten für Register-Maintenance\n• Continuous Improvement Culture mit regelmäßigen Retrospektiven und Optimierungszyklen\n• Knowledge Management für Dokumentation von Best Practices und Lessons Learned"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie plane ich die Migration von bestehenden Asset-Inventaren zu einem DORA-konformen Informationsregister?',
        answer: "Die Migration bestehender Asset-Inventare zu einem DORA-konformen Informationsregister ist ein komplexer Transformationsprozess, der sorgfältige Planung, Datenbereinigung und schrittweise Umsetzung erfordert. Legacy-Systeme enthalten oft unvollständige oder inkonsistente Daten, die vor der Migration harmonisiert und angereichert werden müssen.\n\n🔍 Assessment und Bestandsaufnahme bestehender Systeme:\n• Comprehensive Inventory aller bestehenden Asset-Management-Systeme und Datenquellen\n• Data Quality Assessment für Bewertung der Vollständigkeit, Genauigkeit und Konsistenz vorhandener Daten\n• Gap Analysis zwischen aktuellen Datenstrukturen und DORA-Anforderungen\n• Dependency Mapping für Verständnis der Beziehungen zwischen verschiedenen Systemen\n• Stakeholder Analysis für Identifikation aller betroffenen Teams und Prozesse\n\n📊 Datenbereinigung und Harmonisierung:\n• Data Profiling für detaillierte Analyse der Datenqualität und Identifikation von Problemen\n• Deduplication und Consolidation von redundanten oder widersprüchlichen Einträgen\n• Standardization von Naming Conventions und Klassifizierungsschemata\n• Data Enrichment durch Anreicherung fehlender Informationen aus zusätzlichen Quellen\n• Validation Rules für Sicherstellung der Datenqualität während der Migration\n\n🛠️ Technische Migrations-Architektur:\n• ETL-Pipeline-Design für systematische Datenextraktion, Transformation und Loading\n• Staging-Environment für sichere Datenverarbeitung und Testing vor Produktions-Migration\n• Data Mapping zwischen Legacy-Formaten und neuen DORA-konformen Strukturen\n• Error Handling und Rollback-Mechanismen für Behandlung von Migrations-Problemen\n• Performance Optimization für effiziente Verarbeitung großer Datenmengen\n\n📅 Phasenweise Migrations-Strategie:\n• Pilot Migration mit nicht-kritischen Assets für Testing und Optimierung der Prozesse\n• Priority-based Rollout beginnend mit den geschäftskritischsten Assets\n• Parallel Running von Legacy- und neuen Systemen während der Übergangsphase\n• Incremental Migration mit regelmäßigen Checkpoints und Validierung\n• Final Cutover mit koordinierter Abschaltung der Legacy-Systeme\n\n🔄 Qualitätssicherung und Validierung:\n• Automated Testing für Verifikation der Datenintegrität nach Migration\n• User Acceptance Testing mit Fachexperten für Validierung der Geschäftslogik\n• Reconciliation Processes für Abgleich zwischen Legacy- und neuen Daten\n• Performance Testing für Sicherstellung der System-Performance unter Last\n• Security Testing für Verifikation der Sicherheitskontrollen im neuen System"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielt das Informationsregister bei der DORA-Berichterstattung an Aufsichtsbehörden?',
        answer: "Das DORA-Informationsregister bildet das Fundament für alle aufsichtsrechtlichen Berichtspflichten und ermöglicht zeitnahe, vollständige und genaue Kommunikation mit Regulatoren. Die Qualität und Vollständigkeit des Registers bestimmt direkt die Fähigkeit einer Organisation, regulatorische Anfragen zu beantworten und Compliance nachzuweisen.\n\n📋 Regulatorische Berichtspflichten und Anforderungen:\n• Incident Reporting mit detaillierten Informationen über betroffene Systeme und deren Geschäftsauswirkungen\n• Periodic Risk Assessments basierend auf aktuellen Asset-Inventaren und Risikobewertungen\n• Third-Party Risk Reporting mit umfassender Dokumentation aller kritischen IKT-Drittanbieter\n• Operational Resilience Metrics mit quantitativen Daten über System-Performance und Verfügbarkeit\n• Change Notifications für wesentliche Änderungen in der IKT-Landschaft oder Risikoprofil\n\n🔄 Automatisierte Berichtsgenerierung und Datenextraktion:\n• Template-based Reporting mit vorkonfigurierten Formaten für verschiedene regulatorische Anforderungen\n• Real-Time Data Extraction für zeitnahe Bereitstellung aktueller Informationen\n• Automated Quality Checks für Sicherstellung der Vollständigkeit und Genauigkeit vor Übermittlung\n• Version Control und Audit Trails für Nachverfolgbarkeit aller übermittelten Berichte\n• Multi-Format Export für verschiedene Übermittlungskanäle und Regulatoren-Präferenzen\n\n📊 Datenqualität und Compliance-Readiness:\n• Continuous Validation gegen regulatorische Taxonomien und Standards\n• Completeness Monitoring für Sicherstellung vollständiger Datenerfassung\n• Accuracy Verification durch Cross-Reference mit authoritative Quellen\n• Timeliness Tracking für rechtzeitige Aktualisierung kritischer Informationen\n• Consistency Checks für einheitliche Darstellung über verschiedene Berichte hinweg\n\n🎯 Proaktive Compliance-Überwachung:\n• Regulatory Change Monitoring für frühzeitige Anpassung an neue Anforderungen\n• Gap Analysis für Identifikation fehlender Informationen vor Berichtspflichten\n• Scenario Planning für Vorbereitung auf verschiedene Reporting-Anforderungen\n• Stress Testing der Berichtsfähigkeiten unter verschiedenen Belastungsszenarien\n• Continuous Improvement basierend auf Regulator-Feedback und Industry Best Practices\n\n🔍 Aufsichtsprüfungen und Dokumentation:\n• Comprehensive Documentation aller Register-Prozesse und Datenquellen für Prüfer\n• Evidence Management für strukturierte Bereitstellung von Nachweisen\n• Query Response Capabilities für schnelle Beantwortung spezifischer Aufsichtsfragen\n• Historical Data Preservation für langfristige Nachverfolgbarkeit und Trend-Analysen\n• Stakeholder Communication für koordinierte Interaktion mit verschiedenen Aufsichtsbehörden"
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
